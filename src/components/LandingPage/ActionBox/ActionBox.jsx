import React from "react";
import AcitonBoxSmaillCirleSVG from "../../SVGs/AcitonBoxSmaillCircleSVG";
import AcitonBoxBigCirleSVG from "../../SVGs/AcitonBoxBigCircleSVG";

const ActionBox = () => {
  return (
    <section id="about-us" className="pt-0 pt-lg-5">
      <div className="container position-relative">
        {/* <!-- SVG decoration START --> */}
        <AcitonBoxSmaillCirleSVG></AcitonBoxSmaillCirleSVG>
        {/* <!-- SVG decoration END --> */}

        <div className="row">
          <div className="col-12">
            <div className="bg-info p-4 p-sm-5 rounded-3">
              <div className="row position-relative">
                {/* <!-- Svg decoration --> */}
                <AcitonBoxBigCirleSVG></AcitonBoxBigCirleSVG>
                {/* <!-- Action box --> */}
                <div className="col-11 mx-auto position-relative">
                  <div className="row align-items-center">
                    {/* <!-- Title --> */}
                    <div className="col-lg-9">
                      <h3 className="text-white">আমাদের সম্পর্কে</h3>
                      <p className="text-white mb-3 mb-lg-0">
                      স্পার্ক মেডিকেল একাডেমি একটি শীর্ষস্থানীয় প্রতিষ্ঠান, যা ভবিষ্যতের স্বাস্থ্যসেবা পেশাজীবীদের গড়ে তোলায় প্রতিশ্রুতিবদ্ধ। একাডেমিক উৎকর্ষতা, সঠিক দিকনির্দেশনা, হাতে-কলমে ক্লিনিক্যাল প্রশিক্ষণ এবং ক্যারিয়ার উন্নয়নের ওপর বিশেষ গুরুত্ব দিয়ে, এই একাডেমি মেডিসিন, সার্জারি, পেডিয়াট্রিকস ও বেসিক ফ্যাকাল্টিতে ক্যারিয়ার গড়তে ইচ্ছুক শিক্ষার্থীদের জন্য একটি সহায়ক পরিবেশ প্রদান করে।

                      অভিজ্ঞ শিক্ষকমণ্ডলী, সময়োপযোগী কারিকুলাম এবং বাস্তবজ্ঞানভিত্তিক প্রশিক্ষণের জন্য একাডেমিটি সুপরিচিত, যা শিক্ষার্থীদের প্রতিযোগিতামূলক মেডিকেল ভর্তি পরীক্ষা ও পেশাগত জীবনে সফল হতে প্রস্তুত করে।
                      </p>
                    </div>
                    {/* <!-- Content and input --> */}
                    <div className="col-lg-3 text-lg-end">
                      <a href="#" className="btn btn-outline-warning mb-0">
                      আজই শেখা শুরু করুন
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Row END --> */}
            </div>
          </div>
        </div>
        {/* <!-- Row END --> */}
      </div>
    </section>
  );
};

export default ActionBox;
