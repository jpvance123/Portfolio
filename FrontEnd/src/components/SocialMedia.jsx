import React from 'react'
import { BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';


const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a target="_blank" rel="noreferrer" href="https://twitter.com/JPVSolutions">
      <BsTwitter />
    </a>
    </div>
    <div>
    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/congrats-you-have-made-it/">
      <BsLinkedin />
      </a>
    </div>
    <div>
    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jpvance123/">
      <BsInstagram />
    </a>
    </div>
  </div>
);

export default SocialMedia