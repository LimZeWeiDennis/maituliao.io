import React, {useState, useEffect, useRef} from "react";
import './ContentBar.css';

const ContentBar = (...rest) => {

    const [isSticky, setIsSticky] = useState(false);
    const ref = useRef();

    useEffect(()=>{
        const cachedRef = ref.current,
            observer = new IntersectionObserver(
                ([e]) => setIsSticky(e.intersectionRatio < 1),
                {threshold: [1]}
            )

        observer.observe(cachedRef)

        // unmount
        return function(){
            observer.unobserve(cachedRef)
        }
    }, []);

    return (

        <div className={isSticky ?"stuck" : "contentBar"} ref={ref} {...rest}>
            <div className='chapterBox'>
                <div className={isSticky ?"chapterNumberSticky" : "chapterNumber"}> 1 </div>
                <div className={isSticky ?"chapterTextSticky" : "chapterText"}>Overview</div>
            </div>


            <div className='chapterBox'>
                <div className={isSticky ?"chapterNumberSticky" : "chapterNumber"}> 2 </div>
                <div className={isSticky ?"chapterTextSticky" : "chapterText"}>User Research</div>
            </div>

            <div className='chapterBox'>
                <div className={isSticky ?"chapterNumberSticky" : "chapterNumber"}> 3 </div>
                <div className={isSticky ?"chapterTextSticky" : "chapterText"}>Ideation</div>
            </div>

            <div className='chapterBox'>
                <div className={isSticky ?"chapterNumberSticky" : "chapterNumber"}> 4 </div>
                <div className={isSticky ?"chapterTextSticky" : "chapterText"}>Prototyping</div>
            </div>

            <div className='chapterBox'>
                <div className={isSticky ?"chapterNumberSticky" : "chapterNumber"}> 5 </div>
                <div className={isSticky ?"chapterTextSticky" : "chapterText"}>Testing</div>
            </div>

            <div className='chapterBox'>
                <div className={isSticky ?"chapterNumberSticky" : "chapterNumber"}> 6 </div>
                <div className={isSticky ?"chapterTextSticky" : "chapterText"}>Final Product</div>
            </div>

        </div>


    )
}


export default ContentBar;