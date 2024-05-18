import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";

function Menucategory({ item, img,title }) {
  return (
    <div>
      <Cover img={img} title={title}></Cover>
      <div className="grid grid-cols-2 gap-5">
        {item?.map((val) => {
          return (
            <div
              key={val._id}
              className=" flex items-center my-10 my-5 gap-x-4"
            >
              <img
                className="w-[200px] rounded-e-full rounded-b-full"
                src={val?.image}
                alt=""
              />
              <div className="space-y-4">
                <div className="flex justify-between">
                  <h3 className="text-2xl">{val?.name}</h3>
                  <h2>{val?.price}</h2>
                </div>
                <p>{val?.recipe}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Link to={`/ourshope/${title}`} className="flex justify-center">
        <button className="btn btn-primary">Order Now</button>
      </Link>
    </div>
  );
}

export default Menucategory;
