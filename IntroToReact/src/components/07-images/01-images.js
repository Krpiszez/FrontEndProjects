import React from 'react'
import northernLights from "../../assets/img/image1.jpg"

const Images1 = () => {
    const marginLeft = {
        marginLeft : "1rem"
    }
  return (
    <div>
        <img src="./image6.jpg" width={300} alt="image6" title='image6'/>

        <img src="https://picsum.photos/id/2/300/200" alt="computer" title='computer' style={marginLeft}/>

        <img src={northernLights} width={300} alt="northernLights" title='northernLights'/>

        <img 
            src={require("../../assets/img/image2.jpg")} 
            alt=""
            title=''
            width={300}
        />
    </div>
  )
}

export default Images1