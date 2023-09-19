export default function ValidaCPF(props){
   let validacao =  props.cpf;
   let countNumbers = validacao.match(/\d/g); //Todos inteiro escoplo global - verifica se existe expressão regular
   let isValid;
   if(countNumbers.length >= 11){
        isValid = true;
   }else {
        isValid = false;
   }
    return(
        <>
            <p>{isValid ? "Valido" : "Invalido"}
            </p>
        
        </>

    )

}