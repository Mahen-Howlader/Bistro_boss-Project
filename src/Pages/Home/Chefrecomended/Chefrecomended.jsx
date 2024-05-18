import { useEffect, useState } from "react";
import Sectiontitle from "../../../Component/Sectiontitle/Sectiontitle";
import ChefrecomendedCard from "./ChefrecomendedCard";

function Chefrecomended() {
  const [menuData, setMenudata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setMenudata(data));
  }, []);

  return (
    <div>
      <div>
        <Sectiontitle
          subHeading={"---Should Try---"}
          heading={"CHEF RECOMMENDS"}
        ></Sectiontitle>
      </div>
      <div className="grid grid-cols-3 gap-10 my-7">
        {menuData.slice(0, 6).map((val) => (
          <ChefrecomendedCard key={val._id} data={val}></ChefrecomendedCard>
        ))}
      </div>
    </div>
  );
}

export default Chefrecomended;
