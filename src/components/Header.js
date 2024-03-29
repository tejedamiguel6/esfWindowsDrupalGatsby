import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div>
            <header className={headerStyles.header}>
                {/* <h1>
                    <Link 
                        className={headerStyles.title} 
                        to='/'>
                        {data.site.siteMetadata.title}
                    </Link>
                </h1> */}
            </header>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link 
                            className={headerStyles.navItem} 
                            activeClassName={headerStyles.activeNavItem}
                            to='/'>Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClassName={headerStyles.activeNavItem}
                            className={headerStyles.navItem} 
                            to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link
                            activeClassName={headerStyles.activeNavItem}
                            className={headerStyles.navItem} 
                            to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link
                            activeClassName={headerStyles.activeNavItem}
                            className={headerStyles.navItem} 
                            to='/company'>Company</Link>
                    </li>

                </ul>
            </nav>
        </div>    
       
    )
}

export default Header