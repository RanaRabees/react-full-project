/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Myfooter() {
  return (
    <>
      <footer className="footer bg-gray-200">
        <div className="container mx-auto items-center justify-between">
          <div className="flex flex-wrap">
            <div className="flex items-center">
              <img src="/logo.png" alt="Computers Shop" className="inline-block h-10 w-10 mr-2" />
              <a href="/" className="inline-block text-xl text-gray-800 font-bold pr-2">Computers Shop</a>
              <ul className="social-media">
                <li><a href="https://www.facebook.com/profile.php?id=100088975870807"><i className="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/RanaRabees"><i className="fa fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/in/rana-rabees-064830251/"><i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg text-gray-800"> Created By &copy; RanaVerse |  2023 All rights reserved.</p>
            </div>
          </div>
          <section className="follow" >
            <a href="https://facebook.com">
              <img className="hover:rounded-md transition-all hover:shadow-2xl shadow-red-400 hover:border-2 border-red-400" src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com">
              <img className="hover:rounded-md transition-all hover:shadow-2xl shadow-red-400 hover:border-2 border-red-400" src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" />
            </a>
            <a href="https://linkedin.com">
              <img className="hover:rounded-md transition-all hover:shadow-2xl shadow-red-400 hover:border-2 border-red-400" src="https://i.ibb.co/b30HMhR/social-linkedin.png" alt="Linkedin" />
            </a>
          </section>
        </div>

      </footer>
    </>
  )
}

export default Myfooter
