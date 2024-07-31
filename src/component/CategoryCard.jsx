import React from 'react'

function CategoryCard({names,count,img}) {
  return (
    <div className='border border-gray-200 hover-border-gray-300 hover:scale-105 transition transform '>
        <div className="flex justify-between items-center p-6">
            <div className="space-y-4">
                <h3 className="font-medium text-xl">{names}</h3>
                <p className="text-grey-300">{count}</p>
            </div>
            <img className='w-[100px]' src={img}  alt="" />
        </div>
      
    </div>
  )
}

export default CategoryCard
