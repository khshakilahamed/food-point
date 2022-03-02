import React, { useState } from 'react';
import { useEffect } from 'react';
import { FaAngleDoubleUp } from "react-icons/fa";


const BackToTop = () => {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopBtn(true);
            }
            else{
                setBackToTopBtn(false);
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopBtn && (
                <button 
                    className='fixed flex justify-center items-center bottom-12 right-12 h-12 w-12 text-white bg-lime-600 rounded-full z-10'
                    onClick={scrollUp}
                ><FaAngleDoubleUp className='text-xl'/></button>
            )}
        </div>
    );
};

export default BackToTop;




{/* <div>
    {backToTopBtn && (
        <button style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px"
        }}
        onClick={scrollUp}
        >^</button>
    )}
</div> */}