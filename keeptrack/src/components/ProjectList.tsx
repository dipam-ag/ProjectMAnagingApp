import React, { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}
<ul>
  <li>Project Name 1</li>
  <li>Project Name 2</li>
</ul>

function ProjectList ({ projects , onSave}: ProjectListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
          };
     const cancelEditing = () => {
         setProjectBeingEdited({});
              };
    const items = projects.map(project => (
      <div key={project.id} className="cols-sm">
         {project === projectBeingEdited ? (
            <ProjectForm   project={project} 
            onSave={onSave}
            onCancel={cancelEditing}/>
          ) : (
            <ProjectCard project={project} onEdit={handleEdit} />
          )}
      </div>
    ));
    return <div className="row">{items}</div>;
}
export default ProjectList;