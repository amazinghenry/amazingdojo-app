const Project = ({title, url, coverImage}) => {
    return ( 
      <div className="project-item">
        <div className="project-image-group">
        <img src = {`/images/${ coverImage }` } className="project-image" alt= { title } />
        </div>
        <div className="project-title-group">
        <h3 className="project-title">{title}</h3>
         <a className = "project-url"href= {url} >click to view live <i className="fa-solid fa-arrow-right"></i></a>
         </div>
        </div>
     );
}
 
export default Project;