import React from 'react'

const Checkcors = () => {
  return (
    <div className='container pb-5'>
      <h1 className='text-left fw-bold text-white'>Incase, if the Backend gives the error after hosting or not working.</h1>

      <p className='text-left my-3 fs-3 text-white'>I myself did undergo through some errors after I hosted my backend on vercel. This was because of two major reasons in the code:</p>

      <p className='text-left my-3 fs-3 text-white'>&#8226; MongoDB version</p>

      <p className='text-left my-3 fs-3 text-white'>&#8226; Express-Validator</p>

      <p className='text-left my-3 fs-3 text-white'>For fixing the errors, in your Backend folder, inside the package.json, you must need to change the mongoDB version from your current version to <code>^5.13.8</code>. And also in the Backend, you must comment out or remove the <code>"express-validator"</code></p>

    </div>
  )
}

export default Checkcors
