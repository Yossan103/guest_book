import { Link } from 'react-router-dom';
import { Button, Grid ,GridItem } from "@chakra-ui/react"
import '../styles/Tittle.css';


function Title() {
    return (
        <div className="titlePage">
            <p className="title">旅のおもいで</p>
            <Grid templateColumns="repeat(2, 1fr)" gap="6">
                <GridItem colSpan={1}>
                    <Link to='/note' ><Button colorPalette='orange' className="titleButton">これまでのきろく</Button></Link>
                </GridItem>
                <GridItem colSpan={1}>
                    <Link to='/view'><Button colorPalette='orange' className="titleButton">きろくを残す</Button></Link>
                </GridItem>
            </Grid>  
            <svg xmlns="http://www.w3.org/2000/svg" width="195" height="167" viewBox="0 0 195 167" fill="none">
                    <circle cx="69.5" cy="125.5" r="125.5" transform="rotate(175.531 69.5 125.5)" fill="#EB5C5E"/>
                     width="203" height="203" viewBox="0 0 203 203" fill="none"
                    <circle cx="101.5" cy="101.5" r="100.5" stroke="#EB5C5E" stroke-width="2"/>
            </svg>
        </div>
    )
}
export default Title;