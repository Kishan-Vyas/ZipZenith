import { Button } from "./button";

interface AppBarProps {
  isAdmin: boolean;
  login: () => void;
  home: () => void;
}

export const AppBar = ({ isAdmin, login, home }: AppBarProps) => {
  return (
    <nav className=" border-gray-200 bg-gray-900 absolute top-0 left-0 w-full">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 py-2">
        <div onClick={home} className="flex cursor-pointer items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ZipZenthia
          </span>
        </div>

        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          {isAdmin ? <Button onClick={login}>Login</Button> : <></>}
        </div>
      </div>
    </nav>
  );
};
