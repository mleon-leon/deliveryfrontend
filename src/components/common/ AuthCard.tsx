export function AuthCard({
                             title,
                             children,
                         }: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <div
            className="
        w-full
        max-w-xl
        bg-white
        p-8
        rounded-2xl
        shadow-lg
      "
        >
            <h2 className="text-2xl font-bold text-center mb-6">
                {title}
            </h2>

            {children}
        </div>
    );
}
