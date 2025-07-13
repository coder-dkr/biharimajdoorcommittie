import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, IndianRupee, Users } from 'lucide-react';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  perks: string[];
  postedDate: string;
}

interface JobCardProps {
  job: Job;
  index: number;
}

export default function JobCard({ job, index }: JobCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:border-orange-300 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
          <p className="text-orange-600 font-semibold">{job.company}</p>
        </div>
        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
          {job.type}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <IndianRupee className="w-4 h-4 mr-2" />
          <span className="text-sm">{job.salary}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">{job.experience}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="w-4 h-4 mr-2" />
          <span className="text-sm">{job.postedDate}</span>
        </div>
      </div>

      <p className="text-gray-700 mb-4 text-sm leading-relaxed">{job.description}</p>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2 text-sm">Chahiye:</h4>
        <div className="flex flex-wrap gap-2">
          {job.requirements.map((req, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {req}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-orange-700 mb-2 text-sm">Labh:</h4>
        <div className="flex flex-wrap gap-2">
          {job.perks.map((perk, index) => (
            <span
              key={index}
              className="bg-orange-50 text-orange-700 px-2 py-1 rounded text-xs border border-orange-200"
            >
              {perk}
            </span>
          ))}
        </div>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
      >
        Naam Likha 🚀
      </motion.button>
    </motion.div>
  );
}