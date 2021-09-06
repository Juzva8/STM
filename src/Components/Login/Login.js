import styled from "styled-components";
import { connect } from 'react-redux';
import { SignInAPI } from '../../actions';
import { Redirect } from 'react-router';
import './Login.css';
import lacrosse from '../../Assets/main.jpg'
import Logo from '../../Assets/Logo/STM.png';
import google from '../../Assets/Svg/google.svg';
import hero from '../../Assets/Svg/login-hero.svg';


const Login = (props) => {
  return (
    <Container>
      { props.user && <Redirect to='/home' /> }
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
      <Section>
        <Hero>
          <h1>Welcome To Your Athlete Recruiting Journey !</h1>
          <img src={lacrosse} alt="" />
        </Hero>
        <Form>
          <Google onClick = {() => props.signIn()}>
            <img src={google} alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

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

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    width: 55%;
    font-size: 56px;
    color: Black;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    z-index: -1;
    width: 700px;
    height: 670px;
    position: absolute;
    border-radius: 30px;
    bottom: 40px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      padding:20px;
      margin: 20px;
      width: initial;
      position: initial;
      height: initial;
      max-height: 640px
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  img{
    padding-right: 15px
}
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
      
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


export default connect(mapStateToProps, mapDispatchToProps)(Login);

