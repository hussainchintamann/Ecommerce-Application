const data = [
  {
    id:0,
    name:'Dried Mango',
    price:'500$',
    img:'./src/blog1 (1).jpg',
  },
  {
    id:1,
    name:'Crunchy Crips',
    price:'400$',
    img:'./src/blog1 (2).jpg',
  },
  {
    id:2,
    name:'Jewel Cranberries',
    price:'100$',
    img:'./src/blog1 (3).jpg',
  },
  {
    id:3,
    name:'Almond organic',
    price:'600$',
    img:'./src/blog1 (4).jpg',
  },
]


function FeatureSectionFruit() {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits and Vagetable</h3>
        <p className="text-gray-600 mt-2">
          Buy farm fresh fruits and vagetable online at the best prices
        </p>
        </div>
      
      <div className="space-x-4 mt-8 lg:mt-0">
        <button className="feature-btn">Fruits</button>
        <button className="text-gray-600 hover:text-accent">Vagetable</button>
        <button className="text-gray-600 hover:text-accent"> Bread and Bakery</button>
      </div>
    </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
      <img className="w-full h-full object-cover" src="./src/blog1 (1).jpg" alt="" />
    </div>
    </div>
  );
}

export default FeatureSectionFruit;
