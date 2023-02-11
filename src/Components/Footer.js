import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
      <>
      <footer className=" footer text-center text-white my-3" style={{backgroundColor: "#2e3236"}}>
        <div className="container pt-4">
          <section className="mb-4">
            
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark" ><i className="fab fa-facebook-f text-white"></i></a>
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark" ><i className="fab fa-twitter text-white"></i></a>
            <a className="btn btn-link btn-floating btn-lg text-dark m-1 text-white" href="#!" role="button" data-mdb-ripple-color="dark" ><i className="fab fa-google text-white"></i></a>
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark" ><i className="fab fa-instagram text-white"></i></a>
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark" ><i className="fab fa-linkedin text-white"></i></a>
            <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark" ><i className="fab fa-github text-white"></i></a>

          </section>
        </div>
        <div className="text-center p-3 text-white bg-gradient" style={{backgroundColor:"#000000"}}>
          © 2020 Copyright:
          Made with <i className="fa-solid fa-heart"></i> by Yamini Shrivastava
        </div>
      </footer>
    </>
  )
}