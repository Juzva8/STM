import { connect } from 'react-redux'
import styled from 'styled-components'
import { signOutAPI } from '../../actions'

import './Header.css'
import Lion from '../../Assets/Logo/home-logo.png'
import house from '../../Assets/Svg/nav-home.svg'
import network from '../../Assets/Svg/nav-network.svg'
// import jobs from '../../Assets/Svg/nav-jobs.svg'
import presentation from '../../Assets/Svg/presentation.svg'
import down from '../../Assets/Svg/down-icon.svg'
import user from '../../Assets/Svg/user.svg'
import contact from '../../Assets/Svg/contact.svg'


const Header = (props) => {

    return (
        <Container>
          <Content>
            <Logo>
              <a href="/home">
                <img src={Lion} alt=""/>
              </a>
            </Logo>
            <Nav>
              <NavListWrap>
                <NavList className="active">
                  <a href="/home">
                    <img src={house} alt="" />
                    <span>Home</span>
                  </a>
                </NavList>

                <NavList>
                  <a href="https://strattonterraceinf.wixsite.com/athletestmllc" target="_blank">
                    <img src={network} alt="" />
                    <span>STM</span>
                  </a>
                </NavList>
              
                <NavList>
                  <a href="https://drive.google.com/file/d/1C1Tz_RVY4o2SDMIsfkd8mgaBOPPWctC4/view?usp=sharing" target="_blank">
                    <img src={presentation} alt="" />
                    <span>Goals</span>
                  </a>
                </NavList>
    
                <NavList>
                  <a href="/contact" target="_blank">
                    <img src={contact} alt="" />
                    <span>Contact us</span>
                  </a>
                </NavList>
                <User>
                  <a>
                    {props.user && props.user.photoURL ? ( <img src={props.user.photoURL} alt="" /> 
                    ) : (
                     <img src={user} alt="" />
                    )}
                    <span>Me
                    <img src={down} alt="" />
                    </span>
                  </a>
    
                  <SignOut onClick={() => props.signOut()}>
                    <a href="/">Sign Out</a>
                  </SignOut>
                </User>
              </NavListWrap>
            </Nav>
          </Content>
        </Container>
      );
    };
    
    const Container = styled.div`
      background-color: white;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      left: 0;
      padding: 0 24px;
      position: fixed;
      top: 0;
      width: 100vw;
      z-index: 100;
    `;
    
    const Content = styled.div`
      display: flex;
      align-items: center;
      margin: 0 auto;
      min-height: 100%;
      max-width: 1128px;
    `;
    
    const Logo = styled.span`
      margin-right: 8px;
      font-size: 0px;
    `;
    
    // const SearchIcon = styled.div`
    //   width: 40px;
    //   position: absolute;
    //   z-index: 1;
    //   top: 10px;
    //   left: 2px;
    //   border-radius: 0 2px 2px 0;
    //   margin: 0;
    //   pointer-events: none;
    //   display: flex;
    //   justify-content: center;
    //   align-items: center;
    // `;
    
    const Nav = styled.nav`
      margin-left: auto;
      display: block;
      @media (max-width: 768px) {
        position: fixed;
        left: 0;
        bottom: 0;
        text-align: center;
        background: white;
        width: 100%;
      }
    `;
    
    const NavListWrap = styled.ul`
      display: flex;
      flex-wrap: nowrap;
      list-style-type: none;
      .active {
        span:after {
          content: "";
          transform: scaleX(1);
          bottom: 0;
            text-align: center;
          al
          left: 0;
          position: absolute;
          transition: transform 0.2s ease-in-out;
          width: 100%;
          border-color: rgba(0, 0, 0, 0.9);
        }
      }
    `;
    
    const NavList = styled.li`
      display: flex;
      align-items: center;
      a {
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 52px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        span {
          color: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
        }
        @media (max-width: 768px) {
          min-width: 70px;
        }
      }
      &:hover,
      &:active {
        a {
          span {
            color: rgba(0, 0, 0, 0.9);
          }
        }
      }
    `;
    
    const SignOut = styled.div`
      position: absolute;
      top: 90px;
      background: black;
      color:gold !important;
      border-radius: 5px;
      width: 80px;
      height: 40px;
      font-size: 16px;
      transition-duration: 167ms;
      text-align: center;
      justify-content: center;
      display: none;
      @media (max-width: 768px) {
        top: 50px;
        height: 30px;
        font-size: 14px;
      }
    `;
    
    const User = styled(NavList)`
    border-left: 1px solid rgba(0, 0, 0, 0.08);
      a > svg {
        width: 24px;
        border-radius: 50%;
      }
      a > img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
      }
      span {
        display: flex;
        align-items: center;
      }
      &:hover {
        ${SignOut} {
          align-items: center;
          display: flex;
          justify-content: center;
        }
      }
    `;
    
  
    const mapStateToProps = (state) => {
        return {
          user: state.userState.user,
        };
      };

      const mapDispatchToProps = (dispatch) => ({
        signOut: () => dispatch(signOutAPI()),
      });



    
    export default connect (mapStateToProps, mapDispatchToProps)(Header)