import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-slate-900 px-6 py-16">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      <motion.p
        className="text-center text-lg text-gray-300 mb-12 max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Feel free to reach out to me for any questions or opportunities!
      </motion.p>

      <motion.form
        className="w-full max-w-xl bg-[#111827] rounded-2xl shadow-2xl p-8 space-y-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Email */}
        <div className="relative">
          <label className="text-white text-sm absolute -top-3 left-2 bg-[#111827] px-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border-b border-purple-500 bg-transparent text-white p-2 outline-none placeholder-gray-400"
          />
        </div>

        {/* Name */}
        <div className="relative">
          <label className="text-white text-sm absolute -top-3 left-2 bg-[#111827] px-1">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border-b border-purple-500 bg-transparent text-white p-2 outline-none placeholder-gray-400"
          />
        </div>

        {/* Subject */}
        <div className="relative">
          <label className="text-white text-sm absolute -top-3 left-2 bg-[#111827] px-1">Subject</label>
          <input
            type="text"
            placeholder="Write subject here"
            className="w-full border-b border-purple-500 bg-transparent text-white p-2 outline-none placeholder-gray-400"
          />
        </div>

        {/* Message */}
        <div className="relative">
          <label className="text-white text-sm absolute -top-3 left-2 bg-[#111827] px-1">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full border-b border-purple-500 bg-transparent text-white p-2 outline-none resize-none placeholder-gray-400"
          ></textarea>
        </div>

        {/* Send Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
        >
          Send 🚀
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;

