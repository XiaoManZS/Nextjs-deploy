'use client'
import { useSession } from "@/lib/auth-client";
export default function User() {
    const { data, error } = useSession();
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
    return <div>User</div>;
}