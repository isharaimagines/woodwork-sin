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
          <h1>සැඟවුණු විභවයන් හදුන්වදීම</h1>
          <h1>අපගේ උනන්දුවයි</h1>
        </div>
      </div>
      <div className="section">
        <div className="category">
          <div className="cat-left">
            <h1>
              පාරිභෝගික නිර්මාණ, වර්තමානය සහ අනාගතය ගැලපෙන ලෙස නිර්මාණය කර ඇත
            </h1>
            <p>
              අපගේ ගනුදෙනුකරුවන් සමඟ අප ගොඩනඟන සබඳතා කැපී පෙනෙන නිර්මාණ සහ
              පාරිභෝගික සේවා සැපයීම සඳහා අපගේ කැපවීම පිළිබිඹු කරයි. ඔබ වෙනුවෙන්ම
              නිර්මාණ නිර්මාණය කිරීමට පෙර, අපගේ හවුල්කාරිත්වයෙන් ඔබ අපේක්ෂා කරන
              ප්‍රතිඵල මොනවාදැයි දැන ගැනීමට අපි මුලින්ම ඔබට සවන් දෙන්නෙමු.
              සැඟවුණු විභවයන් සොයා ගැනීමට සහ අද්විතීය, විලාසිතාව සහ උපයෝගීතාව
              අතර නිවැරදි සමතුලිතතාවයක් ඇති කිරීමට සහ ජීවත් වීමට ප්‍රියජනක
              නැවුම්, සමකාලීන අවකාශයන් සැලසුම් කිරීමට අපි වෙහෙස මහන්සි වී වැඩ
              කරමු.
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
            <h1>දේශීය දැතින් සාදන ලද දැව </h1>
            <p>
              අපගේ සියලුම ගෘහ භාණ්ඩ හෝ ඕනෑම ලී වැඩ අපගේ <b>සිරිවර්ධන ලී වැඩ</b>{" "}
              ස්ථානයේ සිටින අපගේ දක්ෂ ශිල්පීන් විසින් අතින් සැදිම හෝ පැමිණ සිදු
              කර දෙනු ලැබේ, අප සේවාව සපයා පිටත්ව ගොස් බොහෝ කලකට පසුවත් ඔබගේ
              අවශ්‍යතා සපුරාලීම සඳහා නිර්මාණය අද්විතීයය. අපගේ සේවාදායකයින් අප
              සාදන සියලුම කොටස් වල නිරවද්‍යතාවය සහ සැලකිල්ල අගය කරයි. තිරසාර ලෙස
              දැව භාවිතා කිරීමට සෑම උත්සාහයක්ම ගනු ලැබේ.
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
            <h1>කොහොමද මිලදී ගන්නේ</h1>
            <sup>ඇණවුම් කිරීමට කරුණාකර අමතන්න හෝ email පණිවිඩයක් එවන්න!</sup>
          </div>
          <button onClick={() => navigate("/contactus")}>අපිව අමතන්න</button>
        </div>
      </div>
    </>
  );
};
