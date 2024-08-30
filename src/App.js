import Navbar from "./component/header.jsx";
import Gallery from "./component/gallery/gallery.jsx";
import AnalysisStation from "./component/Analysis station/Analysis station.jsx";
import News from "./component/news/news.jsx";
import SocialMedia from "./component/social-media/socialMedia.jsx";
import SignUp from "./component/social-media/SignUp.jsx";
import RankingTable from "./component/social-media/RankingTable.jsx";
import imgtelgram from "./img/telegram.png";
import Footer from "./component/Footer/footer.jsx";
function App() {
  const imgStyle = {
    margin: "20px 30px",
    width: "calc(100% - 60px)",
    borderRadius: "10px",
    float: "right",
  };
  return (
    <>
      <Navbar />
      <Gallery />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          direction: "rtl",
        }}
      >
        <div style={{ flex: "1 1 30%", margin: "10px" }}>
          <News />
        </div>
        <div style={{ flex: "1 1 30%", margin: "10px" }}>
          <AnalysisStation />
        </div>
        <div style={{ flex: "1 1 30%", margin: "10px" }}>
          <SocialMedia />

          <div style={{ marginTop: "30px" }}>
            <SignUp />
          </div>
          <div style={{ marginTop: "30px" }}>
            <h2 style={{ marginTop: "20px" }} className="parag">
              رنده بندی تیم ها
            </h2>
            <RankingTable />
          </div>
        </div>
        <div>
          <img src={imgtelgram} alt="telegram" style={imgStyle} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
