import { useStepStore } from '@/lib/useStepStore';
import { AnimatePresence, motion } from 'framer-motion'
import Hero from './Hero';
import { ArrowLeft, CircleChevronLeft, MoveLeft } from 'lucide-react';

const pageVariants = {
    initial: {
        opacity: 0,
        x: '100%',
    },
    in: {
        opacity: 1,
        x: '0%',
    },
    out: {
        opacity: 0,
        x: '-100%',
    },
};



const Transition = () => {
    const { currentPage, setPage } = useStepStore();

    const handleBack = () => {
        const newPage = Math.max(currentPage - 1, 1);
        setPage(newPage);
    };
    return (
        <>
            <div className="absolute top-0 left-0 mt-[2rem] ml-[2rem] sm:ml-[1.5rem] sm:mt-[2rem] md:ml-[4rem] md:mt-[3rem] z-[99]">
                <motion.button
                    className="text-white "
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    onClick={handleBack}
                >
                    <CircleChevronLeft
                        onClick={handleBack}
                    />
                </motion.button>
            </div>
            {currentPage === 1 && (
                <Hero />
            )}
            {currentPage === 2 && (
                <motion.div
                    key="page-2"
                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={{ duration: 0.5 }}
                >
                    <div className="h-dvh bg-zinc-800 flex justify-center items-center">
                        <span className="text-white text-5xl">
                            Page 2 Content
                        </span>
                    </div>
                </motion.div>
            )}
        </>
    )
}

export default Transition