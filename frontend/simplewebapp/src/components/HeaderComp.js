import React from 'react'

function Home() {
  return (
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand"><h3 style={{marginLeft: "10px"}}>ToDo</h3></a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" style={{marginLeft: "20px"}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >What to do?</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
  )
}

export default Home