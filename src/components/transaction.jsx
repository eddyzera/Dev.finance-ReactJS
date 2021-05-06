import React from 'react'
import Minus from '../assets/minus.svg'

export default function Transaction() {
    return (
        <section id="transaction">
            <h2 className="sr-only">Transações</h2>
            <a href="#" className="button new">+ Nova transação</a>
            <table id="data-table">
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="render-data">
                    <tr>
                        <td className="description">Web Site</td>
                        <td className="income">R$: 500,00
                        </td>
                        <td className="date">00/00/00</td>
                        <td>
                            <button className="button-delete" >
                            <img src={Minus} alt="remover transação" />
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td className="description">Luz</td>
                        <td className="expense">R$: -500,00
                        </td>
                        <td className="date">00/00/00</td>
                        <td>
                            <button className="button-delete" >
                            <img src={Minus} alt="remover transação" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}