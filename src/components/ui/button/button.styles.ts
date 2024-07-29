import { cva } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-white hover:bg-primary/90",
                secondary: "bg-white text-primary hover:bg-white/90",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline: "border border-white hover:bg-white/5 hover:text-accent-foreground",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-14 px-7 py-4",
                sm: "h-10 rounded-full px-7 py-3 text-sm font-normal",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export { buttonVariants };
