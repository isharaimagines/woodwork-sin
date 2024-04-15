import second from "../assets/img/2-3113315.jpg";
import "./service.css";
import desingImg from "../assets/img/581919.jpg";
import desing_2Img from "../assets/img/612x612.jpg";
import { useNavigate } from "react-router-dom";
import cussion from "../assets/serviceImg/cussion_seat.png";
import pantry from "../assets/serviceImg/pantry_cupboards.png";
import stairs from "../assets/serviceImg/stairs.png";
import sunmoon from "../assets/serviceImg/sun_moon.jpg";
import treecav from "../assets/serviceImg/treeart.jpg";
import woodcav from "../assets/serviceImg/tablewoodcav.jpg";
import ProductCard from "./ProductCard";

export const Service = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="s-container">
        <img src={second} alt="banner" />

        <div className="s-text">
          <h1>සැඟවුණු විභවයන් හදුන්වාදීම</h1>
          <h1>අපගේ උනන්දුවයි</h1>
        </div>
      </div>
      <div className="section">
        <div className="category">
          <div className="cat-left">
            <h1>
              පාරිභෝගික නිර්මාණ, වර්තමානය සහ අනාගතය ගැලපෙන ලෙස නිර්මාණය කරමු
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
        <div className="category design">
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
            <h1>විශේෂාංග නිෂ්පාදන</h1>
            <div className="col-lg-2">
              <ProductCard
                imgSrc={stairs}
                productName="ලී පඩිපෙළ"
                description="පඩිපෙළක් හෝ පඩිපෙළ කාමරයක් යනු පඩිපෙළක් පිහිටා ඇති ගොඩනැගිල්ලක කාමරයක් වන අතර උසින් ගමන් කළ හැකි වන පරිදි මහල් අතර ඇවිදීමේ මාර්ග සම්බන්ධ කිරීමට භාවිතා කරයි. එය දැවමය වීම වඩා අලංකාරයක් එක කරයි."
                price="$....."
                isNew={true}
              />
              <ProductCard
                imgSrc={pantry}
                productName="පැන්ට්රි අල්මාරිය"
                description="පැන්ට්රියක් යනු බීම වර්ග, ආහාර, පිඟන්, ගෘහස්ථ පිරිසිදු කිරීමේ නිෂ්පාදන, ලිනන් රෙදි හෝ සැපයුම් නිවසක් හෝ කාර්යාලයක් තුළ ගබඩා කර ඇති කාමරයක් හෝ අල්මාරියකි. ආහාර පාන පැන්ට්රි කුස්සියට සහායක ධාරිතාවකින් සේවය කරයි"
                price="$....."
                isNew={true}
              />
              <ProductCard
                imgSrc={cussion}
                productName="ලී කුෂන් සෝෆා"
                description="සෝෆා, සෙටි, චෙස්ටර්ෆීල්ඩ් හෝ ඩේවන්පෝට් ලෙසද හැඳින්වෙන යහනක් යනු බහු පුද්ගලයින් අසුන් ගැනීම සඳහා කුෂන් කරන ලද ගෘහ භාණ්ඩයකි. එය සාමාන්‍යයෙන් උඩු මහලේ අත්වාරු සහිත බංකුවක ස්වරූපයෙන් දක්නට ලැබෙන අතර බොහෝ විට උල්පත් සහ සකස් කළ කුෂන් සහ කොට්ට සවි කර ඇත. යහනක් මූලික වශයෙන් ආසන සඳහා භාවිතා කළද, එය නිදාගැනීම සඳහා භාවිතා කළ හැක."
                price="$....."
                isNew={true}
              />
            </div>
            <div className="col-lg-2">
              <ProductCard
                imgSrc={sunmoon}
                productName="හිරු සඳ ලී කැටයම්"
                description="ඔබේ බිත්ති සැරසිලි සාප්පු වලින් අද්විතීය හෝ අභිරුචි අතින් සාදන ලද කෑලි සඳහා අපගේ හිරු සහ සඳ ලී කැටයම් තේරීම පරීක්ෂා කරන්න."
                price="$....."
                isNew={true}
              />
              <ProductCard
                imgSrc={treecav}
                productName="ගස් ලී කැටයම්"
                description="ගස් කඳන් හෝ අතු සංකීර්ණ මූර්ති බවට පරිවර්තනය කරන සිත් ඇදගන්නා කලා ආකෘතියකි."
                price="$....."
                isNew={true}
              />
              <ProductCard
                imgSrc={woodcav}
                productName="ලී කුඩා පිළිම"
                description="අපගේ රූප සාප්පු වලින් අද්විතීය හෝ අභිරුචි, අතින් සාදන ලද කෑලි සඳහා අපගේ ලී කුඩා පිළිම තේරීම පරීක්ෂා කරන්න."
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
            <h1>කොහොමද මිලදී ගන්නේ</h1>
            <sup>ඇණවුම් කිරීමට කරුණාකර අමතන්න හෝ email පණිවිඩයක් එවන්න!</sup>
          </div>
          <button onClick={() => navigate("/contactus")}>අපිව අමතන්න</button>
        </div>
      </div>
    </>
  );
};
