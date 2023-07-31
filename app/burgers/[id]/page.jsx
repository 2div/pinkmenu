"use client"

import React from 'react'
import SelectedItem from '../../components/SelectedItem'
import items from '../../data'


const page = ({params}) => {

  const newItems = items[params.id]

  return (
    <div className="">
      <SelectedItem newItems={newItems}/>
    </div>
  );
}

export default page