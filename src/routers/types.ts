import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/#"?: {};
  "/home2"?: {};
  "/home3"?: {};
  //
  "/product-detail"?: {};
  "/product-detail-2"?: {};
  "/page-collection"?: {};
  "/page-collection-2"?: {};
  "/product-detail_save-the-date_9"?:{};
  "/product-detail_save-the-date_8"?:{};
  "/product-detail_save-the-date_93933"?:{};
  "/product-detail_save-the-date_79789"?:{};
  "/product-detail_save-the-date_147"?:{};
  "/product-detail_save-the-date_7863"?:{};
  "/product-detail_save-the-date_89"?:{};
  "/product-detail_save-the-date_12"?:{};
  "/product-detail_save-the-date_3"?:{};


  "/product-detail_custom-made_234"?:{};
  "/product-detail_custom-made_454325"?:{};
  "/product-detail/:productId"?:{};

  "/custom-made"?: {};
  "/save-the-date"?: {};
  "/truck"?: {};
  "/dog-signs"?: {};
  "/parking-signs"?: {};
  "/houses-signs"?: {};
  "/hairdressers-signs"?: {};


  
  "/page-search"?: {};
  "/home-header-2"?: {};
  //
  "/account"?: {};
  "/account-savelists"?: {};
  "/account-change-password"?: {};
  "/account-billing"?: {};
  "/account-my-order"?: {};
  //
  "/cart"?: {};
  "/checkout"?: {};
  //
  "/blog"?: {};
  "/blog-single"?: {};

  "/about"?: {};
  "/contact"?: {};
  "/login"?: {};
  "/signup"?: {};
  "/forgot-pass"?: {};
  "/page404"?: {};
  "/subscription"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
