import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

export default function JobForm() {
  const [state, handleSubmit] = useForm("xldlrdrj"); // Replace with your Formspree form ID

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-700 mb-2">Form Bhej Dehal Gail!</h3>
        <p className="text-green-600">
          Dhanyawad! Tahar log k form bhej dehal gail ba tabtk bindas raha log 🎉
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-gray-200 p-6 space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Pura Naam *
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Apan pura naam likha"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email Pata *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="tahlog.email@example.com"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            className="text-red-500 text-xs mt-1"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Mobile Number daala *
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="+91 9876543210"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline mr-2" />
            Ghar K Thikana
          </label>
          <input
            id="location"
            type="text"
            name="location"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Gaon, Jila"
          />
        </div>
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
          <Briefcase className="w-4 h-4 inline mr-2" />
          Kaam Ke Anubhav
        </label>
        <select
          id="experience"
          name="experience"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          <option value="">Vibhaag chuna</option>
          <option value="naya">Naya (0 baras)</option>
          <option value="1-2">1-2 saal</option>
          <option value="3-5">3-5 saal</option>
          <option value="5+">5+ saal</option>
        </select>
      </div>

      <div>
        <label htmlFor="skills" className="block text-sm font-semibold text-gray-700 mb-2">
          Hunar aur Kaushal
        </label>
        <input
          id="skills"
          type="text"
          name="skills"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="jaise: Raj-mistry, Bijli ka kaam, Welding, etc."
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Aur Kuchh Batwa
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Kuchh aur batana chahta... (Bindaas likha, koi sharam nahi!)"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-500 text-xs mt-1"
        />
      </div>

      <motion.button
        type="submit"
        disabled={state.submitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {state.submitting ? (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
        ) : (
          <Send className="w-5 h-5 mr-2" />
        )}
        {state.submitting ? 'Bhej Raha Hai...' : 'Form Bheja'}
      </motion.button>

      {state.errors && (
        <div className="text-center text-sm text-red-500">
          Kuchh galti ho gail! Phir se try kara.
        </div>
      )}
    </motion.form>
  );
}