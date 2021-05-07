import React from 'react'
import Logo from '../assets/logo.svg'

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="dev.finance$ logo"/>
        </header>
    )
}