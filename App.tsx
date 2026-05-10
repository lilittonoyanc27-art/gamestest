import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Sparkles,
  ArrowRight,
  HelpCircle,
  Zap,
  Clock,
  LayoutGrid,
  Gamepad2
} from 'lucide-react';
import { AppScreen } from './types';

// Components
import QuizView from './QuizView';
import GamesMenu from './GamesMenu';

const Navbar = ({ currentScreen, setScreen }: { currentScreen: AppScreen, setScreen: (s: AppScreen) => void }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-rose-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 sm:h-20 flex items-center justify-between gap-4">
        <button onClick={() => setScreen('menu')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform border border-rose-500/30">
            <Zap className="text-yellow-400 w-6 h-6" />
          </div>
          <span className="font-black text-slate-950 tracking-tighter uppercase italic hidden sm:block">
            ԻՍՊԱՆԵՐԵՆ: <span className="text-rose-600">ԽԱՂԱՅԻՆ ԿԵՆՏՐՈՆ</span>
          </span>
        </button>
        
        <div className="flex items-center gap-2">
          <NavButton 
            active={currentScreen === 'games' || currentScreen === 'prepositions' || currentScreen === 'numbers' || currentScreen === 'tenses' || currentScreen === 'clock'} 
            icon={<Gamepad2 className="w-5 h-5"/>} 
            label="Խաղեր" 
            onClick={() => setScreen('games')} 
          />
        </div>
      </div>
    </nav>
  );
};

const NavButton = ({ active, icon, label, onClick }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-2xl flex items-center gap-2 transition-all shrink-0 ${
      active 
        ? 'bg-rose-600 text-white shadow-xl scale-105 shadow-rose-600/30' 
        : 'text-slate-400 hover:bg-slate-100 hover:text-slate-900'
    }`}
  >
    {icon}
    <span className="font-black text-[10px] sm:text-xs uppercase tracking-widest">{label}</span>
  </button>
);

const MenuCard = ({ icon, title, description, color, onClick }: { icon: React.ReactNode, title: string, description: string, color: string, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className="group bg-white p-6 sm:p-10 rounded-[40px] sm:rounded-[56px] shadow-sm border-2 border-slate-50 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8 transition-all hover:scale-[1.02] hover:shadow-2xl hover:border-rose-500"
  >
    <div className={`w-28 h-28 shrink-0 rounded-[36px] ${color} flex items-center justify-center text-white shadow-2xl group-hover:rotate-6 transition-transform`}>
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-16 h-16' })}
    </div>
    <div className="flex-1 space-y-2 sm:space-y-4">
      <h3 className="text-2xl sm:text-4xl font-black text-slate-950 uppercase italic leading-none group-hover:text-rose-600 transition-colors">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-xl opacity-80">{description}</p>
      <div className="inline-flex items-center gap-2 px-6 py-2 bg-slate-50 rounded-full font-black text-xs uppercase tracking-widest text-slate-400 group-hover:bg-slate-950 group-hover:text-white transition-all shadow-sm">
        ՍԿՍԵԼ <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </button>
);

function MainMenu({ setScreen }: { setScreen: (s: AppScreen) => void }) {
  return (
    <div className="flex flex-col items-center gap-10 sm:gap-20 py-12 sm:py-20 text-center">
      <div className="text-center space-y-4 max-w-3xl px-4">
        <h1 className="text-4xl sm:text-7xl md:text-9xl font-black text-slate-950 tracking-tighter uppercase italic leading-none drop-shadow-sm">
          SPANISH <span className="text-rose-600">GAMES</span>
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl font-bold text-rose-600 uppercase tracking-[0.2em] sm:tracking-[0.3em]">
          ՍՈՎՈՐԵԼԸ ԽԱՂ Է
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:gap-12 w-full max-w-4xl px-4">
        <MenuCard 
          icon={<Gamepad2 />}
          title="Խաղեր"
          description="Ինտերակտիվ խաղեր՝ նախդիրներ, թվեր, ժամանակներ և այլն:"
          color="bg-rose-600"
          onClick={() => setScreen('games')}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('menu');

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-rose-600 selection:text-white pt-20 pb-12 overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-rose-600/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] bg-yellow-400/10 blur-[100px] rounded-full" />
          <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-rose-500/10 blur-[130px] rounded-full" />
      </div>

      <Navbar currentScreen={screen} setScreen={setScreen} />

      <main className="max-w-7xl mx-auto px-4 min-h-[80vh] relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
          >
            {screen === 'menu' && <MainMenu setScreen={setScreen} />}
            {screen === 'games' && <GamesMenu setScreen={setScreen} />}
            {screen === 'prepositions' && <QuizView type="prepositions" onComplete={() => setScreen('games')} />}
            {screen === 'numbers' && <QuizView type="numbers" onComplete={() => setScreen('games')} />}
            {screen === 'tenses' && <QuizView type="tenses" onComplete={() => setScreen('games')} />}
            {screen === 'clock' && <QuizView type="clock" onComplete={() => setScreen('games')} />}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mt-20 border-t border-rose-100 pt-16 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
               &copy; 2026 ԻՍՊԱՆԵՐԵՆ: ԽԱՂԱՅԻՆ ԿԵՆՏՐՈՆ
            </p>
            <div className="flex justify-center gap-4 text-slate-100">
              <Clock className="w-4 h-4" />
              <Sparkles className="w-4 h-4" />
            </div>
        </div>
      </footer>
    </div>
  );
}
