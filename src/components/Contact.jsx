import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { BackgroundLines } from "./ui/background-lines";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen w-full flex items-center justify-center bg-black">
      <BackgroundLines className="absolute inset-0 z-0 h-screen" />
      
      <div className="relative z-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Get in Touch</h2>
            <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto"></div>
            <p className="mt-6 text-neutral-400 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-neutral-400">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="mt-1 block w-full rounded-md border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-neutral-400">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="mt-1 block w-full rounded-md border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-400">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={6}
                  className="mt-1 block w-full rounded-md border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-white placeholder-neutral-500 backdrop-blur-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Tell me what you want to create"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                disabled={isSubmitting}
                className="inline-flex h-12 w-full animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message →'}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-blue-500 text-center"
                >
                  Message sent successfully!
                </motion.p>
              )}
              {submitStatus === 'error' && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-center"
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 