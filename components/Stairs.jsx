import { motion } from "framer-motion"

// variants
const stairAnimation = {
    initial: {
        top: '0%',
    },
    animate: {
        top: '100%',
    },
    exit: {
        top: ['100%', '0%'],
    },
}

// reverse index
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index -1;
}

const Stairs = () => {
  return (
    <>
    {/* render */}

    {[...Array(6)].map((_, index) =>{
        return (
            <motion.div 
                key={index}
                custom={reverseIndex(index)}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.15,
                    delay: reverseIndex(index) * 0.07,
                    ease: 'easeInOut',
                }}
                className="h-full w-full bg-white relative "
            />
        )
    } )}

    </>
  )
}

export default Stairs