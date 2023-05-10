import React, { FC } from "react";
import { Helmet } from "react-helmet";
import SocialsList from "shared/SocialsList/SocialsList";
import Label from "components/Label/Label";
import Input from "shared/Input/Input";
import Textarea from "shared/Textarea/Textarea";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "components/SectionPromo1";

export interface PageContactProps {
  className?: string;
}

const info = [
  {
    title: "🗺 כתובת",
    desc: "כתובתנו היא ישראל, תל אביב ההגנה.",
  },
  {
    title: "💌 אימייל",
    desc: "kiglerr@gmail.com",
  },
  {
    title: "☎ טלפון",
    desc: "050-7353157",
  },
];

const PageContact: FC<PageContactProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageContact overflow-hidden ${className}`}
      data-nc-id="PageContact"
    >
      <Helmet>
        <title>Contact || NFT React Template</title>
      </Helmet>
      <div className="hebrew">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          צור קשר
        </h2>
        <div className="container max-w-7xl mx-auto my-24">
          <div className="flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>שם מלא</Label>

                  <Input placeholder="" type="text" className="mt-1" />
                </label>
                <label className="block">
                  <Label>כתובת מייל</Label>

                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>גוף ההודעה</Label>

                  <Textarea className="mt-1" rows={6} />
                </label>
                <div>
                  <ButtonPrimary type="submit">שלח</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContact;
