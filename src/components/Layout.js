import React from 'react'
import Header from './Header'
import Footer from './Footer'

import Style from '../styles/index.scss'

import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        
        <div className={layoutStyles.container} >
            {/* <div className={layoutStyles.topBar}></div>           */}
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>
        
            <Footer />
        </div>
    )
}


export default Layout

