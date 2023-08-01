"use client"

import items from '../data'
import Menu from './Menu';


const newItems = items.filter((item) => item.category === 'Desserts / حلويات' );
console.log(newItems)
const Desserts = () => {
  return (
    <Menu items={newItems} />
  )
}

export default Desserts