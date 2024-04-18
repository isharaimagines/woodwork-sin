import second from "../assets/img/second_Banner.jpg";
import "./service.css";
import ProductCard from "./ProductCard";
import desingImg from "../assets/img/581919.jpg";
import desing_2Img from "../assets/img/612x612.jpg";
import { useNavigate } from "react-router-dom";
import cussion from "../assets/serviceImg/cussion_seat.png";
import pantry from "../assets/serviceImg/pantry_cupboards.png";
import stairs from "../assets/serviceImg/stairs.png";
import sunmoon from "../assets/serviceImg/sun_moon.jpg";
import treecav from "../assets/serviceImg/treeart.jpg";
import woodcav from "../assets/serviceImg/tablewoodcav.jpg";
import leaf from "../assets/serviceImg/leaf.png";
import womanplayer from "../assets/serviceImg/sitharaya.png";
import woman from "../assets/serviceImg/woman.png";
import wallcupboard from "../assets/serviceImg/wall_cupboard.jpg";
import { useTranslation } from "react-i18next";

export const Service = () => {
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  return (
    <>
      <div className="s-container">
        <img src={second} alt="banner" />

        <div className="s-text">
          <h1>{t("servicep.head")}</h1>
          <h1>{t("servicep.head2")}</h1>
        </div>
      </div>
      <div className="section">
        <div className="category">
          <div className="cat-left">
            <h1>{t("servicep.sertitle1")}</h1>
            <p>{t("servicep.sertitle2")}</p>
          </div>
          <div className="cat-right">
            <img src={desingImg} alt="cat-imge" />
          </div>
        </div>
      </div>

      <div className="section">
        <div className="category design">
          <div className="cat-right nd">
            <img src={desing_2Img} alt="cat-imge" />
          </div>

          <div className="cat-left">
            <h1>{t("servicep.sertitle3")}</h1>
            <p>{t("servicep.sertitle4")}</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container-card">
          <div className="row">
            <h1>{t("servicep.sertitle5")}</h1>
            <div className="col-lg-2">
              <ProductCard
                imgSrc={stairs}
                productName={t("servicep.p1name")}
                description={t("servicep.p1des")}
                price="$....."
                isNew={true}
              />
              <ProductCard
                imgSrc={pantry}
                productName={t("servicep.p2name")}
                description={t("servicep.p2des")}
                price="$....."
                isNew={true}
              />
              <ProductCard
                imgSrc={cussion}
                productName={t("servicep.p3name")}
                description={t("servicep.p3des")}
                price="$....."
                isNew={true}
              />
            </div>
            <div className="col-lg-2">
              <ProductCard
                imgSrc={sunmoon}
                productName={t("servicep.p4name")}
                description={t("servicep.p4des")}
                price="$....."
                isNew={true}
              />
              <ProductCard
                imgSrc={treecav}
                productName={t("servicep.p5name")}
                description={t("servicep.p5des")}
                price="$....."
                isNew={true}
              />
              <ProductCard
                imgSrc={woodcav}
                productName={t("servicep.p6name")}
                description={t("servicep.p6des")}
                price="$....."
                isNew={true}
              />
            </div>
            <div className="col-lg-2">
              <ProductCard
                imgSrc={leaf}
                productName={t("servicep.p7name")}
                description={t("servicep.p7des")}
                price="$....."
                isNew={true}
              />
              <ProductCard
                imgSrc={womanplayer}
                productName={t("servicep.p8name")}
                description={t("servicep.p7des")}
                price="$....."
                isNew={true}
              />
              <ProductCard
                imgSrc={woman}
                productName={t("servicep.p9name")}
                description={t("servicep.p7des")}
                price="$....."
                isNew={true}
              />
            </div>
            <div className="col-lg-2">
              <ProductCard
                imgSrc={wallcupboard}
                productName={t("servicep.p10name")}
                description={t("servicep.p10des")}
                price="$....."
                isNew={true}
              />
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
