import { Link } from 'react-router-dom';
import { Button, Grid ,GridItem } from "@chakra-ui/react"
import '../styles/Tittle.css';


function Title() {
    return (

        <div style={{width: 390, height: 844, position: 'relative', background: '#F4ECE5', overflow: 'hidden'}}>
        <div style={{width: 251, height: 251, left: 231, top: -24, position: 'absolute', background: '#EB5C5E', borderRadius: 9999}} />
        <img style={{width: 133, height: 142, left: -8, top: 49, position: 'absolute', opacity: 0.70}} src="https://placehold.co/133x142" />
        <img style={{width: 274, height: 274, left: 126, top: 410, position: 'absolute', opacity: 0.40}} src="https://placehold.co/274x274" />
        <div style={{width: 203, height: 203, left: 163, top: 51, position: 'absolute', borderRadius: 9999, border: '2px #EB5C5E solid'}} />
        <div style={{width: 102, height: 102, left: 330, top: 101, position: 'absolute', borderRadius: 9999, border: '2px white solid'}} />
        <div style={{width: 251, height: 251, left: 204.40, top: 917.84, position: 'absolute', transform: 'rotate(176deg)', transformOrigin: 'top left', background: '#EB5C5E', borderRadius: 9999}} />
        <div style={{width: 102, height: 102, left: 57.64, top: 730.69, position: 'absolute', transform: 'rotate(176deg)', transformOrigin: 'top left', borderRadius: 9999, border: '2px white solid'}} />
        <div style={{width: 342, height: 89, padding: 10, left: 24, top: 51, position: 'absolute', borderTop: '3px #6D6262 solid', borderBottom: '2px #6D6262 solid', justifyContent: 'flex-start', alignItems: 'flex-end', gap: 10, display: 'inline-flex'}}>
            <div style={{color: '#483B3B', fontSize: 24, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>　</div>
        </div>
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
        <img style={{width: 56.52, height: 56.52, left: 179.24, top: 154.29, position: 'absolute', transform: 'rotate(70deg)', transformOrigin: 'top left', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)', backgroundBlendMode: 'normal, darken', borderRadius: 9999}} src="https://placehold.co/57x57" />
        <img style={{width: 147.60, height: 110.70, left: 115.50, top: 149.62, position: 'absolute', transform: 'rotate(-16deg)', transformOrigin: 'top left', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)', backgroundBlendMode: 'normal, darken'}} src="https://placehold.co/148x111" />
        <img style={{width: 100.15, height: 100.15, left: 257.10, top: 191.29, position: 'absolute', transform: 'rotate(70deg)', transformOrigin: 'top left', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)', backgroundBlendMode: 'normal, darken', borderRadius: 9999}} src="https://placehold.co/100x100" />
        <img style={{width: 261.52, height: 196.14, left: 144.16, top: 183.01, position: 'absolute', transform: 'rotate(-16deg)', transformOrigin: 'top left', background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)', backgroundBlendMode: 'normal, darken'}} src="https://placehold.co/262x196" />
        </div>
    )
}
export default Title;