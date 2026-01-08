import { Link, useNavigate } from "react-router-dom";
import {AuthCard} from "../../components/common/ AuthCard.tsx";
import {FormInput} from "../../components/common/FormInput.tsx";
import {PrimaryButton} from "../../components/common/PrimaryButton.tsx";


export default function Login() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-100">
            <AuthCard title="Iniciar sesión">
                <div className="flex flex-col gap-4">
                    <FormInput
                        label="Correo electrónico"
                        type="email"
                        placeholder="correo@ejemplo.com"
                    />

                    <FormInput
                        label="Contraseña"
                        type="password"
                        placeholder="••••••••"
                    />

                    <PrimaryButton type="submit">
                        Entrar
                    </PrimaryButton>


                    <PrimaryButton
                        type="button"
                        className="bg-neutral-200 text-neutral-700 hover:bg-neutral-300"
                        onClick={() => navigate("/")}
                    >
                        Entrar (demo)
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
                </div>
            </AuthCard>
        </div>
    );
}
