import projectCSS from './../Projects/Project.module.css';
import projectimg1 from './../../Assets/project1.png';
import projectimg2 from './../../Assets/project2.png';
import projectimg3 from './../../Assets/project3.png';
import projectimg4 from './../../Assets/project4.png';
import projectimg5 from './../../Assets/project5.png';
import projectimg6 from './../../Assets/project6.png';
import projectimg7 from './../../Assets/project7.png';
import projectimg8 from './../../Assets/project8.png';

const Project = () => {
    return (
        <div className={`${projectCSS.project_wrapper} section`} id='project'>
            <div className="section_title">
                <h2>My Projects</h2>
            </div>
            <div className={projectCSS.project_cards}>
                <div className={projectCSS.project_card}>
                    <a href="https://monu-tomar.github.io/Recipe-App/" target='blank'>
                        <div className={projectCSS.projectImg}>
                            <img src={projectimg1} alt="Project_img" loading='lazy' />
                        </div>
                    </a>
                    <div className={projectCSS.project_content}>
                        <h4>PSD to HTML <span>PSD Design , HTML , CSS , Javascript</span></h4>
                        <a href="https://monu-tomar.github.io/Recipe-App/" target='blank'><i className='ri-arrow-right-line'></i></a>
                    </div>
                </div>
                <div className={projectCSS.project_card}>
                    <a href="https://monu-tomar.github.io/weather-api/" target='blank'>
                        <div className={projectCSS.projectImg}>
                            <img src={projectimg2} alt="Project_img" loading='lazy' />
                        </div>
                    </a>
                    <div className={projectCSS.project_content}>
                        <h4>Weather Web App <span>Application Design , HTML , CSS, Javascript, API </span></h4>
                        <a href="https://monu-tomar.github.io/weather-api/" target='blank'><i className='ri-arrow-right-line'></i></a>
                    </div>
                </div>
                <div className={projectCSS.project_card}>
                    <a href="https://monu-tomar.github.io/Calculator/" target='blank'>
                        <div className={projectCSS.projectImg}>
                            <img src={projectimg3} alt="Project_img" loading='lazy' />
                        </div>
                    </a>
                    <div className={projectCSS.project_content}>
                        <h4>Calculator web App<span>Calculator Page , HTML , CSS  , Javascript </span></h4>
                        <a href="https://monu-tomar.github.io/Calculator/" target='blank'><i className='ri-arrow-right-line'></i></a>
                    </div>
                </div>
                <div className={projectCSS.project_card}>
                    <a href="https://image-application.netlify.app/" target='blank'>
                        <div className={projectCSS.projectImg}>
                            <img src={projectimg4} alt="Project_img" loading='lazy' />
                        </div>
                    </a>
                    <div className={projectCSS.project_content}>
                        <h4>Image Search App <span>Photograph , API , Reactjs , Javascript </span></h4>
                        <a href="https://image-application.netlify.app/" target='blank'><i className='ri-arrow-right-line'></i></a>
                    </div>
                </div>
                <div className={projectCSS.project_card}>
                    <a href="https://kitchen-kingdom.vercel.app/" target='blank'>
                        <div className={projectCSS.projectImg}>
                            <img src={projectimg5} alt="Project_img" loading='lazy' />
                        </div>
                    </a>
                    <div className={projectCSS.project_content}>
                        <h4>Kitchen Kingdom<span>Mordern App Design , Breakfast Ordering Page , Redux ,react-toastify , Reactjs, Javascript </span></h4>
                        <a href="https://kitchen-kingdom.vercel.app/" target='blank'><i className='ri-arrow-right-line'></i></a>
                    </div>
                </div>
                <div className={projectCSS.project_card}>
                    <a href="https://note-keeper-taupe.vercel.app/" target='blank'>
                        <div className={projectCSS.projectImg}>
                            <img src={projectimg6} alt="Project_img" loading='lazy' />
                        </div>
                    </a>
                    <div className={projectCSS.project_content}>
                        <h4>Note Keeper<span>Simple app design , Daily notes keeper application , react-toastify , Api , Mock Api , Reactjs , Javascript </span></h4>
                        <a href="https://note-keeper-taupe.vercel.app/" target='blank'><i className='ri-arrow-right-line'></i></a>
                    </div>
                </div>
                <div className={projectCSS.project_card}>
                    <a href="https://clothify-kappa.vercel.app/" target='blank'>
                        <div className={projectCSS.projectImg}>
                            <img src={projectimg7} alt="Project_img" loading='lazy' />
                        </div>
                    </a>
                    <div className={projectCSS.project_content}>
                        <h4>Clothify<span>Simple app design , E-commerce , Cloth website , Multiple page design , Reactjs , Javascript </span>
                        </h4>
                        <a href="https://clothify-kappa.vercel.app/" target='blank'><i className='ri-arrow-right-line'></i></a>
                    </div>
                </div>
                <div className={projectCSS.project_card}>
                    <a href="https://monu-ecommerce.vercel.app/" target='blank'>
                        <div className={projectCSS.projectImg}>
                            <img src={projectimg8} alt="Project_img" loading='lazy' />
                        </div>
                    </a>
                    <div className={projectCSS.project_content}>
                        <h4>Tech Haven<span>Simple app design , E-commerce , mordern website , Multiple page design , Reactjs , Javascript, Redux js , Redux-toolkit </span>
                        </h4>
                        <a href="https://monu-ecommerce.vercel.app/" target='blank'><i className='ri-arrow-right-line'></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Project;