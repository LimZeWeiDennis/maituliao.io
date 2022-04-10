import React, {useState, useEffect} from "react";
import './ContentBar.css';
import * as Scroll from 'react-scroll';

const ContentBar = (props, ...rest) => {

    const [isSticky, setIsSticky] = useState(false);
    const [section, setSection] = useState(-1);
    const [initialLoad, setInitialLoad] = useState(true);

    const Link = Scroll.Link;

    useEffect(() => {
        const headerIds = [
            'overview',
            'userResearch',
            'ideation',
            'prototyping',
            'testing',
            'finalProduct'
        ]
        const contentBarHeight = 81.7;

        const handleScroll = () => {
            //scroll downwards
            if (section < headerIds.length - 1) {
                const element = document.getElementById(headerIds[section + 1]);
                if (element) {
                    const top = element.getBoundingClientRect().top;
                    if (top < contentBarHeight) {
                        setSection(section + 1);
                    }
                }
            }
            //scroll upwards
            if (section > 0) {
                const element = document.getElementById(headerIds[section]);
                if (element) {
                    const top = element.getBoundingClientRect().top;
                    if (top >= contentBarHeight) {
                        setSection(section - 1);

                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        setInitialLoad(false);

        // unmount component
        return function () {
            // observer.unobserve(cachedRef)
            window.removeEventListener('scroll', handleScroll)
        }
    }, [section]);

    useEffect(() => {
        const target = document.getElementById("lim");
        const setSticky = () => {
            if (target?.getBoundingClientRect()?.top <= 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        document.addEventListener("scroll", setSticky);
        return () => window.removeEventListener("scroll", setSticky);
    }, []);

    return (
        <div id="lim" className={isSticky ? "stuck" : "contentBar"} {...rest}>
            <div className='chapterBox'>
                <Link to="overview" smooth={true}>
                    <div className={isSticky ? "chapterNumberSticky" : "chapterNumber"}> 1 </div>
                </Link>
                <div className={isSticky ? "chapterTextSticky" : "chapterText"}>Overview</div>
            </div>

            <div className={`${section > 0 ? "line" : "noline"} ${section <= 0 && !initialLoad ? "afterInitial" : ""}`}></div>

            <div className='chapterBox'>
                <Link to="userResearch" smooth={true}>
                    <div className={`${isSticky ? "chapterNumberSticky" : "chapterNumber"} ${isSticky && section < 1 ? "notActive" : ""}`}> 2 </div>
                </Link>
                <div className={`${isSticky ? "chapterTextSticky" : "chapterText"} ${isSticky && section < 1 ? "notActive" : ""}`}>User Research</div>
            </div>

            <div className={`${section > 1 ? "line" : "noline"} ${section <= 1 && !initialLoad ? "afterInitial" : ""}`}></div>

            <div className='chapterBox'>
                <Link to="ideation" smooth={true}>
                    <div className={`${isSticky ? "chapterNumberSticky" : "chapterNumber"} ${isSticky && section < 2 ? "notActive" : ""}`}> 3 </div>
                </Link>
                <div className={`${isSticky ? "chapterTextSticky" : "chapterText"} ${isSticky && section < 2 ? "notActive" : ""}`}>Ideation</div>
            </div>

            <div className={`${section > 2 ? "line" : "noline"} ${section <= 2 && !initialLoad ? "afterInitial" : ""}`}></div>

            <div className='chapterBox'>
                <Link to="prototyping" smooth={true}>
                    <div className={`${isSticky ? "chapterNumberSticky" : "chapterNumber"} ${isSticky && section < 3 ? "notActive" : ""}`}> 4 </div>
                </Link>
                <div className={`${isSticky ? "chapterTextSticky" : "chapterText"} ${isSticky && section < 3 ? "notActive" : ""}`}>Prototyping</div>
            </div>

            <div className={`${section > 3 ? "line" : "noline"} ${section <= 3 && !initialLoad ? "afterInitial" : ""}`}></div>

            <div className='chapterBox'>
                <Link to="testing" smooth={true}>
                    <div className={`${isSticky ? "chapterNumberSticky" : "chapterNumber"} ${isSticky && section < 4 ? "notActive" : ""}`}> 5 </div>
                </Link>
                <div className={`${isSticky ? "chapterTextSticky" : "chapterText"} ${isSticky && section < 4 ? "notActive" : ""}`}>Testing</div>
            </div>

            <div className={`${section > 4 ? "line" : "noline"} ${section <= 4 && !initialLoad ? "afterInitial" : ""}`}></div>

            <div className='chapterBox'>
                <Link to="finalProduct" smooth={true}>
                    <div className={`${isSticky ? "chapterNumberSticky" : "chapterNumber"} ${isSticky && section < 5 ? "notActive" : ""}`}> 6 </div>
                </Link>
                <div className={`${isSticky ? "chapterTextSticky" : "chapterText"} ${isSticky && section < 5 ? "notActive" : ""}`}>Final Product</div>
            </div>

        </div>
    )
}


export default ContentBar;