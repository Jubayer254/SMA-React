import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import { settings } from './CourseSetting';
import CourseCard from './CourseCard';

const CourseCarousel = ({ trendingCourses }) => {
  return (
    <div className="row position-relative">
      {/* Slider START */}
      <div className="tiny-slider arrow-round arrow-blur arrow-hover">
        <Slider {...settings} className="tiny-slider-inner pb-1">
          {trendingCourses.map(course => (
            <div key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
        </Slider>
      </div>
      {/* Slider END */}
    </div>
  );
};

export default CourseCarousel;