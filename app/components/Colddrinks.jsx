"use client"

import items from '../data'
import Menu from './Menu';


const newItems = items.filter((item) => item.categoryEn === 'hotdrinks' );
console.log(newItems)
const Colddrinks = () => {
  return (
    <Menu items={newItems} />
  )
}

export default Colddrinks