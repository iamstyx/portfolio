import { sendEmail } from '../../api/sendEmail'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' })
  }

  try {
    await sendEmail({ name, email, message })
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('API error:', error)
    res.status(500).json({ message: 'Failed to send email' })
  }
} 