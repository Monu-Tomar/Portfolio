import { useRef } from 'react';
import navCSS from './../nav/Nav.module.css';
const Nav=()=>{
    const nav=useRef();
    const menuHnadler=()=>{
        nav.current.classList.toggle(navCSS.showMenu);
    }
    const DarkTheme=()=>{
        document.body.setAttribute("Theme", "Dark")
    }
    const LightTheme=()=>{
        document.body.setAttribute("Theme", "Light")
    }
    LightTheme();

    const ThemeHandler=()=>{
        if(document.body.getAttribute("Theme")=="Light"){
            DarkTheme();
        }else{
            LightTheme();
        }
    }
    return(
        <>
        <div className={navCSS.Nav_wrapper}>
            <div className={navCSS.logo}>
                <a href="#">M</a>
            </div>
            <ul ref={nav}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={navCSS.nav_btns}>
                <li className='ri-moon-line' onClick={ThemeHandler}></li>
                <li className='ri-menu-line' onClick={menuHnadler}></li>
            </div>
        </div>
        </>
    );
}
export default Nav;