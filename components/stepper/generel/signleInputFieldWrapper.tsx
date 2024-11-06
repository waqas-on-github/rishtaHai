// components/ui/ValidatedInputField.tsx

import { useFormContext } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ErrorMessage from "./errorMessage";
import { errorAnimation } from "@/constants/constents";



interface ValidatedInputFieldProps {
    id: string;
    label: string;
    placeholder: string;
    type?: string; // Default is "text"
    className?: string;
    errorMessage?: string; // Pass the error message directly
    showError?: boolean;
}

const SignleInputFieldWrapper: React.FC<ValidatedInputFieldProps> = ({ id, label, placeholder, type = "text", className, errorMessage, showError }) => {
    const { register } = useFormContext();

    return (
        <div className="w-full  ">
            <div className="flex flex-col gap-2  " >
                {
                    label ?
                        <Label className="space-x-2" htmlFor={id}>{label}</Label> : null
                }
            <Input
                id={id}
                type={type}
                {...register(id)} // Just register the field without additional options
                placeholder={placeholder}
                    className={errorMessage || showError ? 'border-red-500' : className}
            />
            </div>
            <AnimatePresence mode="wait">
                {errorMessage && (
                    <motion.div
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={errorAnimation}
                        transition={{ duration: 0.2 }}
                    >
                        <ErrorMessage message={errorMessage} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SignleInputFieldWrapper;
