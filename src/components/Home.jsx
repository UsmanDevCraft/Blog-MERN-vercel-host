import React from 'react'
import "../App.css"

const Home = () => {
  return (
    <div className='container padding-home'>
    
    <div className="container d-flex justify-content-center align-items-center">
        <img src="/canva_blog_front_01.png" className="home-img" alt="..."></img>
    </div>

    <div className="container padding-home pb-5">
        <h1 className='text-center fw-bold text-white'>How to Deploy a FullStack </h1>
        <h1 className='text-center fw-bold text-white'>NodeJs and Express App on </h1>
        <h1 className='text-center fw-bold text-white'>Vercel </h1>
        <p className='text-center fs-2 p-text-color'>A full guide on deploying your fullstack MERN app on</p>
        <p className='text-center fs-2 p-text-color'>Vercel, covering everything from deploying your Express</p>
        <p className='text-center fs-2 p-text-color'>API to connecting it with the frontend   </p>
    </div>

    <div className="container d-flex justify-content-center align-items-center">
        <div className="card w-75 mb-3 card-bg-color">
            <div className="card-body">
                <h3 className="card-title">Table of contents</h3>
                <a href="#intro" className='a-tag-card card-text fs-4 lh-lg'><p className="card-text fs-4">Introduction</p></a>
                <a href="#first" className='a-tag-card card-text fs-4 lh-lg'><p className="card-text fs-4">First Step: Setting up your environment</p></a>
                <a href="#second" className='a-tag-card card-text fs-4 lh-lg'><p className="card-text fs-4">Second Step: Kicking off deployment on Vercel</p></a>
                <a href="#deployback" className='a-tag-card card-text fs-4 lh-lg'><p className="card-text fs-4">	&#8226; Deploying the Backend or API of your MERN application:</p></a>
                <a href="#deployfront" className='a-tag-card card-text fs-4 lh-lg'><p className="card-text fs-4">	&#8226; Deploying the Frontend of your MERN application:</p></a>
                <a href="#errors" className='a-tag-card card-text fs-4 lh-lg'><p className="card-text fs-4">Finally, Checking and Allowing CORS policy after deployment</p></a>
                <a href="#conclude" className='a-tag-card card-text fs-4 lh-lg'><p className="card-text fs-4">Conclusion</p></a>
            </div>
        </div>
    </div>

    <div className="container padding-home pb-5">
        <p className='text-left fs-3 text-white'>Hello there, Welcome back to my page. Whether you're a returning visitor or visiting for the first time, Voila! I'm more than thrilled to have you here. Recently, I completed a full-stack project named "CloudBook".</p>
        <br />
        <p className='text-left fs-3 text-white'>Although after sharing it with my peers and the public in general, some developer friends of mine informed me that they struggled with deploying the project. As a result, I decided to write this insightful article on deploying a MERN stack project using Vercel. If you're interested in learning how to deploy a full MERN stack app on Vercel, you're right at the spot. Please join me and let's dive right in.</p>
    </div>

    </div>
  )
}

export default Home
