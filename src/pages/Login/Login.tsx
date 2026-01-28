import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FormInput } from "../../components/common/FormInput";
import { PrimaryButton } from "../../components/common/PrimaryButton";
import { login, setAuthToken } from "../../lib/api";
import {AuthCard} from "../../components/common/ AuthCard.tsx";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const data = await login(email, password);

            console.log("LOGIN RESPONSE:", data);

            localStorage.setItem("token", data.access_token);
            setAuthToken(data.access_token);

            localStorage.setItem("user", JSON.stringify(data.user));

            if (data.user.role === "ADMIN") {
                navigate("/admin");
            } else {
                navigate("/");
            }

        } catch (err) {
            console.error("ERROR LOGIN:", err);
            setError("Credenciales incorrectas");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-100">
            <AuthCard title="Iniciar sesión">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <FormInput
                        label="Correo electrónico"
                        type="email"
                        placeholder="correo@ejemplo.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <FormInput
                        label="Contraseña"
                        type="password"
                        placeholder="••••••••"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && (
                        <p className="text-sm text-red-600 text-center">
                            {error}
                        </p>
                    )}

                    <PrimaryButton type="submit" disabled={loading}>
                        {loading ? "Entrando..." : "Entrar"}
                    </PrimaryButton>

                    <p className="text-center text-sm text-neutral-600">
                        ¿Aún no tienes una cuenta?{" "}
                        <Link
                            to="/register"
                            className="font-semibold text-pink-600 hover:underline"
                        >
                            Crear cuenta
                        </Link>
                    </p>
                </form>
            </AuthCard>
        </div>
    );
}
