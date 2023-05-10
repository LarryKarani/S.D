import rightImg from "images/hero-right1.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import { Helmet } from "react-helmet";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import SectionPromo3 from "components/SectionPromo3";

export interface PageAboutProps {
  className?: string;
}

const PageAbout: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>About || Ciscryp React Template</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 ברוכים הבאים"
          btnText=""
          subHeading="בהכנת שלטי זיהוי ושלטי אלומיניום בהבטלה, החברה מייצרת שלטים ולוחיות זיהוי אלומיניום בעלי איכות גבוהה ועמידות לתנאי חיצוניים קשים. השלטים יכולים לכלול כיתוב, תמונות, סמלים וכל צורת עיצוב אחרת לפי דרישות הלקוח.

          כדי לייצר שלטים באיכות גבוהה, החברה משתמשת בטכנולוגיות מתקדמות כגון חיתוך במים, פיתוח תכניות ממוחשבות, ושימוש בציוד חדיש ואיכותי. הלוחיות זיהוי ושלטי האלומיניום מיוצרים במגוון גדלים וצורות ובמגוון גימורים כגון גימור מבריק, גימור מט, גימור מטוקסי וכו'."
        />

        <SectionFounder />
        <div className="relative py-16">
          <BackgroundSection />
          {/* <SectionClientSay /> */}
        </div>

        {/* <SectionStatistic /> */}

        <SectionPromo3 />
      </div>
    </div>
  );
};

export default PageAbout;
