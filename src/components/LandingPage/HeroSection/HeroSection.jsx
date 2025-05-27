import React from 'react'
import HeroSVG1 from '../../SVGs/HeroSVG1'
import HeroSVG2 from '../../SVGs/HeroSVG2'
import HeroSVG3 from '../../SVGs/HeroSVG3'
import HeroContent from './HeroContent'
import HeroImg from './HeroImg'

const listItem = [
    'বিশেষজ্ঞদের সঙ্গে শিখুন',
    'সার্টিফিকেট অর্জন করুন',
    'সাফল্য অর্জন করুন'
]

const iconsLogo = [
    {
        className: "p-2 bg-white shadow rounded-3 position-absolute top-50 start-0 translate-middle-y mt-n7 d-none d-sm-block",
        imageSrc: "assets/images/herosection/capsule2.png",
    },
    {
        className: "p-2 bg-white shadow rounded-3 position-absolute top-0 end-0 me-5",
        imageSrc: "assets/images/herosection/injection.png",
    },
    {
        className: "p-2 bg-white shadow rounded-3 position-absolute top-50 end-0 translate-middle-y mt-5 ms-5 d-none d-lg-block z-index-9",
        imageSrc: "assets/images/herosection/stethoscope3.png",
    }
];

const avatarGroup = [
    <img className="avatar-img rounded-circle border-white" src="assets/images/avatar/01.jpg" alt="avatar" />,
    <img className="avatar-img rounded-circle border-white" src="assets/images/avatar/02.jpg" alt="avatar" />,
    <img className="avatar-img rounded-circle border-white" src="assets/images/avatar/03.jpg" alt="avatar" />,
    <img className="avatar-img rounded-circle border-white" src="assets/images/avatar/04.jpg" alt="avatar" />,
    <div className="avatar-img rounded-circle border-white bg-primary">
        <span className="text-white position-absolute top-50 start-50 translate-middle small">1K+</span>
    </div>
];



const HeroSection = () => {
    return (
        <section className="position-relative overflow-hidden pt-5 pt-lg-3">
            {/* Start Design SVG  */}
            <HeroSVG1></HeroSVG1>
            <HeroSVG2></HeroSVG2>
            <HeroSVG3></HeroSVG3>
            {/* End Design SVG  */}

            {/* <!-- Content START --> */}
            <div className="container">
                {/* <!-- Title --> */}
                <div className="row align-items-center g-5">
                    {/* <!-- Left content START --> */}
                    <HeroContent listItem={listItem}></HeroContent>

                    {/* <!-- Right content START --> */}
                    <HeroImg iconsLogo={iconsLogo} avatarGroup={avatarGroup}></HeroImg>
                </div>
            </div>
            {/* <!-- Content END --> */}
        </section>
    )
}

export default HeroSection