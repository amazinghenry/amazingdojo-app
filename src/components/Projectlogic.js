import Project from '../components/Project';
import Data from '../Project-data.js';


const Projectlogic = () => {
    const newProjectData = Data.map((data)=>{
        return <
            Project
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
 
export default Projectlogic;