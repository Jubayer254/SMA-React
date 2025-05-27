import React, { useState } from 'react';
import Title from '../../Common/Title';
import CategoryNavigation from './CategoryNavigation';
import TabContainer from './TabContainer';

const tabItems = [
    {
        id: 'course-pills-tab-1',
        target: 'course-pills-tabs-1',
        label: 'Web Design',
        active: true
    },
    {
        id: 'course-pills-tab-2',
        target: 'course-pills-tabs-2',
        label: 'Development',
        active: false
    },
    {
        id: 'course-pills-tab-3',
        target: 'course-pills-tabs-3',
        label: 'Graphic Design',
        active: false
    },
    {
        id: 'course-pills-tab-4',
        target: 'course-pills-tabs-4',
        label: 'Marketing',
        active: false
    },
    {
        id: 'course-pills-tab-5',
        target: 'course-pills-tabs-5',
        label: 'Finance',
        active: false
    }
];

const courseTabsData = [
    {
        id: "course-pills-tabs-1",
        tabId: "course-pills-tab-1",
        label: "Web Design",
        courses: [
            {
                id: 1,
                image: "assets/images/courses/4by3/08.jpg",
                alt: "Sketch course",
                level: "All level",
                levelClass: "bg-purple bg-opacity-10 text-purple",
                title: "Sketch from A to Z: for app designer",
                description: "Proposal indulged no do sociable he throwing settling.",
                rating: 4.0,
                duration: "12h 56m",
                lectures: 15,
                favorite: false
            },
            {
                id: 2,
                image: "assets/images/courses/4by3/02.jpg",
                alt: "Graphic Design course",
                level: "Beginner",
                levelClass: "bg-success bg-opacity-10 text-success",
                title: "Graphic Design Masterclass",
                description: "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
                rating: 4.5,
                duration: "9h 56m",
                lectures: 65,
                favorite: true
            },
            {
                id: 3,
                image: "assets/images/courses/4by3/03.jpg",
                alt: "Figma course",
                level: "Beginner",
                levelClass: "bg-success bg-opacity-10 text-success",
                title: "Create a Design System in Figma",
                description: "Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.",
                rating: 4.5,
                duration: "5h 56m",
                lectures: 32,
                favorite: false
            }
        ]
    },
    {
        id: "course-pills-tabs-2",
        tabId: "course-pills-tab-2",
        label: "Development",
        courses: [
            {
                id: 4,
                image: "assets/images/courses/4by3/05.jpg",
                alt: "Web Development course",
                level: "Beginner",
                levelClass: "bg-success bg-opacity-10 text-success",
                title: "The Complete Web Development in python",
                description: "Mention Mr manners opinion if garrets enabled.",
                rating: 4.5,
                duration: "10h 00m",
                lectures: 26,
                favorite: false
            }
        ]
    },

    {
        id: "course-pills-tabs-3",
        tabId: "course-pills-tab-3",
        label: "Graphic Design",
        courses: [
            {
                id: 3,
                image: "assets/images/courses/4by3/03.jpg",
                alt: "Figma course",
                level: "Beginner",
                levelClass: "bg-success bg-opacity-10 text-success",
                title: "Create a Design System in Figma",
                description: "Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.",
                rating: 4.5,
                duration: "5h 56m",
                lectures: 32,
                favorite: false
            }
        ]
    },
    {
        id: "course-pills-tabs-4",
        tabId: "course-pills-tab-4",
        label: "Marketing",
        courses: [
            {
                id: 2,
                image: "assets/images/courses/4by3/02.jpg",
                alt: "Graphic Design course",
                level: "Beginner",
                levelClass: "bg-success bg-opacity-10 text-success",
                title: "Graphic Design Masterclass",
                description: "Rooms oh fully taken by worse do Points afraid but may end Rooms Points afraid but may end Rooms",
                rating: 4.5,
                duration: "9h 56m",
                lectures: 65,
                favorite: true
            },
        ]
    },
    {
        id: "course-pills-tabs-5",
        tabId: "course-pills-tab-5",
        label: "Finance",
        courses: [
            {
                id: 1,
                image: "assets/images/courses/4by3/08.jpg",
                alt: "Sketch course",
                level: "All level",
                levelClass: "bg-purple bg-opacity-10 text-purple",
                title: "Sketch from A to Z: for app designer",
                description: "Proposal indulged no do sociable he throwing settling.",
                rating: 4.0,
                duration: "12h 56m",
                lectures: 15,
                favorite: false
            },
        ]
    }
];

const PopularCourse = () => {
    const [activeTabId, setActiveTabId] = useState(courseTabsData[0].id);
 
    return (
        <section>
            <div className="container">
                {/* Section Title */}
                <Title heading='Most Popular Courses' description='Choose from hundreds of courses from specialist organizations'></Title>

                {/* Category Tabs Navigation */}
                <CategoryNavigation tabItems={tabItems} ></CategoryNavigation>

                {/* Tab Content Panels */}
                {/* Main Tab Content Container */}
                <TabContainer courseTabsData={courseTabsData} activeTabId={activeTabId} ></TabContainer>
            </div>
        </section>

    );
}

export default PopularCourse;