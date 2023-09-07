import "bootstrap/dist/css/bootstrap.min.css"
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Image1 from "./images/2nd.jpg";
import Image2 from "./images/3rd.jpg";
import Image3 from "./images/4th.jpg";
import Image4 from "./images/5th.jpg";
import Image5 from "./images/6th.jpg";
import Image6 from "./images/7th.jpg";
import GridItems from "./components/GridItems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
       <NavigationBar></NavigationBar>
       <Banner></Banner>
      <div className="bg-dark p-5">
        <div className="container">
          <h1 className="text-warning">Top 5 Animes of the Week:</h1>
          <div className="row">
           <GridItems name="Dragon Ball Z" imageFile={Image1} desc="Lorem Ipsum"></GridItems>
           <GridItems name="One Piece" imageFile={Image2} desc="Lorem Ipsum"></GridItems>
           <GridItems name="Naruto" imageFile={Image3} desc="Lorem Ipsum"></GridItems>
           <GridItems name="Bleach" imageFile={Image4} desc="Lorem Ipsum"></GridItems>
           <GridItems name="Yuyu Hakusho" imageFile={Image5} desc="Lorem Ipsum"></GridItems>
           <GridItems name="Slam Dunk" imageFile={Image6} desc="Lorem Ipsum"></GridItems>
        </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
