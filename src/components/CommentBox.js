import React, { Component } from 'react'

export default class CommentBox extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <h4 style={{ marginBottom: 5 }}>Add a comment</h4>
        <textarea
          style={{
            width: 314,
            height: 140,
            fontSize: 20,
            resize: 'none',
            border: '1px solid #ccc',
          }}
          value={this.props.comment}
          onChange={this.props.handleInput}
        />
        <button
          className="btn"
          style={{
            display: 'block',
            width: 320,
            height: 30,
            border: '1px solid steelBlue',
            color: 'steelBlue',
            fontSize: 14,
            borderRadius: 3,
          }}
          disabled={!this.props.comment ? true : false}
        >
          Submit comment
        </button>
      </form>
    )
  }
}
