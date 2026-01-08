import * as React from "react";
import {Input} from "../ui/input.tsx";
import {cn} from "../../lib/utils.ts";


// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";

type FormInputProps = {
    label: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function FormInput({
                              label,
                              type = "text",
                              placeholder,
                              className,
                              onChange,
                          }: FormInputProps) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-neutral-700">
                {label}
            </label>
            <Input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={cn("h-11", className)}
            />
        </div>
    );
}
