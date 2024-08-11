import React, { useState } from 'react'
import {motion,AnimatePresence} from 'framer-motion'
import Link from 'next/link';



interface navLinksProps{
    title:string,
    href:string,
  }

  interface MobileNavProps {
    navLinks: navLinksProps[];
    bgchange: boolean;
  }
  const MobileNva: React.FC<MobileNavProps> = ({ navLinks,bgchange }) => {
    const [open,setOpen] = useState(false);



    const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] }

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
      }

    const slideUp = {
        initial: {
          y: 200,
        },
        animate: {
          y: 0,
          transition: {
            delay:0.4,
            duration: 0.8,
            ease: [0.6, -0.05, 0.01, 0.9],
          },
        },
        exit: {
          y: 200,
          transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.9],
          },
        },
      };
      
      const menuVars = {
        initial: {
          scaleY: 0,
        },
        animate: {
          scaleY: 1,
          transition: {
            duration: 0.5,
            ease: [0.12, 0, 0.39, 0],
          },
        },
        exit: {
          scaleY: 0,
          transition: {
            delay: 0.5,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };
      const containerVars = {
        initial: {
          transition: {
            staggerChildren: 0.09,
            staggerDirection: -1,
          },
        },
        open: {
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.09,
            staggerDirection: 1,
          },
        },
      };
    
  return (
    <div>
          <div
          className={bgchange? 'cursor-pointer font-semibold lg:hidden text-md text-white bg-black transition-all px-4 py-2 rounded-full':'cursor-pointer font-semibold lg:hidden text-md text-black transition-all bg-white px-3 py-2 rounded-full'}
          onClick={toggleMenu}
        >
          MENU
        </div>
        <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 left-0 top-0 w-full h-screen origin-top backdrop-blur-2xl bg-black/60 text-white p-10"
          >
            <div className="flex h-full flex-col">
              <div className="flex overflow-hidden justify-end">
               <motion.p
                variants={slideUp}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{...transition,delay:0.5}}
                  className="cursor-pointer font-semibold  text-md text-white"order-2 px-3 py-6
                  onClick={toggleMenu}
                >
                  CLOSE

        </motion.p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className=" absolute bottom-16  "
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden ">
                      <MobileNavLink
                        key={index}
                        title={link.title}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileNva;

const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };
  const MobileNavLink:React.FC<navLinksProps> = ({ title, href }) => {
    return (
      <motion.div
        variants={mobileLinkVars}
        className="text-2xl uppercase mt-5 text-white"
      >
        <Link href={href}>{title}</Link>
      </motion.div>
    );
  };