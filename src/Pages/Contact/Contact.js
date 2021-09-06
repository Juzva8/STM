import styled from "styled-components";
import ContactComponent from "../../Components/ContactComponent/ContactComponent";
import Logo from '../../Assets/Logo/STM.png';
import { connect } from 'react-redux';
import { SignInAPI } from '../../actions';

function Contact(props) {
    return (

        <Container>
        <Nav>
          <a href="/">
            <img src={Logo} alt="" />
          </a>
          <div>
            <Join onClick = {() => props.signIn()}>Login</Join>
            <a href="/contact">
            <ContactUs>Contact Us</ContactUs>
            </a>
          </div>
        </Nav>
       <ContactComponent />

</Container>

    )
}


const Container = styled.div`
  padding: 0px;
`;
const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
    img{
        padding-top: 10px;
        height 30px;
        @media (max-width: 768px) {
          
          height 20px;
        }
    }
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const ContactUs = styled.a`
  box-shadow: inset 0 0 0 1px gold;
  color: rgba(0, 0, 0, 0.6);
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  text-decoration: none!important;
  outline: none;
  border: none;
  &:hover {
    background-color: black;
    color: gold;
    text-decoration: none!important;
  outline: none;
  border: none;
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 24px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border: none;

  &:hover {
    background-color: gold;
    color: white;
    cursor: pointer;
    text-decoration: none;
  }
`;

const mapStateToProps = (state) => {
    return {
      user: state.userState.user,
    };
};


const mapDispatchToProps = (dispatch) => ({ 
  signIn: () => dispatch(SignInAPI()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Contact);

