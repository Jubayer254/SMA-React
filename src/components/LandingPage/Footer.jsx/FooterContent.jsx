import React from "react";
import LiComponent from "../../Common/LiComponent";
import FooterContact from "./FooterContact";

const socialMediaLinks = [
  {
    id: 1,
    className: "btn btn-white btn-sm shadow px-2 text-facebook",
    href: "#",
    iconClass: "fab fa-fw fa-facebook-f",
    label: "Facebook",
  },
  {
    id: 2,
    className: "btn btn-white btn-sm shadow px-2 text-instagram",
    href: "#",
    iconClass: "fab fa-fw fa-instagram",
    label: "Instagram",
  },
  {
    id: 3,
    className: "btn btn-white btn-sm shadow px-2 text-twitter",
    href: "#",
    iconClass: "fab fa-fw fa-twitter",
    label: "Twitter",
  },
  {
    id: 4,
    className: "btn btn-white btn-sm shadow px-2 text-linkedin",
    href: "#",
    iconClass: "fab fa-fw fa-linkedin-in",
    label: "LinkedIn",
  },
];

const FooterContent = () => {
  return (
    <div className="row g-4">
      {/* Left Column - About START */}
      <div className="col-lg-7">
        <a className="me-0" href="index.html">
          <img
            className="light-mode-item h-40px"
            src="assets/images/logo/SMA Logo-02.png"
            alt="logo"
          />
        </a>
        <p className="my-3 mb-lg-2">
        স্পার্ক মেডিকেল একাডেমি একটি শীর্ষস্থানীয় প্রতিষ্ঠান, যা ভবিষ্যতের স্বাস্থ্যসেবা পেশাজীবীদের গড়ে তোলার লক্ষ্যে অভিজ্ঞ নির্দেশনা, ক্লিনিক্যাল প্রশিক্ষণ এবং একাডেমিক উৎকর্ষতার মাধ্যমে প্রতিশ্রুতিবদ্ধ।
        অভিজ্ঞ শিক্ষকবৃন্দ এবং বাস্তবভিত্তিক, পরীক্ষামুখী কারিকুলামের মাধ্যমে একাডেমিটি মেডিসিন, সার্জারি, পেডিয়াট্রিকস এবং বেসিক মেডিকেল বিষয়ে শিক্ষার্থীদের সাফল্যের জন্য প্রস্তুত করে।
        </p>
        <ul className="list-inline mb-0 mt-3">
          {socialMediaLinks.map((item) => (
            <LiComponent
              key={item.id}
              liClasses="list-inline-item"
              aTagClass={item.className}
              href={item.href}
              iTagClasses={item.iconClass}
              label={item.label}
            />
          ))}
        </ul>
      </div>
      {/* Left Column - About END */}

      {/* Middle Column - Address START */}
      <div className="col-lg-3">
      <h5 className="mb-2 mb-md-4">ঠিকানা</h5>
      <p className="mb-1">Spark Medical Academy</p>
      <p className="mb-1">৩য় তলা, XYZ ডায়াগনস্টিকসের উপরে</p>
      <p className="mb-1">মেইন রোড, উত্তরা</p>
      <p className="mb-1">ঢাকা - ১২৩০</p>
      <p className="mb-0">বাংলাদেশ</p>
    </div>

      {/* Middle Column - Address END */}

      {/* Right Column - Contact START */}
      <div className="col-lg-2">
        <FooterContact />
      </div>
      {/* Right Column - Contact END */}
    </div>
  );
};

export default FooterContent;
