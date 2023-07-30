import React, { useState } from 'react'
import SelectedItem from '../components/SelectedItem'
import { useRouter } from 'next/navigation';

const selectedItem = () => {

return (
    <main className=" ">
        <SelectedItem/>
    </main>
  )
}

export default selectedItem