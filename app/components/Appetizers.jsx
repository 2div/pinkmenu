"use client"

import Link from 'next/link';
import items from './../data'
import Menu from './Menu';


const newItems = items.filter((item) => item.category === 'Appetizers/المقبلات');
const Appetizers = () => {
  return (
    <Menu items={newItems} />
  )
}

export default Appetizers