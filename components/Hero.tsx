'use client'
import { popularDishesSequence } from '@/constant/FoodMenu'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import TextAnimation from './TextAnimation'
import { ArrowRight, ArrowUpRightIcon, Bot, LucideX, MoveRight } from 'lucide-react'
import { useStepStore } from '@/lib/useStepStore'

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
};

function Hero() {
  const { setPage, setStep, currentPage, currentStep } = useStepStore()

  const handleClick = (step: number) => {
    setStep(step);
  };

  const getStepContent = (step: number) => {
    if (step === 1) {
      return {
        id: 1,
        icon: "🍳",
        title: "Random Food",
        description: "Don't know what to eat?",
        buttonIcon: <ArrowUpRightIcon className="w-5 h-5 text-white" />,
        buttonColor: "bg-crimson hover:bg-crimson-dark",
        handleClick: () => handleClick(2),
      };
    } else if (step === 2) {
      return {
        id: 2,
        icon: "🗨️",
        title: "Let's Start Talking with AI",
        description: "Ready to chat?",
        buttonIcon: <Bot className="w-5 h-5 text-white" />,
        buttonColor: "bg-blue-500 hover:bg-blue-700",
        handleClick: () => handleClick(1),
      };
    }
    return {};
  };

  const stepContent = getStepContent(currentStep);

  return (
    <div className={`main h-[100dvh] flex flex-col`}>
      <motion.div
        className="relative p-12 text-center flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: "0%" }}
        animate={{
          opacity: 1,
          y: currentStep === 1 ? "35dvh" : "0dvh",
        }}
        transition={{ duration: 0.5 }}
      >
        <TextAnimation text="กินไรดี ?" />
        <div className="flex justify-center items-center whitespace-nowrap space-x-5 text-[1.5rem]">
          <div className="relative">
            <div className="absolute -bottom-[1.5rem] left-[0.5rem] md:-bottom-[1.7rem] bg-blue-500 ps-3 -rotate-2">
              <TypeAnimation
                className='text-white'
                sequence={popularDishesSequence}
                wrapper="span"
                speed={5}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="relative w-full flex justify-center item-center"
        animate={{
          opacity: 1,
          y: "50dvh",
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`relative w-full flex justify-center items-center`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full max-w-[90vw] lg:max-w-xl px-2">
            <div className="overflow-hidden">
              <div className="flex -ml-4">
                <div className="min-w-0 shrink-0 grow-0 basis-full pl-4 pb-2">
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={stepContent.id}
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="p-5 py-7 xl:py-[3%] bg-zinc-800 rounded-3xl flex gap-4 shadow"
                    >
                      <div className="w-12 h-12 md:w-24 md:h-24 flex-shrink-0 flex items-center justify-center text-4xl md:text-6xl">
                        {stepContent.icon}
                      </div>
                      <div className="flex-grow flex flex-col items-left justify-center">
                        <div className="md:text-lg font-bold text-white">
                          {stepContent.title}
                        </div>
                        <div className="text-sm text-zinc-400">
                          {stepContent.description}
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div
                          className={`w-12 h-12 flex items-center justify-center rounded-xl transition ${stepContent.buttonColor} hover:cursor-pointer`}
                          onClick={stepContent.handleClick}
                        >
                          {stepContent.buttonIcon}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero