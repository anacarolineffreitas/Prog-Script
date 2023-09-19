import styles from '@/styles/integracao2CSS.module.css'
import PrimeiroComponete from '@/componets/PrimeiroComp'
export default function IntegracaoCSS(){
    return(
        <>
           <h1 className='{styles.vermelho}'>Teste CSS Module</h1> 
           <h1 className='{styles.azul}'>Teste CSS Module</h1>  
           <div className='integracao1'>
            <PrimeiroComponete titulo = "teste com parametro" css = "verde"/>
           </div>
                  
                    
        </>
    )
}
