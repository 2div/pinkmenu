"use client"

import React from 'react'
import SelectedItem from '../../components/SelectedItem'
import items from '../../data'
import { useRouter } from 'next/navigation'



const page = ({params}) => {

  const newItems = items[params.id - 1]

  return (
    <div className="">
      <SelectedItem newItems={newItems}/>
    </div>
  );
}

export default page