import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-800 dark:text-slate-100">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Email</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">sridharb@example.com</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Phone</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">+91 XXXXX XXXXX</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center">
            <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-7 h-7 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-2">Location</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm">India</p>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all text-slate-800 dark:text-slate-100"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all text-slate-800 dark:text-slate-100"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all text-slate-800 dark:text-slate-100"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all resize-none text-slate-800 dark:text-slate-100"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 mx-auto"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
