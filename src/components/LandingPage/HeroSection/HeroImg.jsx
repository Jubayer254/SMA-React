import React from 'react'
import HeroImageBgBlueSVG from '../../SVGs/HeroImageBgBlueSVG'
import HeroImageBgWhiteSVG from '../../SVGs/HeroImageBgWhiteSVG'
import HeroImageBulbSVG from '../../SVGs/HeroImageBulbSVG'
import LiComponent from '../../Common/LiComponent'
import HeroIconLogos from './HeroIconLogos'

const HeroImg = ({ iconsLogo, avatarGroup }) => {
    return (
        <div className="col-lg-7 col-xl-6 text-center position-relative">
            {/* <!-- start SVG decoration --> */}
            <HeroImageBgBlueSVG></HeroImageBgBlueSVG>
            <HeroImageBgWhiteSVG></HeroImageBgWhiteSVG>
            <HeroImageBulbSVG></HeroImageBulbSVG>
            {/* <!-- end SVG decoration --> */}

            {/* Icon logos START */}
            {
                iconsLogo.map((icon) => <HeroIconLogos className={icon.className} imageSrc={icon.imageSrc}></HeroIconLogos>)
            }
            {/* Icon logos END */}

            {/* <!-- Congratulations message --> */}
            <div className="p-3 bg-blur border border-light shadow rounded-4 position-absolute bottom-0 start-0 z-index-9 d-none d-xl-block mb-5 ms-5">
                <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Icon --> */}
                    <span className="icon-lg bg-warning rounded-circle"><i className="fas fa-envelope text-white"></i></span>
                    {/* <!-- Info --> */}
                    <div className="text-start ms-3">
                        <h6 className="mb-0 text-white">অভিনন্দন <span className="ms-4"><i className="fas fa-check-circle text-success"></i></span></h6>
                        <p className="mb-0 small text-white">
                        আপনার ভর্তি সম্পন্ন হয়েছে</p>
                    </div>
                </div>
            </div>

            {/* <!-- Active student -->  */}
            <div className="p-3 bg-success d-inline-block rounded-4 shadow-lg position-absolute top-50 end-0 translate-middle-y mt-n7 z-index-1 d-none d-md-block" style={{
                background: 'url(assets/images/pattern/01.png) no-repeat center center',
                backgroundSize: 'cover'
            }}>
                <p className="text-white">প্রতিদিন যুক্ত হচ্ছে নতুন শিক্ষার্থীরা</p>
                {/* <!-- Avatar group --> */}
                <ul className="avatar-group mb-0">
                    {
                        avatarGroup.map((item) => <LiComponent liClasses='avatar avatar-sm' avaterType='aveter'> {item}</LiComponent>)
                    }
                </ul>
            </div>

            {/* <!-- Image --> */}
            <div className="position-relative">
                <img src="assets/images/herosection/doc.png" alt="" width="400" />
            </div>
        </div>
    )
}

export default HeroImg