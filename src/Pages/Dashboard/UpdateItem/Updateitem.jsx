import { useLoaderData } from "react-router-dom";
import Sectiontitle from "../../../Component/Sectiontitle/Sectiontitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Providers/useAxiosSecure";

const image_Upload_Key = import.meta.env.VITE_IMAGEBB;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${image_Upload_Key}`;

function Updateitem() {
  const data = useLoaderData();
  console.log(data)
  const { recipe, price, name,image, category, _id } = useLoaderData();
  const { register, handleSubmit, reset } = useForm();

  // console.log(image_Upload_Key);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // console.log(data);
    const image = { image: data.image[0] };
    const res = await axiosPublic.post(imageHostingApi, image, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipename,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(menuRes);
      if (menuRes.data.modifiedCount) {
        alert("succss");
        // reset();
      }
    }
  };
  return (
    <div>
      <Sectiontitle
        heading="Add an item"
        subHeading="What's New?"
      ></Sectiontitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center w-screen bg-white">
          <div className="container mx-auto my-4 px-4 lg:px-20">
            <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
              <div className="flex">
                <h1 className="font-bold uppercase text-5xl">
                  Send us a <br /> message
                </h1>
              </div>
              <input
                defaultValue={name}
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                {...register("name")}
              />
              <select
                id="dropdown"
                defaultValue={category}
                className="border-2 w-full border-black rounded-3xl mt-4 p-2"
                {...register("category")}
              >
                <option value="" disabled>--Please choose an option--</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                {/* <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  defaultValue={recipe}
                  placeholder="Recipe name*"
                  {...register("recipename")}
                /> */}
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  {...register("price")}
                  defaultValue={price}
                  placeholder="Price*"
                />
              </div>

              <div className="my-4">
                <textarea
                defaultValue={recipe}
                  {...register("recipename")}
                  placeholder="Recipe name*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div>
                <input
                  {...register("image")}
                // value={image}
                  type="file"
                  placeholder="CHOOSE FILE"
                />
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Update menu item
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Updateitem;
