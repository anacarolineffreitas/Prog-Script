function gerarLista(valor = 10){
    let lista = [];
    for(let i = 0; i <= valor; i++){
        lista.push(<span>{i}</span>)
    }
    return lista
}
export default function desafio(){
    return(
        <>
        {gerarLista()}
        {gerarLista(20)}
        {gerarLista(30)}
        </>
    )
}