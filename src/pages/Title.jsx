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
        </div>
    )
}
export default Title;