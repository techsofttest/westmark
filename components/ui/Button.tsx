import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "outline";
  href?: string;
}

export const Button = React.forwardRef<any, ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>(
  ({ className = "", variant = "primary", href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-bold text-xs tracking-widest uppercase transition-all duration-300 select-none cursor-pointer";
    
    const variants = {
      primary: "px-8 py-4 bg-slb-blue border-2 border-slb-blue text-white hover:bg-slb-deep-blue hover:border-slb-deep-blue",
      secondary: "px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#0F0F10]",
      tertiary: "text-slb-blue hover:text-slb-deep-blue px-0 py-2 hover:underline",
      outline: "px-8 py-4 border-2 border-slb-blue text-slb-blue bg-transparent hover:bg-slb-blue hover:text-white"
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
      return (
        <a href={href} className={combinedClassName} ref={ref as any} {...(props as any)}>
          {children}
        </a>
      );
    }

    return (
      <button className={combinedClassName} ref={ref as any} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
