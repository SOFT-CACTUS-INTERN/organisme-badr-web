
import { useState } from "react"
import { NavLink } from "react-router-dom";
import cancel from '../assets/svgs/graph35.svg'
import graph36 from '../assets/svgs/graph36.svg'

import '../assets/styles/header.css'
// import { NavLink } from "react-router-dom";
const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("");
  const [selectedLang, setSelectedLang] = useState({
    name: "العربية",
    flag: "/organisme-badr-web/flags/Morocco.png",
  })

  const languages = [
    { name: "العربية", flag: "/organisme-badr-web/flags/Morocco.png" },
    { name: "English", flag: "/organisme-badr-web/flags/English.png" },
    { name: "Français", flag: "/organisme-badr-web/flags/france.png" },
  ]

  const toggleLangList = () => {
    setIsLangOpen(!isLangOpen)
  }

  const selectLang = (lang) => {
    setSelectedLang(lang)
    setIsLangOpen(false)
  }


  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }

  const cancelMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('menu-open');
  }




  return (
    <header className="header">

      <div className="info-bar">
        <div className="container">
          <div className="info-content">
            {/* Organization Info */}
            <div className="organization">
              <div className="vector-line"></div>
              <div className="org-content">
                <div className="ellipse"></div>
                <div className="org-text">منظمة غير حكومية</div>
                <div className="ellipse"></div>
              </div>
              <div className="vector-line"></div>
            </div>
            <div className="language-selector test" onClick={toggleLangList}>
              <span className="arrow">
                <svg width="15" height="11" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.66602 1.71074L5.60518 5.6499L9.54434 1.71074"
                    stroke="#004B23"
                    strokeWidth="1.81808"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="lang-name">{selectedLang.name}</span>
              <img className="img-flag" src={selectedLang.flag || "/placeholder.svg"} alt="Flag" />

              {isLangOpen && (
                <ul className="lang-options">
                  {languages.map((lang, index) => (
                    <li
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation()
                        selectLang(lang)
                      }}
                    >
                      {lang.name}
                      <img src={lang.flag || "/placeholder.svg"} alt="Flag" />
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Contact Info */}
            <div className="contact-info">


              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.5256 9.80191C12.4213 9.68131 12.2923 9.58455 12.1473 9.51824C12.0023 9.45193 11.8448 9.41761 11.6853 9.41761C11.5259 9.41761 11.3683 9.45193 11.2233 9.51824C11.0783 9.58455 10.9493 9.68131 10.845 9.80191C10.4524 10.1897 10.0598 10.5823 9.672 10.9797C9.63554 11.0294 9.58135 11.063 9.52071 11.0737C9.46008 11.0844 9.39767 11.0713 9.34643 11.0372C9.09267 10.8984 8.81975 10.7882 8.57556 10.635C7.45502 9.9088 6.46179 9.00291 5.63577 7.95377C5.20449 7.44532 4.84816 6.87778 4.57762 6.26841C4.5482 6.21788 4.53829 6.15833 4.54976 6.101C4.56122 6.04367 4.59328 5.99252 4.63987 5.95719C5.03248 5.57416 5.41551 5.18634 5.80333 4.79372C5.9299 4.68859 6.03177 4.55686 6.10168 4.4079C6.17158 4.25895 6.20783 4.09644 6.20783 3.9319C6.20783 3.76736 6.17158 3.60483 6.10168 3.45588C6.03177 3.30693 5.9299 3.1752 5.80333 3.07006L4.87926 2.14599C4.56326 1.82999 4.24725 1.50919 3.92167 1.1884C3.81654 1.06918 3.68723 0.97371 3.54236 0.90831C3.39748 0.84291 3.24034 0.809082 3.08139 0.809082C2.92243 0.809082 2.7653 0.84291 2.62042 0.90831C2.47554 0.97371 2.34624 1.06918 2.2411 1.1884C1.8437 1.57622 1.46545 1.9784 1.05848 2.36144C0.700174 2.69937 0.485841 3.16235 0.45999 3.65419C0.425882 4.46082 0.569734 5.26507 0.881332 6.00987C1.47852 7.55815 2.33862 8.99165 3.42372 10.2472C4.85193 11.9622 6.62951 13.3529 8.63781 14.3265C9.53024 14.7938 10.5068 15.0787 11.5106 15.1644C11.8468 15.2022 12.1872 15.1594 12.5036 15.0395C12.82 14.9196 13.1033 14.7261 13.33 14.475C13.6651 14.0967 14.0434 13.752 14.4025 13.3929C14.5267 13.2872 14.6264 13.1559 14.6948 13.0079C14.7632 12.8599 14.7986 12.6989 14.7986 12.5358C14.7986 12.3728 14.7632 12.2117 14.6948 12.0638C14.6264 11.9158 14.5267 11.7844 14.4025 11.6788C13.7833 11.0532 13.1576 10.4275 12.5256 9.80191Z"
                      fill="#007200"
                    />
                    <path
                      d="M15.0113 7.06974C13.7647 4.15763 11.4374 1.84238 8.51889 0.610805C8.40135 0.566928 8.27127 0.57093 8.15666 0.621968C8.04205 0.673007 7.95205 0.766992 7.90603 0.883707C7.88095 0.942112 7.86775 1.00493 7.86721 1.06849C7.86666 1.13204 7.87876 1.19508 7.90283 1.25391C7.92689 1.31274 7.96244 1.36618 8.00737 1.41113C8.05231 1.45608 8.10576 1.49164 8.16458 1.51572C10.8548 2.6523 13 4.78716 14.1495 7.47193C14.2009 7.58578 14.2948 7.67504 14.4111 7.72066C14.5273 7.76628 14.6568 7.76465 14.7719 7.71612C14.8309 7.69032 14.8840 7.65291 14.9282 7.60612C14.9723 7.55933 15.0066 7.50412 15.0290 7.44378C15.0513 7.38345 15.0613 7.31924 15.0582 7.25497C15.0552 7.19071 15.0393 7.12771 15.0113 7.06974Z"
                      fill="#007200"
                    />
                    <path
                      d="M7.91553 4.11529C9.54623 4.80216 10.8471 6.09449 11.5448 7.72061C11.5818 7.80083 11.6404 7.86924 11.7139 7.91825C11.7874 7.96726 11.8731 7.99498 11.9613 7.99832C12.0260 7.99784 12.0897 7.98313 12.1481 7.95523C12.2582 7.90129 12.3434 7.80715 12.3862 7.69224C12.4289 7.57732 12.4260 7.45038 12.3779 7.33758C11.5871 5.49138 10.1110 4.02389 8.26026 3.24389C8.14629 3.20344 8.02123 3.20761 7.91021 3.25557C7.79919 3.30353 7.71043 3.39172 7.66177 3.50243C7.61675 3.61759 7.61803 3.74569 7.66533 3.85992C7.71263 3.97416 7.80228 4.06566 7.91553 4.11529Z"
                      fill="#007200"
                    />
                  </svg>
                </div>
                <div className="contact-text">05 366 - 122 51</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="18" height="27" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6.40291 0.477539C4.73739 0.477539 3.14008 1.1608 1.96237 2.37702C0.784672 3.59324 0.123047 5.24278 0.123047 6.96277C0.123047 10.0457 3.35959 13.7473 6.07925 16.3115L6.41257 16.6258L6.73622 16.3015C9.74573 13.3083 12.6828 10.1306 12.6828 6.96277C12.6828 6.11111 12.5203 5.2678 12.2047 4.48098C11.8892 3.69415 11.4266 2.97923 10.8434 2.37702C10.2603 1.77481 9.56801 1.29711 8.80611 0.971196C8.0442 0.645283 7.22759 0.477539 6.40291 0.477539ZM6.40291 9.45709C5.9252 9.45709 5.45822 9.3108 5.06102 9.03672C4.66382 8.76264 4.35424 8.37308 4.17143 7.9173C3.98862 7.46153 3.94079 6.95999 4.03399 6.47614C4.12718 5.99229 4.35722 5.54786 4.69501 5.19902C5.0328 4.85019 5.46317 4.61262 5.9317 4.51637C6.40023 4.42013 6.88587 4.46952 7.32721 4.65831C7.76856 4.8471 8.14578 5.1668 8.41118 5.57699C8.67658 5.98718 8.81824 6.46944 8.81824 6.96277C8.81824 7.6243 8.56377 8.25874 8.11081 8.72651C7.65784 9.19429 7.04349 9.45709 6.40291 9.45709Z"
                      fill="#007200"
                    />
                  </svg>
                </div>
                <div className="contact-text">الحي الاداري ص ب 116 بركان</div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="20" height="19" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.09355 11.0385C7.09355 9.67416 7.09355 8.40729 7.09355 7.04298C7.191 5.28886 8.16552 4.4118 9.72474 5.09396C10.5043 5.38631 10.9916 5.48377 11.5763 5.19141C13.0381 4.41181 14.3049 4.9965 15.6692 5.48376C16.5463 5.77611 17.0335 6.45826 17.3259 7.33532C18.1055 9.86904 18.1055 12.4028 18.0081 14.9365C18.0081 15.6187 17.7157 16.1059 16.9361 16.2034C16.7412 16.2034 16.6437 16.2034 16.4488 16.3008C13.7202 16.7881 13.4278 16.5932 13.7202 13.8645C13.8177 12.6951 14.0126 11.5257 13.7202 10.3563C13.5253 9.7716 13.3304 9.08945 12.5508 8.992C11.8687 8.89454 11.3814 9.38179 10.9916 9.86905C10.6018 10.3563 10.5043 10.941 10.5043 11.6232C10.5043 12.5977 10.5043 13.4747 10.5043 14.4493C10.5043 16.3983 10.4069 16.4957 8.65277 16.3983C6.99611 16.3983 6.99609 16.3983 6.99609 14.7416C7.09354 13.5722 7.09355 12.3053 7.09355 11.0385Z"
                    fill="#007200"
                  />
                  <path
                    d="M1.73418 10.844C1.73418 9.47966 1.73418 8.2128 1.73418 6.84848C1.73418 5.67907 2.41634 5.48417 3.39085 5.38672C4.46281 5.38672 4.6577 5.97142 4.6577 6.84848C4.85261 9.38221 4.85261 11.9159 4.75516 14.4497C4.75516 15.3267 4.75517 16.3987 3.39085 16.3987C2.22144 16.4961 1.63672 16.0089 1.63672 14.8395C1.63672 13.4752 1.63672 12.0134 1.63672 10.6491C1.63672 10.844 1.73418 10.844 1.73418 10.844Z"
                    fill="#007200"
                  />
                  <path
                    d="M2.61173 0.0263672C4.07349 0.0263672 4.85312 0.611073 4.85312 1.48813C4.85312 2.56009 3.58624 3.82695 2.61173 3.82695C1.63722 3.82695 0.955078 3.04735 0.955078 1.97539C1.05253 0.708524 1.63722 0.0263672 2.61173 0.0263672Z"
                    fill="#007200"
                  />
                </svg>
              </a>

              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="20" height="20" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.10297 18.2118C7.52967 18.2118 5.95638 18.306 4.47563 18.2118C2.34705 18.0234 1.51413 17.2699 1.14394 15.0092C0.681208 12.3717 0.49612 9.8284 0.77376 7.19091C0.866307 6.24895 0.958848 5.21279 1.14394 4.27083C1.42158 2.29271 2.25451 1.44495 4.19799 0.973965C5.03091 0.785573 5.77129 0.691366 6.60421 0.785562C8.3626 0.879758 10.121 0.879752 11.8794 0.69136C12.7123 0.597164 13.4527 0.691366 14.2856 0.785562C15.8589 0.973954 16.9694 1.82174 17.1545 3.42307C17.7098 7.3793 18.1725 11.3355 17.4322 15.2917C17.062 17.1757 16.2291 17.9292 14.3781 18.306C12.7123 18.4002 10.9539 18.306 9.10297 18.2118ZM9.47315 5.58957C7.34457 5.49537 5.49364 7.09671 5.30855 9.07483C5.12345 11.5239 6.60421 13.1253 9.10297 13.3137C11.0464 13.4078 12.8974 11.7123 13.0825 9.54581C13.2676 7.56769 11.6017 5.68376 9.47315 5.58957ZM15.211 4.08242C15.1185 3.51725 14.8409 3.14046 14.193 3.14046C13.4527 3.14046 13.0825 3.61145 13.0825 4.27083C13.0825 4.9302 13.4527 5.40116 14.193 5.40116C14.9334 5.30697 15.211 4.83599 15.211 4.08242Z"
                    fill="#007200"
                  />
                </svg>
              </a>

              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="12" height="25" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.78849 14.3416C2.69668 13.148 2.69668 11.9544 2.60486 10.669C2.60486 10.0263 2.32942 9.56718 1.5949 9.56718C1.13582 9.56718 0.676746 9.65899 0.58493 9.01628C0.493115 8.18995 0.309485 7.27181 0.58493 6.44547C0.58493 6.35366 0.952193 6.17004 1.13582 6.17004C2.51305 6.44548 2.78849 5.71095 2.78849 4.60917C2.78849 1.67109 5.2675 0.110218 8.48103 0.293848C9.39919 0.385663 9.39919 1.12019 9.39919 1.7629C9.30737 2.4056 9.67463 3.32376 8.48103 3.32376C7.47107 3.23195 6.73654 3.59921 6.73654 4.79281C6.73654 5.61915 6.82836 6.26184 7.83833 6.35365C9.30737 6.44547 9.03192 7.45545 9.03192 8.46542C9.12374 9.5672 8.57285 9.93443 7.56288 9.93443C6.55292 9.93443 6.36929 10.4853 6.36929 11.4035C6.36929 13.4234 6.36928 15.3515 6.27747 17.3715C6.18565 18.6569 5.91021 18.7487 4.16572 18.6569C2.97213 18.6569 2.78849 18.106 2.88031 17.096C2.69668 16.2697 2.69668 15.3515 2.78849 14.3416Z"
                    fill="#007200"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>


      <div className="main-nav">
        <div className="container">
          <div className="nav-content">

            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
                <span></span>
                <span className="second"></span>
                <span></span>
              </div>
            </button>


            <div className="language-selector" onClick={toggleLangList}>
              <span className="arrow">
                <svg width="15" height="11" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1.66602 1.71074L5.60518 5.6499L9.54434 1.71074"
                    stroke="#004B23"
                    strokeWidth="1.81808"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="lang-name">{selectedLang.name}</span>
              <img className="img-flag" src={selectedLang.flag || "/placeholder.svg"} alt="Flag" />

              {isLangOpen && (
                <ul className="lang-options">
                  {languages.map((lang, index) => (
                    <li
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation()
                        selectLang(lang)
                      }}
                    >
                      {lang.name}
                      <img src={lang.flag || "/placeholder.svg"} alt="Flag" />
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Navigation Links - Left */}
            <nav className="nav-left">
              <NavLink to="/" className="nav-link">
                الرئيسية
              </NavLink>
              <NavLink to="/About" className="nav-link">
                المنضمة
              </NavLink>
              <NavLink to="/Achevement" className="nav-link">
                إنجازاتنا
              </NavLink>
            </nav>

            {/* Logo */}
            <div className="logo">
              <img src="/organisme-badr-web/flags/logo1.png" alt="Logo" />
            </div>

            {/* Navigation Links - Right */}
            <nav className="nav-right">
              <NavLink to="/Partners" className="nav-link">
                الشركاء
              </NavLink>
              <NavLink to="/Support" className="nav-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.98755 9.93926L11.9267 13.8784L15.8659 9.93926"
                    stroke="#004B23"
                    strokeWidth="1.81808"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                رعايتنا تضم
              </NavLink>
              <NavLink to="/Contact" className="nav-link">
                تواصل معنا
              </NavLink>
            </nav>

            {/* Donate Button */}
            <div className="donate-btn">
              
              <span>تبرع الآن</span><svg width="22" height="20" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.2297 17.6435C10.9206 17.7526 10.4115 17.7526 10.1025 17.6435C7.46625 16.7435 1.57568 12.9892 1.57568 6.62595C1.57568 3.81703 3.83919 1.54443 6.62993 1.54443C8.28438 1.54443 9.74793 2.34439 10.6661 3.58068C11.5842 2.34439 13.0568 1.54443 14.7022 1.54443C17.4929 1.54443 19.7564 3.81703 19.7564 6.62595C19.7564 12.9892 13.8659 16.7435 11.2297 17.6435Z"
                  stroke="white"
                  strokeWidth="1.81808"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>


          <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <div className="liste">

              <button onClick={cancelMenu}>
                <img className="cancel" src={cancel} alt="" />
              </button>


              <h2>القائمة</h2>


            </div>
            <div className="mobile-nav-links">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "mobile-nav-link active" : "mobile-nav-link"
                }
                onClick={cancelMenu}
              >
                الرئيسية
              </NavLink>
              <NavLink to="/About" className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
                onClick={cancelMenu} >
                المنضمة
              </NavLink>
              <NavLink to="/Achevement" className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
                onClick={cancelMenu}
              >
                إنجازاتنا
              </NavLink>
              <NavLink to="/Partenrs" className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
                onClick={cancelMenu}


              >
                الشركاء
              </NavLink>
              <NavLink to="/Support" className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
                onClick={cancelMenu}

              >
                رعايتنا تضم
              </NavLink>
              <NavLink to="/Contact" className={({ isActive }) =>
                isActive ? "mobile-nav-link active" : "mobile-nav-link"
              }
                onClick={cancelMenu}

              >
                تواصل معنا
              </NavLink>
            </div>

            <div className="mobile-donate">
              <div className="cadre-btn">
                <div className="donate-btn">
                  <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.2297 17.6435C10.9206 17.7526 10.4115 17.7526 10.1025 17.6435C7.46625 16.7435 1.57568 12.9892 1.57568 6.62595C1.57568 3.81703 3.83919 1.54443 6.62993 1.54443C8.28438 1.54443 9.74793 2.34439 10.6661 3.58068C11.5842 2.34439 13.0568 1.54443 14.7022 1.54443C17.4929 1.54443 19.7564 3.81703 19.7564 6.62595C19.7564 12.9892 13.8659 16.7435 11.2297 17.6435Z"
                      stroke="white"
                      strokeWidth="1.81808"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>تبرع الآن</span>
                </div></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
