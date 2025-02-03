import BasicPlan from "../icons/BasicPlan";
import PremiumPlan from "../icons/PremiumPlan";
import VipPlan from "../icons/VipPlan";
import { ClassType, MembershipType } from "../UI/Buttons/types";
import { Classes } from "./Classes/Classes";
import { HeroSection } from "./HeroSection/HeroSection";
import { Membership } from "./Membership/Membership";

export const HomePage = () => {
    return (
            <div className="flex w-full items-center bg-black shadow-md text-white">
                <section id="HeroSection">
                    <HeroSection/>
                    <section id="Clases">
                    <Classes classesData={gymClasses}/>
                    </section>
                    <section id="Membresias">
                        <Membership membershipData={gymPricing}/>
                    </section>
                </section>

                <section id="Videos">
                    <div id="GYM_Pricing">

                    </div>
                </section>
            </div>
        
    )
}

const gymClasses = [
    {
        title: 'Crossfit',
        description: 'High intensity training to improve your endurance.',
        image: '/images/pesa.png',
        type: 'crossfit' as ClassType,
        duration: 60,
    },
    {
        title: 'Yoga',
        description: 'Improve your flexibility and relax with gentle postures.',
        image: '/images/yoga1.jpg',
        type: 'yoga' as ClassType,
        duration: 45,
    },
    {
        title: 'Pilates',
        description: 'Strengthen your core and improve your posture.',
        image: '/images/pilates1.jpg',
        type: 'pilates' as ClassType,
        duration: 50,
    },
    {
        title: 'Cardio',
        description: 'Cardio sessions to burn calories quickly.',
        image: '/images/cardio1.jpg',
        type: 'cardio' as ClassType,
        duration: 30,
    },
    {
        title: 'Funcional',
        description: 'Functional training for the whole body.',
        image: '/images/barra2.jpg',
        type: 'funcional' as ClassType,
        duration: 55,
    },
];
const gymPricing = [ 
    {
        title: 'Basic',
        description: '8 classes per month',
        price: 50,
        type: 'basic' as MembershipType,
        logo: <BasicPlan></BasicPlan>,
    },
    {
        title: 'Premium',
        description: '12 classes per month + 2 personal training sessions',
        price: 80,
        type: 'premium' as MembershipType,
        logo: <PremiumPlan></PremiumPlan>,
    },
    {
        title: 'VIP',
        description: 'Free access to all classes + no joining fee',
        price: 120,
        type: 'vip' as MembershipType,
        logo: <VipPlan></VipPlan>,
    },
];