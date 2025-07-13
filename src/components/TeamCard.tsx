import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  image: string;
  role: string;
  description: string;
  experience: string;
  speciality: string[];
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:border-orange-300 transition-all duration-300"
    >
      <div className="text-center mb-4">
        <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <img src={member.image} className='w-20 h-20 rounded-full' />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
        <p className="text-orange-600 font-semibold text-lg">{member.role}</p>
      </div>

      <div className="space-y-3">
        <p className="text-gray-700 text-sm leading-relaxed text-center">
          {member.description}
        </p>

        <div className="bg-gray-50 rounded-lg p-3">
          <div className="flex items-center text-gray-600 mb-2">
            <Star className="w-4 h-4 mr-2 text-orange-500" />
            <span className="text-sm font-semibold">Anubhav:</span>
          </div>
          <p className="text-sm text-gray-700 ml-6">{member.experience}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2 text-sm">Visheshta:</h4>
          <div className="flex flex-wrap gap-2">
            {member.speciality.map((skill, index) => (
              <span
                key={index}
                className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="mt-4 text-center"
      >
        <div className="inline-flex items-center text-orange-600 text-sm font-medium">
          <Star className="w-4 h-4 mr-1" />
          Sadasya
        </div>
      </motion.div>
    </motion.div>
  );
}