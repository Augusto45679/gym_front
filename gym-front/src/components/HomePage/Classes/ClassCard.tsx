import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { cn } from '../../../libs/utils';
import Button from '../../UI/Buttons/Button';
import { ClassType, GymClassProps } from '../../UI/Buttons/types';
import { Schedules } from '../Schedules/Schedules';


const typeStyle: Record<ClassType, string> = {
    crossfit: "",
    yoga: "",
    pilates: "",
    cardio: "",
    funcional: "",
}

export const ClassCard = ({gymClassData,className,...props}:GymClassProps) => {

    const {title, description, image, type, duration} = gymClassData;

    const [isOpen,setIsOpen] = useState(false); 

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
                <div className='flex p-2 justify-center'>
                    <Button variant="ghost" className=' text-amber-500' onClick= {()=>setIsOpen(true)}>Ver horarios</Button>
                </div>
            </div>

            <Dialog open={isOpen} onClose={()=> setIsOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black/50" >
                <Dialog.Panel className="bg-neutral-800 p-6 rounded-lg shadow-lg text-white ">
                    <Dialog.Title className="text-white font-semibold">{title} - Horarios</Dialog.Title>
                    <Schedules  classType={type as ClassType}></Schedules>
                    <div className='p-2 justify-center'>
                    <Button variant='ghost' onClick={()=> setIsOpen(false)}  className="text-white border-amber-400 border-1 rounded-sm" >Cerrar</Button>
                    </div>
                    
                </Dialog.Panel>
            </Dialog>


        </div>
        
        
    );
}