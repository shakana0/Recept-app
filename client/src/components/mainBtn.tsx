import styled from 'styled-components'

const ButtonStyle = styled.button`
background-color: transparent;
border: 2px solid white;
padding: 1.2rem 1.8rem;
color: white;
border-radius: 10px;
transition: .5s ease;

&:hover{
transform: scale(1.1);
box-shadow: 0px 3px 5px 0px #ffffff76;
}

`

export const MainButton = () =>{
    return <ButtonStyle type='button'>Se alla recept</ButtonStyle>
}