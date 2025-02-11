import { ReactTyped } from 'react-typed';
import headerCSS from "./../Header/Header.module.css";
import Resume from './../../Assets/Monu-Tomar.pdf';

const Header = () => {
    return (
        <>
            <div className={headerCSS.header_wrapper} id='home'>
                <small>Hello,👋 There </small>
                <h2> I M
                    <span>
                        <ReactTyped
                            strings={[" Monu Tomar", " React Developer", " Frontend Developer"]}
                            typeSpeed={60}
                            backSpeed={60}
                            loop={true}
                        />
                    </span>
                </h2>
                <p>Frontend Developer | React Developer | Passionate About Front-End Technologies | Seeking Entry-Level Opportunities</p>
                <div className={headerCSS.social}>
                    <a href="https://github.com/Monu-Tomar"><i className='ri-github-line'></i></a>
                    <a href="https://www.linkedin.com/in/monu-tomar-bb6432249/"><i className='ri-linkedin-line'></i></a>
                    <a href="tel:9870700751"><i className='ri-phone-line'></i></a>
                    <a href="//wa.me/9870700751 "><i className='ri-whatsapp-line'></i></a>
                </div>
                <button><a href={Resume} target='blank'>Download CV <i className='ri-download-line'></i></a></button>
            </div>
        </>
    );
}
export default Header;