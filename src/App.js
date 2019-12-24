import React from 'react'
import { Root, addPrefetchExcludes } from 'react-static'
//
import AppRoot from './ui/layouts/AppRoot';

// Any routes that start with 'dynamic' will be treated as non-static routes

function App() {
  return (
    <Root>
      <AppRoot />
    </Root>
  )
}

export default App
