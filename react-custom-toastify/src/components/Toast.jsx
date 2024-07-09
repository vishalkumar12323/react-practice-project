import { IoCloseSharp } from "react-icons/io5";

const Toast = () => {
  return (
    <>
      <div className="toast toast-success toast-top-right transform transform-top-bottom flex gap-2 items-center justify-between">
        <p
          className="text-white text-start font-normal text-[1.10rem] h-full flex items-center gap-1
         select-none"
        >
          <span className="capitalize">promise</span> is pending
        </p>
        <button className="cursor-pointer rounded-full relative left-8 top-[-17px]">
          <IoCloseSharp color="#fff" />
        </button>
      </div>
    </>
  );
};

export default Toast;
