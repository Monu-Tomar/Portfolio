import projectCSS from './../Projects/Project.module.css';
import projectimg1 from './../../Assets/project1.png';
import projectimg2 from './../../Assets/project2.png';
import projectimg3 from './../../Assets/project3.png';
import projectimg4 from './../../Assets/project4.png';
import projectimg5 from './../../Assets/project5.png';

const Project=()=>{
    return(
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
                        <h4>Kitchen Kingdom<span>Mordern App Design , Breakfast Ordering Page , Redux , Reactjs , Javascript </span></h4>
                        <a href="https://kitchen-kingdom.vercel.app/" target='blank'><i className='ri-arrow-right-line'></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Project;