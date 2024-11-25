import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export const sendEmail = async (data) => {
  const { name, email, message } = data

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'sushantt.verma@gmail.com',
    subject: `Portfolio Contact: Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    throw new Error('Failed to send email')
  }
} 