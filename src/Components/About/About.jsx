import aboutimg from './../../Assets/portfolio-img.png';
import aboutCSS from "./../About/About.module.css";

const About = () => {
    return (
        <div className={`${aboutCSS.about_wrapper} section`} id='about'>
            <div className="section_title">
                <h2>About Me</h2>
            </div>
            <div className={aboutCSS.about}>
                <div className={aboutCSS.aboutImg}>
                    <img src={aboutimg} alt="img-about" loading='lazy' />
                </div>
                <div className={aboutCSS.about_content}>
                    <h3>Hello I M Monu Tomar</h3>
                    <p>I'm dedicated to building responsive, visually impressive websites and web apps using clean, efficient code and modern technologies like React and JavaScript.</p>
                    <div className={aboutCSS.details}>
                        <div className={aboutCSS.detail}>
                            <p><strong>Email :</strong> monusinghtomar107@gmail.com </p>
                            <p><strong>Address :</strong> Noida Uttar Pradesh </p>
                            <p><strong>Nationality :</strong> Indian </p>
                        </div>
                        <div className={aboutCSS.detail}>
                            <p><strong>Github : </strong><a href="https://github.com/Monu-Tomar">Monu-Tomar</a></p>
                            <p><strong>Linkedin : </strong><a href="https://www.linkedin.com/in/monu-tomar-bb6432249/">Monu Tomar</a></p>
                        </div>
                    </div>
                    {/* <button>More About <i className='ri-user-line'></i></button> */}
                </div>
            </div>

        </div>
    );
}

export default About;