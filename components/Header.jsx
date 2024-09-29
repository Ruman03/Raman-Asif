import Link from "next/link"
// Components
import Nav from "./Nav"
import { Button } from "./ui/button"
import MobileNav from "./MobileNav"


const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white  ">
        <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href='/'>
            <p className="text-4xl font-semibold">
                Raman<span className="text-accent">.</span>
            </p>
            </Link>
        {/* Desktop nav & hire me button */}
        <div className="hidden md:flex items-center gap-8">
        <Nav/>
        <Link href='/contact'>
            <Button>Hire Me</Button>
        </Link>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden">
            <MobileNav/>
        </div>
        
        </div>
    </header>
  )
}

export default Header