import React from "react";
import './Nav.css'
import { useState } from "react";
import { useEffect } from "react";


function Nav() {
    const [show , setShow]= useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>600){
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    })
    return (
        <div className={` ${show && 'nav-bg'} nav`}>
            <img src="ne" alt="n" />
        </div>
    )
}
export default Nav