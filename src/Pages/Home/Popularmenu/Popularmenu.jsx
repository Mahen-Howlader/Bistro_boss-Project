import { useEffect, useState } from "react";
import Sectiontitle from "../../../Component/Sectiontitle/Sectiontitle";
import Popularmenucard from "./Popularmenucard";
import Usemenu from "../../../Hooks/Usemenu";

function Popularmenu() {
  const [menuData, setMenudata] = useState([]);

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => setMenudata(data));
  // }, []);
  // console.log(menuData);

  const [menu,loading] = Usemenu()
  const popular = menu.filter(val => val.category === "popular")




  return (
    <div>
      <Sectiontitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></Sectiontitle>

      <div className=" bg-gray-300 p-10 mb-10 rounded-xl">
        <div className="grid grid-cols-2 gap-20 my-5">
          {popular?.map((val) => (
            <Popularmenucard key={val._id} data={val}></Popularmenucard>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="btn">View Full Menu</button>
        </div>
      </div>
    </div>
  );
}

export default Popularmenu;
