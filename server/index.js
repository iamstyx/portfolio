import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
  console.error('Missing email credentials in environment variables')
  process.exit(1)
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
})

app.post('/api/contact', async (req, res) => {
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
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'sushantt.verma@gmail.com',
      subject: `Portfolio Contact: Message from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    })
    
    res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    res.status(500).json({ message: 'Failed to send email' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}) 