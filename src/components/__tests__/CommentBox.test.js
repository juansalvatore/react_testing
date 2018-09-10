import React from 'react'
// import full dom, not needed but I don't care (just trying it out)
import { mount } from 'enzyme'
import App from 'components/App'
import CommentBox from 'components/CommentBox'

let wrapped
beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

afterEach(() => {
  wrapped.unmount()
})

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

describe('the text area', () => {
  beforeEach(() => {
    wrapped = mount(<App />)
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'new comment',
      },
    })
    // Simulate re-render as if setState was being called
    wrapped.update()
  })

  it('has a text area that users can type in', () => {
    expect(
      wrapped
        .find('CommentBox')
        .find('textarea')
        .prop('value')
    ).toEqual('new comment')
  })

  it('empties textarea on submit', () => {
    wrapped.find('form').simulate('submit')
    wrapped.update()
    expect(
      wrapped
        .find('CommentBox')
        .find('textarea')
        .prop('value')
    ).toEqual('')
  })
})
