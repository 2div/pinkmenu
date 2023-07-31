"use client"

import items from './../data'
import Menu from './Menu';


const newItems = items.filter((item) => item.category === 'Breakfast/الفطور');
const Breakfast = () => {
  return (
    <Menu items={newItems} />
  )
}

export default Breakfast