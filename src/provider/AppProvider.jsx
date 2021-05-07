import React, { createContext, useEffect, useState } from 'react'
import { apiBase } from '../service/api'
export const AppContext = createContext({})

export default function AppProvider({ children }) {

    const [isModal, setIsModal] = useState(false)
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0.00)
    const [date, setDate] = useState(0)
    const [transaction, setTransaction] = useState([])
    const [reload, setRealod] = useState(false)
    const [displayIncome, setDisplayIncome] = useState(0)
    const [displayExpense, setDisplayExpense] = useState(0)
    const [dislayTotal, setDisplayTotal] = useState(0)

    useEffect(() => {
        handleGetTransactions()
        handleDisplayCards()
    }, [])

    useEffect(() => {
        handleGetTransactions()
        setRealod(false)
    }, [reload])

    async function handleGetTransactions() {
        const response = await apiBase.get('/dev-finances')
        const data = await response.data
        setTransaction(data)
    }

    async function handlePostTransactions(event) {
        event.preventDefault()
        await apiBase.post('/dev-finances', { description, value, value })
    }

    async function handleDeleteTransactions(id) {
        await apiBase.delete(`/dev-finances/${id}`)
        setRealod(true)
    }

    async function handleDisplayCards() {
        const response = await apiBase.get('/dev-finances')
        const data = await response.data
        const onlyIncome = data
                            .filter(item => Math.sign(item.value) !== -1)
                            .map(item => item.value)
                            .reduce((accumulator, next) => accumulator + next, 0);
        setDisplayIncome(onlyIncome)
        const onlyExpense = data
                            .filter(item => Math.sign(item.value) === -1 )
                            .map(item => item.value)
                            .reduce((accumulator, next) => accumulator + next, 0);
        setDisplayExpense(onlyExpense)

        const onlyTotal = data
                            .map(item => item.value)
                            .reduce((accumulator, next) => accumulator + next, 0);
        setDisplayTotal(onlyTotal)
    }

    function handleModalOpen() {
        setIsModal(true)
    }

    function handleDescription(value) {
        setDescription(value)
    }

    function handleValue(value) {
        setValue(value)
    }

    function handleDate(value) {
        setDate(value)
    }

    function handleModalClose() {
        setIsModal(false)
        setDescription('')
        setValue(0)
        setDate('')
    }

    const store = {
        isModal,
        handleModalOpen,
        handleModalClose,
        description,
        value,
        date,
        handleDescription,
        handleValue,
        handleDate,
        transaction,
        handlePostTransactions,
        handleDeleteTransactions,
        displayIncome,
        displayExpense,
        dislayTotal
    }

    return (
        <AppContext.Provider value={store}>
            { children }
        </AppContext.Provider>
    )
}