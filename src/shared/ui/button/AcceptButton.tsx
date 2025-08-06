import { FC, ButtonHTMLAttributes } from "react";

export const AcceptButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <button
      className="px-8 py-4 bg-green-500 rounded-2xl text-lg text-white cursor-pointer select-none outline-transparent focus:outline-green-200 focus:outline-4 transition-colors duration-500"
      {...rest}
    >
      {children}
    </button>
  );
};
