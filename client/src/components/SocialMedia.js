import React from 'react'
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.instagram.com/ayoubmaimmadi/" target="_blank">
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://github.com/AyoubMaimmadi" target="_blank">
        <BsGithub />
      </a>
    </div>
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
