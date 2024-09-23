import Link from "next/link"

import {FaGithub, FaLinkedin, FaYoutube, FaTwitter} from 'react-icons/fa'

const socials = [
    { icons: <FaGithub/>, path: '', desc: 'Github'},
    { icons: <FaLinkedin/>, path: '', desc: 'Linkedin'},
    { icons: <FaYoutube/>, path: '', desc: 'Youtube'},
    { icons: <FaTwitter/>, path: '', desc: 'Twitter'},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) =>{
            return (
                <Link key={index} href={social.path} className={iconStyles} aria-label={social.desc}>
                     {social.icons}
                </Link>
            )
        } )}
    </div>
  )
}

export default Socials