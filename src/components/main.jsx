import React from 'react'
import Balance from './balance'
import Footer from './footer'
import Modal from './modal'
import Transaction from './transaction'

export default function Main() {
    return (
        <main className="container">
            <Balance />
            <Transaction />
            <Modal />
            <Footer />
        </main>
    )
}