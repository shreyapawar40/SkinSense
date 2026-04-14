export default function ProductCard({ product }: any) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mb-4">

      <img src={product.image} className="h-32 mx-auto" />

      <p className="text-sm">{product.name}</p>
      <p>{product.price}</p>
      <p>⭐ {product.rating}</p>

      <a href={product.url} target="_blank">
        <button className="bg-[#c48c8c] text-white px-4 py-2 rounded-full mt-2">
          Buy
        </button>
      </a>

    </div>
  );
}