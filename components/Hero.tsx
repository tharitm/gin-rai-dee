'use client'
import { popularDishesSequence } from '@/constant/FoodMenu'
import { motion } from 'framer-motion'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import TextAnimation from './TextAnimation'
import { ArrowRight, MoveRight } from 'lucide-react'

function Hero() {
    return (
        <section className='main h-screen flex flex-col justify-center items-center bg-zinc-800'>
            <motion.div
                className='relative p-12 text-center'
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
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
            <div className="text-center py-12 px-6 md:w-[50%]">
                <p className="text-white text-xl">
                    หิวจนไม่รู้จะกินอะไรดี? ไม่มีปัญหา! เดี๋ยวผมช่วยคิดเมนูให้คุณเอง แล้วมาลุ้นกันว่าจะมีอะไรอร่อยๆ รออยู่! 🍕🍔🥗
                </p>
            </div>
            <motion.button
                className="relative rounded-full bg-white p-3 text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <MoveRight className="h-5 w-5" />
                <span
                    className="absolute inset-0 rounded-full bg-transparent border-2 border-white/50 animate-ping-slow"
                ></span>
            </motion.button>
        </section>
    )
}

export default Hero