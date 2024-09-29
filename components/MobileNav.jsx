'use client';

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { ScrollArea } from "./ui/scroll-area";

const links = [
    {label: 'Home', path: '/'},
    {label: 'Services', path: '/services'},
    {label: 'Resume', path: '/resume'},
    {label: 'Work', path: '/work'},
    {label: 'Contact', path: '/contact'},
]

const MobileNav = () => {
    const pathName = usePathname();
  return (
        <Sheet>
            <SheetTrigger aria-label="Close" className="flex justify-center items-center"> 
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent>
                    <ScrollArea className='sm:h-80'> 
                    <div className="mt-32 mb-40 sm:mt-2 sm:mb-2 text-center text-2xl">
                        <Link href='/'>
                            <h2 className="text-4xl font-semibold">
                            Raman<span className="text-accent">.</span>
                            </h2>
                        </Link>
                    </div>

                    <nav className="flex flex-col items-center justify-center gap-8 sm:gap-3">
                    {links.map((link,index)=>{
                        return (
                            <Link className={`${pathName===link.path && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all `} key={index} href={link.path}>
                            {link.label}
                        </Link> )
                    })}
                     </nav>
                    </ScrollArea>
                
            </SheetContent>
        </Sheet>
  )
}

export default MobileNav