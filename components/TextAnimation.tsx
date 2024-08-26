'use client'
import { motion } from 'framer-motion'

const TextAnimation = ({ text }: { text: string }) => {
    return (
        <div>
            <motion.span
                className='font-black text-[3rem] md:text-[4rem] text-white'
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                }}
            >
                {text}
            </motion.span>
        </div>
    )
}

export default TextAnimation