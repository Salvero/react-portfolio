import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  const linkedinClick = () => {
    window.open('https://www.linkedin.com/in/salmanakram-7i/')
  }
  const gitHubClick = () => {
    window.open('https://github.com/Salvero')
  }

  const twitterClick = () => {
    window.open('https://twitter.com/salvero3i')
  }

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello, I am <em class="keywords">Salman</em>, you can call me{' '}
            <em class="keywords">"Salmon" (nickname)</em> either. I'm a very
            ambitious front-end developer looking for a role in an established
            IT company with the opportunity to work with the latest technologies
            on challenging and diverse projects.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.{' '}
            <em class="keywords">I am looking to work remotely</em> as a member
            of a team of software designers to develop applications for mobile
            and web applications.
          </p>
          <p>
            I'm familiar with different coding languages such as{' '}
            <em class="keywords">
              JavaScript, React, Node.js, Express.js, Next.js, TailwindCSS,
              Rapid API, GitHub, HTML, SCSS and always learning everyday.
            </em>
          </p>
          <button className="aboutLinks" onClick={linkedinClick}>
            Linkedin
          </button>
          <button className="aboutLinks" onClick={gitHubClick}>
            GitHub
          </button>
          <button className="aboutLinks" onClick={twitterClick}>
            Twitter
          </button>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
