import React from "react";

function ProjectItem({ name, about, technologies }) {
  const renderSpans = technologies.map(tech=> <span key={tech}>{tech}</span>)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {renderSpans}
        {/* <projectItem technologies = {project[0].technologies}/>
            <projectItem technologies = {project[1].technologies}/>
            <projectItem technologies = {project[2].technologies}/>}*/}
      
      </div>
    </div>
  );
}

export default ProjectItem;
