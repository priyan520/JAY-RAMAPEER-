import React from 'react';

const MENU_ITEMS = [
  {
    name: 'Affogato Classic',
    price: '$5.99',
    description: 'Vanilla ice cream drowned in hot espresso',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Cappuccino',
    price: '$4.99',
    description: 'Espresso with steamed milk foam',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&auto=format&fit=crop&q=80',
  },
  {
    name: 'Caramel Macchiato',
    price: '$5.49',
    description: 'Espresso with vanilla and caramel',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&auto=format&fit=crop&q=80',
  },
];

const Menu = () => {
  return (
    <section className="py-20 px-4" id="menu">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#4A2D1C] mb-12">Our Signature Menu</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <MenuItem key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({
  name,
  price,
  description,
  image,
}: {
  name: string;
  price: string;
  description: string;
  image: string;
}) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-[#4A2D1C]">{name}</h3>
        <span className="text-lg font-bold text-[#8B5E3C]">{price}</span>
      </div>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 w-full bg-[#4A2D1C] text-white py-2 rounded-full hover:bg-[#3A1D0C] transition-colors">
        Add to Order
      </button>
    </div>
  </div>
);

export default Menu;