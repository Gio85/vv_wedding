import React, { useState, useEffect } from 'react'

export default function Header() {
  const [image, setImage] = useState('IMG_0001')
  const [index, setIndex] = useState(0)
  const images = [
    'IMG_0697',
    '4July2',
    'bridalParty1',
    'bridalParty2',
    // 'honeyMoon1',
    'honeyMoon2',
    'IMG_0002',
    'IMG_0003',
    'IMG_0005',
    'IMG_0009',
    'IMG_0012',
    'IMG_0018',
    'IMG_0019',
    'ourStory',
    'ourStory1',
    'ourStory2',
    'rsvp1',
    'rsvp2',
    'whereToStay2',
    'IMG_0001',
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setIndex(0)
      } else {
        setIndex(index => index + 1)
      }
      setImage(images[index])
    }, 4500)
    return () => clearInterval(interval)
  }, [images, index])

  const divStyle = {
    backgroundImage: `url(/images/vera_vincenzo/${image}.JPG)`,
  }

  return (
    <section className="hero">
      <div className="hero-body">
        <h1 className="title">Vera & Vincenzo</h1>
      </div>
      <div className="vera_vincenzo is-bordered" style={divStyle} />
    </section>
  )
}
