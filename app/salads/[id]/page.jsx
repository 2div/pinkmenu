"use client"

import React from 'react'
import SelectedItem from '../../components/SelectedItem'
import items from '../../data'
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const page = ({params}) => {

  const newItems = items[params.id - 1]
  console.log(newItems)
  return (
    <div className="">
      
      <SelectedItem newItems={newItems}/>
    </div>
  );
}

export default page