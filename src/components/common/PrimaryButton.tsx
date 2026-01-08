import {cn} from "../../lib/utils.ts";


interface PrimaryButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function PrimaryButton({
                                  children,
                                  className,
                                  ...props
                              }: PrimaryButtonProps) {
    return (
        <button
            className={cn(
                "w-full rounded-lg bg-pink-600 py-2 text-white font-semibold hover:bg-pink-700 transition",
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
