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
            දැව පාදක ගෘහභාණ්ඩ
            <br /> සහ දැවමය ගෘහ නිර්මාණ
          </h1>
          <h3>ශ්‍රී ලංකාවේ හස්ත කර්මාන්ත</h3>
        </div>
      </div>
      <div className="section">
        <div className="content">
          <div className="left">
            <h1>1992 සිටම සේවාව අඛණ්ඩව </h1>
            <p>
              තිරසාරභාවය සඳහා දැඩි කැපවීමක් සහ ආපසු පැමිණෙන සේවාදායකයින්ගේ
              විශ්වාසවන්ත පදනමක් සමඟින්, වසර ගණනාවක් පුරා අප උපයාගත් විශ්වාසය
              ගැන අපි ආඩම්බර වෙමු.
            </p>
          </div>
          <div className="right">
            <div className="row">
              <div className="col">
                <div>
                  <i className="ri-bar-chart-grouped-line"></i>
                  <span>82%</span>
                </div>
                <h1>නැවත නැවතත් ගනුදෙනුකරුවන්ගෙන් පැමිණි ආදායම</h1>
              </div>
              <div className="col">
                <div>
                  <i className="ri-suitcase-3-fill"></i>
                  <span>927,075SF</span>
                </div>
                <h1>ප්‍රමාණයක ලී පාරිභෝගික නිෂ්පාදන බවට පත් කර ඇත </h1>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <i className="ri-check-fill"></i>
                  <span>1143</span>
                </div>
                <h1>සාර්ථකව නිම කරන ලද ව්යාපෘති</h1>
              </div>
              <div className="col">
                <div>
                  <i className="ri-tree-fill"></i>
                  <span>100%</span>
                </div>
                <h1>භාවිතා කරන තිරසාර අමුද්‍රව්‍ය</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="secBox">
          <div className="name">
            <h1>කොහොමද මිලදී ගන්නේ</h1>
            <sup>ඇණවුම් කිරීමට කරුණාකර අමතන්න හෝ email පණිවිඩයක් එවන්න!</sup>
          </div>
          <button onClick={() => navigate("/contactus")}>අපිව අමතන්න</button>
        </div>
      </div>
    </>
  );
};
