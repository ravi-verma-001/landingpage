import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')
const filePath = path.join(dataDir, 'leads.json')

export interface Lead {
  id: string
  name: string
  business: string
  phone: string
  email: string
  needs: string[]
  createdAt: string
  booked: boolean
  bookingDate?: string
  bookingTime?: string
  sequenceStatus: 'pending' | 'completed' | 'unsubscribed'
  emailsSent: string[]
  lastSequenceTime: string | null
}

let inMemoryLeads: Lead[] = []

function ensureFileExists() {
  try {
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf-8')
    }
  } catch (error) {
    console.warn('Filesystem is read-only (Serverless environment). Falling back to in-memory storage.')
  }
}

export function getLeads(): Lead[] {
  ensureFileExists()
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8')
      return JSON.parse(data)
    }
  } catch (error) {
    console.warn('Error reading leads file, using in-memory backup:', error)
  }
  return inMemoryLeads
}

export function saveLeads(leads: Lead[]): void {
  inMemoryLeads = leads
  ensureFileExists()
  try {
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2), 'utf-8')
  } catch (error) {
    console.warn('Error writing leads file (expected on read-only serverless platforms like Netlify):', error)
  }
}


export function addLead(leadData: Omit<Lead, 'id' | 'createdAt' | 'booked' | 'sequenceStatus' | 'emailsSent' | 'lastSequenceTime'>): Lead {
  const leads = getLeads()
  
  // Prevent duplicate lead additions for same email
  const existingLead = leads.find(l => l.email.toLowerCase() === leadData.email.toLowerCase())
  if (existingLead) {
    return existingLead
  }

  const newLead: Lead = {
    ...leadData,
    id: Math.random().toString(36).substring(2, 9),
    createdAt: new Date().toISOString(),
    booked: false,
    sequenceStatus: 'pending',
    emailsSent: [],
    lastSequenceTime: null
  }

  leads.push(newLead)
  saveLeads(leads)
  return newLead
}

export function markLeadAsBooked(email: string, date: string, time: string): boolean {
  const leads = getLeads()
  const index = leads.findIndex(l => l.email.toLowerCase() === email.toLowerCase())
  
  if (index !== -1) {
    leads[index].booked = true
    leads[index].bookingDate = date
    leads[index].bookingTime = time
    leads[index].sequenceStatus = 'completed' // No more follow ups needed
    saveLeads(leads)
    return true
  }
  return false
}
