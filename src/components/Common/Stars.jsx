export const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={`full-${i}`} className="fas fa-star text-warning me-1"></i>);
    }

    if (hasHalfStar) {
        stars.push(<i key="half" className="fas fa-star-half-alt text-warning me-1"></i>);
    }

    while (stars.length < 5) {
        stars.push(<i key={`empty-${stars.length}`} className="far fa-star text-warning me-1"></i>);
    }

    return stars;
};