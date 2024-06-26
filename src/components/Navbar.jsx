import React from 'react'

const Navbar = () => {
  return (
    <div>
      
        <nav className="navbar navbar-expand-lg .bg-dark.bg-gradient">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" target='target_main' href="https://portfolio-dev-usman-awan.vercel.app/">Portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" target='target_main' href="https://github.com/UsmanDevCraft">Github</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" target='target_main' href="https://www.linkedin.com/in/muhammad-usman-awan-a77906280/">LinkedIn</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar
