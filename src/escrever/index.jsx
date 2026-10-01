
    import { useState } from "react";
    import "./index.css";

    function Escrever() {
    const [texto, setTexto] = useState("");
    const [texto2, setTexto2] = useState("");
    const [cor, setCor] = useState("#3767ecff");
    const [check, setCheck] = useState(true);    

    const trocarTexto = () => {
        console.log("BOTÃO CLICADO");
        console.log("Texto:", texto);

        setTexto2(texto);
    };

    const mudar4 = () => {
        setCheck(!check);
    }

    return (
        <div className="pagina" >
        <div className="card" style={{backgroundColor: `${cor}`}}>

            <h1>
            paizão  o thur™ <span>{texto}</span>
            </h1>

            <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            />

            <div className="interrogacao">{texto2}</div>

            <input
            type="text"
            value={texto2}
            readOnly
            />

            <button onClick={trocarTexto}>
            Trocar texto
            </button>

            <div className="linha"></div>

            <h2>cor escolhida </h2>

            <div className="dois-pontos">:</div>

            <input
            className="color-input"
            type="color"
            value={cor}
            onChange={(e) => setCor(e.target.value)}
            />

                <div className='oi7'>
                <h1>Gosta de estudar? {check ? 'Sim' : 'Não'}</h1>
                <input type="checkbox" onChange={mudar4} />
            </div>
        
        </div>



        </div>
        
        
    );
    }

     export default Escrever;
