import "./about.css";
import banner__1 from "../assets/img/Wood-Cutting-Tools.jpg";
import banner__2 from "../assets/img/detailhd.jpg";
import banner__3 from "../assets/img/Lumber-Experts-Top.jpg";
import banner__4 from "../assets/img/intro-1694181432.webp";
import banner__5 from "../assets/img/Wood-Cutting-Tools.jpeg";
import profile_bg from "../assets/img/product-freewall-1.jpg";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="section">
        <div className="sec-banner">
          <div className="img-box-this">
            <img src={banner__1} alt="banners" />
          </div>
          <div className="img-box-this">
            <img src={banner__2} alt="banners" />
          </div>
          <div className="img-box-this">
            <img src={banner__3} alt="banners" />
          </div>
          <div className="img-box-this">
            <img src={banner__4} alt="banners" />
          </div>
          <div className="img-box-this">
            <img src={banner__5} alt="banners" />
          </div>
        </div>
      </div>

      {/*------------------------------------*/}
      <div className="container-to-about">
        <div className="parts">
          <div className="ownerBg">
            <img src={profile_bg} alt="banner" />
          </div>
          <div className="details">
            <div className="topper">
              <h1>මම කව්ද</h1>
              <p>
                ලී වැඩ පිළිබඳ මගේ උනන්දුව ආරම්භ වූයේ වසර 31 කට පෙර සරල පොත්
                පෙට්ටියක අවශ්‍යතාවයෙන්. එම පළමු උත්සාහය සාර්ථක වූ අතර, එය ලී වැඩ
                කිරීමේ මෙවලම් සහ ශිල්පීය ක්‍රම ගැන වැඩිදුර ඉගෙන ගැනීමට ආශාවක්
                ඇති කළේය. දේශීය දැව වැඩ කරන සැපයුම් වෙළඳසැලක සහ පසුව Sri Lanka
                School of Woodworking හි ගුරුවරුන් විසින් මඟ පෙන්වනු ලැබූ අතර,
                මම මගේ කුසලතා සහ දැනුම පුළුල් කිරීමට උපකාර කළ පන්ති පැවැත්වුවා.
              </p>
            </div>
            <div className="bottomer">
              <h1>මම කුමක් ද කරන්නේ</h1>
              <p>
                අද මම දැව නිෂ්පාදන රාශියක් නිෂ්පාදනය කරමි මේස, රාක්ක , පුටු,
                රාමු, සිවිලිම්, ජනෙල, ඇදන්, වහල, සහ තවත් බොහෝ දේ. මම භාවිතා
                කරන්නේ නිවැරදි ශිල්ප ක්‍රම නිසා ගෘහස්ථ හා පිටත යන දෙඅංශයෙන්ම දැව
                ගුණාත්මක ගෘහ භාණ්ඩ වේ. එවැනි දැව භාණ්ඩ පරම්පරා කිහිපයක් පමණක්ම
                පවතිනු ඇත.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*------------------------------------*/}

      <div className="section">
        <div className="awords">
          <div className="partitions">
            <i className="ri-pencil-ruler-2-fill"></i>
            <h1>උපකරණ</h1>
            <p>
              මම මගේ නිෂ්පාදනවල ඉහළම ගුණාත්මක භාවය සැපයීමට බලාපොරොත්තු වන නවතම
              උපකරණ පිළිබඳව යාවත්කාලීනව සිටිමි.
            </p>
          </div>
          <div className="partitions">
            <i className="ri-tools-fill"></i>
            <h1>නව්‍ය වියපෘති</h1>
            <p>
              මම ඔබේ අදහස් ඇසීමට කැමතියි! ඔබට අවශ්‍ය දේ මට දන්වන්න, එය සිදු
              කිරීමට අපට එකට වැඩ කළ හැක!
            </p>
          </div>
          <div className="partitions">
            <i className="ri-thumb-up-fill"></i>
            <h1>ගුණාත්මක නිෂ්පාදන</h1>
            <p>
              මම සෑම නිෂ්පාදනයක්ම නිර්මාණය කරන විට, එහි ශක්තිය සහ එහි අලංකාරය මත
              භාවිතා කිරීමට හොඳම දැව මම පරික්ෂා කරමි.
            </p>
          </div>
          <div className="partitions">
            <i className="ri-flask-fill"></i>
            <h1>පළපුරුද්ද</h1>
            <p>
              වසර 30ට වැඩි අත්දැකීම සමගින් ඔබට හොදම ගැලපෙන දේ ලබා දීම සහතික කල
              හැක.
            </p>
          </div>
        </div>
      </div>

      {/*---------------------------------------*/}
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
