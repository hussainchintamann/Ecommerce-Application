import { data } from 'autoprefixer'
import React from 'react'
import CategoryCard from './CategoryCard'

const Data = [
    {
        id:0,
        name:"Fresh Fruits",
        count:"9 Products",
        img:"./src/blog1 (1).jpg",
    },
    {
        id:1,
        name:"Fresh Veg",
        count: "7 Products",
        img:'./src/blog1 (2).jpg',
    },
    {
        id:2,
        name:"Canneds Goods",
        count:"10 Products",
        img:'./src/blog1 (3).jpg',
    },
    {
        id:3,
        name:"Fresh Juice",
        count:"2 Products",
        img:'./src/blog1 (4).jpg',
    },
    {
        id:3,
        name:"Fresh Juice",
        count:"2 Products",
        img:'./src/blog1 (4).jpg',
    },
    {
        id:2,
        name:"Canneds Goods",
        count:"10 Products",
        img:'./src/blog1 (3).jpg',
    },
    {
        id:1,
        name:"Fresh Veg",
        count: "7 Products",
        img:'./src/blog1 (2).jpg',
    },
    {
        id:0,
        name:"Fresh Fruits",
        count:"9 Products",
        img:"./src/blog1 (1).jpg",
    },
    
]


function Category() {
  return (
    <div className='container pt-16'>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {
            Data.map((el)=>(
                <CategoryCard
                key={el.id}
                names={el.name}
                count={el.count}
                img={el.img}
                />
            ))
        }
      </div>
    </div>
  )
}

export default Category
