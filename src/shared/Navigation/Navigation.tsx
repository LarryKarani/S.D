import React from "react";
import NavigationItem from "./NavigationItem";
import { NAVIGATION_DEMO_2 } from "data/navigation";

function Navigation() {
  return (
    <ul className="nc-Navigation flex items-center  ">
      {NAVIGATION_DEMO_2.map((item) => (
        <div className="hebrew">
          <NavigationItem key={item.id} menuItem={item} />
        </div>
      ))}
    </ul>
  );
}

export default Navigation;
