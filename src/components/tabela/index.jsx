import Formulario from '../formulario';

import styles from './Tabela.module.css';

// eslint-disable-next-line react/prop-types
const Tabela = ({imc}) => {
    return (
        <>
            <table className={styles.table__imc}>
                <thead>
                    <tr>
                        <th colSpan={3}>Tabela IMC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.table__header}>
                        <td>imc</td>
                        <td>classificação</td>
                        <td>Obesidade (Grau)</td>
                    </tr>
                    <tr className={styles.magreza}>
                        <td>menor que 18,5</td>
                        <td>Abaixo do peso</td>
                        <td>0</td>
                    </tr>
                    <tr className={styles.normal}>
                        <td>entre 18,5 e 24,9</td>
                        <td>Peso ideal</td>
                        <td>0</td>
                    </tr>
                    <tr className={styles.sobrepeso}>
                        <td>entre 25,0 e 29,9</td>
                        <td>Levemente acima do peso</td>
                        <td>I</td>
                    </tr>
                    <tr className={styles.obesidade}>
                        <td>entre 30,0 e 39,9</td>
                        <td>Acima do peso</td>
                        <td>II</td>
                    </tr>
                    <tr className={styles.grave}>
                        <td>maior que 40,0</td>
                        <td>obesidade</td>
                        <td>III</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Tabela;