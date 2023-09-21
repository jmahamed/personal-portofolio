'use client';
import './Projects.css'
import data from './projects-data.JSON'

const Projects = () => {
    return (
        <section className="container" id='projects-section'>

        <div className="projects">

        {data.map(project => {
            return (
                <div key={project.id} className="project">
                <img width={440} src={project.image} alt="" />
                <div className="project-details">
                    <h3>{project.title}</h3>
                    <p>{project.detail}</p>
                    <a href={project.live}>
                    <button className="live-demo">Live Demo</button>
                    </a>
                    <a href={project.code}>
                    <button className="see-code">See Code</button>
                    </a>
                </div>
            </div>
            )
        })}       

            

            {/* <div className="project">
                <img width={440}src="./images/project2.png" alt="" />
                <div className="project-details">
                    <h3>React Weather App</h3>
                    <p>This app is made using React and Vite. I used a weather API to fetch data and plain html and css to build the UI. You just type the city you want to look up, press enter and the weather information pops up. I used useState to check weather the weather is hot and a corresponding background image is rendered when the location is typed in.</p>
                    <a href="https://weather-app-react-vite.vercel.app/">
                    <button className="live-demo">Live Demo</button>
                    </a>
                    <a href="https://github.com/jmahamed/weather-app-react-vite/blob/master/src/App.jsx">
                    <button className="see-code">See Code</button>
                    </a>
                </div>
            </div>

            <div className="project">
                <img width={440}src="./images/project3.png" alt="" />
                <div className="project-details">
                    <h3>Bookmark Landing Page</h3>
                    <p>This website is made using HTML, CSS and javascript. It features an Interactive accordion and a tabbed section. When you click on a tab the corresponding card appears. This website is also fully responsive with a mobile navbar.</p>
                    <a href="https://jmahamed.github.io/bookmark-landing-page/">
                    <button className="live-demo">Live Demo</button>
                    </a>
                    <a href="https://github.com/jmahamed/bookmark-landing-page">
                    <button className="see-code">See Code</button>
                    </a>
                </div>
            </div>

            <div className="project">
                <img width={440}src="./images/project4.png" alt="" />
                <div className="project-details">
                    <h3>Easybank Landing Page</h3>
                    <p>This website is made using HTML, CSS and javascript. Fully responsive with a mobile navbar. I really put my CSS layout skills to the test with this one!</p>
                    <a href="https://bank-landing-page-liard.vercel.app">
                    <button className="live-demo">Live Demo</button>
                    </a>
                    <a href="https://github.com/jmahamed/bank-landing-page">
                    <button className="see-code">See Code</button>
                    </a>
                </div>
            </div> */}
        </div>   
        </section>
    );
}

export default Projects;