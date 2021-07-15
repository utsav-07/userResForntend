import React, { useState, useEffect } from 'react'
import './Navbar.css'
import * as FaIcons from "react-icons/fa"

import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'
import { SidebarData } from './SideBarData'
import { IconContext } from 'react-icons/lib'

function Navbar(props) {

    let data = props.loadData

    // console.log(props.dark);



    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(
        !sidebar
    )


    return (
        <>

            <IconContext.Provider value={{ color: 'red' }}>
                <div className="navbar">

                    <Link to="#" className="menu-bar">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <div className="nav">

                        <label className="switch">
                            <input type="checkbox"
                                checked={props.dark}
                                onChange={() => data(!props.dark)}
                            />
                            <span class="slider round"></span>
                        </label>

                    </div>

                </div>

                <nav className={sidebar ? 'nav-menu active ' : 'nav-menu'}>

                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toogle">
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className} >
                                    <Link to={item.path}>
                                        {item.icons}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
