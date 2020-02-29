import React, { useState, useEffect } from 'react'
import { Fade } from 'react-slideshow-image'

const slideImages = [
  '/images/vera_vincenzo/IMG_0121.JPG',
  '/images/vera_vincenzo/IMG_0334.JPG',
  '/images/vera_vincenzo/IMG_2598.JPG',
  '/images/vera_vincenzo/IMG_3544.JPG',
  '/images/vera_vincenzo/IMG_9242.JPG',
  '/images/vera_vincenzo/IMG_1303.JPG',
  '/images/vera_vincenzo/IMG_1928.JPG',
  '/images/vera_vincenzo/IMG_2283.JPG',
  '/images/vera_vincenzo/IMG_0697.JPG',
  '/images/vera_vincenzo/4July2.JPG',
  '/images/vera_vincenzo/bridalParty1.JPG',
  '/images/vera_vincenzo/bridalParty2.JPG',
  '/images/vera_vincenzo/honeyMoon1.JPG',
  '/images/vera_vincenzo/honeyMoon2.JPG',
  '/images/vera_vincenzo/IMG_0002.JPG',
  '/images/vera_vincenzo/IMG_0003.JPG',
  '/images/vera_vincenzo/IMG_0005.JPG',
  '/images/vera_vincenzo/IMG_0009.JPG',
  '/images/vera_vincenzo/IMG_0012.JPG',
  '/images/vera_vincenzo/IMG_0018.JPG',
  '/images/vera_vincenzo/ourStory.JPG',
  '/images/vera_vincenzo/ourStory1.JPG',
  '/images/vera_vincenzo/ourStory2.JPG',
  '/images/vera_vincenzo/rsvp2.JPG',
  '/images/vera_vincenzo/whereToStay2.JPG',
  '/images/vera_vincenzo/IMG_0001.JPG',
]

const fadeProperties = {
  duration: 5000,
  transitionDuration: 800,
  infinite: true,
  indicators: false,
  arrows: false,
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function SlideShow() {
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
  }

  const { width } = useWindowDimensions()
  if (width <= 400) {
    slideImages.splice(slideImages.indexOf('/images/vera_vincenzo/honeyMoon2.JPG'), 1)
    slideImages.splice(slideImages.indexOf('/images/vera_vincenzo/IMG_0005.JPG'), 1)
  }

  return (
    <section className="hero">
      <div className="hero-body">
        <h1 className="title">Vera & Vincenzo</h1>
      </div>
      <div className="slide-container">
        <Fade {...fadeProperties}>
          {slideImages &&
            slideImages.map(image => {
              return (
                <div className="each-slide">
                  <div style={{ backgroundImage: `url(${image})` }} />
                </div>
              )
            })}
        </Fade>
      </div>
    </section>
  )
}
