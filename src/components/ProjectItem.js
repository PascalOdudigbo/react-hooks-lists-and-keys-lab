import React from "react";
import { nanoid } from 'nanoid';

function ProjectItem({ name, about, technologies }) {
  const technologySpans = technologies.map(technology=> <span key={nanoid()}>{technology}</span>);
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologySpans}
      </div>
    </div>
  );
}

export default ProjectItem;
