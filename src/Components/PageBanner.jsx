import { useNavigate } from "react-router-dom";
import "../Styles/PageBanner.css";
import bannerImg from "../assets/home/banner1.jpg";

function PageBanner({ title, subtitle, currentPage, tag = "PAYVANG" }) {
  const navigate = useNavigate();

  return (
    <section
      className="page-banner"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="page-banner-overlay"></div>

      <div className="page-banner-content">
        <div className="page-banner-text">
          <span>{tag}</span>

          <h1>{title}</h1>

          <p>{subtitle}</p>
        </div>

        <div className="page-breadcrumb">
          <span onClick={() => navigate("/")}>Home</span>
          <b>—</b>
          <span className="active">{currentPage}</span>
        </div>
      </div>

      <div className="page-banner-line"></div>
    </section>
  );
}

export default PageBanner;