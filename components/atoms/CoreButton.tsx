import { ReactNode } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

type CoreButtonProps = {
    children: ReactNode;
    asChild?: boolean;
} & React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants>;

const CoreButton = ({
    children,
    asChild = false,
    ...rest
}: CoreButtonProps) => {
    return (
        <Button asChild={asChild} {...rest}>
            {children}
        </Button>
    );
};

export default CoreButton;
