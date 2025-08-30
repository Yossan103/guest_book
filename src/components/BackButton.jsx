import { IoChevronBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function BackButton() {
    return (
       <Link to='/'><IoChevronBackOutline /></Link>
    )
}

export default BackButton;