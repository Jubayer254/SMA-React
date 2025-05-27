import React from 'react'
import HeroYellowStarSVG from '../../SVGs/HeroYellowStarSVG'
import HeroGreenStarSVG from '../../SVGs/HeroGreenStarSVG'
import HeroYellowBgSVG from '../../SVGs/HeroYellowBgSVG'
import LiComponent from '../../Common/LiComponent'

const HeroContent = ({ listItem }) => {
    return (
        <div className="col-lg-5 col-xl-6 position-relative z-index-1 text-center text-lg-start mb-5 mb-sm-0">

            {/* start SVG  */}
            <HeroYellowStarSVG></HeroYellowStarSVG>
            <HeroGreenStarSVG></HeroGreenStarSVG>
            {/* end SVG */}

            {/* <!-- Title --> */}
            <h1 className="mb-0 display-6">স্পার্ক মেডিকেল একাডেমিতে
                <span className="position-relative"> স্বাগতম
                    {/*  SVG START */}
                    {/* <HeroYellowBgSVG></HeroYellowBgSVG> */}
                    {/*  SVG END */}
                </span>
            </h1>

            {/* <!-- Content --> */}
            <p className="my-4 lead">আপনার সাফল্যের গল্প তৈরি করুন অভিজ্ঞ শিক্ষকদের দ্বারা পরিচালিত মেডিকেল কোচিংয়ের মাধ্যমে, যা আপনাকে আপনার ক্যারিয়ারে সফল হতে সহায়তা করবে।</p>

            {/* <!-- Info --> */}
            <ul className="list-inline position-relative justify-content-center justify-content-lg-start mb-4">
                {
                    listItem.map((item) => <LiComponent liClasses='list-inline-item me-2' iTagClasses='bi bi-patch-check-fill h6 me-1' >{item}</LiComponent>)
                }
            </ul>

            <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-start">
                {/* <!-- Button --> */}
                <a href="#home" className="btn btn-lg btn-danger-soft me-2 mb-4 mb-sm-0">শুরু করুন</a>
                {/* <!-- Video button --> */}
                <a data-glightbox="" data-gallery="office-tour" href="https://www.youtube.com/embed/tXHviS-4ygo" className="ms-0 ms-sm-4 d-block">
                    <div className="btn btn-round btn-primary-shadow mb-0 me-3 align-middle d-inline-block"> <i className="fas fa-play"></i></div>
                    <div className="align-middle d-inline-block">
                        <h6 className="mb-0 fw-normal">ভিডিও দেখুন</h6>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default HeroContent