import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let { title, description, image, linktoarticle, author, date, source } = this.props;
        return (
            <>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}... <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>{source}<span class="visually-hidden">Source</span></span>
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={linktoarticle} className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </>
        )
    }
}

export default Newsitem