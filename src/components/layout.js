import React from 'react';
import Header from './header'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout