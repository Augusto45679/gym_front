export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'nav';

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    loading?: boolean;
    icon?: React.ReactNode;
    as?: React.ElementType;
    href?: string;
}

export type ClassType = 'crossfit' | 'yoga' | 'pilates'| 'cardio'| 'funcional';


export interface GymClass  {
    title: string;
    description:string;
    image: string;
    type?: ClassType;
    duration: number;
}

export interface GymClassProps extends React.HTMLAttributes<HTMLDivElement> {
    gymClassData:GymClass;
}

export type MembershipType = 'basic' | 'premium' | 'vip';

export interface Membership_type {
    title: string;
    description: string;
    price: number;
    type: MembershipType;
    logo: JSX.Element;
}

export interface MembershipProps extends React.HTMLAttributes<HTMLDivElement> { 
    membershipData:Membership_type;
}