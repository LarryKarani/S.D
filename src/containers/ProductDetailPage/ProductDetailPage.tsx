import React, { FC, useState, useEffect } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import AccordionInfo from "./AccordionInfo";
import { StarIcon } from "@heroicons/react/24/solid";
import BagIcon from "components/BagIcon";
import NcInputNumber from "components/NcInputNumber";
import axios from "axios";
import {
  NoSymbolIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import IconDiscount from "components/IconDiscount";
import Prices from "components/Prices";
import toast from "react-hot-toast";
import SectionSliderProductCard from "components/SectionSliderProductCard";
import Policy from "./Policy";
import ReviewItem from "components/ReviewItem";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import SectionPromo2 from "components/SectionPromo2";
import ModalViewAllReviews from "./ModalViewAllReviews";
import NotifyAddTocart from "components/NotifyAddTocart";
import product from "images/placeholder-small.png";
import { Product, PRODUCTS } from "data/data";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addProduct } from "app/mediaRunning/product";
import Input from "shared/Input/Input";
import ButtonCircle from "shared/Button/ButtonCircle";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

export interface ProductDetailPageProps {
  className?: string;
}

const ProductDetailPage: FC<ProductDetailPageProps> = ({ className = "" }) => {
  const { sizes, variants, status, allOfSizes } = PRODUCTS[0];
  const selectedData2 = useAppSelector((state) => state.products[0]);
  const [LIST_IMAGES_DEMO, setLIST_IMAGES_DEMO] = useState([
    product,
    product,
    product,
  ]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(100);
  const [fleg, setFleg] = useState(true);
  const [productFromAxios, setProductFromAxios] = useState();
  const [text, setText] = useState(" ");
  const [text2, setText2] = useState(" ");
  const [size, setSize] = useState(" ");
  const [der, setDer] = useState("hebrew-text");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (window.location.pathname) {
      const url =
        "https://us-central1-one-of-many-c94a4.cloudfunctions.net/getProductSDD";
      var path = window.location.pathname;
      var directories = path.split("/");
      var _id = directories[directories.length - 1];
      var _category = directories[directories.length - 2];
      console.log(_id);
      console.log(_category);

      const data = {
        collection: `product/by_catagory/${_category}`,
        field: "id",
        value: _id,
      };

      axios
        .post(url, data)
        .then((response) => {
          console.log("rere", response.data[0]);
          setLIST_IMAGES_DEMO([response.data[0].image]);
          setName(response.data[0].name);
          setPrice(response.data[0].price);
          setProductFromAxios(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const [variantActive, setVariantActive] = React.useState(0);
  const [sizeSelected, setSizeSelected] = React.useState(sizes ? sizes[0] : "");
  const [qualitySelected, setQualitySelected] = React.useState(1);
  const [isOpenModalViewAllReviews, setIsOpenModalViewAllReviews] =
    useState(false);

  const addToCartAndNotifyAddTocart = () => {
    toast.custom(
      (t) => (
        <NotifyAddTocart
          productImage={LIST_IMAGES_DEMO[0]}
          qualitySelected={qualitySelected}
          show={t.visible}
          sizeSelected={sizeSelected}
          variantActive={variantActive}
        />
      ),
      { position: "top-right", id: "nc-product-notify", duration: 3000 }
    );

    if (productFromAxios) {
      const updatedBob = {
        ...(productFromAxios[0] as object),
        quantity: qualitySelected,
      };
      dispatch(addProduct(updatedBob as Product));
    }
  };

  const renderVariants = () => {
    if (!variants || !variants.length) {
      return null;
    }

    return (
      <div>
        <div className="flex mt-3">
          {variants.map((variant, index) => (
            <div
              key={index}
              onClick={() => setVariantActive(index)}
              className={`relative flex-1 max-w-[75px] h-10 sm:h-11 rounded-full border-2 cursor-pointer ${
                variantActive === index
                  ? "border-primary-6000 dark:border-primary-500"
                  : "border-transparent"
              }`}
            >
              <div className="absolute inset-0.5 rounded-full overflow-hidden z-0">
                <img
                  src={variant.thumbnail}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const flege = () => {
    setFleg(true);
    setText2("");
    setSize("lg");
  };

  const towRow = () => {
    setFleg(false);
    setSize("lg");
  };

  const renderSectionContent = () => (
    <div className="space-y-7 2xl:space-y-8">
      {/* ---------- 1 HEADING ----------  */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-semibold">
          {name ? name : "ללא שם"}
        </h2>

        <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
          {/* <div className="flex text-xl font-semibold">$112.00</div> */}
          <Prices
            contentClass="py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold"
            price={price ? price : 0}
          />

          <div className="h-7 border-l border-slate-300 dark:border-slate-700"></div>

          <div className="flex items-center">
            <a
              href="#reviews"
              className="flex items-center text-sm font-medium"
            >
              <StarIcon className="w-5 h-5 pb-[1px] text-yellow-400" />
              <div className="ml-1.5 flex">
                <span>4.9</span>
                <span className="block mx-2">·</span>
                <span className="text-slate-600 dark:text-slate-400 underline">
                  142 reviews
                </span>
              </div>
            </a>
            <span className="hidden sm:block mx-2.5">·</span>

            <div className="hidden sm:flex items-center text-sm">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span className="ml-1 leading-none">{status}</span>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- 3 VARIANTS AND SIZE LIST ----------  */}

      {fleg ? (
        <div>
          <form className={`flex justify-between font-medium text-sm ${der}`}>
            <Input
              required
              aria-required
              placeholder="הזן כיתוב ללוחית"
              type="text"
              rounded="rounded-full"
              onChange={(e) => setText(e.target.value)}
            />
          </form>
          <p className="text-m font-bold text-center m-5 ">גודל הטקסט</p>
          <div className="flex justify-center ">
            <button onClick={() => setSize("sm")} className="button">
              קטן
            </button>
            <button onClick={() => setSize("lg")} className="button">
              בינוני
            </button>
            <button onClick={() => setSize("2xl")} className="button">
              גדול
            </button>
          </div>
        </div>
      ) : (
        <form className="flex justify-between font-medium text-sm flex flex-col  hebrew-text">
          <Input
            required
            aria-required
            placeholder="הזן כיתוב שורה 1"
            type="text"
            rounded="rounded-full"
            onChange={(e) => setText(e.target.value)}
          />
          <Input
            required
            aria-required
            placeholder="הזן כיתוב שורה 2"
            type="text"
            rounded="rounded-full"
            onChange={(e) => setText2(e.target.value)}
          />{" "}
        </form>
      )}

      <p className="text-m font-bold text-center "> כמות שורות</p>
      <div className="flex justify-center ">
        <button onClick={towRow} className="twilio-button">
          שתי שורות
        </button>{" "}
        <button onClick={flege} className="twilio-button">
          שורה אחת
        </button>{" "}
      </div>

      <p className="text-m font-bold text-center ">מיקום השלט</p>
      <div className="flex justify-center ">
        <button onClick={() => setDer("hebrew-text-left")} className="button">
          שמאל
        </button>
        <button onClick={() => setDer("hebrew-text-center")} className="button">
          מרכז
        </button>
        <button onClick={() => setDer("hebrew-text")} className="button">
          ימינה
        </button>
      </div>

      <p className="text-m font-bold text-center "> בחר צבע לאותיות</p>
      <div className="">{renderVariants()}</div>
      {/* <div className="">{renderSizeList()}</div> */}

      {/*  ---------- 4  QTY AND ADD TO CART BUTTON */}
      <div className="flex space-x-3.5">
        <div className="flex items-center justify-center bg-slate-100/70 dark:bg-slate-800/70 px-2 py-3 sm:p-3.5 rounded-full">
          <NcInputNumber
            defaultValue={qualitySelected}
            onChange={setQualitySelected}
          />
        </div>
        <ButtonPrimary
          className="flex-1 flex-shrink-0"
          onClick={addToCartAndNotifyAddTocart}
        >
          <BagIcon className="hidden sm:inline-block w-5 h-5 mb-0.5" />
          <span className="ml-3">Add to cart</span>
        </ButtonPrimary>
      </div>
      {/*  */}
      <hr className=" 2xl:!my-10 border-slate-200 dark:border-slate-700"></hr>
      {/*  */}
      {/* ---------- 5 ----------  */}
      <AccordionInfo />
      {/* ---------- 6 ----------  */}
      <div className="hidden xl:block">
        <Policy />
      </div>
    </div>
  );

  const renderDetailSection = () => {
    return (
      <div className="">
        <h2 className="text-2xl font-semibold">Product Details</h2>
        <div className="prose prose-sm sm:prose dark:prose-invert sm:max-w-4xl mt-7">
          <p>
            The patented eighteen-inch hardwood Arrowhead deck --- finely
            mortised in, makes this the strongest and most rigid canoe ever
            built. You cannot buy a canoe that will afford greater satisfaction.
          </p>
          <p>
            The St. Louis Meramec Canoe Company was founded by Alfred Wickett in
            1922. Wickett had previously worked for the Old Town Canoe Co from
            1900 to 1914. Manufacturing of the classic wooden canoes in Valley
            Park, Missouri ceased in 1978.
          </p>
          <ul>
            <li>Regular fit, mid-weight t-shirt</li>
            <li>Natural color, 100% premium combed organic cotton</li>
            <li>
              Quality cotton grown without the use of herbicides or pesticides -
              GOTS certified
            </li>
            <li>Soft touch water based printed in the USA</li>
          </ul>
        </div>
      </div>
    );
  };

  const renderReviews = () => {
    return (
      <div className="">
        {/* HEADING */}
        <h2 className="text-2xl font-semibold flex items-center">
          <StarIcon className="w-7 h-7 mb-0.5" />
          <span className="ml-1.5"> 4,87 · 142 Reviews</span>
        </h2>

        {/* comment */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-11 gap-x-28">
            <ReviewItem />
            <ReviewItem
              data={{
                comment: `I love the charcoal heavyweight hoodie. Still looks new after plenty of washes. 
                  If you’re unsure which hoodie to pick.`,
                date: "December 22, 2021",
                name: "Stiven Hokinhs",
                starPoint: 5,
              }}
            />
            <ReviewItem
              data={{
                comment: `The quality and sizing mentioned were accurate and really happy with the purchase. Such a cozy and comfortable hoodie. 
                Now that it’s colder, my husband wears his all the time. I wear hoodies all the time. `,
                date: "August 15, 2022",
                name: "Gropishta keo",
                starPoint: 5,
              }}
            />
            <ReviewItem
              data={{
                comment: `Before buying this, I didn't really know how I would tell a "high quality" sweatshirt, but after opening, I was very impressed. 
                The material is super soft and comfortable and the sweatshirt also has a good weight to it.`,
                date: "December 12, 2022",
                name: "Dahon Stiven",
                starPoint: 5,
              }}
            />
          </div>

          <ButtonSecondary
            onClick={() => setIsOpenModalViewAllReviews(true)}
            className="mt-10 border border-slate-300 dark:border-slate-700 "
          >
            Show me all 142 reviews
          </ButtonSecondary>
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-ProductDetailPage ${className}`}>
      {/* MAIn */}
      <main className="container mt-5 lg:mt-11">
        <div className="lg:flex">
          {/* CONTENT */}
          <div className="w-full lg:w-[55%] ">
            {/* HEADING */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-16">
                <img
                  src={LIST_IMAGES_DEMO[0]}
                  className="w-full rounded-2xl object-cover"
                  alt="product detail 1 "
                />
              </div>
              {fleg ? (
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                  <input
                    type="text"
                    className={` bg-transparent border-b-2 w-[55%] h-13 border-black   font-semibold ${der} text-${size}`}
                    placeholder="הזן טקסט"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
              ) : (
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                  <input
                    type="text"
                    className={`w-20 h-6  bg-transparent border-b-2 w-[55%] h-13 border-black    font-semibold ${der} text-${size}`}
                    placeholder="הזן טקסט"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <input
                    type="text"
                    className={`w-20 h-6   bg-transparent border-b-2 w-[55%] h-13 border-black font-semibold ${der} text-${size}`}
                    placeholder="הזן טקסט"
                    value={text2}
                    onChange={(e) => setText2(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="w-full lg:w-[45%] pt-10 lg:pt-0 lg:pl-7 xl:pl-9 2xl:pl-10">
            {renderSectionContent()}
          </div>
        </div>

        {/* DETAIL AND REVIEW */}
        <div className="mt-12 sm:mt-16 space-y-10 sm:space-y-16">
          <div className="block xl:hidden">
            <Policy />
          </div>

          {renderDetailSection()}

          <hr className="border-slate-200 dark:border-slate-700" />

          {renderReviews()}

          <hr className="border-slate-200 dark:border-slate-700" />

          {/* OTHER SECTION */}
          <SectionSliderProductCard
            heading="Customers also purchased"
            subHeading=""
            headingFontClassName="text-2xl font-semibold"
            headingClassName="mb-10 text-neutral-900 dark:text-neutral-50"
          />

          {/* SECTION */}
          <div className="pb-20 xl:pb-28 lg:pt-14">
            <SectionPromo2 />
          </div>
        </div>
      </main>

      {/* MODAL VIEW ALL REVIEW */}
      <ModalViewAllReviews
        show={isOpenModalViewAllReviews}
        onCloseModalViewAllReviews={() => setIsOpenModalViewAllReviews(false)}
      />
    </div>
  );
};

export default ProductDetailPage;
