import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeComp from '../HomeComp'
import CounterComp from '../Components/CounterComp'
import ListsandKeys from '../Components/ListsandKeys'
import ContactUs from '../Components/ContactUs'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeComp />} />
        <Route path='/counter' element={<CounterComp />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/listandkeys' element={<ListsandKeys />} />
    </Routes>
  )
}

export default Routing