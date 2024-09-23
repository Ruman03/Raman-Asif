'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {label: 'Home', path: '/'},
    {label: 'Services', path: '/services'},
    {label: 'Resume', path: '/resume'},
    {label: 'Work', path: '/work'},
    {label: 'Contact', path: '/contact'},
]

const Nav = () => {

const pathName = usePathname();

  return (
    <nav className=" flex items-center justify-center gap-8">
        {links.map((link,index)=>{
            return (
            <Link className={`${pathName===link.path && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all `} key={index} href={link.path}>
                {link.label}
            </Link> )
        })}
    </nav>
  )
}

export default Nav