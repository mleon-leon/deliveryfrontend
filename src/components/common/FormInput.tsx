import * as React from "react";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export function FormInput({
                              label,
                              className,
                              ...props
                          }: FormInputProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-700">
                {label}
            </label>
            <Input
                className={cn("h-11", className)}
                {...props}
            />
        </div>
    );
}
