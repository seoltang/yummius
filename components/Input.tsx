interface InputProps {
  name: string;
  placeholder?: string;
}

export const Input = ({ name, placeholder }: InputProps) => {
  return (
    <div className="">
      <label
        htmlFor={name}
        className="block font-medium text-sm text-tomato whitespace-nowrap"
      >
        {name}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        placeholder={placeholder}
      />
    </div>
  );
};
