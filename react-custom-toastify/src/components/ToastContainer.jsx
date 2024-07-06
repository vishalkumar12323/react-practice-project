const ToastContainer = () => {
  return (
    <>
      <div className="w-fit z-50 fixed top-4 left-3 px-8 py-3  bg-red-500 rounded-lg shadow-lg">
        <span className="text-white text-center select-none">
          an error occur
        </span>
      </div>
    </>
  );
};

export default ToastContainer;
