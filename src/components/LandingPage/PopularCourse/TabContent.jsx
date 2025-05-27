// TabContent.js
import React from 'react';
import CourseCard from './CourseCard';

const TabContent = ({ id, tabId, courses, isActive }) => {
    return (
        <div
            className={`tab-pane fade ${isActive ? 'show active' : ''}`}
            id={id}
            role="tabpanel"
            aria-labelledby={tabId}
        >
            <div className="row g-4">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default TabContent;