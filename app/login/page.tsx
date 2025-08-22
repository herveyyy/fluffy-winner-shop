import LoginCard from "@/components/organisms/LoginCard";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
    return (
        <div className="p-2 h-screen w-screen flex items-center bg-gradient-to-r from-yellow-200 to-pink-200 justify-center">
            <LoginCard />
        </div>
    );
};

export default LoginPage;
