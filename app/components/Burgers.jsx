"use client"

import Link from 'next/link';
import items from '../data'
import Menu from './Menu';


const newItems = items.filter((item) => item.category === 'Burgers / برجر');
const Burgers = () => {
  return (
    <Menu items={newItems} />
  )
}

export default Burgers