import React from 'react'

const Deployfrontend = () => {
  return (
    <div className='container pb-5'>
      <h1 className='text-center fw-bold text-white'>Deploying the Frontend of your MERN application:</h1>

    <p className='text-left my-3 fs-3 text-white'>Step 1: Before pushing your Frontend to Github, in the Frontend folder wherever you fetched the api of localhost, replace the localhost by the Backend url. Like in my case I changed <code>"http://localhost:/5000/api/auth"</code> to <code>"https://cloud-book-backend-eta.vercel.app/api/auth"</code></p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_13.png" className="home-img" alt="..."></img>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 2: Now push the Frontend to Github.</p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_10.png" className="home-img" alt="..."></img>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 3: Make a new project on vercel by clicking tne <code>Add New</code>.</p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_05.png" className="home-img" alt="..."></img>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 4: Import the Frontend Repo in vercel.</p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_11.png" className="home-img" alt="..."></img>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 5: Name your project, give environment variables if any, otherwise no need for them. Deploy your Frontend project.</p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_12.png" className="home-img" alt="..."></img>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 6: Your Frontend will be deployed successfully. Check your hosted website by clicking the url.</p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_14.png" className="home-img" alt="..."></img>
    </div>

    </div>
  )
}

export default Deployfrontend
