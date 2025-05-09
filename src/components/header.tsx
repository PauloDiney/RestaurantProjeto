import '../components/CSS/header.css'; // Se preferir separar o CSS
import logo from '../assets/logo.png';

export default function Header(){
    return(
        <div className="header">
            <img src={logo} alt="" />
        </div>
    )
}