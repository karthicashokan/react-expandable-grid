import React from 'react'
import assert from 'assert'
import TestUtils from 'react-addons-test-utils'
import ReactExpandableGrid from '../src'

const renderer = (Component) => {
  const shallowRenderer = TestUtils.createRenderer()
  shallowRenderer.render(Component)
  return shallowRenderer.getRenderOutput()
}

describe('ReactExpandableGrid', () => {

})
