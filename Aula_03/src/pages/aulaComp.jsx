import PrimeiroComponete from "@/componets/PrimeiroComp";
import ValidaCPF from "@/componets/ValidaCPF";

export default function AulaComp(){
    return(
        <>
            <PrimeiroComponete
                titulo="Meu primeiro Componente"
                subtitulo="Estamos aprendendo NEXT.js com REACT"
            />

            <PrimeiroComponete
                titulo="Teste de chamada"
                subtitulo="Uma nova tag"
            />
            <ValidaCPF cpf = "Meu CPF: 12345678910"/>
            <ValidaCPF cpf = "1234567"/>

        </>
    )
}