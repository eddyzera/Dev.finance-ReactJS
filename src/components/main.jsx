import React, { useContext } from 'react'
import { AppContext } from '../provider/AppProvider'
import Balance from './balance'
import Footer from './footer'
import Modal from './modal'
import Transaction from './transaction'

export default function Main() {

    const { isModal } = useContext(AppContext)

    return (
        <main className="container">
            <Balance />
            <Transaction />
            { isModal && <Modal /> }
            <Footer />
        </main>
    )
}