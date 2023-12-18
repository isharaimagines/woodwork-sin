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
              <h1>Who I am</h1>
              <p>
                My interest in woodworking began over 20 years ago from the need
                for a simple bookcase. And while that first effort was
                succcessful, it sparked a desire learn more about woodworking
                tools and techniques. Guided by teachers at a local wood working
                supply store, Woodcraft of Dallas, and later at Homestead
                Heritage School of Woodworking, I took classes that helped me
                expand my skills and knowledge.
              </p>
            </div>
            <div className="bottomer">
              <h1>What I do</h1>
              <p>
                Today I produce a wide variety of wood products, including
                tables, desks, bookcases, jewelry boxes, presentation wine
                boxes, and many more. I use only renewable (non-endangered
                species) woods, both domestic and tropical, to produce heirloom
                quality furniture. While cheap furniture can be found in many
                stores, such items will last only a few years; my furniture will
                last for generations, provided that it is cared for properly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*------------------------------------*/}

      <div className="section">
        <div className="awords">
          <div className="partitions">
            <i class="ri-pencil-ruler-2-fill"></i>
            <h1>Equipment</h1>
            <p>
              I keep up-to-date on the latest equipment, wishing to provide the
              highest level of quality in my products.
            </p>
          </div>
          <div className="partitions">
            <i class="ri-tools-fill"></i>
            <h1>Original Projects</h1>
            <p>
              I love to hear your ideas! Let me know what you are wanting, and
              we can work together to make it happen!
            </p>
          </div>
          <div className="partitions">
            <i class="ri-thumb-up-fill"></i>
            <h1>Quality Products</h1>
            <p>
              As I create each product, I research the best wood to use
              depending on its strength and its beauty.{" "}
            </p>
          </div>
          <div className="partitions">
            <i class="ri-flask-fill"></i>
            <h1>Training</h1>
            <p>
              Guided by teachers at a local wood working supply store, Woodcraft
              of Dallas, and later at Homestead Heritage School of Woodworking,
              I took classes that helped me expand my skills and knowledge.
            </p>
          </div>
        </div>
      </div>

      {/*---------------------------------------*/}
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
