"use client"

import items from '../data'
import Menu from './Menu';


const newItems = items.filter((item) => item.category === 'Pizza / بيتزا');
console.log(newItems)
const Pizza = () => {
  return (
    <Menu items={newItems} />
  )
}

export default Pizza