interface ButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  className?: string;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`self-center w-full py-3 rounded-full bg-tomato text-white font-semibold active:bg-dark-tomato active:scale-95 active:transition active:ease active:duration-100 md:w-96 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
