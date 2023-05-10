import { NoSymbolIcon, CheckIcon } from "@heroicons/react/24/outline";
import NcInputNumber from "components/NcInputNumber";
import Prices from "components/Prices";
import { Product, PRODUCTS } from "data/data";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { removeProduct } from "app/mediaRunning/product";
import React, { useState } from "react";
import { updateProduct } from "app/mediaRunning/product";
import TotalPrice from "components/TotalPrice";

const CartPage = (props: any) => {
  const [quantity, setQuantity] = useState(1); // initialize state with default quantity of 1

  function handleQuantityChange(event: { target: { value: string } }) {
    setQuantity(parseInt(event.target.value));
  }

  const dispatch = useAppDispatch();
  const selectedData2 = useAppSelector((state) => state.products);

  const handleSubmit = (bob: Product) => {
    const updatedBob = {
      ...bob,
      quantity: quantity,
    };
    dispatch(updateProduct(updatedBob));
  };

  const renderStatusSoldout = () => {
    return (
      <div className="rounded-full flex items-center justify-center px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
        <NoSymbolIcon className="w-3.5 h-3.5" />
        <span className="ml-1 leading-none">Sold Out</span>
      </div>
    );
  };
  const renderStatusInstock = () => {
    return (
      <div className="rounded-full flex items-center justify-center px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
        <CheckIcon className="w-3.5 h-3.5" />
        <span className="ml-1 leading-none">זמין במלאי</span>
      </div>
    );
  };

  const remove = (product: Product) => {
    dispatch(removeProduct(product));
    console.log("ssfdasd", selectedData2);
  };

  const renderProduct = (item: Product, index: number) => {
    const { image, price, name, quantity } = item;
    if (selectedData2) {
      console.log("selectedData2", selectedData2);
    }

    return (
      <div
        key={index}
        className="relative flex py-8 sm:py-10 xl:py-12 first:pt-0 last:pb-0"
      >
        <div className="relative h-36 w-24 sm:w-32 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-contain object-center"
            />
          ) : null}

          <Link to="/product-detail" className="absolute inset-0"></Link>
        </div>

        <div className="ml-3 sm:ml-6 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div className="flex-[1.5] ">
                <h3 className="text-base font-semibold">
                  <Link to="/product-detail">{name}</Link>
                </h3>
                <div className="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.35 1.94995L9.69 3.28992"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.07 11.92L17.19 11.26"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 22H16"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div>
                      {item.color ? <span>{item.color}</span> : null}
                      <br />
                      {item.size ? <span>{item.size}</span> : null}
                    </div>
                  </div>
                  <span className="mx-4 border-l border-slate-200 dark:border-slate-700 "></span>
                  <div className=" hebrew-text flex items-center space-x-1.5">
                    {item.text && item.text2 ? (
                      <span className="hebrew-text">
                        {" "}
                        שורה1: {item.text} <br /> שורה2:{item.text2}{" "}
                      </span>
                    ) : null}
                    {item.text && !item.text2 ? (
                      <span className="hebrew-text"> {item.text} </span>
                    ) : null}
                  </div>
                </div>

                <div className="mt-3 flex justify-between w-full sm:hidden relative">
                  <NcInputNumber
                    defaultValue={quantity}
                    item={item}
                    className="relative z-10"
                  />

                  <Prices
                    contentClass="py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full"
                    price={price}
                  />
                </div>
              </div>

              <div className="hidden flex-1 sm:flex justify-end">
                <Prices price={price} className="mt-0.5" />
              </div>
            </div>
          </div>

          <div className="flex mt-auto pt-4 items-end justify-between text-sm">
            {renderStatusInstock()}
            <a
              href="##"
              className="relative z-10 flex items-center mt-3 font-medium text-primary-6000 hover:text-primary-500 text-sm "
            >
              {/* <span>Remove</span> */}
              <button onClick={() => remove(item)}>הסר מהעגלה</button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  if (props.sum === "sumOrder") {
    return (
      <div className="w-full lg:w-[60%] xl:w-[55%] divide-y divide-slate-200 dark:divide-slate-700 ">
        {selectedData2 ? selectedData2.map(renderProduct) : null}
      </div>
    );
  } else {
    return (
      <div className="nc-CartPage">
        <Helmet>
          <title>Shopping Cart || Ciseco Ecommerce Template</title>
        </Helmet>

        <main className="container py-16 lg:pb-28 lg:pt-20 ">
          <div className=" hebrew mb-12 sm:mb-16">
            <h2 className=" block text-2xl sm:text-3xl lg:text-4xl font-semibold ">
              עגלת הקניות
            </h2>
            <div className=" block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-400">
              <Link to={"/#"} className="">
                דף הבית
              </Link>
              <span className=" text-xs mx-1 sm:mx-1.5">/</span>
              <span className="underline">עגלת קניות</span>
            </div>
          </div>

          <hr className="border-slate-200 dark:border-slate-700 my-10 xl:my-12" />
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[60%] xl:w-[55%] divide-y divide-slate-200 dark:divide-slate-700 ">
              {selectedData2 ? selectedData2.map(renderProduct) : null}
            </div>
            <div className="border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 my-10 lg:my-0 lg:mx-10 xl:mx-16 2xl:mx-20 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="sticky top-28">
                <h3 className="text-lg font-semibold hebrew-text ">
                  סיכום הזמנה
                </h3>
                <TotalPrice />

                <ButtonPrimary href="/checkout" className="mt-8 w-full">
                  סיום הזמנה
                </ButtonPrimary>
                <div className="mt-5 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center">
                  <p className="block relative pl-5">
                    <svg
                      className="w-4 h-4 absolute -left-1 top-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 8V13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9945 16H12.0035"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Learn more{` `}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="##"
                      className="text-slate-900 dark:text-slate-200 underline font-medium"
                    >
                      Taxes
                    </a>
                    <span>
                      {` `}and{` `}
                    </span>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="##"
                      className="text-slate-900 dark:text-slate-200 underline font-medium"
                    >
                      Shipping
                    </a>
                    {` `} infomation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
};

export default CartPage;
