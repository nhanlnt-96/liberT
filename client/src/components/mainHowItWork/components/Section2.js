import React from "react";
import ArrowGif from "assets/gifs/arrow.gif";

export const Section2 = () => {
  return (
    <div className="main-how-part__1 d-flex flex-column justify-content-center align-items-center">
      <div className="part-1-header">
        <div className="left">
          <div className="item">
            <img src={ArrowGif} alt="liberT-arrow"/>
          </div>
        </div>
        <div className="middle">
          <div className="content">The (EWS) will also partner with, create and / or promote Liber T token member
            sponsored FREEDOM and special events including international wellness retreats, that allow education and
            nurturing of the mind, body and spiritual aspects of our bodies and a deeper understanding and knowledge of
            the real world and universe around us.
          </div>
          <div className="content">The Liber T token membership, when purchased, benefits the holder in multiple ways:
          </div>
        </div>
        <div className="right">
          <div className="item">
            <img src={ArrowGif} alt="liberT-arrow"/>
          </div>
        </div>
      </div>
      
      <div className="part-1-sections">
        <div className="section-item d-flex justify-content-start">
          <div className="section-item-container">
            <div className="section-item-number">
              <div className="number-container d-flex justify-content-center align-items-center">
                <div className="number">1</div>
              </div>
            </div>
            <div className="section-item-content d-flex align-items-center">
              <div className="content">The Liber T token membership, when purchased, benefits the holder in multiple
                ways: Each Liber T token (membership) purchased represents a minimum of 50% of the initial membership
                token sale fundraising proceeds flowing through to the ETERNAL WELLNESS SOCIETY (EWS).
              </div>
            </div>
            <div className="arrow-item">
              <img className="left-arrow" src={ArrowGif} alt="liberT"/>
            </div>
          </div>
        </div>
        
        <div className="section-item d-flex justify-content-end">
          <div className="section-item-container">
            <div className="section-item-number">
              <div className="number-container d-flex justify-content-center align-items-center">
                <div className="number">2</div>
              </div>
            </div>
            <div className="section-item-content d-flex align-items-center">
              <div className="content">Up to 50% of Each Liber T token membership purchased will be designated to
                NFC/NFA political parties under Elections Canada $20 anonymous donation guidelines, The political goal
                of the NFC / NFA is to decentralize the federal Government and allow sovereign powers back to the
                Provinces and people where they rightfully belong.
              </div>
            </div>
            <div className="arrow-item">
              <img className="right-arrow" src={ArrowGif} alt="liberT"/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="part-1-sections">
        <div className="section-item d-flex justify-content-start">
          <div className="section-item-container">
            <div className="section-item-number">
              <div className="number-container d-flex justify-content-center align-items-center">
                <div className="number">4</div>
              </div>
            </div>
            <div className="section-item-content d-flex align-items-center">
              <div className="content">Enjoy our LIBER T Hub PHONE APP “Free to Members”.
              </div>
            </div>
            <div className="arrow-item arrow-item-left">
              <img className="left-arrow" src={ArrowGif} alt="liberT"/>
            </div>
          </div>
        </div>
        
        <div className="section-item d-flex justify-content-end">
          <div className="section-item-container">
            <div className="section-item-number">
              <div className="number-container d-flex justify-content-center align-items-center">
                <div className="number">3</div>
              </div>
            </div>
            <div className="section-item-content d-flex align-items-center">
              <div className="content">Supporting the Liber T token movement will allow a beacon to the world as our
                children, and grandchildren once again experience a free and prosperous country with the ability to
                enjoy the sovereign rights and freedom our forefathers fought and worked for.
              </div>
            </div>
            <div className="arrow-item arrow-item-right">
              <img className="right-arrow" src={ArrowGif} alt="liberT"/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="part-1-sections">
        <div className="section-item d-flex justify-content-center">
          <div className="section-item-container">
            <div className="section-item-number">
              <div className="number-container d-flex justify-content-center align-items-center">
                <div className="number">5</div>
              </div>
            </div>
            <div className="section-item-content d-flex align-items-center">
              <div className="content">Our Liber T Phone App allows access to all of the Liber T token family at the
                touch of a finger – from tracking your Liber T tokens / to events, retreats and integrative health
                information on the EWS site / to Canadian and alternative world news featured on WWNN / to our one stop
                Common Law Resource Centre CLRC, where understanding your sovereign rights is at your finger tips / also
                our Liber T SOCIAL is a secured encrypted network that allows private communication with other members /
                open forum chat discussions and polls on various T topics / the reality is it is, this is only the
                beginning because we are the future … “WE ARE CHANGE”.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};