import { cn } from "../../../libs/utils";
import { MembershipProps, MembershipType } from "../../UI/Buttons/types";

const memberType: Record<MembershipType, string> = {
    basic:"",
    premium:"",
    vip:"",
}

export const MembershipCard = ({membershipData,className,...props}:MembershipProps) => { 
    const {title, description, price, logo, type} = membershipData;


    return(
        <div className=" h-full w-full animate-rotate-border rounded-lg  bg-conic/[from_var(--border-angle)] from-black from-80% via-orange-300 via-90% to-orange-800 to-100% p-1">
            <div
            className={cn(
                "flex flex-wrap bg-neutral-100 rounded-lg w-full h-full p-3 ",
                type ? memberType[type] : "", className
            )}
            {...props}>
            <h3 className="text-xl font-bold text-black text-center p-2 py-4">{title}</h3>
            <div className="flex items-center justify-center w-20 h-20 mx-auto p-4">{logo}</div>
            <span className="text-black text-lg font-semibold mt-3">${price} / Month</span>
            <p className="text-sm text-orange-700 mt-1 py-1 font-sans font-extrabold">{description}</p>
        </div>
        </div>
        
    );
}