import './index.css'

const ProjectItem = props => {
  const {eachProject} = props
  const {projectId, imageURL, title, description} = eachProject

  return (
    <>
      <li className="project-item-container">
        <img
          src={imageURL}
          alt={`Project-item${projectId}`}
          className="project-item-image"
        />
        <div className="project-item-details-container">
          <h1 className="project-item-title">{title}</h1>
          <p className="project-item-description">{description}</p>
        </div>
      </li>
    </>
  )
}

export default ProjectItem
