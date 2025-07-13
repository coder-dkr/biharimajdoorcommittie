import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, Briefcase, MapPin, Phone } from 'lucide-react';
import VerificationModal from './components/VerificationModal';
import JobCard from './components/JobCard';
import JobForm from './components/JobForm';
import TeamCard from './components/TeamCard';
import { jobs } from './data/jobs';
import { teamMembers } from './data/team';

function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [showModal, setShowModal] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterType === 'all' || job.type.toLowerCase().includes(filterType.toLowerCase());
    
    return matchesSearch && matchesFilter;
  });

  const handleVerification = () => {
    setIsVerified(true);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <VerificationModal 
        isOpen={showModal && !isVerified} 
        onVerified={handleVerification}
      />
      
      <motion.div
        initial={{ filter: 'blur(10px)' }}
        animate={{ filter: isVerified ? 'blur(0px)' : 'blur(10px)' }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">
                    Bihari Majdoor Ekta Apply Committee
                  </h1>
                  <p className="text-sm text-gray-500">Bihar ke majdoor ke liye, Bihar ke majdoor dwara</p>
                </div>
              </motion.div>
              
              <nav className="hidden md:flex space-x-6">
                <a href="#jobs" className="text-gray-700 hover:text-orange-600 font-medium">Kaam</a>
                <a href="#team" className="text-gray-700 hover:text-orange-600 font-medium">Dal</a>
                <a href="#apply" className="text-gray-700 hover:text-orange-600 font-medium">Naam Likha</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">Sampark</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Tahlog k sapna k niwaran 🚀
              </h2>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Bihar ke har kona se aawa wala majdoor ke liye rojgar ke mauka! 
                Hamar saath juda aur apna bhavishya banawa. Litti-Chokha khake kaam kara! 🍛
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Kaam Dekha 👀
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Naam Likha ✍️
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Briefcase, number: '500+', label: 'Chalu Kaam (Bindaas!)' },
                { icon: Users, number: '10,000+', label: 'Naam Likha Majdoor (Sab Bihari!)' },
                { icon: MapPin, number: '38', label: 'Jila Dhakail (Poora Bihar!)' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section id="jobs" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Milawa Wala Mauka 🎯
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Rahanki hunar aur jagah ke hisab se perfect kaam khoja! Bindaas apply kara! 💪
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-200"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Kaam, kampani, ya jagah khoja... (Jaise: Raj-mistry, Patna, etc.)"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="md:w-48">
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="all">Sabhi Kism</option>
                    <option value="poora">Poora Samay</option>
                    <option value="adhura">Adhura Samay</option>
                    <option value="mousami">Mousami</option>
                  </select>
                </div>
              </div>
            </motion.div>

            {/* Job Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredJobs.map((job, index) => (
                  <JobCard key={job.id} job={job} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-500 text-lg">Rahanki talash ke hisab se koi kaam nahi mila.</p>
                <p className="text-gray-400 text-sm mt-2">Arre yaar, thoda aur try kara! 😅</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hamar Dal Ke Sadasya 👥
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Bihar ke majdoor ke seva mein laga rahanki samarpit dal ke log! Sabko bindaas sahayata karta hai! 🤝
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-12"
            >
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-bold text-orange-800 mb-2">
                  Hamar Saath Mila 🤗
                </h3>
                <p className="text-orange-700">
                  Agar rahanki bhi majdoor ke seva karna chahta hai, to hamar dal mein shamil ho sakta hai! 
                  Sampark kara aur Bihar ke majdoor ke liye bindaas kaam kara! Litti-Chokha party bhi milega! 🎉
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Kaam Khojiya ke Liye Naam Likha 📝
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Kaam ke talash mein hai? Apna jaankari bhara aur ham jaldi rahanki se baat karaba! 
                Pakka guarantee hai! 💯
              </p>
            </motion.div>

            <JobForm />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-orange-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Hamar Se Baat Kara 📞
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Phone className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Mobile (24x7)</h3>
                  <p>+91 98765 43210</p>
                  <p className="text-sm mt-1">Koi bhi samay call kara!</p>
                </div>
                <div className="flex flex-col items-center">
                  <MapPin className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Hamar Thikana</h3>
                  <p>Bihar Secretariat, Patna</p>
                  <p className="text-sm mt-1">Litti-Chokha ke paas!</p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Bindaas Sahayata</h3>
                  <p>24/7 Madad Milega</p>
                  <p className="text-sm mt-1">Koi tension nahi!</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-400">
                © 2025 Bihari Majdoor Ekta Committee. Sabhi haq mahfooj hai bhai! 🔒
              </p>
              <p className="text-gray-400 mt-2">
                Bihar ke majdoor ke liye, Bihar ke majdoor dwara. Jai Bihar! 🙏
              </p>
            </div>
          </div>
        </footer>
      </motion.div>
    </div>
  );
}

export default App;