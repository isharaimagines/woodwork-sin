import ImgBanner from "../assets/img/light-wood-section.jpg";
import "./home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <img src={ImgBanner} alt="banner" />

        <div className="text">
          <h1>
            Woodwork
            <br /> and Interiors
          </h1>
          <h3>Handcrafted in Sri Lanka</h3>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <div className="left">
            <h1>Our impact since 1992</h1>
            <p>
              With a strong dedication to sustainability and a loyal base of
              returning clients, we take pride in the trust we have earned over
              the years.
            </p>
          </div>
          <div className="right">
            <div className="row">
              <div className="col">
                <div>
                  <i class="ri-bar-chart-grouped-line"></i>
                  <span>82%</span>
                </div>
                <h1>revenue comes from repeat clients</h1>
              </div>
              <div className="col">
                <div>
                  <i class="ri-suitcase-3-fill"></i>
                  <span>927,075SF</span>
                </div>
                <h1>of sheet goods crafted into custom products</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <i class="ri-check-fill"></i>
                  <span>1143</span>
                </div>
                <h1>successfully completed projects</h1>
              </div>
              <div className="col">
                <div>
                  <i class="ri-tree-fill"></i>
                  <span>100%</span>
                </div>
                <h1>sustainable raw materials used</h1>
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
          <button onClick={() => navigate("contactus")}>CONTACT US</button>
        </div>
      </div>
    </>
  );
};
