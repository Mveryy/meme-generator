import troll from "/troll-face.svg";
import { Div } from "./styled";

export default function Header() {
    return (
        <Div>
            <img src={troll} alt="Troll Face Image" />
            <h1>Meme Generator</h1>
            <h3>React Course - Project 3</h3>
        </Div>
    );
}
