const products = [
  {
    name: "VOLA MINERAL GREY SNEAKERS",
    material: "Recycled wool",
    price: "",
    oldPrice: "",
    image: "/assets/Earbuds/fighter/banner.png",
    isBanner: true,
  },
  {
    name: "VOLA POLAR GREY SNEAKERS",
    material: "Recycled wool",
    price: "59.00€",
    oldPrice: "129.00€",
    image: "/assets/Earbuds/fighter/image1.png",
  },
  {
    name: "VOLA MOSS & MUSTARD",
    material: "Recycled wool",
    price: "79.00€",
    oldPrice: "129.00€",
    image: "/assets/Earbuds/fighter/image2.png",
  },
  {
    name: "VOLA MOSS & MUSTARD",
    material: "Recycled wool",
    price: "79.00€",
    oldPrice: "129.00€",
    image: "/assets/Earbuds/fighter/image3.png",
  },
  {
    name: "VOLA MOSS & MUSTARD",
    material: "Recycled wool",
    price: "79.00€",
    oldPrice: "129.00€",
    image: "/assets/Earbuds/fighter/image4.png",
  },
];

const ProductGrid = () => {
  return (
    <div className="bg-neutral-100 min-h-screen py-6 px-16">
      <div className="grid md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className={`relative rounded overflow-hidden shadow-md transition-transform ${
              product.isBanner ? "md:col-span-2" : "bg-[#D0D0D0]"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className={`w-full ${
                product.isBanner ? "h-full" : ""
              } object-cover transition-transform duration-300 hover:scale-105`}
            />
            {!product.isBanner && (
              <div className="py-8 px-4 bg-gray-100">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.material}</p>
                <div className="mt-2">
                  <span className="font-bold text-black">{product.price}</span>
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 ml-2">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
