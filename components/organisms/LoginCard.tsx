import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

import { FaGoogle } from "react-icons/fa";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
type Props = {};

const LoginCard = (props: Props) => {
    return (
        <Card className="w-full max-w-sm bg-transparent ">
            <CardHeader>
                <CardTitle>
                    <FaGoogle size={25} />
                    Login to your account
                </CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button variant="neutral" className=" w-full">
                    Login with Google
                </Button>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">
                            Accept terms and conditions
                        </Label>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default LoginCard;
