import styled from 'styled-components'
// import Lion from '../../Assets/Svg/home-logo.svg'
import Lion from '../../Assets/Logo/home-logo.png'

const Header = (props) => {

    return (

            < Container>
                <Content><Logo>
                <a href="/home">
                        <img src={Lion}  alt="STM" />
                </a>
                    </Logo></Content>
            </Container>
    );

};


const Container = styled.div`
background-color: white;
border-bottom: 1px solid rgba(0,0,0,0.88);
left: 0;
padding: 0 24px;
position: fixed;
width: 100vw;
z-index: 100;
`;


const Content = styled.div`
display: flex;
align-items: center;
margin: 0 auto;
min-height: 100%;
max-width: 1128 px;

`;


const Logo = styled.span`

margin-right: 8px;
font-size: 0px;



`


export default Header