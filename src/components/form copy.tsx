"use client"

import axios from "axios";
import React, { useState } from "react";
import { IU002 } from "./IU002";

export function MyForm() {

type dataType = {
    nome: string;
    telefone: number | undefined;
    email: string;
    segmento: string;
    informacao: string;
    
}

const [data, setData] = useState<dataType>({

    nome: '' ,
    
    telefone: undefined,
    
    email: '',
    
    segmento: '',
    
    informacao: ''
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement  >) => {
    const { name,value } = e.target;

    setData({
        ...data,
        [name]: value,
    })

}

const handleClick = async () => {

    let name  = (document.getElementById('nome') as HTMLInputElement).value
    
    let tel  = (document.getElementById('telefone') as HTMLInputElement).value

    let hotmail  = (document.getElementById('email') as HTMLInputElement).value

    let segment  = (document.getElementById('segmento') as HTMLInputElement).value

    let infor  = (document.getElementById('informacao') as HTMLInputElement).value

    type datatype = {
        nome: string;
        telefone: number | undefined;
        email: string;
        segmento: string;
        informacao: string;
    }

    const Post = async (data:datatype) =>{         
    
        const response = await axios.post('https://fjinfor.ddns.net/fvendas/api/api_addcontato.php?funcao=post_contato', {

            nome: name,
            
            telefone: tel,

            email: hotmail,
            
            segmento: segment,
            
            informacao: infor

        }).then(async function (response){   
            
            if(name != '' && tel != '' && hotmail != '' && segment != 'Selecione um segmento' && infor != ''){
                
                await axios.get(`https://fjinfor.ddns.net/fvendas/api/api_contato.php?funcao=get_contato_email&email=${hotmail}`).then(function (response){
    
                const data = response.data
                  
                if(data.length === 0 ){

                        window.alert('Cadastro realizado com sucesso!')
                    

                }else {

                        window.alert('E-mail já existe')       

                    }
                })
    
            } else { 

                window.alert('E1- Dados do formulário Inválido')

            }
        

        }).catch(async function (error){

            console.error(error)
    
            console.log('teste erro :(')

           if(name != '' && tel != '' && hotmail != '' && segment != 'Selecione um segmento' && infor != ''){

            await axios.get(`https://fjinfor.ddns.net/fvendas/api/api_contato.php?funcao=get_contato_email&email=${hotmail}`).then(function (response){

            const data = response.data
              
            if(data.length === 0 ){

                    window.alert('Cadastro realizado com sucesso!')

            }else {

                    window.alert('E-mail já existe') 

                }
            })

           } else { 

            window.alert('E1- Dados do formulário Inválido')

           }

        })
          
    }

    Post({
        nome: data.nome,
                
        telefone: data.telefone,
                
        email: data.email,
                
        segmento: data.segmento,
                
        informacao: data.informacao
                
        })
}

const [ cardcomponente, setCardcomponent] = useState(false)

const showCard = (event: any) => {
    
    event.preventDefault()

    new Promise(card =>{
    
    card(true)
    
    }).then(()=>{
        
    setCardcomponent(true)
       
    })

}

const options = [
    {label: 'Material de construção', value: 'Material de construção'},
    {label: 'Supermercado', value: 'Supermercado'},
    {label: 'Padaria', value: 'Padaria'}
]

return (
   

        <form className="items-center justify-center z-0" >

        <div className="w-[609px] h-[904px] top-[69px] left-[815px] gap-0 border-r-radius shadow-shadows absolute ">

          <div className="absolute flex flex-col px-[34px] mt-[187px]"> 

          <div className="flex flex-col mb-[16px]">     

          <label className=" text-preto text-20 font-normal leading-24.2 text-left w-[172px] h-[24px] top-[256px] left-[849px] gap-0 mb-[5px]" htmlFor="nome">Nome completo:</label>

          <input className="text-preto h-[45px] w-[541px] top-[285px] left-[849px] rounded-inradius border border-solid border-l-cinzaclaro gap-0 px-[17px] pt-[11px] pb-[10px] rounded-[10px] text-20" type='text' placeholder='Maria da Silva' id='nome' name="nome" value={data.nome} onChange={handleChange} required />
        
          </div>

          <div className="flex flex-col mb-[13px]" >

          <label className="text-preto text-20 font-normal leading-24.2 text-left w-[172px] h-[24px] top-[346px] left-[849px] gap-0 mb-[8px]" htmlFor="telefone">Telefone:</label>

          <input className="text-preto w-[541px] h-[45px] top-[378px] left-[849px] gap-0 px-[17px] pt-[13px] pb-[8px] border border-solid border-l-cinzaclaro rounded-[10px] text-20" type='number' placeholder='(27)3700-0000' id='telefone' name="telefone" value={data.telefone} onChange={handleChange} required/>

          </div>

          <div className="flex flex-col mb-[11px]">

          <label className="text-preto text-20 font-normal leading-24.2 text-left w-[172px] h-[24px] top-[436px] left-[849px] gap-0 mb-[10px]" htmlFor="email">E-mail:</label>

          <input className="text-preto w-[541px] h-[45px] top-[470px] left-[849px] gap-0 rounded-[10px] px-[17px] pt-[11px] pb-[10px] border border-solid border-l-cinzaclaro text-[20px]" type='email' placeholder='maria@gmail.com' id='email' name="email"  value={data.email} onChange={handleChange} required/>

          </div>

          <div className="flex flex-col mb-[18px]">

          <label className="text-preto text-20 font-normal leading-24.2 text-left w-[172px] h-[24px] top-[526px] left-[849px] gap-0 mb-[10px]" htmlFor="segmento" >Segmento:</label>

          <select className="text- w-[541px] h-[45px] top-[560px] left-[849px] px-[17px] pt-[11px] rounded-[10px] border border-solid border-l-cinzaclaro text-[20px]" id='segmento' name='segmento' required >
          
          <option className="text-cinzaclaro font-normal absolute w-[248px] h-[24px] top-[541px] left-[866px] gap-0 abslute" disabled hidden selected  >Selecione um segmento</option>
          
          <option className="text-preto" value={data.segmento}  >Material de construção</option>
          
          <option className="text-preto" value={data.segmento} >Supermercado</option>
          
          <option className="text-preto" value={data.segmento} >Padaria</option>
          
          </select>

          </div>

          <div className="flex flex-col">

          <label className="text-preto text-20 font-normal leading-24.2 text-left w-[238px] h-[24px] top-[683px] left-[849px] gap-0 mb-[14px]" htmlFor="howtohelp">Como podemos ajudar?</label>

          <input className="text-preto w-[541px] h-[98px] top-[661px] left-[849px] px-[17px] py-2 border border-solid border-l-cinzaclaro rounded-[10px] text-20" name='informacao' id='informacao' value={data.informacao} onChange={handleChange} required />

          </div>
        
          <div className="mt-[51px] mb-[14px]">

          <button className="w-[541px] h-[51px] top-[810px] left-[849px] gap-0 rounded-[5px] bg-cinzaescuto font-inter text-[16px] font-semibold leading-[19.36px] text-center "  onClick={showCard}>Receber Dados</button>
          
          {cardcomponente  && <IU002 card={cardcomponente} setCard={setCardcomponent}  />}

          </div>
         
          <button className="w-[541px] h-[51px] top-[875px] left-[849px] gap-5 rounded-[5px] bg-azulbutton" id="enviar" onClick={handleClick} type="submit">Enviar</button>
         
          </div>

          </div>

          </form>
     
         
  );
  
}
