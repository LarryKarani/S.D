import React, { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Pagination from "shared/Pagination/Pagination";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import SectionSliderCollections from "components/SectionSliderLargeProduct";
import SectionPromo1 from "components/SectionPromo1";
import ProductCard from "components/ProductCard";
import TabFilters from "./TabFilters";
import { PRODUCTS } from "data/data";
import axios from "axios";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";

export interface PageCollectionProps {
  className?: string;
}

const PageCollection: FC<PageCollectionProps> = ({ className = "" }) => {
  const [pors, setPors] = useState(PRODUCTS);
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const url =
      "https://us-central1-one-of-many-c94a4.cloudfunctions.net/getProductsBySlug"; // replace with your URL

    var path = window.location.pathname;
    var directories = path.split("/");
    var lastDirecotry = directories[directories.length - 1];
    console.log(lastDirecotry);

    const data = {
      slug: lastDirecotry,
    };

    if (lastDirecotry) {
      setSlug(lastDirecotry);
    }

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data);
        setPors(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const _renderHeader = () => {
    if (slug == "save-the-date") {
      return (
        <div className="">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold hebrew-text-center">
            שלטים לאירועים ושמחות
          </h2>
          <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base hebrew-text-center">
            שלטים לאירוע שלך, כאן תוכלו למצוא מגוון רחב של דגמים לאירוע שלך,
            ליום צילומים ולמזכרת מהיום המאושר
          </span>
        </div>
      );
    }
    if (slug == "truck") {
      return (
        <div className="">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold hebrew-text-center">
            שלטים למשאית שלך
          </h2>
          <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base hebrew-text-center">
            הבאנו מהעולם את השלטים המבוקשים שאתם אוהבים, קנייה מהנה
          </span>
        </div>
      );
    }
    if (slug == "houses-signs") {
      return (
        <div className="">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold hebrew-text-center">
            שלטים לדלת/שמות משפחה
          </h2>
          <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base hebrew-text-center">
            כאן תוכלו למצוא שלטים יחודיים לכניסה לבית, קנייה מהנה{" "}
          </span>
        </div>
      );
    }
    if (slug == "dog-signs") {
      return (
        <div className="">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold hebrew-text-center">
            כלב בחצר{" "}
          </h2>
          <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base hebrew-text-center">
            שלטי אזהרה כלב בחצר{" "}
          </span>
        </div>
      );
    }
    if (slug == "dog-signs") {
      return (
        <div className="">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold hebrew-text-center">
            כלב בחצר{" "}
          </h2>
          <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base hebrew-text-center">
            שלטי אזהרה כלב בחצר{" "}
          </span>
        </div>
      );
    }
    if (slug == "dog-signs") {
      return (
        <div className="">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold hebrew-text-center">
            כלב בחצר{" "}
          </h2>
          <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base hebrew-text-center">
            שלטי אזהרה כלב בחצר{" "}
          </span>
        </div>
      );
    }
    if (slug == "parking-signs") {
      return (
        <div className="">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold hebrew-text-center">
            שלטי חנייה פרטית
          </h2>
          <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base hebrew-text-center">
            שלטים חזקים מאוד, עמידים בשמש ובגשם, שמרו על החנייה!!
          </span>
        </div>
      );
    }
    if (slug == "hairdressers-signs") {
      return (
        <div className="">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold hebrew-text-center">
            שלטים למספרה
          </h2>
          <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base hebrew-text-center">
            מוזמנים להוסיף סטייל למספרה שלכם
          </span>
        </div>
      );
    }
  };

  return (
    <div
      className={`nc-PageCollection ${className}`}
      data-nc-id="PageCollection"
    >
      <Helmet>
        <title>Collection || Ciseco Ecommerce Template</title>
      </Helmet>

      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}

          {_renderHeader()}

          {slug == "custom-made" ? (
            <SectionHowItWork className="section-how-it-work" />
          ) : null}

          <hr className="border-slate-200 dark:border-slate-700" />
          <main>
            {/* TABS FILTER */}

            {/* LOOP ITEMS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
              {pors.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageCollection;
