'use client'
import { motion } from 'framer-motion'

const TextAnimation = ({ text }: { text: string }) => {
    return (
        <div>
            {text.split("").map((letter, index) =>
                <motion.span
                    className='font-black text-[3rem] md:text-[4rem]'
                    key={index}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: index * 0.1
                    }}
                >
                    {letter}
                </motion.span>
            )}
        </div>
    )
}

export default TextAnimation