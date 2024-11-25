import { motion } from 'framer-motion'
import { useState } from 'react'
import { MdEmail, MdSend } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import BentoBox from './BentoBox'
import AnimatedSection from './AnimatedSection'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 3000)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <AnimatedSection className="max-w-6xl px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-sketch text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <BentoBox>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-white/50 border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-lg font-sketch text-lg shadow-lg disabled:opacity-50 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <MdSend className="text-xl" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-center ${submitStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}
                >
                  {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
                </motion.div>
              )}
            </form>
          </BentoBox>

          <div className="space-y-8">
            <BentoBox>
              <h3 className="text-2xl font-sketch mb-6 text-gray-800 flex items-center gap-3">
                <span>📬</span>
                Contact Info
              </h3>
              <div className="space-y-4">
                <a 
                  href="mailto:sushantt.verma@gmail.com"
                  className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <MdEmail className="text-xl" />
                  sushantt.verma@gmail.com
                </a>
                <a 
                  href="https://www.linkedin.com/in/sushant-verma-523151198/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3  text-[#0077b5] rounded-lg hover:bg-[#0077b5]/20 transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                  LinkedIn Profile
                </a>
                <a 
                  href="https://github.com/iamstyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <FaGithub className="text-xl" />
                  GitHub Profile
                </a>
              </div>
            </BentoBox>

            <BentoBox>
              <h3 className="text-2xl font-sketch mb-4 text-gray-800 flex items-center gap-3">
                <span>💬</span>
                Let's Talk
              </h3>
              <p className="text-gray-700/80 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </BentoBox>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}

export default Contact 