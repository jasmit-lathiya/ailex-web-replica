import { motion } from 'framer-motion'

// Components
import { SecondaryButton } from '../../../../atoms/button'

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col">
      <motion.div
        className="flex flex-col justify-center md:items-center z-10 px-2 md:px-6 mt-16 md:mt-32 gap-16 z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-4xl md:text-6xl lg:text-6xl font-instrument max-w-4xl">
            We're ready to assist you{' '}
          </span>

          <span className="font-switzer text-primaryDisabled text-lg  max-w-2xl">
            Have questions? We're ready to help!
          </span>
        </div>
        <form className="flex flex-col gap-6">
          {/* Top Fields */}
          <div className="flex flex-col md:flex-row   gap-6">
            {/* Name */}
            <div className="flex flex-col flex-1 gap-2">
              <label className="text-primaryDisabled text-sm font-medium">
                Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-primaryDisabled bg-transparent px-5 py-4 text-white placeholder:text-primaryDisabled outline-none transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col flex-1 gap-2">
              <label className="text-primaryDisabled text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-primaryDisabled bg-transparent px-5 py-4 text-white placeholder:text-primaryDisabled outline-none transition"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label className="text-primaryDisabled text-sm font-medium">
              Message
            </label>

            <textarea
              rows={6}
              placeholder="Enter your message"
              className="w-full resize-none rounded-xl border border-primaryDisabled bg-transparent px-5 py-4 text-white placeholder:text-primaryDisabled outline-none transition"
            />
          </div>

          {/* Button */}
          <SecondaryButton className="p-3">Submit</SecondaryButton>
        </form>
      </motion.div>
    </div>
  )
}

export default ContactForm
