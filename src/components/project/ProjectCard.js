import { Link } from "react-router-dom";
import './project.css';

const Project = ({title, url, coverImage}) => {
    return ( 
      <Link to = {url} className="project-item">
        <div className="project-image-group">
        <img src = {`/images/${ coverImage }` } className="project-image" alt= { title } />
        </div>
        <div className="project-title">{title}</div>
      </Link>
     );
}
 
export default Project;