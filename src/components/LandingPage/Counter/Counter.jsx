import React from 'react';
import CounterItem from './CounterItem';
import Title from '../../Common/Title';

const counterItems = [
    {
        colClasses: "col-sm-6 col-xl-3",
        bgClass: "bg-warning bg-opacity-15",
        icon: "fas fa-user-tie",
        iconClass: "text-warning",
        value: "অভিজ্ঞ মেন্টরগণ",
        label: "যাদের ৬+ বছরের অভিজ্ঞতা রয়েছে"
    },
    {
        colClasses: "col-sm-6 col-xl-3",
        bgClass: "bg-blue bg-opacity-10",
        icon: "fas fa-lightbulb",
        iconClass: "text-blue",
        value: "মূলনীতি-ভিত্তিক পাঠদান",
        label: "যা পাঠ্যপুস্তক ভিত্তির ওপর নির্মিত"
    },
    {
        colClasses: "col-sm-6 col-xl-3",
        bgClass: "bg-success bg-opacity-10",
        icon: "fas fa-clipboard-check",
        iconClass: "text-success",
        value: "সাপ্তাহিক প্র্যাকটিস টেস্ট",
        label: "সময়ভিত্তিক কুইজ সমাধানসহ"
    },
    {
        colClasses: "col-sm-6 col-xl-3",
        bgClass: "bg-purple bg-opacity-10",
        icon: "fas fa-book",
        iconClass: "text-purple",
        value: "স্টাডি মেটেরিয়ালস",
        label: "যা গুণমানকে পরিমাণের চেয়ে প্রাধান্য দেয়"
    },
    {
        colClasses: "col-sm-6 col-xl-3",
        bgClass: "bg-info bg-opacity-10",
        icon: "fas fa-headset",
        iconClass: "text-info",
        value: "২৪/৭ সহায়তা",
        label: "নির্ধারিত হোয়াটসঅ্যাপ গ্রুপের মাধ্যমে"
    },
    {
        colClasses: "col-sm-6 col-xl-3",
        bgClass: "bg-danger bg-opacity-10",
        icon: "fas fa-chalkboard-teacher",
        iconClass: "text-danger",
        value: "সল্ভ ক্লাস",
        label: "প্রতিটি পরীক্ষার পরে পরিচালিত হয়"
    },
    {
        colClasses: "col-sm-6 col-xl-3",
        bgClass: "bg-secondary bg-opacity-10",
        icon: "fas fa-user-graduate",
        iconClass: "text-secondary",
        value: "ক্যারিয়ার কাউন্সেলিং",
        label: "ব্যক্তিগত ১-অন-১ গাইডেন্সসহ"
    },
    {
        colClasses: "col-sm-6 col-xl-3",
        bgClass: "bg-info bg-opacity-10",
        icon: "fas fa-users",
        iconClass: "text-info",
        value: "একসাথে শেখা",
        label: "একসাথে পড়ুন, একসাথে এগিয়ে যান"
    }
];

const Counter = () => {
    return (
        <section id='why-choose-us' className="py-0 py-5">
            <Title heading='আমাদের বিশেষত্ব কী?' description='আপনার সাফল্য নিশ্চিত করতেই আমরা এখানে'></Title>
            <div className="container mt-2">
                <div className="row g-4">
                    {counterItems.map((item, index) => (
                        <CounterItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Counter;