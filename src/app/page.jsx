"use client"

import { useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import IntroScreen from '@/components/screens/IntroScreen';
import BalloonScreen from '@/components/screens/BalloonScreen';
import LetterScreen from '@/components/screens/LetterScreen';
import OutroScreen from '@/components/screens/OutroScreen';

export default function SpecialPersonApp() {
  const [currentScreen, setCurrentScreen] = useState(0);

  return (
    <div className="min-h-screen bg-[#f1dce4] overflow-hidden flex flex-col items-center justify-center relative px-5 py-10">

      <AnimatePresence mode="wait">
        {currentScreen === 0 && <IntroScreen key="intro" onNext={() => setCurrentScreen(1)} />}
        {currentScreen === 1 && <BalloonScreen key="balloons" onNext={() => setCurrentScreen(2)} />}
        {currentScreen === 2 && <LetterScreen key="letter" onNext={() => setCurrentScreen(3)} />}
        {currentScreen === 3 && <OutroScreen key="outro" onReset={() => setCurrentScreen(0)} />}
      </AnimatePresence>

      {/* Watermark */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        className="fixed bottom-4 right-4 text-sm text-black/50 pointer-events-none z-50 font-light">
        anujbuilds.in
      </motion.div>
    </div>
  );
}