import second from "../assets/img/2-3113315.jpg";
import "./service.css";
import desingImg from "../assets/img/581919.jpg";
import desing_2Img from "../assets/img/612x612.jpg";
import { useNavigate } from "react-router-dom";
import card1bg from "../assets/img/R.jpeg";

export const Service = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="s-container">
        <img src={second} alt="banner" />

        <div className="s-text">
          <h1>Extracting Hidden Potential</h1>
          <h1> is our passion</h1>
        </div>
      </div>
      <div className="section">
        <div className="category">
          <div className="cat-left">
            <h1>Custom design, created with the present and future in mind</h1>
            <p>
              The relationships we build with our clients reflect our dedication
              to providing outstanding design and customer service. Prior to
              creating design solutions just for you, we first listen to you to
              learn what kind of outcomes you hope to achieve from our
              partnership. We work hard to find and unlock hidden potential,
              strike the right balance between style and utility, and design
              fresh, contemporary spaces that are enjoyable to live in.{" "}
            </p>
          </div>
          <div className="cat-right">
            <img src={desingImg} alt="cat-imge" />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="category">
          <div className="cat-right nd">
            <img src={desing_2Img} alt="cat-imge" />
          </div>

          <div className="cat-left">
            <h1>Locally handcrafted pieces</h1>
            <p>
              All our furniture or any woodworks are handmade by our talented
              craftsmen in our <b>Siriwardhana Woodwork</b> studio, and designed
              to meet your needs long after we have left. Our clients value the
              precision and care with which we make all our pieces. Every effort
              is made to use sustainably-sourced wood.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container-card">
          <div className="row">
            <div className="col-lg-1">
              <h2>Featured Products</h2>
            </div>

            <div className="col-lg-2">
              <div className="product-thumb">
                <div className="product-img">
                  <img src={card1bg} alt="thumbnail-bg" />
                </div>

                <div className="product-top">
                  <span className="product-alert">New Arrival</span>
                </div>

                <div className="product-info">
                  <div className="align">
                    <h5>Tree pot</h5>

                    <p>Original package design from house</p>
                  </div>

                  <div className="product-price">$25</div>
                </div>
              </div>

              {/*--------------------------------*/}
              <div className="product-thumb">
                <div className="product-img">
                  <img src={card1bg} alt="thumbnail-bg" />
                </div>

                <div className="product-top">
                  <span className="product-alert">New Arrival</span>
                </div>

                <div className="product-info">
                  <div className="align">
                    <h5>Tree pot</h5>

                    <p>Original package design from house</p>
                  </div>

                  <div className="product-price">$25</div>
                </div>
              </div>
              {/*--------------------------------*/}
              <div className="product-thumb">
                <div className="product-img">
                  <img src={card1bg} alt="thumbnail-bg" />
                </div>

                <div className="product-top"></div>

                <div className="product-info">
                  <div className="align">
                    <h5>Tree pot</h5>

                    <p>Original package design from house</p>
                  </div>

                  <div className="product-price">$25</div>
                </div>
              </div>
            </div>

            {/*---------------------------*/}

            <div className="col-lg-2">
              <div className="product-thumb">
                <div className="product-img">
                  <img src={card1bg} alt="thumbnail-bg" />
                </div>

                <div className="product-top"></div>

                <div className="product-info">
                  <div className="align">
                    <h5>Tree pot</h5>

                    <p>Original package design from house</p>
                  </div>

                  <div className="product-price">$25</div>
                </div>
              </div>

              {/*--------------------------------*/}
              <div className="product-thumb">
                <div className="product-img">
                  <img src={card1bg} alt="thumbnail-bg" />
                </div>

                <div className="product-top"></div>

                <div className="product-info">
                  <div className="align">
                    <h5>Tree pot</h5>

                    <p>Original package design from house</p>
                  </div>

                  <div className="product-price">$25</div>
                </div>
              </div>
              {/*--------------------------------*/}
              <div className="product-thumb">
                <div className="product-img">
                  <img src={card1bg} alt="thumbnail-bg" />
                </div>

                <div className="product-top"></div>

                <div className="product-info">
                  <div className="align">
                    <h5>Tree pot</h5>

                    <p>Original package design from house</p>
                  </div>

                  <div className="product-price">$25</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="secBox">
          <div className="name">
            <h1>Where to Buy</h1>
            <sup>Please call or email to order!</sup>
          </div>
          <button onClick={() => navigate("/contactus")}>CONTACT US</button>
        </div>
      </div>
    </>
  );
};
