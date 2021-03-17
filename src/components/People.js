import React, { Component } from 'react'

export class People extends Component {
    render() {
        return (
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src={this.props.peopleObj.avatar} alt="Card image cap" />
                <div className="card-body" >
                    <div className="position-relative" style={{ height: '200px' }}>
                        <div>
                            <h5 className="card-title">{`${this.props.peopleObj.first_name} ${this.props.peopleObj.last_name}`}</h5>
                            <p className="card-text">{this.props.peopleObj.email}</p>
                        </div>
                        <div className="my-3" style={{ overflowY: 'scroll', maxHeight: '80px' }}>
                            {this?.props.comments?.map((comment, idx) => {
                                return (<div key={comment.id}>
                                    {comment.comment}
                                </div>)
                            })}
                        </div>
                        <div className="d-flex justify-content-between position-absolute bottom-0">
                            < button className="btn btn-primary" onClick={() => this.props.view(this.props.peopleObj.id)}>View Details</button>
                            <button className="btn btn-danger" onClick={() => this.props.delete(this.props.peopleObj.id)}>Delete</button>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}

export default People
