import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://www.instagram.com/ayoubmaimmadi/" target="_blank">
      <div>
        <BsInstagram />
      </div>
    </a>
    <a href="https://github.com/AyoubMaimmadi" target="_blank">
      <div>
        <BsGithub />
      </div>
    </a>
    <div>
      <a href="https://www.facebook.com/AYOUB.MAIMMADI1/" target="_blank">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/Ayoubmaimmadi2" target="_blank">
        <BsTwitter />
      </a>
    </div>
  </div>
)

export default SocialMedia
