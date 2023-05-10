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
import { loadProduct } from "app/mediaRunning/product";

export interface PageCollectionProps {
  className?: string;
}

const PageCollection: FC<PageCollectionProps> = ({ className = "" }) => {
  const [mainPors, setMainPors] = useState(PRODUCTS);
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
      page: 1,
    };

    if (lastDirecotry) {
      setSlug(lastDirecotry);
    }
    axios
      .post(url, data)
      .then((response) => {
        console.log("פפ", response.data.slice(0, 5));
        setMainPors(
          response.data.sort(
            (a: { id: any }, b: { id: any }) => Number(b.id) - Number(a.id)
          )
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setPors(mainPors);
  }, [mainPors]);

  const handlePageChange = (pageNumber: number) => {
    // // Here you can update the state of the component or perform any other actions
    // const url =
    //   "https://us-central1-one-of-many-c94a4.cloudfunctions.net/getProductsBySlug2"; // replace with your URL

    // var path = window.location.pathname;
    // var directories = path.split("/");
    // var lastDirectory = directories[directories.length - 1];
    // console.log(lastDirectory);

    // const data = {
    //   slug: lastDirectory,
    //   // page: Number(pageNumber),
    //   page: Number(2),
    // };

    // if (lastDirectory) {
    //   setSlug(lastDirectory);
    // }

    // axios
    //   .post(url, data)
    //   .then((response) => {
    //     console.log(response.data);
    //     setPors(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    // console.log("Page number clicked: ", pageNumber);

    const perPage = 4;
    const page = pageNumber;

    const startIndex = (page - 1) * perPage;
    const endIndex = Math.min(startIndex + perPage, mainPors.length);

    const newArray = [...mainPors].sort((a, b) => Number(b.id) - Number(a.id));

    setPors(newArray.slice(startIndex, endIndex));

    console.log("Page number clicked: ", startIndex);
    console.log("Page number clicked: ", endIndex);
    console.log("Page number clicked: ", pors);
  };

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

            <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
              <Pagination
                currentPage={1}
                totalPages={10}
                onPageChange={handlePageChange}
              />
              {/* <ButtonPrimary loading>Show me more</ButtonPrimary> */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PageCollection;
