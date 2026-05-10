import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PREPOSITIONS_QUIZ, NUMBERS_QUIZ, TENSE_QUIZ, CLOCK_QUIZ } from './data';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';

export default function QuizView({ type, onComplete }: { type: 'prepositions' | 'numbers' | 'tenses' | 'clock', onComplete: () => void }) {
  const data = type === 'prepositions' ? PREPOSITIONS_QUIZ : 
               type === 'numbers' ? NUMBERS_QUIZ : 
               type === 'tenses' ? TENSE_QUIZ : 
               CLOCK_QUIZ;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = data[currentIdx];

  const handleOptionClick = (option: string) => {
    if (showResult) return;
    setSelectedOption(option);
    setShowResult(true);
    
    let isCorrect = false;
    if (type === 'numbers') {
      isCorrect = option === (question as any).spanish;
    } else {
      isCorrect = option === (question as any).correctAnswer;
    }

    if (isCorrect) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx < data.length - 1) {
      setCurrentIdx(i => i + 1);
      setSelectedOption(null);
      setShowResult(false);
    } else {
      setQuizFinished(true);
    }
  };

  if (quizFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto py-12 text-center space-y-8"
      >
        <div className="bg-slate-900 p-12 rounded-[60px] shadow-2xl border-4 border-yellow-400 relative overflow-hidden">
          <Trophy className="w-32 h-32 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl font-black text-white uppercase italic mb-2">Արդյունք</h2>
          <p className="text-7xl font-black text-yellow-400 mb-8">{score} / {data.length}</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                setCurrentIdx(0);
                setSelectedOption(null);
                setShowResult(false);
                setScore(0);
                setQuizFinished(false);
              }}
              className="flex items-center gap-3 bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-full text-xl font-bold transition-all shadow-lg"
            >
              <RotateCcw className="w-6 h-6" />
              Նորից
            </button>
            <button 
              onClick={onComplete}
              className="flex items-center gap-3 bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 rounded-full text-xl font-bold transition-all shadow-lg"
            >
              Մենյու
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <div className="mb-8 flex justify-between items-end">
        <div className="flex-1 mr-4">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-1">Հարց {currentIdx + 1}/{data.length}</p>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-rose-600"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIdx + 1) / data.length) * 100}%` }}
            />
          </div>
        </div>
        <p className="text-2xl font-black text-slate-800 italic">Score: <span className="text-rose-600">{score}</span></p>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          {type === 'prepositions' && (
            <div className="bg-slate-900 p-6 sm:p-10 rounded-[32px] sm:rounded-[48px] shadow-xl text-center space-y-4 sm:space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-500" />
              <p className="text-xl sm:text-4xl font-black text-white italic leading-tight break-words">
                {(question as any).sentence.split('___').map((part: string, i: number) => (
                  <React.Fragment key={i}>
                    {part}
                    {i === 0 && (
                      <span className={`inline-block mx-2 border-b-2 sm:border-b-4 ${showResult ? (selectedOption === (question as any).correctAnswer ? 'text-green-400 border-green-400' : 'text-rose-500 border-rose-500') : 'text-yellow-400 border-yellow-400/30'} min-w-[80px] sm:min-w-[120px]`}>
                        {selectedOption || '___'}
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </p>
              <p className="text-white/50 text-[10px] sm:text-sm font-bold uppercase tracking-widest leading-relaxed">{(question as any).translation}</p>
            </div>
          )}

          {type === 'numbers' && (
            <div className="bg-slate-900 p-6 sm:p-12 rounded-[32px] sm:rounded-[48px] shadow-xl text-center space-y-4 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500" />
               <p className="text-[10px] sm:text-xs font-black text-emerald-400 uppercase tracking-widest">Ընտրիր ճիշտ թիվը</p>
               <h3 className="text-5xl sm:text-9xl font-black text-white italic tracking-tighter">{(question as any).number}</h3>
            </div>
          )}

          {type === 'tenses' && (
            <div className="bg-slate-900 p-8 sm:p-12 rounded-[32px] sm:rounded-[48px] shadow-xl text-center space-y-4 sm:space-y-6 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-rose-500" />
               <div className="space-y-4">
                 <p className="text-[10px] sm:text-xs font-black text-rose-400 uppercase tracking-widest">Ընտրիր ճիշտ թարգմանությունը</p>
                 <h3 className="text-3xl sm:text-5xl font-black text-white italic">{(question as any).sentence}</h3>
               </div>
            </div>
          )}

          {type === 'clock' && (
             <div className="bg-slate-900 p-6 sm:p-10 rounded-[32px] sm:rounded-[48px] shadow-xl text-center space-y-6 sm:space-y-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-violet-600" />
                <div className="relative mx-auto w-40 h-40 sm:w-64 sm:h-64">
                   <div className="absolute inset-0 bg-white rounded-full shadow-[inset_0_4px_12px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.3)] border-4 sm:border-8 border-slate-800" />
                   <div className="absolute top-1/2 left-1/2 -ml-1 -mt-1 w-2 h-2 bg-rose-600 rounded-full z-20" />
                   <motion.div 
                      className="absolute top-1/2 left-1/2 w-1 h-14 sm:h-20 bg-slate-800 rounded-full origin-bottom"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: (parseInt((question as any).time.split(':')[0]) * 30) + (parseInt((question as any).time.split(':')[1]) * 0.5) }}
                      style={{ marginTop: '-56px', sm: { marginTop: '-80px' }, marginLeft: '-2px' } as any}
                   />
                </div>
                <h4 className="text-3xl sm:text-4xl font-black text-white">{(question as any).time}</h4>
             </div>
          )}

          <div className="grid gap-3 sm:gap-4">
            {(question as any).options.map((option: string) => {
              let isCorrect = false;
              if (type === 'numbers') {
                isCorrect = option === (question as any).spanish;
              } else {
                isCorrect = option === (question as any).correctAnswer;
              }

              const isSelected = option === selectedOption;
              
              let bgColor = 'bg-white';
              let borderColor = 'border-slate-100';
              let textColor = 'text-slate-800';

              if (showResult) {
                if (isCorrect) {
                  bgColor = 'bg-green-50';
                  borderColor = 'border-green-500';
                  textColor = 'text-green-700';
                } else if (isSelected) {
                  bgColor = 'bg-rose-50';
                  borderColor = 'border-rose-500';
                  textColor = 'text-rose-700';
                } else {
                  bgColor = 'bg-white opacity-50';
                }
              }

              return (
                <button
                  key={option}
                  disabled={showResult}
                  onClick={() => handleOptionClick(option)}
                  className={`group relative p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] border-2 ${borderColor} ${bgColor} ${textColor} text-lg sm:text-xl font-bold transition-all flex items-center justify-between ${!showResult && 'hover:border-rose-600 hover:shadow-xl'}`}
                >
                  <span className="flex-1 text-left break-words mr-2 uppercase tracking-wide">
                    {option}
                  </span>
                  {showResult && isCorrect && <CheckCircle2 className="text-green-500 w-6 h-6 sm:w-8 sm:h-8 shrink-0" />}
                  {showResult && isSelected && !isCorrect && <XCircle className="text-rose-500 w-6 h-6 sm:w-8 sm:h-8 shrink-0" />}
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {showResult && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleNext}
                className="w-full bg-slate-900 text-white py-5 sm:py-6 rounded-[24px] sm:rounded-[32px] text-lg sm:text-2xl font-black uppercase italic tracking-widest flex items-center justify-center gap-4 hover:bg-slate-800 transition-colors shadow-2xl"
              >
                {currentIdx < data.length - 1 ? 'Հաջորդը' : 'Ավարտել'}
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
