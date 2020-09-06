import React from 'react'
import './styles.scss'
import Logo from '../../assets/logo.png'

const Header = (props) => {
  // here instead of className="headerComponent" we are using data-test="headerComponent"
  // this way we can say that it is used in testing and should not be changed
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          Hakunaa
        </div>
      </div>
    </header>
  )
}

export default Header