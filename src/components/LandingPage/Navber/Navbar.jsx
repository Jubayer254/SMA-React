import React from 'react'
import SearchBar from '../../Common/SearchBar'
import UserProfile from './UserProfile'
import LiComponent from '../../Common/LiComponent'

const navItem = [
    { label: "হোম", id: "home" },
    { label: "আমাদের বিশেষত্ব কী?", id: "why-choose-us" },
    { label: "আমাদের সম্পর্কে", id: "about-us" },
    { label: "কোর্সসমূহ", id: "courses" },
    { label: "ঠিকানা ও যোগাযোগ", id: "address-contact-us" }
  ];

export default function Navbar() {
    return (
        <div>
            {/* Header START */}
            <header className="navbar-light navbar-sticky header-static">
                {/* Logo Nav START */}
                <nav className="navbar navbar-expand-xl">
                    <div className="container-fluid px-3 px-xl-5">
                        {/* Logo START */}
                        <a className="navbar-brand" href="index.html">
                            <img className="light-mode-item navbar-brand-item" src="assets/images/logo/SMA Logo-02.png" alt="logo" />
                            {/* <img className="dark-mode-item navbar-brand-item" src="assets/images/logo/SMA Logo-01.png" alt="logo"/> */}
                        </a>
                        {/* Logo END */}

                        {/* Responsive navbar toggler */}
                        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-animation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </button>

                        {/* Main navbar START */}
                        <div className="navbar-collapse w-100 collapse" id="navbarCollapse">
                            {/* Nav items START */}

                            <ul className="navbar-nav mx-auto mb-2 mb-xl-0">
                            {navItem.map(({ label, id }) => (
                            <LiComponent
                                key={id}
                                liClasses="nav-item"
                                aTagClass="nav-link"
                                aTagHerf={`#${id}`}
                            >
                                {label}
                            </LiComponent>
                            ))}
                            </ul>
                            {/* Nav items END */}

                            {/* Nav Search START */}
                            {/* <SearchBar></SearchBar> */}
                            {/* Nav Search END */}
                        </div>
                        {/* Main navbar END */}

                        {/* Profile START */}
                        <UserProfile></UserProfile>
                        {/* Profile END */}
                    </div>
                </nav>
                {/* Logo Nav END */}
            </header>
            {/* Header END */}
        </div>
    )
}
