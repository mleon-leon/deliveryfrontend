type AuthCardProps = {
    title: string;
    children: React.ReactNode;
};

export function AuthCard({ title, children }: AuthCardProps) {
    return (
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">
            <h1 className="text-2xl font-bold text-center mb-6">
                {title}
            </h1>
            {children}
        </div>
    );
}
