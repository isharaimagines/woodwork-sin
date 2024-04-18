import ImgBanner from "../assets/img/light-wood-section.jpg";
import "./home.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const navigate = useNavigate();

  const [t] = useTranslation("global");

  return (
    <>
      <div className="container">
        <img src={ImgBanner} alt="banner" />

        <div className="text">
          <h1>
            {t("header.Title")}
            <br /> {t("header.Title2")}
          </h1>
          <h3>{t("header.Title3")}</h3>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <div className="left">
            <h1>{t("home.titleno1")}</h1>
            <p>{t("home.titleno2")}</p>
          </div>
          <div className="right">
            <div className="row">
              <div className="col">
                <div>
                  <i className="ri-bar-chart-grouped-line"></i>
                  <span>82%</span>
                </div>
                <h1>{t("home.titleno3")}</h1>
              </div>
              <div className="col">
                <div>
                  <i className="ri-suitcase-3-fill"></i>
                  <span>927,075SF</span>
                </div>
                <h1>{t("home.titleno4")}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <i className="ri-check-fill"></i>
                  <span>1143</span>
                </div>
                <h1>{t("home.titleno5")}</h1>
              </div>
              <div className="col">
                <div>
                  <i className="ri-tree-fill"></i>
                  <span>100%</span>
                </div>
                <h1>{t("home.titleno6")}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="secBox">
          <div className="name">
            <h1>{t("home.titleno7")}</h1>
            <sup>{t("home.titleno8")}</sup>
          </div>
          <button onClick={() => navigate("/contactus")}>
            {t("navbar.Contact")}
          </button>
        </div>
      </div>
    </>
  );
};
