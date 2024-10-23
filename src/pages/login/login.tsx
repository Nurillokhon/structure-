/** @format */

import { LeftUi } from "./ui/components/LeftUi";
import { RightUi } from "./ui/components/RightUi";
const Login = () => {
  return (
    <section className="h-screen container">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between animate-[fade-in_1s_ease-in-out]">
          <LeftUi />
          <RightUi />
        </div>
      </div>
    </section>
  );
};

export default Login;
