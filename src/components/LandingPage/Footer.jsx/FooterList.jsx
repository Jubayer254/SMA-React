import React from "react";
import LiComponent from "../../Common/LiComponent";

const FooterList = ({ footerItems, ulClasses }) => {
  console.log(footerItems);
  return (
    <ul className={ulClasses}>
      {footerItems.map((item) => (
        <LiComponent liClasses="nav-item" aTagClass="nav-link" aTagHerf={item.href}>
          {item.text}
        </LiComponent>
      ))}
    </ul>
  );
};

export default FooterList;
