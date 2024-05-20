function Popularmenucard({ data }) {
  // console.log(data);
  const { image, price, category, recipe, name } = data || {};
  return (
    <div>
      <div className="flex items-center gap-x-4">
        <img
          className="w-[200px] rounded-e-full rounded-b-full"
          src={image}
          alt=""
        />
        <div className="space-y-4">
          <div className="flex justify-between">
            <h3 className="text-2xl">{name}</h3>
            <h2>{price}</h2>
          </div>
          <p>{recipe}</p>
        </div>
      </div>
    </div>
  );
}

export default Popularmenucard;
