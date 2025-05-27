// TrendingCourse.jsx
import React from 'react';
import CourseCarousel from './CourseCarousel';
import Title from '../../Common/Title';

const trendingCourses = [
    {
      id: 1,
      image: "assets/images/courses/4by3/14.jpg",
      free: false,
      categories: ["মেডিসিন", "সার্জারি", "পেডিয়াট্রিকস", "গাইনী ও অবস"],
      title: "এফসিপিএস পার্ট-১",
      rating: 4.5,
      reviews: 6500,
      students: 6500,
      duration: "৬ ঘণ্টা ৫৬ মিনিট",
      lectures: '৮২',
      instructor: "ল্যারি লসন",
      instructorAvatar: "assets/images/avatar/10.jpg",
      price: "৳২৫৫০"
    },
    {
      id: 2,
      image: "assets/images/courses/4by3/15.jpg",
      free: false,
      categories: ["মেডিসিন", "সার্জারি", "পেডিয়াট্রিকস", "বেসিক"],
      title: "রেসিডেন্সি / ডিপ্লোমা",
      rating: 4.0,
      reviews: 3500,
      students: 4500,
      duration: "১২ ঘণ্টা ৪৫ মিনিট",
      lectures: '৬৫',
      instructor: "বিলি ভাসকেজ",
      instructorAvatar: "assets/images/avatar/04.jpg",
      price: "৳২৫৫০"
    },
    {
      id: 3,
      image: "assets/images/courses/4by3/17.jpg",
      free: false,
      categories: ["মেডিসিন ও অ্যালায়েড", "সার্জারি"],
      title: "ফেজ-এ",
      rating: 4.5,
      reviews: 2000,
      students: 8000,
      duration: "২৪ ঘণ্টা ৫৬ মিনিট",
      lectures: '৫৫',
      instructor: "লরি স্টিভেন্স",
      instructorAvatar: "assets/images/avatar/09.jpg",
      price: "৳৫০০০"
    },
    {
      id: 4,
      image: "assets/images/courses/4by3/16.jpg",
      free: false,
      categories: ["চিকিৎসাবিজ্ঞান"],
      title: "ডি-কার্ড ফাইনাল",
      rating: 4.0,
      reviews: 2000,
      students: 1200,
      duration: "৯ ঘণ্টা ৫৬ মিনিট",
      lectures: '২১',
      instructor: "ফ্রান্সেস গুয়েরেরো",
      instructorAvatar: "assets/images/avatar/01.jpg",
      price: "৳২০০০"
    },
    {
      id: 5,
      image: "assets/images/courses/4by3/16.jpg",
      free: false,
      categories: ["বিশেষ", "সাধারণ"],
      title: "বিসিএস",
      rating: 4.0,
      reviews: 2000,
      students: 1200,
      duration: "৯ ঘণ্টা ৫৬ মিনিট",
      lectures: '২১',
      instructor: "ফ্রান্সেস গুয়েরেরো",
      instructorAvatar: "assets/images/avatar/01.jpg",
      price: "৳২০০০"
    }
  ];
  

const TrendingCourse = () => {
  return (
    <section id='courses' className="pb-5 pt-0 pt-lg-5">
      <div className="container">
        <Title heading='আমাদের জনপ্রিয় কোর্সসমূহ' description='সবচেয়ে চাহিদাসম্পন্ন কোর্সগুলো এক নজরে দেখুন!'></Title>
        <CourseCarousel trendingCourses={trendingCourses}></CourseCarousel>
      </div>
    </section>
  )
}

export default TrendingCourse;
