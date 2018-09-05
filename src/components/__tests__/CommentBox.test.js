import React from 'react'
// import full dom, not needed but I don't care (just trying it out)
import { mount } from 'enzyme'
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

it('has a text area that users can type in', () => {
  console.log(
    wrapped.find('textarea').simulate('change', {
      target: {
        value: 'new comment',
      },
    })
  )
})
