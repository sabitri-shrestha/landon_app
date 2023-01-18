import React, { useEffect, useState} from 'react';
//import imgLinkData from './data/gallery_images.json'

const Welcome =  () => {

  const [imgLinkData, setImgLinkData] = useState([]); 

  const loadImgLinkData = async() =>{
    //query the API Gateway
    const resp = await fetch('https://119ocgp2y6.execute-api.us-east-1.amazonaws.com/Production/gallery-images');
    let jsonData = await resp.json();

    //assign response data to state variable
    setImgLinkData(jsonData);
  }

  useEffect(()=>{
    //load the menu links data from api gateway
    loadImgLinkData();
  });

    return (
        <div className="scene" id="welcome">
          <article className="content">
            <div className="gallery">
            { imgLinkData.map((link)=>
              <img src={link.src.S} alt={link.alt.S}/>

              )
            }
            </div>
            <h1>Welcome to the Landon&nbsp;Hotel</h1>
            <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
          </article>
        </div>

    );
}
export default Welcome;