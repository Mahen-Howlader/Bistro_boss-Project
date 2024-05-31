import Sectiontitle from "../../../Component/Sectiontitle/Sectiontitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Providers/useAxiosSecure";

const image_Upload_Key = import.meta.env.VITE_IMAGEBB;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${image_Upload_Key}`;
function Additem() {
  const { register, handleSubmit ,reset} = useForm();

  console.log(image_Upload_Key);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure()
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
        recipe: data.details,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem)
      console.log(menuRes);
    if(menuRes.data.insertedId){
        alert('succss')
        reset()
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
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                {...register("name")}
              />
              <select
                id="dropdown"
                className="border-2 w-full border-black rounded-3xl mt-4 p-2"
                {...register("category")}
              >
                <option value="">--Please choose an option--</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Recipe name*"
                  {...register("recipename")}
                />
                <input
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="number"
                  {...register("price")}
                  placeholder="Price*"
                />
              </div>

              <div className="my-4">
                <textarea
                  {...register("details")}
                  placeholder="Recipe details*"
                  className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div>
                <input
                  {...register("image")}
                  type="file"
                  placeholder="CHOOSE FILE"
                />
              </div>
              <div className="my-2 w-1/2 lg:w-1/4">
                <button className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                  Add item
                </button>
              </div>
            </div>
          </div>

          {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
              <a
                title="Buy me a pizza"
                href="https://www.buymeacoffee.com/Dekartmc"
                target="_blank"
                className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
              >
                <img
                  className="object-cover object-center w-full h-full rounded-full"
                  src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
                  alt="Buy me a pizza"
                />
              </a>
            </div>
          </div> */}
        </div>
        {/* <label>First Name</label>
      <input {...register("firstName")} />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" /> */}
      </form>
    </div>
  );
}

export default Additem;
