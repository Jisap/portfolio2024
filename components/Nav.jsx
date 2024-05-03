import { LINKS } from '@/constants/data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'




const Nav = ({ containerStyles, linkStyles, underLineStyles }) => {

  const path = usePathname()

  return (
    <nav className={`${containerStyles}`}>
      {LINKS.map((link, i) => (
        <Link 
          href={link.path} 
          key={i}
          className={`${linkStyles}`}  
        >
          {link.path === path && (
            <motion.span
              initial={{y: '-100%'}}
              animate={{y: 0}}
              transition={{type: 'tween'}}
              layoutId='underline'
              className={`${underLineStyles}`}
            >

            </motion.span>
          )}
          {link.title}
        </Link>
      ))}
    </nav>
  )
}

export default Nav