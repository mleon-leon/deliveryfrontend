import { useState } from "react";
import {AuthCard} from "../../components/common/ AuthCard.tsx";
import {FormInput} from "../../components/common/FormInput.tsx";
import {PrimaryButton} from "../../components/common/PrimaryButton.tsx";
import { useNavigate } from "react-router-dom";





export default function Register() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        setError("");

        alert("Usuario creado correctamente");

        navigate("/");
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-100">
            <AuthCard title="Crear cuenta">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <FormInput
                        label="Nombre completo"
                        placeholder="Juan Pérez"
                    />

                    <FormInput
                        label="Fecha de nacimiento"
                        type="date"
                    />

                    <FormInput
                        label="Correo electrónico"
                        type="email"
                        placeholder="correo@ejemplo.com"
                    />

                    <FormInput
                        label="Teléfono"
                        type="tel"
                        placeholder="0999999999"
                    />

                    <FormInput
                        label="Contraseña"
                        type="password"
                        placeholder="••••••••"
                        className="tracking-widest"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <FormInput
                        label="Confirmar contraseña"
                        type="password"
                        placeholder="••••••••"
                        className="tracking-widest"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    {error && (
                        <p className="text-sm text-red-600 text-center">
                            {error}
                        </p>
                    )}

                    <PrimaryButton type="submit">
                        Crear cuenta
                    </PrimaryButton>
                </form>
            </AuthCard>
        </div>
    );
}
