import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/react"

function Title() {
    return (
        <div className="titlePage">
            <p className="title">旅のおもいで</p>
            <div className="buttonContainer">
              <Link to='/note'><Button colorPalette='orange'>これまでのきろく</Button></Link>
              <Link to='/view'><Button colorPalette='orange'>きろくを残す</Button></Link>
            </div>  
        </div>
    )
}
export default Title;