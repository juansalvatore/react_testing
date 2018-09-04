import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    comment: '',
    comments: [],
  }

  handleSubmit = e => {
    if (this.state.comment) {
      this.setState(prevState => ({
        comments: [...prevState.comments, this.state.comment],
      }))
      this.setState({ comment: '' })
    }
    e.preventDefault()
  }

  handleInput = e => {
    this.setState({ comment: e.target.value })
  }

  handleKeyPress = e => {
    if (this.state.comment) {
      if (e.key === 'Enter') {
        this.setState(prevState => ({
          comments: [...prevState.comments, this.state.comment],
        }))
        this.setState({ comment: '' })
        e.preventDefault()
      }
    }
  }

  displayComments = () => {
    if (this.state.comments) {
      return this.state.comments.map(comment => (
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
      <div
        className="App"
        style={{
          width: '100%',
          padding: 20,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 40,
        }}
      >
        <form onSubmit={this.handleSubmit}>
          <textarea
            style={{
              width: 314,
              height: 140,
              fontSize: 20,
              resize: 'none',
              border: '1px solid #ccc',
            }}
            value={this.state.comment}
            onChange={this.handleInput}
            onKeyPress={this.handleKeyPress}
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
            disabled={!this.state.comment ? true : false}
          >
            Submit
          </button>
        </form>
        <div className="comments" style={{ position: 'relative', top: 40 }}>
          {this.displayComments()}
        </div>
      </div>
    )
  }
}

export default App
