import { Link } from 'react-router-dom';

function Title() {
    return (
        <div className="titlePage">
            <p className="title">旅のおもいで</p>
            <div className="buttonContainer">
              <Link to='/note'><button className="linkButton">これまでのきろく</button></Link>
              <Link to='/view'><button className="linkButton">きろくを残す</button></Link>
            </div>  
        </div>
    )
}
export default Title;