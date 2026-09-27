import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')
const filePath = path.join(dataDir, 'leads.json')

export interface Lead {
  id: string
  name: string
  business?: string
  businessType?: string
  budget?: string
  lookingFor?: string
  phone: string
  email?: string
  needs?: string[]
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
  
  // Prevent duplicate lead additions for same phone or email
  const existingLead = leads.find(l => 
    (leadData.phone && l.phone === leadData.phone) || 
    (leadData.email && l.email && l.email.toLowerCase() === leadData.email.toLowerCase())
  )
  if (existingLead) {
    return existingLead
  }

  const newLead: Lead = {
    ...leadData,
    business: leadData.business || '',
    businessType: leadData.businessType || '',
    budget: leadData.budget || '',
    lookingFor: leadData.lookingFor || '',
    email: leadData.email || '',
    needs: leadData.needs || [],
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

export function markLeadAsBooked(
  identifier: { email?: string; phone?: string; name?: string; business?: string } | string, 
  date: string, 
  time: string
): boolean {
  const leads = getLeads()
  const idObj = typeof identifier === 'string' ? { email: identifier } : identifier
  
  const index = leads.findIndex(l => 
    (idObj.email && l.email && l.email.toLowerCase() === idObj.email.toLowerCase()) ||
    (idObj.phone && l.phone && l.phone.replace(/[^0-9]/g, '') === idObj.phone.replace(/[^0-9]/g, '')) ||
    (idObj.name && l.name && l.name.toLowerCase() === idObj.name.toLowerCase())
  )
  
  if (index !== -1) {
    leads[index].booked = true
    leads[index].bookingDate = date
    leads[index].bookingTime = time
    leads[index].sequenceStatus = 'completed' // No more follow ups needed
    saveLeads(leads)
    return true
  }

  // If lead wasn't found in records, create a confirmed booking record
  const newBooking: Lead = {
    id: Math.random().toString(36).substring(2, 9),
    name: idObj.name || 'Direct Strategy Session Lead',
    phone: idObj.phone || '',
    email: idObj.email || '',
    business: idObj.business || '',
    createdAt: new Date().toISOString(),
    booked: true,
    bookingDate: date,
    bookingTime: time,
    sequenceStatus: 'completed',
    emailsSent: [],
    lastSequenceTime: null
  }
  leads.push(newBooking)
  saveLeads(leads)
  return true
}
