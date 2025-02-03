import { cn } from '../../../libs/utils';
import { ClassType, GymClassProps } from '../../UI/Buttons/types';

const typeStyle: Record<ClassType, string> = {
    crossfit: "",
    yoga: "",
    pilates: "",
    cardio: "",
    funcional: "",
}

export const ClassCard = ({gymClassData,className,...props}:GymClassProps) => {

    const {title, description, image, type, duration} = gymClassData;
    return(
        <div>
            <div
            className={cn(
                "border-2 rounded-xl shadow-md lg:p-4 sm:p-3 transition-all duration-300 lg:hover:scale-105 hover:shadow-lg w-full",
                type ? typeStyle[type] : "",
                className
            )}
            {...props}>
            <div className="h-38 w-full rounded-md "> {/* Contenedor con altura fija */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover" // Imagen ajustada al contenedor
                />
            </div>
            <h3 className="text-xl font-bold mt-3 sm:text-2xl p-1">{title}</h3>
            <p className="text-sm text-white mt-1 p-1">{description}</p>
            <div className="flex justify-between items-center mt-3 p-1">
                <span className="text-sm font-semibold text-amber-500 p-1">Duration: {duration} min</span>
            </div>
            </div>
        </div>
        
        
    );
}