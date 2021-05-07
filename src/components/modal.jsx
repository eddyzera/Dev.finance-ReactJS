import React, { useContext } from 'react'
import { AppContext } from '../provider/AppProvider'

export default function Modal() {

    const { 
        handleModalClose,
        description,
        value,
        date,
        handleDescription,
        handleValue,
        handleDate,
        handlePostTransactions
    } = useContext(AppContext)

    return (
        <div className="modal-overlay active">
            <div className="modal">
                <div id="form">
                    <h2>Nova Transação</h2>
                    <form id="form-submit" onSubmit={handlePostTransactions}>
                        <div className="input-group">
                            <label className="sr-only" htmlFor="description">Descrição</label>
                            <input 
                                type="text" 
                                id="description" 
                                name="description" 
                                placeholder="Descrição"
                                value={description}
                                onChange={(event) => handleDescription(event.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label className="sr-only" htmlFor="amount">Valor </label>
                            <input 
                                type="number" 
                                id="amount" 
                                name="amount"
                                step="0.01"
                                placeholder="0,00"
                                value={value}
                                onChange={(event) => handleValue(event.target.value)}
                            />
                            <small>Use o sinal de - (negativo) para despesas e, (vírgula) para cassas decimais</small>
                        </div>

                        <div className="input-group">
                            <label className="sr-only" htmlFor="date">Data</label>
                            <input 
                                type="date" 
                                id="date" 
                                name="date"
                                value={date}
                                onChange={(event) => handleDate(event.target.value)}
                            />
                        </div>
                        <div className="input-group actions">
                            <a href="" onClick={handleModalClose} className="button cancel">Cancelar</a>
                            <button>salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}