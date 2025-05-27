import React from 'react';
import { renderStars } from '../../Common/Stars';

const CourseCard = ({ course }) => {
    return (
        <div className="col-sm-6 col-lg-4 col-xl-3">
            <div className="card shadow h-100">
                <img src={course.image} className="card-img-top" alt={course.alt} />
                <div className="card-body pb-0">
                    <div className="d-flex justify-content-between mb-2">
                        <span className={`badge ${course.levelClass}`}>{course.level}</span>
                        <button className={`btn btn-link p-0 ${course.favorite ? 'text-danger' : ''}`}>
                            <i className={course.favorite ? "fas fa-heart" : "far fa-heart"}></i>
                        </button>
                    </div>
                    <h5 className="card-title fw-normal"><a href="#">{course.title}</a></h5>
                    <p className="mb-2 text-truncate-2">{course.description}</p>
                    <div className="d-flex align-items-center">
                        {renderStars(course.rating)}  {/* Changed to pass just rating */}
                        <span className="ms-2">{course.rating.toFixed(1)}/5.0</span>
                    </div>
                </div>
                <div className="card-footer pt-0 pb-3">
                    <hr />
                    <div className="d-flex justify-content-between">
                        <span><i className="far fa-clock text-danger me-2"></i>{course.duration}</span>
                        <span><i className="fas fa-table text-orange me-2"></i>{course.lectures} lectures</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;