import Branco from "@/Componente/Branco";
import Preto from "@/Componente/Preto";
import PecaVermelha from "@/Componente/PecaVermelha";
import PecaBranca from "@/Componente/PecaBranca";
import style from '@/styles/Tabuleiro.module.css'
export default function tabuleiro(){
    return(
        <>
        <div className={style.fundo}>
                <Branco/> 
                <PecaVermelha/>
                <Preto/>
                <Branco/> 
                <PecaVermelha/>
                <Preto/> 
                <Branco/> 
                <PecaVermelha/>
                <Preto/> 
                <Branco/> 
                <PecaVermelha/>
                <Preto/> 
        </div>
        <div className={style.fundo}> 
                <PecaVermelha/>
                <Preto/>
                <Branco/>
                <PecaVermelha/> 
                <Preto/>
                <Branco/> 
                <PecaVermelha/>
                <Preto/> 
                <Branco/>
                <PecaVermelha/>
                <Preto/>
                <Branco/>
            
        </div>
        <div className={style.fundo}>
                <Branco/> 
                <PecaVermelha/>
                <Preto/> 
                <Branco/> 
                <PecaVermelha/>
                <Preto/> 
                <Branco/> 
                <PecaVermelha/>
                <Preto/> 
                <Branco/>
                <PecaVermelha/>
                <Preto/> 
        </div>
        <div className={style.fundo}> 
                <Preto/> 
                <Branco/> 
                <Preto/> 
                <Branco/> 
                <Preto/> 
                <Branco/>
                <Preto/>
                <Branco/> 
        </div>
        <div className={style.fundo}> 
                <Branco/> 
                <Preto/> 
                <Branco/> 
                <Preto/> 
                <Branco/>
                <Preto/>
                <Branco/> 
                <Preto/> 
        </div>
        <div className={style.fundo}>  
                <PecaBranca/>
                <Preto/> 
                <Branco/> 
                <PecaBranca/>
                <Preto/> 
                <Branco/>
                <PecaBranca/>
                <Preto/>
                <Branco/> 
                <PecaBranca/>
                <Preto/> 
                <Branco/>
        </div>
        <div className={style.fundo}> 
                <Branco/> 
                <PecaBranca/>
                <Preto/> 
                <Branco/> 
                <PecaBranca/>
                <Preto/> 
                <Branco/>
                <PecaBranca/>
                <Preto/>
                <Branco/> 
                <PecaBranca/>
                <Preto/> 
        </div>
        <div className={style.fundo}>  
                <PecaBranca/>
                <Preto/> 
                <Branco/> 
                <PecaBranca/>
                <Preto/> 
                <Branco/>
                <PecaBranca/>
                <Preto/>
                <Branco/> 
                <PecaBranca/>
                <Preto/> 
                <Branco/>
        </div>

        </>

    )
}