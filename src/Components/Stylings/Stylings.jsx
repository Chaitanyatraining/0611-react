import React from 'react'
import './Styles.css'
import Headerstyle from './header.module.css'

const Stylings = () => {
    const InternalStyle = {
        headStyle:{
            color:'blue',
            backgroundColor:'orange'
        },
        divStyle:{
            backgroundColor:'yellow'
        }
    }

  return (
    <div>
        {/* 
            - Inline Styling
            - Internal Styling
            - External Styling
            - Module Styling
        */}

        <h2>Stylings</h2>
        <h5 style={{color:'red', backgroundColor:'yellow'}}>This is Inline Stylings</h5>
        <h5 style={InternalStyle.headStyle}>This is Internal Stylings</h5>
        <div style={InternalStyle.divStyle}>This is Internal</div>
        <h3 className='Exthead'>This is External Stylings</h3>
        <h2 className={Headerstyle.navstyle}>This is Module Stylings</h2>
        <button className={Headerstyle.buttonone} >submit</button>
        {/* <button className={props.details.status ? 'btn btn-success' : ''}>Click Here</button> */}
    </div>
  )
}

export default Stylings