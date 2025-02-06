import { ClassType } from "../../UI/Buttons/types";


interface SchedulesProps{
    classType: ClassType;
    
}

const schedules: Record<ClassType, string[]> = {
    crossfit: ["Lunes 8:00 AM", "Miércoles 6:00 PM", "Viernes 7:30 AM"],
    yoga: ["Martes 9:00 AM", "Jueves 5:00 PM", "Sábado 10:00 AM"],
    pilates: ["Lunes 7:00 AM", "Miércoles 5:30 PM", "Viernes 6:00 PM"],
    cardio: ["Martes 6:00 AM", "Jueves 7:00 PM", "Sábado 8:00 AM"],
    funcional: ["Lunes 10:00 AM", "Miércoles 7:00 PM", "Viernes 9:00 AM"],
};

export const Schedules =( {classType}:SchedulesProps)=>{
    const classSchedules = schedules[classType] || [];

    return(
        <div>
            <ul className="mt-2">
                {classSchedules.map( (horario,index) =>(
                    <li key={index} className="border-b py-1">{horario}</li>
                    ))}
            </ul>
        </div>
    );
}