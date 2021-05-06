import React from 'react'

export default function Modal() {
    return (
        <div className="modal-overlay active">
            <div className="modal">
                <div id="form">
                    <h2>Nova Transação</h2>
                    <form action="" id="form-submit">
                        <div className="input-group">
                            <label className="sr-only" for="description">Descrição</label>
                            <input 
                                type="text" 
                                id="description" 
                                name="description" 
                                placeholder="Descrição"
                            />
                        </div>
                        <div className="input-group">
                            <label className="sr-only" for="amount">Valor </label>
                            <input 
                                type="number" 
                                id="amount" 
                                name="amount"
                                step="0.01"
                                placeholder="0,00"
                            />
                            <small>Use o sinal de - (negativo) para despesas e, (vírgula) para cassas decimais</small>
                        </div>

                        <div className="input-group">
                            <label className="sr-only" for="date">Data</label>
                            <input 
                                type="date" 
                                id="date" 
                                name="date"
                            />
                        </div>
                        <div className="input-group actions">
                            <a href="" className="button cancel">Cancelar</a>
                            <button>salvar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}