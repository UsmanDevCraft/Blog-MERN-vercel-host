import React from 'react'

const Firststep = () => {
  return (
    <div className='container pb-5'>
      <h1 className='text-left fw-bold text-white'>First Step: Setting up your environment</h1>
      <p className='text-left fs-3 text-white'>Before we dive into deploying our app, let's make sure we have the right tools installed. Here are some of the most important things you'll need:</p>
      <p className='text-left fs-3 text-white'>	&#8226; Node.js and npm: You can download and install Node.js from the official website. Npm comes bundled with Node.js.</p>
      <p className='text-left fs-3 text-white'>	&#8226; Git: This version control system will help you keep track of changes to your code. Download Git from the official website.</p>
      <p className='text-left fs-3 text-white'>	&#8226; A code editor: Choose a code editor that suits your preferences. We recommend Visual Studio Code, which is free and easy to use.</p>
      <p className='text-left fs-3 text-white'>	&#8226; Express.js: The popular web framework for Node.js, It provides several features such as routing, middleware support, and template engine integration, making it easier for developers to build server-side applications and APIs.</p>
      <p className='text-left fs-3 text-white'>Once you have these tools installed, you are one step ahead and almost ready to go. Open the terminal and navigate to your project folder by typing</p>
      <button type="button" className="btn btn-secondary my-3">cd path/to/your/folder</button>
      <p className='text-left fs-3 text-white'>Ensure that both the client and server of your application are ready for development, add another terminal for the server, navigate its server path and run both servers, Your server needs to be connected to your database and listening on the specified port(check out my article to get more insight on connecting your app to a database), while your client should be accessible through the browser on your localhost.</p>
      <p className='text-left fs-3 text-white'>Now that we have our environment set up, let's move on to deploying your app on vercel.</p>
    </div>
  )
}

export default Firststep
