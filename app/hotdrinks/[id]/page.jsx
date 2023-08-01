"use client"

import React from 'react'
import SelectedItem from '../../components/SelectedItem'
import items from '../../data'


const page = ({params}) => {

  let newData = items.map(x => Object.fromEntries(Object.entries(x).map(
    ([key, value]) => [key, typeof value == 'string' ? value.toLowerCase() : value])));
    

  const newItems = newData[params.id]

  console.log(newData)
  
  return (
    <div className="">   
      <SelectedItem newItems={newItems}/>
    </div>
  );
}

export default page