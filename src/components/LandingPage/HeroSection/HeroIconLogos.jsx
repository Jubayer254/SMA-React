import React from 'react'

const HeroIconLogos = ({className, imageSrc}) => {
    return (
        <div className={className}>
            <img src={imageSrc} width='40' alt="Icon" />
        </div>
    )
}

export default HeroIconLogos