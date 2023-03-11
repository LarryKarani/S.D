import React, { FC, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";

export interface PricesProps {
  className?: string;
  price?: number;
  contentClass?: string;
}

const TotalPrice: FC<PricesProps> = ({ className = "", price = 30 }) => {
  const selectedData2 = useAppSelector((state) => state.products);
  const [value, setValue] = useState();

  //   useEffect(() => {
  const totalPrice = selectedData2.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  console.log("selectedData2", totalPrice);
  // setValue();
  //   }, []);

  return (
    <div className="mt-7 text-sm text-slate-500 dark:text-slate-400 divide-y divide-slate-200/70 dark:divide-slate-700/80">
      <div className="flex justify-between pb-4">
        <span>Subtotal</span>
        <span className="font-semibold text-slate-900 dark:text-slate-200">
          ${totalPrice}
        </span>
      </div>
      <div className="flex justify-between py-4">
        <span>Shpping estimate</span>
        <span className="font-semibold text-slate-900 dark:text-slate-200">
          $30.00
        </span>
      </div>

      <div className="flex justify-between font-semibold text-slate-900 dark:text-slate-200 text-base pt-4">
        <span>Order total</span>
        <span> ${totalPrice + 30}</span>
      </div>
    </div>
  );
};

export default TotalPrice;
