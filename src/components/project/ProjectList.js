import ProjectCard from './ProjectCard';
import Data from '../../data/projectData.js';
import './project.css';


const ProjectList = () => {
    const newProjectData = Data.map((data)=>{
        return <
            ProjectCard
            key = {data.id}
            coverImage = {data.coverImage}
            url = {data.url}
            title = {data.title}
        />
    })

    return ( 
        <section className="container-fluid project" id="projects">
        <div className="container">
            
            <div className='webdesign-group'>
                <h3 className='webdesign-title'>Web Development</h3>
                <p className='webdesign-text'>In order to ensure the best viewing and user experience, responsive web design entails building websites that adjust to different screen sizes and devices. This can include CSS media queries, flexible images, and fluid grids.</p>
                <div className="project-group">
                {newProjectData}
                </div>
            </div>

        </div>
        </section>
    );
}
 
export default ProjectList;