"use client"

import items from '../data'
import Menu from './Menu';


const newItems = items.filter((item) => item.category === 'Main Course / أطباق رئيسية' );
console.log(newItems)
const maincourse = () => {
  return (
    <Menu items={newItems} />
  )
}

export default maincourse