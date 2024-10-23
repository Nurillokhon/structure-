/** @format */

import { TERipple } from "tw-elements-react";

interface ButtonI {
  text: string;
  onClick: () => void;
}

const CustomButton = ({ text, onClick }: ButtonI) => {
  return (
    <TERipple rippleColor="light">
      <button
        type="button"
        className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-600 focus:outline-none active:bg-primary-700"
        onClick={onClick}
      >
        {text}
      </button>
    </TERipple>
  );
};

export { CustomButton };
