import { use, useState } from "react";

  function App() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] =useState("");
    
    const [user, setUser] = useState({})

    function handelRegister(e){
      e.preventDefault();
      alert("usuario registrado com sucesso")
      setUser({
        nome:nome,
        idade:idade,
        email:email
      })
      
    }
    
    return (
      <div>
        <h1>Cadastrando usuario</h1>
        <form onSubmit={handelRegister}>
        <label> Nome:</label><br/>
        <input placeholder="Digite seu nome" value={nome} onChange={(e)=> setNome(e.target.value)}/>
        <br />

        <label> Email:</label><br/>
        <input placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <br />

        <label> Idade:</label><br/>
        <input placeholder="Digite sua idade" value={idade} onChange={(e) => setIdade(e.target.value)}/>
        <br />

        <button type="submit">Registrar</button>
        </form>

        <br /><br />
        <div>
        <span>Bem vindo {user.nome} </span><br />
        <span>{user.idade} anos </span><br />
        <span>email: {user.email}</span><br />

        </div>
      </div>
    );
  }
  export default App;
