import React from "react";
import FooterList from "./FooterList";

const FooterLinkBlock = ({block}) => {
  return (
    <div className="col-6 col-md-4">
      <h5 className="mb-2 mb-md-4">{block.title}</h5>
      <FooterList footerItems={block.links} ulClasses='nav flex-column'></FooterList>
    </div>
  );
};

export default FooterLinkBlock;
