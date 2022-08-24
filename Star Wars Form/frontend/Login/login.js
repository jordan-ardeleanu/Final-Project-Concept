import { useEffect, useState } from "react";
import "./login.css";
import { Profile } from "./Profile";
import { LogoutButton } from "./LogoutButton";
import { LoginButton } from "./LoginButton";

export const Login = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:2000/", {
        credentials: "include",
        headers: {
            "content-type": "application/json",
        },
        })
        .then((res) => res.json())
        .then((b) => {
            if (b.success) {
            setUser(b.user);
            }
        });
    }, []);

    return user ? (
        <div>
        <Profile user={user} />
        <LogoutButton />
        </div>
    ) : (
        <div>
        <LoginButton />
        </div>
    );
};

