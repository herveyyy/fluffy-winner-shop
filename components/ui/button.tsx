import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-base text-sm font-base ring-offset-white transition-all gap-2 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none",
                noShadow: "border-2 border-black",
                neutral:
                    "bg-secondary-background text-foreground border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none",
                reverse:
                    "border-2 border-black hover:-translate-x-[4px] hover:-translate-y-[4px] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]",
            },
            color: {
                pink: "bg-pink-400 text-black",
                blue: "bg-blue-400 text-black",
                green: "bg-green-400 text-black",
                yellow: "bg-yellow-400 text-black",
                black: "bg-black text-white",
                white: "bg-white text-black",
                cyan: "bg-cyan-400 text-black",
                teal: "bg-teal-400 text-black",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 px-3",
                lg: "h-11 px-8",
                xl: "h-12 px-10 py-4",
                "2xl": "h-14 px-12 py-5",
                "3xl": "h-16 px-14 py-6",
                icon: "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            color: "teal",
            size: "default",
        },
    }
);

function Button({
    className,
    variant,
    color,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, color, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };
