import InstagramIcon from "../icons/InstagramIcon";
import WhatsAppIcon from "../icons/WhatsAppIcon";

export const Footer = () => {
    return (
        <footer className="flex w-full bg-black text-white py-6">
            <section className="container mx-auto px-6 py-3 flex flex-col items-center justify-between">
            <div className="flex flex-row flex-wrap items-center p-3">
                <div className="p-2 md:p-3">
                    <InstagramIcon/>
                </div >
                <div className="p-2 md:p-3">
                    <WhatsAppIcon/>
                </div>
        </div>
                <div className="p-3">
                    <p>&copy; {new Date().getFullYear()} GYM Label. All rights reserved.</p>
                </div>
            </section>
            
        </footer>
            
    );
};


