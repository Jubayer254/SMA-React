import React from "react";

const LiComponent = ({
  liClasses,
  iTagClasses = "",
  aTagClass = "",
  aTagHerf = "#",
  avaterType = "",
  children,
}) => {
  return (
    <li className={liClasses}>
      {iTagClasses && aTagClass && !children && (
        <a className={aTagClass} href={aTagHerf}>
          <i className={iTagClasses}></i>
        </a>
      )}

      {aTagClass && children && (
        <a className={aTagClass} href={aTagHerf}>
          {iTagClasses && <i className={iTagClasses}></i>}
          {children}
        </a>
      )}
      {iTagClasses && !aTagClass && (
        <>
          <i className={iTagClasses}></i>
          {children}
        </>
      )}

      {/* Case 4: Avatar type content */}
      {avaterType && children}
    </li>
  );
};

export default LiComponent;