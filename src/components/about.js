import "./about.css";
import profile_bg from "../assets/img/product-freewall-1.jpg";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const About = () => {
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  return (
    <>
      <div className="section">
        <div className="sec-banner"></div>
      </div>

      {/*------------------------------------*/}
      <div className="container-to-about">
        <div className="parts">
          <div className="ownerBg">
            <img src={profile_bg} alt="banner" />
          </div>
          <div className="details">
            <div className="topper">
              <h1>{t("about.header")}</h1>
              <p>{t("about.headabout")}</p>
            </div>
            <div className="bottomer">
              <h1>{t("about.do")}</h1>
              <p>{t("about.dowhat")}</p>
            </div>
          </div>
        </div>
      </div>

      {/*------------------------------------*/}

      <div className="section">
        <div className="awords">
          <div className="partitions">
            <i className="ri-pencil-ruler-2-fill"></i>
            <h1>{t("lable.label1")}</h1>
            <p>{t("lable.label1des")}</p>
          </div>
          <div className="partitions">
            <i className="ri-tools-fill"></i>
            <h1>{t("lable.label2")}</h1>
            <p>{t("lable.label2des")}</p>
          </div>
          <div className="partitions">
            <i className="ri-thumb-up-fill"></i>
            <h1>{t("lable.label3")}</h1>
            <p>{t("lable.label3des")}</p>
          </div>
          <div className="partitions">
            <i className="ri-flask-fill"></i>
            <h1>{t("lable.label4")}</h1>
            <p>{t("lable.label4des")}</p>
          </div>
        </div>
      </div>

      {/*---------------------------------------*/}
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
