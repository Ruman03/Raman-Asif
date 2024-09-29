import Link from "next/link"

import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from 'react-icons/fa'

const socials = [
    { icons: <FaGithub/>, path: 'https://github.com/Ruman03', desc: 'Github'},
    { icons: <FaLinkedin/>, path: '/', desc: 'Linkedin'},
    { icons: <FaYoutube/>, path: 'https://www.youtube.com/@itsruman03', desc: 'Youtube'},
    { icons: <FaTwitter/>, path: 'https://x.com/MuhammadRumanA4', desc: 'Twitter'},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) =>{
            return (
                <Link rel="nofollow noopener noreferrer" target="_blank" key={index} href={social.path} className={iconStyles} aria-label={social.desc}>
                     {social.icons}
                </Link>
            )
        } )}
    </div>
  )
}

export default Socials