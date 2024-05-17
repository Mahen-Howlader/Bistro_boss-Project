import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Chefrecomended from "./Chefrecomended/Chefrecomended";
import Popularmenu from "./Popularmenu/Popularmenu";
import Review from "./Review/Review";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Bistro || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Popularmenu></Popularmenu>
      <Chefrecomended></Chefrecomended>
      <Review></Review>
    </div>
  );
}

export default Home;
