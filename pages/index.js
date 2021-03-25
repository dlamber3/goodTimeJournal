//[label /pages/index.js]
import Link from 'next/link';
import React, { Component } from 'react'
const linkStyle = {
  marginRight: 15
}

export default class extends Component {
  render () {
    return (
      <div>
      <div>Good Time Journal HomeScreen</div>
      <div> 
      <div>
          <Link href="/SignUp">
          <button>Sign Up</button>
          </Link>
      </div>
      </div>
      </div>
    )
  }
}


