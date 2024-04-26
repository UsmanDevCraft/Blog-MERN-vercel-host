import React from 'react'

const Deploybackend = () => {
  return (
    <div className='container pb-5'>
      <h1 className='text-center fw-bold text-white'>Deploying the Backend or API of your MERN application:</h1>
      
    <p className='text-left my-3 fs-3 text-white'>Step 1: Your folder structure might be like this one:</p>
    <div className="container d-flex justify-content-center align-items-center mt-5 mb-3">
        <img src="/blog_ss_01.png" className="home-img img-topleft" alt="..."></img>
    </div>

    <p className='text-center fs-3 text-white'>OR</p>

    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_02.png" className="home-img img-topleft" alt="..."></img>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 2: Change the structure in the following way. Cut and paste the Backend file outside the Main folder so that to push both the folders to Github seperately.</p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_03.png" className="home-img img-topleft" alt="..."></img>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 3: Login to your Github account. Make a new repository for the Backend file only. Push the backend file to Github.</p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_04.png" className="home-img img-center-scale" alt="..."></img>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 4: Now Signup or Login into your vercel account. Click <code>Add New</code></p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_05.png" className="home-img scale-img-topright" alt="..."></img>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 5: Import your Backend Repo from Github on clicking the <code>Import</code> button.</p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_06.png" className="home-img img-center-scale" alt="..."></img>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 6: Give your Backend website a name and then click on <code>Deploy</code> to deploy your Backend.</p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_07.png" className="home-img image-cen-small" alt="..."></img>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 7: You will see this in your dashboard.</p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_08.png" className="home-img image-cen-small" alt="..."></img>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 8: Open your Backend folder on desktop. Make a new file named <code>vercel.json</code>. In this file write following code. Then push the changes to Github and reload the vercel page.</p>
    <div className="container d-flex justify-content-center align-items-center mt-4">
        <div className="card w-105 mb-3 card-bg-color">
            <div className="card-body">
            <div className="container d-flex justify-content-center align-items-center mt-3">
                <img src="/blog_ss_vercel.png" className="home-img vercel_code" alt="..."></img>
            </div>
            </div>
        </div>
    </div>

    <p className='text-left my-3 fs-3 text-white'>Step 9:Once your Backend is hosted successfully, go to your Backend folder, open in <code>VS Code</code>. In thunderclient or Postman (Whatever you use for API) Replace the localhost url with the Backend website url. Like in my case i did <code>"http://localhost:/5000/api/auth"</code> to <code>"https://cloud-book-backend-eta.vercel.app/api/auth"</code>. This will work correclty if the Backend is hosted.</p>
    <div className="container d-flex justify-content-center align-items-center mt-3">
        <img src="/blog_ss_09.png" className="home-img scale-top-only" alt="..."></img>
    </div>

    </div>
  )
}

export default Deploybackend
