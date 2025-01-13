import { useState } from 'react';

import Cabecalho from './components/cabecalho';
import Formulario from './components/formulario';
import Tabela from './components/tabela';

import './global.css'

function App() {

    return (
        <>
            <div className='container'>
                <Cabecalho/>
                <Formulario/>
                <Tabela></Tabela>
            </div>
        </>
    )
}

export default App
