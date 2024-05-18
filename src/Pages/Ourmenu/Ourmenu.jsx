import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover";
import coverImg from "../../assets/menu/pizza-bg.jpg";
import dessertsImage from "../../assets/menu/dessert-bg.jpeg";
import pizzaimg from "../../assets/menu/pizza-bg.jpg";
import saladimg from "../../assets/menu/salad-bg.jpg";
import soupimg from "../../assets/menu/soup-bg.jpg";
// import Popularmenu from "../Home/Popularmenu/Popularmenu";
import Usemenu from "../../Hooks/Usemenu";
import Sectiontitle from "../../Component/Sectiontitle/Sectiontitle";
import Menucategory from "./Menucategory/Menucategory";

function Ourmenu() {
  const [menu] = Usemenu();
  const desserts = menu.filter((val) => val.category === "dessert");
  // console.log(desserts);

  const soup = menu.filter((val) => val.category === "soup");
  const salad = menu.filter((val) => val.category === "salad");
  const pizza = menu.filter((val) => val.category === "pizza");
  const offered = menu.filter((val) => val.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro || Our menu</title>
      </Helmet>
      <div>
        <Cover img={coverImg} title={"Our menu"}></Cover>
        <Sectiontitle
          heading="Today's Offer"
          subHeading="Don't Miss"
        ></Sectiontitle>
        {/* <Menucategory item={desserts}></Menucategory> */}
        {/* // desserts */}
        <Menucategory
          img={dessertsImage}
          item={desserts}
          title="desserts"
        ></Menucategory>
        <Sectiontitle
          heading="Today's Offer"
          subHeading="Don't Miss"
        ></Sectiontitle>
        {/* Pizza */}
        <Menucategory img={soupimg} item={soup} title="pizza"></Menucategory>
        <Sectiontitle
          heading="Today's Offer"
          subHeading="Don't Miss"
        ></Sectiontitle>
        {/* Salads */}
        <Menucategory
          img={saladimg}
          item={salad}
          title="salads"
        ></Menucategory>
        <Sectiontitle
          heading="Today's Offer"
          subHeading="Don't Miss"
        ></Sectiontitle>
        {/* Soups */}
        <Menucategory
          img={pizzaimg}
          item={pizza}
          title="soups"
        ></Menucategory>
        <Sectiontitle
          heading="Today's Offer"
          subHeading="Don't Miss"
        ></Sectiontitle>

      </div>
    </div>
  );
}

export default Ourmenu;
