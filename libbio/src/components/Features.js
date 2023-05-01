import React from 'react'
import lib4 from "../assets/image/lib4-features.jpg";
import { Container } from 'react-bootstrap';
import { FaBarcode, FaCloud, FaLayerGroup } from "react-icons/fa";

const Features = () => {
  return (
    <Container className="text-center">
        <div id="features" className="section" style={{backgroundColor: "#f4f4f4", padding: "50px"}}>
            <div className="grid-container">
                <div className="grid-x align-center grid-padding-x grid-padding-y margin-bottom-120">
                <div className="cell large-6 medium-12 small-12" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <FaBarcode style={{fontSize: "3em", marginBottom: "20px"}} />
                    <h3>Automatic Data for Books, Movies, Music and Video Games</h3>
                    <p className="lead">Just scan your ISBN/UPC barcode using a physical scanner or our free mobile apps and we take care of the rest.</p>
                </div>
                <div className="cell large-6 medium-12 small-12 mb-4">
                    <img className="blue-shadow" src={lib4} style={{borderRadius: "10px", width: "auto", height: "auto"}} alt="Automatic data" />
                </div>
                </div>
                <div style={{position: "relative"}} className="grid-x align-center grid-padding-x grid-padding-y margin-bottom-120">
                <div className="cell large-6 medium-12 small-12 order-1 large-order-1 medium-order-2 small-order-2">
                    <img className="edge-image" src={lib4} style={{borderRadius: "10px", width: "auto", height: "auto"}} alt="Cloud sync" />
                </div>
                <div className="cell large-6 medium-12 small-12 order-2 large-order-2 medium-order-1 small-order-1" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <FaCloud style={{fontSize: "3em", marginBottom: "20px"}} />
                    <h3>Cloud Sync keeps your collections updated across multiple devices.</h3>
                    <p className="lead">Access your collections from anywhere on virtually any device.</p>
                </div>
                </div>
                <div className="grid-x align-center grid-padding-x grid-padding-y margin-bottom-120">
                <div className="cell large-6 medium-12 small-12" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <FaLayerGroup style={{fontSize: "3em", marginBottom: "20px"}} />
                    <h3>Create up to 100 mixed media collections.</h3>
                    <p className="lead">Mix and match media types freely. We’re flexible on purpose so you can organize your collections to fit your needs. Books, movies, music, and games - keep them together or separate.</p>
                </div>
                <div className="cell large-6 medium-12 small-12">
                    <img className="blue-shadow" src={lib4} style={{borderRadius: "10px", width: "auto", height: "auto"}} alt="Mixed media" />
                </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Features;