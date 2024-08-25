'use client'
import { popularDishesSequence } from '@/constant/FoodMenu'
import { motion } from 'framer-motion'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Hero() {
    return (
        <motion.header
            className='relative p-12 text-center'
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h1
                className='font-black text-[2rem] md:text-[4rem]'
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
                กินไรดี ?
            </h1>
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
        </motion.header>
    )
}

export default Hero