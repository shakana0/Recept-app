import styled from "styled-components"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ButtonStyle = styled.button`
background-color: transparent;
border: 2px solid white;
border-radius: 10px;
padding: .2rem .5rem;
color: white;
font-family: Robot, Helvetica, sans-serif;
display: flex;
align-items: center;
transition: .5s ease;

&:hover{
transform: scale(1.1);
box-shadow: 0px 3px 5px 0px #ffffff76;
}
`

export const Button = () =>{
    return <ButtonStyle type="button">
        <ShoppingCartIcon />
        E-handla</ButtonStyle>
    
}