import { Autor, Letra, Titulo } from "./hino"


export default function Home(){
   return (
      <div>
         <h2>
            Viva Santana!
         </h2>
         {Titulo()}
         {Autor()}
         {Letra()}
      </div>
   )
}