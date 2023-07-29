import React from 'react'
import SelectedItem from '../../components/SelectedItem'



const Selecteditem = ({params}) => {
  const metadata = {
    title: `Breakfast Menu`,
    description: 'https://pinkuwait.com/ Food Menu',
  
  }
  return (
    <SelectedItem params={params} />
  )
}

export default Selecteditem