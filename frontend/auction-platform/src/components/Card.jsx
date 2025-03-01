const Card = ({ product }) => (
  <div className="bg-white shadow-lg rounded-lg p-4">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h3 className="font-semibold text-xl">{product.title}</h3>
    <p>{product.description}</p>
    <p className="font-bold text-indigo-600">${product.price}</p>
  </div>
);

export default Card;
