import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PREPOSITIONS_QUIZ, NUMBERS_QUIZ, TENSE_QUIZ, CLOCK_QUIZ } from './data';
import { Clock, Hash, Link as LinkIcon, Shuffle, Trophy, RotateCcw, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import { AppScreen } from './types';

export default function GamesMenu({ setScreen }: { setScreen: (s: AppScreen) => void }) {
  const games = [
    {
      id: 'prepositions' as AppScreen,
      title: "Նախդիրներ",
      desc: "10 հարց նախդիրների ճիշտ օգտագործման վերաբերյալ:",
      icon: <LinkIcon className="w-10 h-10" />,
      color: "from-blue-600 to-indigo-600",
      accent: "text-blue-200"
    },
    {
      id: 'numbers' as AppScreen,
      title: "Թվեր (100-2000)",
      desc: "20 հարց՝ ստուգելու թվերի իմացությունը:",
      icon: <Hash className="w-10 h-10" />,
      color: "from-emerald-600 to-teal-600",
      accent: "text-emerald-200"
    },
    {
      id: 'tenses' as AppScreen,
      title: "Ժամանակներ",
      desc: "Ճանաչիր՝ բայը ներկա է, թե անցյալ:",
      icon: <Shuffle className="w-10 h-10" />,
      color: "from-rose-600 to-orange-600",
      accent: "text-rose-200"
    },
    {
      id: 'clock' as AppScreen,
      title: "Ժամացույց",
      desc: "Իսպաներենով ասա ժամը:",
      icon: <Clock className="w-10 h-10" />,
      color: "from-violet-600 to-purple-600",
      accent: "text-violet-200"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl sm:text-6xl font-black text-slate-950 italic uppercase tracking-tighter">Խաղային <span className="text-rose-600">Կենտրոն</span></h2>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Ընտրիր խաղը և սկսիր սովորել</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
        {games.map((game, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setScreen(game.id)}
            className={`group relative overflow-hidden bg-gradient-to-br ${game.color} p-4 sm:p-8 rounded-[32px] sm:rounded-[48px] shadow-2xl text-left flex flex-row items-center gap-4 sm:gap-8`}
          >
            <div className="p-3 sm:p-6 bg-white/20 rounded-[20px] sm:rounded-[32px] shadow-inner shrink-0 group-hover:bg-white/30 transition-colors">
              {React.cloneElement(game.icon as React.ReactElement<any>, { className: 'w-6 h-6 sm:w-10 sm:h-10' })}
            </div>
            <div className="space-y-1 min-w-0 pr-2">
              <h3 className="text-lg sm:text-3xl font-black text-white italic uppercase truncate leading-tight">{game.title}</h3>
              <p className="text-white/80 font-medium text-[10px] sm:text-base line-clamp-2 leading-snug">{game.desc}</p>
              <div className="flex items-center gap-2 pt-1">
                <span className={`text-[8px] sm:text-xs font-black uppercase tracking-widest ${game.accent}`}>Սկսել</span>
                <ArrowRight className={`w-3 h-3 sm:w-4 sm:h-4 ${game.accent}`} />
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 opacity-10 rotate-12 group-hover:scale-125 transition-transform hidden sm:block">
              {React.cloneElement(game.icon as React.ReactElement<any>, { size: 120 })}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
