import { useState, useEffect } from "react"

import styles from './Formulario.module.css'

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [IMC, setIMC] = useState(0);

    const calculaIMC = () => {
        const alturaFloat = parseFloat(altura);
        const pesoFloat = parseFloat(peso);
        
        if(alturaFloat > 0 && pesoFloat > 0) {
            const alturaAoQuadrado = alturaFloat * alturaFloat;
            const calculoIMC = pesoFloat / alturaAoQuadrado;
            const imcFinal = parseFloat(calculoIMC.toFixed(2));

            if(imcFinal < 18.50) {
                return (
                    <>
                        <p>seu imc: <span>{imcFinal}</span></p>
                        <p>Sua classificação: Magreza</p>
                    </>
                )
            }
            if(imcFinal >= 18.50 && imcFinal < 25.0) {
                return (
                    <p>seu imc: <span>{imcFinal}</span></p>
                );
            }
            if(imcFinal >= 25.0 && imcFinal < 30.0) {
                return (
                    <p>seu imc: <span>{imcFinal}</span></p>
                )
            }
            if(imcFinal >= 30.0 && imcFinal < 40.0) {
                return (
                    <p>seu imc: <span>{imcFinal}</span></p>
                )
            }
            else {
                return (
                    <p>seu imc: <span>{imcFinal}</span></p>
                )
            }
    
        }
    }

    return (
        <div>
            <form>
                <div className={styles.inputs}>
                        <div>
                            <label>Altura <small>(ex.: 1,70)</small></label>
                            <input type="number" placeholder="Sua Altura" onChange={evento => setAltura(parseFloat(evento.target.value))}></input>
                        </div>
                        <div>
                            <label className={styles.peso_label}>Peso <small>(ex.: 69,2)</small></label>
                            <input type="number" placeholder="Seu Peso" onChange={evento => setPeso(parseFloat(evento.target.value))}></input>
                        </div>
                </div>
                {calculaIMC()}
            </form>
        </div>
    )
}

export default Formulario;