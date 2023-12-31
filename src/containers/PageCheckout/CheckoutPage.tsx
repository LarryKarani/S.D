import Label from "components/Label/Label";
import NcInputNumber from "components/NcInputNumber";
import Prices from "components/Prices";
import TotalPrice from "components/TotalPrice";
import { Product, PRODUCTS } from "data/data";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Input from "shared/Input/Input";
import ContactInfo from "./ContactInfo";
import PaymentMethod from "./PaymentMethod";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import ShippingAddress from "./ShippingAddress";
import CartPage from "containers/ProductDetailPage/CartPage";

const CheckoutPage = () => {
  const [tabActive, setTabActive] = useState<
    "ContactInfo" | "ShippingAddress" | "PaymentMethod"
  >("ShippingAddress");

  const handleScrollToEl = (id: string) => {
    const element = document.getElementById(id);
    setTimeout(() => {
      element?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  const [contactAlert, setContactAlert] = useState(false);
  const [shippingAddres, setShippingAddres] = useState(false);

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onCloseActiveHandler = () => {
    if (contactInfo.email && contactInfo.phone) {
      setTabActive("ShippingAddress");
      handleScrollToEl("ShippingAddress");
      setContactAlert(false);
    } else {
      setContactAlert(true);
    }
  };
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    app: "",
    cite: "",
  });

  const onCloseActiveHandlershippingAddress = () => {
    if (
      shippingAddress.lastName &&
      shippingAddress.address &&
      shippingAddress.app &&
      shippingAddress.cite &&
      shippingAddress.firstName
    ) {
      setTabActive("PaymentMethod");
      handleScrollToEl("PaymentMethod");
      setShippingAddres(false);
    } else {
      setShippingAddres(true);
    }
  };

  const renderLeft = () => {
    return (
      <div className="space-y-8">
        <div id="ContactInfo" className="scroll-mt-24">
          <ContactInfo
            isActive={tabActive === "ContactInfo"}
            onOpenActive={() => {
              setTabActive("ContactInfo");
              handleScrollToEl("ContactInfo");
            }}
            onCloseActive={onCloseActiveHandler}
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
            Alert={contactAlert}
          />
        </div>

        <div id="ShippingAddress" className="scroll-mt-24">
          <ShippingAddress
            isActive={tabActive === "ShippingAddress"}
            onOpenActive={() => {
              setTabActive("ShippingAddress");
              handleScrollToEl("ShippingAddress");
            }}
            onCloseActive={onCloseActiveHandlershippingAddress}
            shippingAddress={shippingAddress}
            setShippingAddress={setShippingAddress}
            Alert={shippingAddres}
          />
        </div>

        <div id="PaymentMethod" className="scroll-mt-24">
          {/* <PaymentMethod
            isActive={tabActive === "PaymentMethod"}
            onOpenActive={() => {
              setTabActive("PaymentMethod");
              handleScrollToEl("PaymentMethod");
            }}
            onCloseActive={() => setTabActive("PaymentMethod")}
          /> */}
        </div>
      </div>
    );
  };

  return (
    <div className="nc-CheckoutPage">
      <Helmet>
        <title>Checkout || Ciseco Ecommerce Template</title>
      </Helmet>

      <main className="container py-16 lg:pb-28 lg:pt-20 ">
        <div className="hebrew mb-16">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">
            הזמנה
          </h2>
          <div className="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-400">
            <Link to={"/#"} className="">
              דף הבית
            </Link>
            <span className="text-xs mx-1 sm:mx-1.5">/</span>
            <span className="underline">הזמנות</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">{renderLeft()}</div>

          <div className="flex-shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 my-10 lg:my-0 lg:mx-10 xl:lg:mx-14 2xl:mx-16 "></div>

          <div className="w-full lg:w-[36%] ">
            <h3 className=" hebrew-text text-lg font-semibold mt-10">
              סיכום הזמנה
            </h3>
            {/* <div className="mt-8 divide-y divide-slate-200/70 dark:divide-slate-700 ">
              {selectedData2 ? selectedData2.map(renderProduct) : null}
            </div> */}

            <CartPage sum={"sumOrder"} />
            <div className="mt-10 pt-6 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/70 dark:border-slate-700 ">
              <div>
                <Label className=" hebrew-text  text-sm">קוד הנחה</Label>
                <div className="flex mt-1.5">
                  <Input sizeClass="h-10 px-4 py-3" className="flex-1" />
                  <button className="text-neutral-700 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 rounded-2xl px-4 ml-3 font-medium text-sm bg-neutral-200/70 dark:bg-neutral-700 dark:hover:bg-neutral-800 w-24 flex justify-center items-center transition-colors">
                    הזן
                  </button>
                </div>
              </div>

              <TotalPrice />
            </div>
            <ButtonPrimary className="mt-8 w-full">סיום הזמנה</ButtonPrimary>
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
      </main>
    </div>
  );
};

export default CheckoutPage;
