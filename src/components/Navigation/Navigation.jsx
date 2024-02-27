import React from 'react'
import ConnectedAccount from './ConnectedAccount'
import ConnextedNewNetwork from './ConnextedNewNetwork'

const Navigation = () => {
  return (
    <nav>
        <ConnectedAccount></ConnectedAccount>
        <ConnextedNewNetwork></ConnextedNewNetwork>
    </nav>
  )
}

export default Navigation