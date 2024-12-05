'use client'
import { popularDishesSequence } from '@/constant/FoodMenu'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import TextAnimation from './TextAnimation'
import { ArrowRight, ArrowUpRightIcon, Bot, LucideX, MoveRight, RefreshCw } from 'lucide-react'
import { useStepStore } from '@/lib/useStepStore'
import MessageBox from './MessageBox'
import askAI from '@/lib/gemini'

export interface FormattedResponse {
  menu: string;
  description: string;
  icon: string;
}

function Hero() {
  const { setPage, setStep, currentPage, currentStep } = useStepStore()
  const [aiResult, setAiResult] = useState<FormattedResponse[]>([]);

  const sanitizeResult = (result: string) => {
    let cleanResult = result.trim();

    const match = cleanResult.match(/\[([\s\S]*)\]/);
    if (match) {
      cleanResult = match[0];
    }

    return cleanResult;
  };

  const handleClick = async (step: number) => {
    if (step === 2) {
      const result = await askAI('สร้าง JSON แนะนำเมนูอาหารมา 5 รายการ ได้มี 3 Key คือ menu , description , icon สำหรับ key icon ขอแค่ 1-2 ตัวก็พอครับ และขอรายละเอียดอาหารตอบเป็นรูปแบบแนะนำเพื่อนได้มั้ย เหมือนคุณกับผมเป็นเพื่อนกัน ใช้ภาษาวัยรุ่น');
      const sanitizedPlainText = sanitizeResult(result);
      const finalResult = JSON.parse(sanitizedPlainText);
      setAiResult(finalResult)
    }
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
        buttonIcon: <RefreshCw className='w-h h-5 text-white' />,
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

      {currentStep === 2 && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mx-auto p-5 w-full xl:max-w-[50%]"
          >
            <MessageBox items={aiResult} />
          </motion.div>
        </>
      )}
      <motion.div
        className="absolute w-full flex justify-center item-center"
        animate={{
          opacity: 1,
          y: "80dvh",
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`relative w-full flex justify-center items-center`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative w-full max-w-[90vw] xl:max-w-[50%] px-2">
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
                      className="p-5 py-7 md:py-[1%] bg-zinc-800 rounded-3xl flex gap-4 shadow"
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
                      {stepContent.buttonIcon && (<div className="flex items-center justify-center">
                        <div
                          className={`w-12 h-12 flex items-center justify-center rounded-xl transition ${stepContent.buttonColor} hover:cursor-pointer`}
                          onClick={stepContent.handleClick}
                        >
                          {stepContent.buttonIcon}
                        </div>
                      </div>)}
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