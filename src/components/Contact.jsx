import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-white/50">
      <div className="max-w-4xl px-6 py-20">
        <h2 className="text-5xl font-sketch text-center mb-12 text-gray-900">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-700/80">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to connect!
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:sushantt.verma@gmail.com" 
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
              >
                <span className="text-lg">📧</span>
                Mail
              </a>
              <a 
                href="https://www.linkedin.com/in/sushant-verma-523151198/" 
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
              >
                <span className="text-lg">💼</span>
                LinkedIn
              </a>
              <a 
                href="https://github.com/iamstyx" 
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
              >
                <span className="text-lg">👨‍💻</span>
                GitHub
              </a>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600/80 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-sketch text-xl w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact 