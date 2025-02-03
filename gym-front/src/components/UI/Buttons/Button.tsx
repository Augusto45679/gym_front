
import { cn } from "../../../libs/utils";
import { Spinner } from "./Spinner";
import { ButtonProps, ButtonSize, ButtonVariant } from "./types";

export const Button = ({
    icon,
    variant = 'primary', // Default value
    size = 'medium', // Default value
    fullWidth = false, // Default value
    loading = false, // Default value
    className = '', // Default value
    as: Component = 'button', // Default value
    children,
    ...props
}: ButtonProps) => {

    const baseStyles = 'inline-flex items-center transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursornot-allowed';

    const variants: Record<ButtonVariant, string> = {
        primary: 'bg-black text-white ',
        secondary: 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50',
        ghost: 'text-orange-500 hover:bg-orange-50',
        nav: 'text-white hover:text-orange-500 uppercase',
    };
    const sizes: Record<ButtonSize, string> = {
        small: 'px-4 py-1.5 text-sm',
        medium: 'px-6 py-2.5 text-base',
        large: 'px-8 py-3.5 text-lg',
    };

    return (
        <Component
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                fullWidth && 'w-full',
                variant === 'primary' ? 'rounded-full' : 'rounded-lg',
                className
            )}
            disabled={loading}
            {...props}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {children} 
            {loading && <Spinner size="small" className="ml-2" />}
        </Component>
    );
};
export default Button;