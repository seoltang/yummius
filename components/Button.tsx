interface ButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  form?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  isOutlined?: boolean;
}

export function Button({
  children,
  className,
  isOutlined,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`self-center w-full md:max-w-sm py-3 rounded-full font-semibold border-2 border-tomato shadow-md ${
        isOutlined
          ? "bg-transparent text-tomato active:bg-gray-100"
          : "bg-tomato text-white active:bg-dark-tomato active:border-dark-tomato"
      } lg:active:scale-[0.98] lg:active:transition lg:active:ease lg:active:duration-100 lg:hover:scale-[1.03] lg:hover:transition lg:hover:ease-in lg:hover:duration-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
