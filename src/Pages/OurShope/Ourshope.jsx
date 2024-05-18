import Cover from "../Shared/Cover";
import orderCover from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Usemenu from "../../Hooks/Usemenu";
import Popularmenucard from "../Home/Popularmenu/Popularmenucard";
import ChefrecomendedCard from "../Home/Chefrecomended/ChefrecomendedCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Ourshope() {
  const categorys = ["salads","pizza","soups", "dessert",'drinks']
  const {category} = useParams()
  console.log(category)
  const initialIndex = categorys.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = Usemenu();


 
  const desserts = menu.filter((val) => val.category === "dessert");
  // console.log(desserts);
  const soup = menu.filter((val) => val.category === "soup");
  const salad = menu.filter((val) => val.category === "salad");
  const pizza = menu.filter((val) => val.category === "pizza");
  const offered = menu.filter((val) => val.category === "offered");
  const drinks = menu.filter((val) => val.category === "drinks");
  // console.log(menu)


  return (
    <div>
      <Cover img={orderCover} title={"Our Shope"}></Cover>
      <div className="my-10">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAT</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-4 gap-3">
              {salad.map((data) => (
                <ChefrecomendedCard
                  key={data._id}
                  data={data}
                ></ChefrecomendedCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-3">
              {pizza.map((data) => (
                <ChefrecomendedCard
                  key={data._id}
                  data={data}
                ></ChefrecomendedCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-3">
              {soup.map((data) => (
                <ChefrecomendedCard
                  key={data._id}
                  data={data}
                ></ChefrecomendedCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-3">
              {desserts.map((data) => (
                <ChefrecomendedCard
                  key={data._id}
                  data={data}
                ></ChefrecomendedCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-3">
              {drinks.map((data) => (
                <ChefrecomendedCard
                  key={data._id}
                  data={data}
                ></ChefrecomendedCard>
              ))}
            </div>
          </TabPanel>
        
        </Tabs>
      </div>
    </div>
  );
}

export default Ourshope;
