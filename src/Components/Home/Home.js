import styled from "styled-components";
import Leftside from "./LeftSide/LeftSide";
import Main from "./Main/Main";
import Rightside from "./RightSide/RightSide";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";


const Home = (props) => {
  return (
    <Container>
      {!props.user && <Redirect to='/'/>}
      <Section>
        <h5>
          <span >Already committed? - </span>
        </h5>
        <p>
          Share your Photo or Video with us. And help others with to do the right thing.
        </p>
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Content = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  min-height: 50px;
  margin-top: 150px;
  box-sizing: content-box;
  text-align: center;
  text-decoration: none;
  // display: flex;
  // flex-direction: row;
  justify-content: center;
  h5 {
    text-align: center;
    color: gold;
    font-size: 14px;
    span {
      font-weight: 700;
    }
  }
  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5px;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  /* grid-template-row: auto; */
  margin: 25px 0;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,

  }
}


export default connect (mapStateToProps)(Home);