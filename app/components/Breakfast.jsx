"use client"

import Link from 'next/link';
import items from './../data'
import Menu from './Menu';


const newItems = items.filter((item) => item.category === 'Breakfast/الفطور');
console.log(newItems)
const Breakfast = () => {
  return (
    <Menu items={newItems} />
  )
}

export default Breakfast