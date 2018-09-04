import React, { Component } from 'react'

export default class CommentList extends Component {
  displayComments = () => {
    if (this.props.comments) {
      return this.props.comments.map(comment => (
        <p
          style={{
            padding: 10,
            width: 314,
            borderRadius: 3,
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
          }}
        >
          {comment}
        </p>
      ))
    }
  }

  render() {
    return (
      <div className="comments" style={{ position: 'relative', top: 40 }}>
        {this.displayComments()}
      </div>
    )
  }
}
