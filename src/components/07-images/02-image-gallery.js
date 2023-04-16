import React from 'react'
import images from '../../assets/data/images.json'
import './02-image-gallery.scss'

const ImageGallery = () => {
  return (
    <div className='image-gallery-container'>
      <div>
        {
          images.map((image, index)=>{
            return (
              <div key={index}>
                <img 
                  src={require(`../../assets/img/${image.name}`)}
                  alt={image.title} 
                  title={image.title}
                  width={250}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ImageGallery