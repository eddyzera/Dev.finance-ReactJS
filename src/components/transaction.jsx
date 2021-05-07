import React, { useContext } from 'react'
import Minus from '../assets/minus.svg'
import { AppContext } from '../provider/AppProvider'

export default function Transaction() {

    const { 
        handleModalOpen, 
        transaction,
        handleDeleteTransactions
    } = useContext(AppContext)

    return (
        <section id="transaction">
            <h2 className="sr-only">Transações</h2>
            <a href="#" onClick={handleModalOpen} className="button new">+ Nova transação</a>
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
                    { transaction.map(item => {
                        return (
                            <tr key={item.id}>
                                <td className="description">
                                    {item.description}
                                </td>
                                <td className={ Math.sign(item.value) === -1 ? "expense" : "income" }>
                                    {item.value.toLocaleString("pt-BR", 
                                        {style: "currency",currency: "BRL",}
                                    )}
                                </td>
                                <td className="date">
                                    { new Date(item.date).toLocaleDateString("pt-br") }
                                </td>
                                <td>
                                    <button 
                                        className="button-delete" 
                                        onClick={() => handleDeleteTransactions(item.id)}
                                    >
                                        <img src={Minus} alt="remover transação" />
                                    </button>
                                </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </section>
    )
}