import styled from "styled-components";
import closeIcon from "../../Assets/Svg/close-icon.svg"
import user from "../../Assets/Svg/user.svg"
import photo from "../../Assets/Svg/share-image.svg"
import video from "../../Assets/Svg/share-video.svg"
import shareComment from "../../Assets/Svg/share-comment.svg"


const PostModal = (props) => {
    return <Container> 
        <Content>
            <Header> 
                <h2>Create a new post</h2>
                <button>
                    <img src={closeIcon} alt="" />
                </button>
            </Header>
            <SharedContent>
                <UserInfo>
                    <img src={user} alt="" />
                    <span>Name</span>
                </UserInfo>
            </SharedContent>
            <ShareCreation>
                <AttachAssets>
                    <AssetButton>
                    <img src={photo} alt="" />
                    </AssetButton>
                    <AssetButton>
                    <img src={video} alt="" />
                    </AssetButton>
                </AttachAssets>
                <ShareComment>
                <AssetButton>
                    <img src={ShareComment} alt="" />
                    Anyone
                    </AssetButton>
                </ShareComment>
            </ShareCreation>
        </Content>
         </Container>
    };
 

    const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom:0;
    z-index: 999;
    color: black;
    background-color: rgba(0,0,0,0.8);
`;
const Content = styled.div`
    width: 100%;
    max-width: 552px;
    background-color: #fafafa;
    max-height: 90%;
    overflow: initial;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    top: 32px;
    margin: 0 auto;
`

const Header = styled.div`
    display: block;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    font-size: 15px;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.6);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;   
        button{
            height: 40px;
            width: 40px;
            min-width: auto;
            color: rgba(0, 0, 0, 0.6);
            border: none;
            border-radius: 50px;
                svg{
            pointer-events: none;
        
        }
        }
`

const SharedContent = styled.div`
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        overflow-y: auto;
        vertical-align: baseline;
        background: transparent;
        padding: 8px 12px;
`

const UserInfo = styled.div`
        display: flex;
        align-items: center;
        padding: 12px 24px;
            svg, 
            img{
                width: 48px;
                height: 48px;
                background-clip: content-box;
                border: 2px solid transparent;
                border-radius: 50%;
            }
        span {
            font-weight: 600;
            font-size: 16px;
            line-height: 1.5;
            margin-left: 5px;
        }
`

const ShareCreation = styled.button`
        display: flex;
        justify-content: space-between;
        padding: 12px 24px 12px 16px;
`

const AssetButton = styled.div`
        display: flex;
        align-items: center;
        height: 40px;
        min-width: auto;
        color: rgb(0, 0, 0, 0.5);
`

const AttachAssets = styled.div`
        align-items: center;
        display: flex;
        padding-right: 8px;
        ${AssetButton}{
            width: 40px;
        }
`


const ShareComment = styled.div`


`

    export default PostModal;




