import { useEffect, useState } from "react";
import { getUsers } from "../../lib/api";

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
};

export default function AdminUsers() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then(setUsers);
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Usuarios</h1>

            <table className="w-full bg-white rounded shadow">
                <thead>
                <tr className="border-b">
                    <th className="p-3 text-left">Nombre</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Rol</th>
                </tr>
                </thead>
                <tbody>
                {users.map((u) => (
                    <tr key={u.id} className="border-b">
                        <td className="p-3">{u.name}</td>
                        <td className="p-3">{u.email}</td>
                        <td className="p-3 font-semibold">{u.role}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
