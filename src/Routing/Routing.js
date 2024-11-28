import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeComp from '../HomeComp'
import CounterComp from '../Components/CounterComp'
import ListsandKeys from '../Components/ListsandKeys'
import ContactUs from '../Components/ContactUs'
import UserData from '../Components/UserData'
import Pagination from '../Components/Pagination'
import CounterFunc from '../Components/CounterFunc'
import FetchUsersData from '../Components/FetchUsersData'
import UseRefHook from '../Components/Hooks/UseRefHook'
import UseReducerHook from '../Components/Hooks/UseReducerHook'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomeComp />} />
        <Route path='/counter' element={<CounterComp />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/lifecyclemethods' element={<UserData />} />
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/counterfunc' element={<CounterFunc />} />
        <Route path='/fetchuserdata' element={<FetchUsersData />} />
        <Route path='/listandkeys' element={<ListsandKeys />} />
        <Route path='/userefhook' element={<UseRefHook />} />
        <Route path='/usereducerhook' element={<UseReducerHook />} />
    </Routes>
  )
}

export default Routing