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
            <h1 className="text-4xl font-semibold">
                Raman<span className="text-accent">.</span>
            </h1>
            </Link>
        {/* Desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
        <Nav/>
        <Link href='/contact'>
            <Button>Hire Me</Button>
        </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
            <MobileNav/>
        </div>
        
        </div>
    </header>
  )
}

export default Header