import { Membership_type } from "../../UI/Buttons/types";
import { MembershipCard } from "./MembershipCard";


interface MembershipProps { 
    membershipData:Membership_type[];
    className?: string;
}

export const Membership = ({membershipData}:MembershipProps) => {
    return(
        <section className=" ">
            <div className="flex flex-col justify-center items-center gap-6 w-screen">
        <h2 className="text-2xl font-bold text-center mb-6">Memberships</h2>
        <div className="flex flex-row lg:gap-3 py-2 justify-center sm:text-sm sm:px-2">
                    {membershipData.map((Membership_type, index) => (
                        <MembershipCard key={index} membershipData={Membership_type} />
                    ))}
                </div>
        </div>
        </section>
    );
}