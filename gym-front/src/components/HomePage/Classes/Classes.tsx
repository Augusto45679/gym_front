import { GymClass } from "../../UI/Buttons/types";
import { ClassCard } from "./ClassCard";

interface ClassesProps { 
    classesData: GymClass[];
    className?: string;
}

export const Classes = ({classesData,className}:ClassesProps) => {
    return(
        <section>
            <div className={`p-4 ${className}`}>
        <h2 className="text-2xl font-bold text-center mb-6 sm:text-sm">Our classes</h2>
            <div className="flex flex-col sm:justify-center lg:justify-center gap-6 sm:gap-2 w-full sm:flex-row sm:flex-wrap sm:gap-2">
            {classesData.map((gymClass, index) => (
                <ClassCard key={index} gymClassData={gymClass} />
            ))}
        </div>
    </div>
        </section>
    );
}