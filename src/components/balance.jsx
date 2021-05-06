import React from 'react'
import Income from '../assets/income.svg'
import Expense from '../assets/expense.svg'
import Total from '../assets/total.svg'

export default function Balance() {
    return (
        <section id="balance">
            <h2 className="sr-only">Balanço</h2>
            <div className="card">
                <h3>
                    <span>Entradas</span>
                    <img src={Income} alt="imagem de entradas"/>
                </h3>
                <p className="income-value">R$: 500,00</p>
            </div>
            <div className="card">
                <h3>
                    <span>Saídas</span>
                    <img src={Expense} alt="imagem de saídas"/>
                </h3>
                <p class="expense-value">R$: 500,00</p>
            </div>
            <div className="card total">
                <h3>
                    <span>Total</span>
                    <img src={Total} alt="imagem de total"/>
                </h3>
                <p className="total-value">R$: 500,00</p>
            </div>
        </section>
    )
}