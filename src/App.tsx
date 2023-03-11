import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import MyRouter from "routers/index";
import { getProduct } from "app/mediaRunning/product";
import { useAppSelector, useAppDispatch } from "./app/hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      <div>
        <Toaster />
      </div>
      {/* MAIN APP */}
      <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
        <MyRouter />
      </div>
    </>
  );
}

export default App;
