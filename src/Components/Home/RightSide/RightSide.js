import styled from "styled-components";
import right from '../../../Assets/Svg/right-icon.svg'
import instagram from '../../../Assets/Icons/instagram.png'
import Youtube from '../../../Assets/Icons/Youtube.png'

const Rightside = (props) => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Follow us on social media</h2>
        </Title>
        <FeedList>
          <li>
            <a>
              <Avatar> 
              <a href="https://www.instagram.com/strattonterrace/" target="_blank" rel="noreferrer"  > 
              <img src={instagram} alt="instagram" alt="" /> 
              </a>
                </Avatar>
            </a>
            <div>
              <span>Instagram</span>
              <a href="https://www.instagram.com/accounts/login/?next=%2Fstrattonterrace%2F&source=follow" target="_blank" rel="noreferrer"  > 
              <button>Follow</button>
              </a>
            </div>
          </li>
          <li>
            <a>
              <Avatar>
              <a href="https://www.youtube.com/channel/UCSVPRu3IXVhf18EAhrPcSlg" target="_blank" rel="noreferrer"  > 
              <img src={Youtube} alt="youtube" alt="" />
              </a>
                </Avatar>
            </a>
            <div>
              <span>Youtube</span>
              <a href="https://www.youtube.com/channel/UCSVPRu3IXVhf18EAhrPcSlg" target="_blank" rel="noreferrer"  > 
              <button>Subscribe</button>
              </a>
            </div>
          </li>
        </FeedList>

        <Recommendation href="https://goo.gl/maps/p9cZTnXv71pYBR9o8">
          View More About Stratton Terrace Marketing
          <img src={right}  alt=""/>
        </Recommendation>
      </FollowCard>
      <BannerCard>
        {/* <img
          src={student}
          alt=""
        /> */}

<iframe 
            title="STM" 
            src="https://www.ncaa.com/scoreboard/lacrosse-men/d1"
            width="440" 
            height="100%" 
            style={{border: "none", overflow: "hidden" }}
            scrolling="yes" 
            frameborder="0" 
            allowTransparency="true"  
            allow= "encrypted-media">
            </iframe>
      </BannerCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: rightside;
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: gold;
  text-align: center;
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 12px 24px;
    position: relative;
    font-size: 14px;
    & > div {
      display: flex;
      flex-direction: column;
    }
    button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgb(232 215 10 / 60%);
      padding: 16px;
      margin-top: 5px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex; 
      justify-content: center;
      max-height: 32px;
      width: 100px;
      max-width: 480px;
      text-align: center;
        a{
outline: none;
        }

       &:hover{
        background-color: black;
        color: gold;
       }
    }
  }
`;

const Avatar = styled.div`
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 32px;
  img {
    width: 100%;
    height: 100%;
    padding-top: 8px;

  }
  
`;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

const BannerCard = styled(FollowCard)`
    height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 768px) {

  height: 400px;
  }
`;



export default Rightside;