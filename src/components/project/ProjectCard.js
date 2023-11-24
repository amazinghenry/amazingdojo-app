import { Link } from "react-router-dom";
import './project.css';

const Project = ({title, url, coverImage}) => {
    return ( 
      <Link to = {url} className="project-item">
        <div className="project-image-group">
        <img src = {`/images/${ coverImage }` } className="project-image" alt= { title } />
        </div>
        <div className="project-title-group">
        <h3 className="project-title">{title}</h3>
         </div>
        </Link>
     );
}
 
export default Project;