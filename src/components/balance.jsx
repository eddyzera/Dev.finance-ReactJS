import React, { useContext } from 'react'
import Income from '../assets/income.svg'
import Expense from '../assets/expense.svg'
import Total from '../assets/total.svg'
import { AppContext } from '../provider/AppProvider'

export default function Balance() {

    const { 
        displayIncome, 
        displayExpense,
        dislayTotal
    } = useContext(AppContext)

    return (
        <section id="balance">
            <h2 className="sr-only">Balanço</h2>
            <div className="card">
                <h3>
                    <span>Entradas</span>
                    <img src={Income} alt="imagem de entradas"/>
                </h3>
                <p className="income-value">
                    { displayIncome.toLocaleString("pt-BR", {style: "currency",currency: "BRL",}) }
                </p>
            </div>
            <div className="card">
                <h3>
                    <span>Saídas</span>
                    <img src={Expense} alt="imagem de saídas"/>
                </h3>
                <p className="expense-value">
                    { displayExpense.toLocaleString("pt-BR", {style: "currency",currency: "BRL",}) }
                </p>
            </div>
            <div className="card total">
                <h3>
                    <span>Total</span>
                    <img src={Total} alt="imagem de total"/>
                </h3>
                <p className="total-value">
                    { dislayTotal.toLocaleString("pt-BR", {style: "currency",currency: "BRL",}) }
                </p>
            </div>
        </section>
    )
}