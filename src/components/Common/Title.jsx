import React from 'react'

const Title = ({heading, description}) => {
    return (
        <div className="row mb-4">
            <div className="col-lg-8 mx-auto text-center">
                <h2 className="fs-1">{heading}</h2>
                <p className="mb-0">{description}</p>
            </div>
        </div>
    )
}

export default Title