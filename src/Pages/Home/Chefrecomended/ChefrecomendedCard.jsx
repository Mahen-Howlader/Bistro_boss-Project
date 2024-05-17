function ChefrecomendedCard({data}) {
  const { image, price, category, recipe, name } = data || {};

  return (
    <div>
      <div className="card card-compact border pt-3 bg-gray-200 bg-base-100 shadow-xl">
        <figure>
          <img
          className="rounded-lg"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn bg-gray-400 border-b-4 border-b-black hover:bg-primary ">Add Card</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChefrecomendedCard;
