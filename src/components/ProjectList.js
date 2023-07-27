import ProjectCard from './ProjectCard';
import Data from '../data/projectData.js';


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
        <div className="mycontainer">
            <h3 className='section-title'>FEATURED PROJECTS</h3>
            <div className="project-group">
                {newProjectData}
            </div>
        </div>
        </section>
    );
}
 
export default ProjectList;