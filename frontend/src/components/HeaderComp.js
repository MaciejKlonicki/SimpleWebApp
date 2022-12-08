import React from 'react'

function Home() {
  return (
<div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href='/'><h3 style={{marginLeft: "10px"}}>ToDo</h3></a>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href='/' style={{marginLeft: "20px"}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/todos'>What to do?</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
  )
}

export default Home