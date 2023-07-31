"use client"

import items from './../data'
import Menu from './Menu';


const newItems = items.filter((item) => item.category === 'Salads / السلطات');
const Salads = () => {
  return (
    <Menu items={newItems} />
  )
}

export default Salads