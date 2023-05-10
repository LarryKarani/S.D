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
import { Product, PRODUCTS, DEMO_VARIANTS1 } from "data/data";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { addProduct } from "app/mediaRunning/product";
import Input from "shared/Input/Input";
import ButtonCircle from "shared/Button/ButtonCircle";
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";

export interface ProductDetailPageProps {
  className?: string;
}

export interface ExtendedProductDetailPageProps extends Product {
  DEMO_VARIANTS1: {
    id: number;
    name: string;
    thumbnail: string;
  }[];
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
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [size, setSize] = useState("lg");
  const [der, setDer] = useState("hebrew-text");
  const [variantActive, setVariantActive] = React.useState(0);
  const [sizeSelected, setSizeSelected] = React.useState(sizes ? sizes[0] : "");
  const [qualitySelected, setQualitySelected] = React.useState(1);

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);
  const [isActive8, setIsActive8] = useState(false);

  const [isOpenModalViewAllReviews, setIsOpenModalViewAllReviews] =
    useState(false);
  const [slug, setSlug] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (window.location.pathname) {
      const url =
        "https://us-central1-one-of-many-c94a4.cloudfunctions.net/getProductSDD";
      var path = window.location.pathname;
      var directories = path.split("_");
      var _id = directories[directories.length - 1];
      var _category = directories[directories.length - 2];
      console.log("_category", _id);
      console.log("_category", _category);

      const data = {
        collection: `product/by_catagory/${_category}`,
        field: "id",
        value: _id,
      };

      if (_category) {
        setSlug(_category);
      }

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

  const addToCartAndNotifyAddTocart = () => {
    toast.custom(
      (t) => (
        <NotifyAddTocart
          productImage={LIST_IMAGES_DEMO[0]}
          qualitySelected={qualitySelected}
          show={t.visible}
          sizeSelected={sizeSelected}
          variantActive={variantActive}
          name={name}
          price={price}
        />
      ),
      { position: "top-right", id: "nc-product-notify", duration: 3000 }
    );

    if (productFromAxios) {
      const updatedBob = {
        ...(productFromAxios[0] as object),
        id:
          (productFromAxios[0] as { id?: string }).id +
          text +
          text2 +
          size +
          der,
        quantity: qualitySelected,
        text: text,
        text2: text2,
        size: size,
        der: der,
        color: DEMO_VARIANTS1[variantActive].name,
      };
      // console.log("productFromAxios[0]", updatedBob);
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
          {DEMO_VARIANTS1.map((variant, index) => (
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

  const onClick1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setSize("sm");
  };
  const onClick2 = () => {
    setIsActive1(false);
    setIsActive2(true);
    setIsActive3(false);
    setSize("lg");
  };
  const onClick3 = () => {
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(true);
    setSize("2xl");
  };

  const onClick4 = () => {
    setIsActive4(true);
    setIsActive5(false);
    towRow();
  };
  const onClick5 = () => {
    setIsActive4(false);
    setIsActive5(true);
    flege();
  };

  const onClick6 = () => {
    setIsActive6(true);
    setIsActive7(false);
    setIsActive8(false);
    setDer("hebrew-text-left");
  };
  const onClick7 = () => {
    setIsActive6(false);
    setIsActive7(true);
    setIsActive8(false);

    setDer("hebrew-text-center");
  };
  const onClick8 = () => {
    setIsActive6(false);
    setIsActive7(false);
    setIsActive8(true);
    setDer("hebrew-text");
  };

  const renderSectionContent = () => {
    return (
      <div className="space-y-7 2xl:space-y-8">
        {/* ---------- 1 HEADING ----------  */}
        <div>
          <h2 className="hebrew-text text-2xl sm:text-3xl font-semibold">
            {name ? name : "ללא שם"}
          </h2>

          <div className="hebrew-text flex items-center mt-5 space-x-4 sm:space-x-5">
            {/* <div className="flex text-xl font-semibold">$112.00</div> */}
            <Prices
              contentClass="py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold"
              price={price ? price : 10000}
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
                  {/* <span className="block mx-2">·</span>
                  <span className="text-slate-600 dark:text-slate-400 underline">
                    142 reviews
                  </span> */}
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

            <div>
              <p className="text-m font-bold text-center m-2">גודל הטקסט</p>
              <div className="flex justify-center  ">
                <ButtonPrimary
                  className={`bg-slate-500 outline-none 
                  ${isActive1 ? " ring-2 ring-offset-2 ring-primary-6000" : ""}
                `}
                  onClick={onClick1}
                >
                  קטן
                </ButtonPrimary>
                <ButtonPrimary
                  className={`bg-slate-500 outline-none 
                  ${isActive2 ? " ring-2 ring-offset-2 ring-primary-6000" : ""}
                `}
                  onClick={onClick2}
                >
                  בינוני
                </ButtonPrimary>
                <ButtonPrimary
                  className={`bg-slate-500 outline-none 
                  ${isActive3 ? " ring-2 ring-offset-2 ring-primary-6000" : ""}
                `}
                  onClick={onClick3}
                >
                  גדול
                </ButtonPrimary>
              </div>
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
        {slug === "custom-made" ? (
          <div>
            <p className="text-m font-bold text-center  m-2"> מספר שורות</p>
            <div className="flex justify-center ">
              <ButtonPrimary
                className={`bg-slate-500 outline-none 
                  ${isActive4 ? " ring-2 ring-offset-2 ring-primary-6000" : ""}
                `}
                onClick={onClick4}
              >
                שתי שורות
              </ButtonPrimary>{" "}
              <ButtonPrimary
                className={`bg-slate-500 outline-none 
                  ${isActive5 ? " ring-2 ring-offset-2 ring-primary-6000" : ""}
                `}
                onClick={onClick5}
              >
                שורה אחת
              </ButtonPrimary>{" "}
            </div>
          </div>
        ) : null}

        {slug === "custom-made" ? (
          <div>
            <p className="text-m font-bold text-center  m-2">מיקום הטקסט</p>
            <div className="flex justify-center ">
              <ButtonPrimary
                className={`bg-slate-500 outline-none 
                  ${isActive6 ? " ring-2 ring-offset-2 ring-primary-6000" : ""}
                `}
                onClick={onClick6}
              >
                שמאל
              </ButtonPrimary>

              <ButtonPrimary
                className={`bg-slate-500 outline-none 
                  ${isActive7 ? " ring-2 ring-offset-2 ring-primary-6000" : ""}
                `}
                onClick={onClick7}
              >
                מרכז
              </ButtonPrimary>

              <ButtonPrimary
                className={`bg-slate-500 outline-none 
                  ${isActive8 ? " ring-2 ring-offset-2 ring-primary-6000" : ""}
                `}
                onClick={onClick8}
              >
                ימינה
              </ButtonPrimary>
            </div>
          </div>
        ) : null}
        <div>
          <p className="text-m font-bold text-center  m-2">צבע טקסט</p>
          <div className="">{renderVariants()}</div>
        </div>

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
            <span className="ml-3">הוסף לעגלת הקניות</span>
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
  };

  const renderDetailSection = () => {
    return (
      <div className="">
        <h2 className="hebrew-text text-2xl font-semibold">פרטי המוצר</h2>
        <div className=" hebrew-text prose prose-sm sm:prose dark:prose-invert sm:max-w-4xl mt-7">
          <p>
            השלטים שמייצר העסק עשויים מאלומיניום, חומר קל משקל וחזק, המתאים
            במיוחד לייצור שלטים עמידים ועמידים למזג האקלים השונה. כמו כן,
            המוצרים עשויים מחומרים איכותיים ועמידים נוספים כמו דבק עמיד למים
            ועמיד לקרני UV, המסייעים להארכת חיי השימוש של השלטים ולשמירה על
            המראה המקצועי והאטרקטיבי שלהם. השימוש בחומרים איכותיים ועמידים מבטיח
            ללקוחות של העסק מוצרים איכותיים ועמידים שיישארו יפים ומשמשים לאורך
            זמן.
          </p>
          <p>
            השלטים שמייצר העסק עשויים מאלומיניום, חומר קל משקל וחזק, המתאים
            במיוחד לייצור שלטים עמידים ועמידים למזג האקלים השונה. כמו כן,
            המוצרים עשויים מחומרים איכותיים ועמידים נוספים כמו דבק עמיד למים
            ועמיד לקרני UV, המסייעים להארכת חיי השימוש של השלטים ולשמירה על
            המראה המקצועי והאטרקטיבי שלהם. השימוש בחומרים איכותיים ועמידים מבטיח
            ללקוחות של העסק מוצרים איכותיים ועמידים שיישארו יפים ומשמשים לאורך
            זמן.
          </p>
          <ul>
            <li>
              אנו מייצרים שלטים באלומיניום בהבלטה לשימושים שונים כגון שלטים
              לבתים, חנויות, משרדים ועסקים, ועוד.
            </li>
            <li>
              אנו מספקים שירות מותאם אישית ומקצועי ליצירת שלטים באלומיניום
              בהבלטה מותאמים לצרכי הלקוחות שלנו.
            </li>

            <li>
              אנו משתמשים במגוון חומרים איכותיים ועמידים כמו אלומיניום, דבק עמיד
              למים וקרני UV, ועוד. החומרים שאנו משתמשים בהם מבטיחים ללקוחות שלנו
              מוצרים איכותיים ועמידים.
            </li>
          </ul>
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
              <div className="aspect-w-16 lg:aspect-h-16 aspect-h-8  ">
                <img
                  src={LIST_IMAGES_DEMO[0]}
                  className="w-full rounded-2xl object-cover"
                  alt="product detail 1 "
                />
              </div>

              {fleg && slug === "custom-made" ? (
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                  <input
                    type="text"
                    className={` bg-transparent border-b-2 w-[55%] h-13 border-black   font-semibold ${der} text-${size}`}
                    placeholder="הזן טקסט"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
              ) : null}

              {!fleg && slug === "custom-made" ? (
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
              ) : null}
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
