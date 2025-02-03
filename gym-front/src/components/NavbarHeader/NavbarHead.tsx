import DumbellIcon from "../icons/DumbellIcon";
import Button from "../UI/Buttons/Button";

const navigationLinks = [
    {label: "Home" , href:"#home"},{label:"Who are We", href:"about"},{label:"Pricing", href:"pricing"},
    {label:"Memberships", href:"memberships"},{label:"Classes", href:"classes"}
]

export const NavbarHead = () => {
    return (
        <header className="w-full bg-black shadow-md text-white">
            <nav className='container mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row items-center justify-between'>
                
                {/* Logo */}
                <div className="mb-4 md:mb-0 md:pr-10" >
                    <DumbellIcon  />
                </div>
                {/* Navigation Links */}
                <div className="hidden md:flex flex-wrap justify-center">
                    { navigationLinks.map((link) => (
                        <Button key={link.href} variant="ghost" size="medium" className="text-white/70 hover:text-gray-500 px-6 py-3 " as="a" href={link.href}>
                            {link.label}
                        </Button>
                    ) )
                    }

                </div>
                <div className=" animate-rotate-border rounded-lg  bg-conic/[from_var(--border-angle)] from-black from-80% via-orange-300 via-90% to-black to-100% p-px">
                    <Button variant="primary" size="large"
                        className=" rounded-lg bg-neutral-900 p-5 text-center text-white" as="a" href="#contact"> Book </Button>
                </div>
            </nav>
            
        </header>
    );

};

export default NavbarHead;