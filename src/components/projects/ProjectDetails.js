import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-contact">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem excepturi tempore beatae voluptatum et in quia explicabo expedita esse est sunt inventore, ab veritatis. Natus saepe eaque eos cupiditate velit?</p>
                </div>
                <div className="card-action grey-lighten-4 grey-text">
                    <div>Posted by the Net Ninja</div>
                    <div>2nd of September, 2am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

