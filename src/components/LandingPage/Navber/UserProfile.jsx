import React, { useState } from 'react';

const UserProfile = ({
  name = "Lori Ferguson",
  email = "example@gmail.com",
  avatar = "assets/images/avatar/01.jpg",
  language = "en", // or 'bn'
}) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const isBn = language === "bn";

  return (
    <div className="dropdown ms-1 ms-lg-0">
      <a
        className="avatar avatar-sm p-0"
        href="#"
        id="profileDropdown"
        role="button"
        data-bs-auto-close="outside"
        data-bs-display="static"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img className="avatar-img rounded-circle" src={avatar} alt={`${name} এর প্রোফাইল`} />
      </a>

      <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">
        {/* Profile info */}
        <li className="px-3">
          <div className="d-flex align-items-center">
            <div className="avatar me-3">
              <img className="avatar-img rounded-circle shadow" src={avatar} alt={`${name} এর প্রোফাইল`} />
            </div>
            <div>
              <a className="h6" href="#">{name}</a>
              <p className="small m-0">{email}</p>
            </div>
          </div>
          <hr />
        </li>

        {/* Links */}
        <li>
          <a className="dropdown-item" href="#">
            <i className="bi bi-person fa-fw me-2"></i>
            প্রোফাইল সম্পাদনা
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <i className="bi bi-gear fa-fw me-2"></i>
            অ্যাকাউন্ট সেটিংস
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            <i className="bi bi-info-circle fa-fw me-2"></i>
            সাহায্য
          </a>
        </li>
        <li>
          <a className="dropdown-item bg-danger-soft-hover" href="#">
            <i className="bi bi-power fa-fw me-2"></i>
            সাইন আউট
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
