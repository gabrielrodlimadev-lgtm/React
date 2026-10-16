import Greetings from "../Greetings";


const user = window.prompt("Qual seu nome?") || "Visitante";

function Home() {
    return(
        <Greetings nome={user}/>
    );
}
export default Home;
