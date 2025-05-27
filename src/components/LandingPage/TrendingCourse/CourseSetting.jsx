const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} arrow-hover`}
            style={{ ...style, display: 'block', zIndex: 1 }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} arrow-hover`}
            style={{ ...style, display: 'block', zIndex: 1 }}
            onClick={onClick}
        />
    );
};

export const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 992, // lg
            settings: {
                slidesToShow: 2,
                arrows: true
            }
        },
        {
            breakpoint: 768, // sm
            settings: {
                slidesToShow: 1,
                arrows: true
            }
        }
    ]
};