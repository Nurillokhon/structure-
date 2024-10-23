/** @format */

import { TERipple } from "tw-elements-react";
import { IconsData } from "../../data/IconsData";
import { Input } from "../../../../components/input";
import { CustomButton } from "../../../../components/CustomButton";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const RightUi = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleLogin = () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    console.log("Logging in with:", { email, password });
    localStorage.setItem("token", "aaaa");
    navigate("/");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row items-center justify-center lg:justify-start">
          <p className="mb-0 mr-4 text-lg">Sign in with</p>
          {IconsData.map((icon, index) => (
            <TERipple rippleColor="light" key={index}>
              <button
                type="button"
                className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                {icon.icon}
              </button>
            </TERipple>
          ))}
        </div>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-dark">
            Or
          </p>
        </div>
        <Input
          type="email"
          label="Email address"
          size="lg"
          className="mb-6"
          ref={emailRef}
        />
        <Input
          type="password"
          label="Password"
          className="mb-6"
          size="lg"
          ref={passwordRef}
        />
        <div className="text-center lg:text-left">
          <CustomButton text="Login" onClick={handleLogin} />
        </div>
      </form>
    </div>
  );
};

export { RightUi };
