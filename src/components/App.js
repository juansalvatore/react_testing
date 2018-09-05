import React, { Component } from 'react'
import '../App.css'
import CommentBox from 'components/CommentBox'
import CommentList from 'components/CommentList'

class App extends Component {
  state = {
    comment: '',
    comments: [],
  }

  handleSubmit = e => {
    e.preventDefault()

    if (!this.state.comment) {
      return
    }

    this.setState(prevState => ({
      comments: [...prevState.comments, this.state.comment],
    }))
    this.setState({ comment: '' })
  }

  handleInput = e => {
    this.setState({ comment: e.target.value })
  }

  render() {
    return (
      <div
        className="App"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: 40,
        }}
      >
        <CommentBox
          comment={this.state.comment}
          handleSubmit={this.handleSubmit}
          handleInput={this.handleInput}
        />

        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default App
