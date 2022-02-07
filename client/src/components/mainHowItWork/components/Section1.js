import React from "react";
import ArrowGif from "assets/gifs/arrow.gif";

export const Section1 = () => {
  return (
    <div className="main-how-part__1 d-flex flex-column justify-content-center align-items-center">
      <div className="part-1-header">
        <div className="middle">
          <div className="content">The Liber T token truly is the future of solidarity, for those who wish to join
            and invest in their family’s future, through two separate entities, and their affiliates, that support
            the “WE ARE CHANGE” movement.
          </div>
        </div>
      </div>
      
      <div className="part-1-sections">
        <div className="section-item d-flex justify-content-start">
          <div className="section-item-container">
            <div className="top-arrow top-left-arrow">
              <img src={ArrowGif} alt="liberT" className="arrow-item"/>
            </div>
            <div className="section-item-number">
              <div className="number-container d-flex justify-content-center align-items-center">
                <div className="number">1</div>
              </div>
            </div>
            <div className="section-item-content d-flex align-items-center">
              <div className="content">NEW FEDERATION PARTY CANADA / Alberta (NFC/NFA) a new federal political party /
                movement to decentralize Canada’s federal Government and promote the sovereign, inherent rights and
                freedoms of the Canadian people, this while supporting the movement for change, we see in our global
                community.
              </div>
            </div>
            <div className="arrow-item">
              <img className="left-arrow" src={ArrowGif} alt="liberT"/>
            </div>
          </div>
        </div>
        
        <div className="section-item d-flex justify-content-end">
          <div className="section-item-container">
            <div className="top-arrow top-right-arrow">
              <img src={ArrowGif} alt="liberT" className="arrow-item"/>
            </div>
            <div className="section-item-number">
              <div className="number-container d-flex justify-content-center align-items-center">
                <div className="number">2</div>
              </div>
            </div>
            <div className="section-item-content d-flex align-items-center">
              <div className="content">ERNAL WELLNESS SOCIETY (EWS) is a non-profit, non-denominational ministry that
                represents all people as sovereign beings and their inherent rights to protect the family, our
                environment, our country and to promote, mind, body and spiritual awareness values, through
                integrative health and wellness retreats and information networks and educational vessels that include
                the WWNN, and the CLRC.
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
              <div className="content">COMMON LAW RESOURCE CENTER (CLRC) a website and information platform
                representing sovereign rights and information based on International and National constitutions
                charters and covenants.
              </div>
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
              <div className="content">WELLNESS WORLD NEWS NETWORK (WWNN), is an uncensored educational multi-media
                news and information network.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="part-1-sections">
        <div className="section-item d-flex justify-content-center">
          <div className="section-item-container">
            <div className="bottom-arrow bottom-left-arrow">
              <img src={ArrowGif} alt="liberT" className="arrow-item"/>
            </div>
            <div className="section-item-number">
              <div className="number-container d-flex justify-content-center align-items-center">
                <div className="number">5</div>
              </div>
            </div>
            <div className="section-item-content d-flex align-items-center">
              <div className="content">We support the FREEDOM Movement / Rallies / “Live” Stream programming / Talk
                for Freedom Chanel / Freedom Artists and speakers.
              </div>
            </div>
            <div className="bottom-arrow bottom-right-arrow">
              <img src={ArrowGif} alt="liberT" className="arrow-item"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};