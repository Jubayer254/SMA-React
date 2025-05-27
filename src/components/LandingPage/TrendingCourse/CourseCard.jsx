import React from 'react';

const CourseCard = ({ course }) => {
    return (
        <div className="card action-trigger-hover border m-3">
            {/* Image */}
            <img src={course.image} className="card-img-top" alt="course" />

            {/* Ribbon */}
            {course.free && (
                <div className="ribbon mt-3"><span>Free</span></div>
            )}

            {/* Card body */}
            <div className="card-body pb-0">
                {/* Badge and favorite */}
                <div className="d-flex justify-content-between mb-3">
                <span className="hstack gap-2">
                    {course.categories.map((cat, index) => (
                    <a key={index} href="#" className="badge bg-primary bg-opacity-10 text-primary">
                        {cat}
                    </a>
                    ))}
                    {course.level && (
                    <a href="#" className="badge bg-dark text-white">{course.level}</a>
                    )}
                </span>
                <a href="#" className="h6 fw-light mb-0"><i className="far fa-bookmark"></i></a>
                </div>

                {/* Title */}
                <h5 className="card-title"><a href="#">{course.title}</a></h5>

                {/* Rating */}
                <div className="d-flex justify-content-between mb-2">
                    <div className="hstack gap-2">
                        <p className="text-warning m-0">{course.rating}<i className="fas fa-star text-warning ms-1"></i></p>
                        <span className="small">({course.reviews})</span>
                    </div>
                    <div className="hstack gap-2">
                        <p className="h6 fw-light mb-0 m-0">{course.students}</p>
                        <span className="small">(Student)</span>
                    </div>
                </div>

                {/* Time */}
                <div className="hstack gap-3">
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2"></i>{course.duration}</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2"></i>{course.lectures} lectures</span>
                </div>
            </div>

            {/* Card footer */}
            <div className="card-footer pt-0">
                <hr />
                {/* Avatar and Price */}
                <div className="d-flex justify-content-between align-items-center">
                    {/* Avatar */}
                    <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm">
                            <img className="avatar-img rounded-1" src={course.instructorAvatar} alt="avatar" />
                        </div>
                        <p className="mb-0 ms-2"><a href="#" className="h6 fw-light mb-0">{course.instructor}</a></p>
                    </div>

                    {/* Price */}
                    <div>
                        <h4 className="text-success mb-0 item-show">{course.price}</h4>
                        <a href="#" className="btn-sm btn-success-soft item-show-hover">
                            <i className="fas fa-shopping-cart me-2"></i>Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;