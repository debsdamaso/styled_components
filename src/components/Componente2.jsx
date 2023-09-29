import styled from 'styled-components'

const DivComp2 = styled.div`
    background-color: lightpink;
    border: 2px solid magenta;

    h2{
        text-align: center;
        color: darkmagenta;
    }

    p{
        text-align: justify;
        color: blueviolet;
    }
`

export default function Componente2(){
    return(
        <DivComp2>
            <h2>Componente 2</h2>
            <p>Esse é o componente 2.</p>
        </DivComp2>
    )
}