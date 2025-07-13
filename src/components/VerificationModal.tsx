import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct: number;
}

const bihariQuestions: Question[] = [
  {
    question: "Bihar ke rajdhani ke naam ka hai? (Arre yaar, iska ta sabko maloom hona chaahi!)",
    options: ["Patna (Litti-Chokha ke ghar)", "Gaya (Pind-daan wala)", "Muzaffarpur (Shahi Litchi wala)", "Bhagalpur (Silk wala)"],
    correct: 0
  },
  {
    question: "Bihar mein sabse zyada josh mein kona tyohar manawa jaata hai? (Ganga kinare wala!)",
    options: ["Diwali (Patakha wala)", "Holi (Rang-barse wala)", "Chhath Puja (Ganga mein khada hoke)", "Dussehra (Ravana jalawa wala)"],
    correct: 2
  },
  {
    question: "Bihar mein kona nadi hai jo sabse zyada pavitra maani jaata hai? (Isme nahake paap dhul jaata hai!)",
    options: ["Yamuna (Krishna wali)", "Ganga Maiya (Har Har Gange!)", "Narmada (Dakshin wali)", "Godavari (Telangana wali)"],
    correct: 1
  }
];

interface VerificationModalProps {
  isOpen: boolean;
  onVerified: () => void;
}

export default function VerificationModal({ isOpen, onVerified }: VerificationModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === bihariQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < bihariQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const handleVerificationComplete = () => {
    if (score >= 2) {
      onVerified();
    } else {
      // Reset quiz for retry
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setScore(0);
      setShowResult(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full mx-4"
          >
            {!showResult ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">
                    Bihar Pahichaan Pariksha
                  </h2>
                  <div className="text-sm text-gray-500">
                    {currentQuestion + 1}/{bihariQuestions.length}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-700">
                    {bihariQuestions[currentQuestion].question}
                  </h3>
                  
                  <div className="space-y-3">
                    {bihariQuestions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-3 text-left rounded-lg border-2 transition-all ${
                          selectedAnswer === null
                            ? 'border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                            : selectedAnswer === index
                              ? index === bihariQuestions[currentQuestion].correct
                                ? 'border-green-500 bg-green-50 text-green-700'
                                : 'border-red-500 bg-red-50 text-red-700'
                              : index === bihariQuestions[currentQuestion].correct
                                ? 'border-green-500 bg-green-50 text-green-700'
                                : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        {option}
                        {selectedAnswer !== null && index === bihariQuestions[currentQuestion].correct && (
                          <CheckCircle className="inline-block w-5 h-5 ml-2" />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / bihariQuestions.length) * 100}%` }}
                    className="bg-orange-500 h-2 rounded-full transition-all duration-500"
                  />
                </div>
              </>
            ) : (
              <div className="text-center">
                {score >= 2 ? (
                  <>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      Pahichaan Ho Gail! 🎉
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Rahanki ank: {score}/{bihariQuestions.length}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleVerificationComplete}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Kaam Dekhawa Chala
                    </motion.button>
                  </>
                ) : (
                  <>
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <X className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-red-700 mb-2">
                      Pariksha Fail Ho Gail
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Ank: {score}/{bihariQuestions.length}. Fir se koshish kara.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleVerificationComplete}
                      className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                    >
                      Fir Se Koshish Kara
                    </motion.button>
                  </>
                )}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}