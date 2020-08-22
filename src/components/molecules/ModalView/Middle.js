import { useSelector } from "react-redux";
import styled from "styled-components";
import Text from "../../atoms/Text";
import Middle from "../../atoms/Modal/Middle";
import TagButton from "../Button/Tag";
import Icon from "../../atoms/Icon/Tag";

export default function ModalMiddle(props) {
  const user = useSelector((state) => state.user);

  let date = props.date;
  date = date.replace("T", " ");

  return (
    <Middle height="fit-content">
      <DateWrapper>
        <Text level={1} color="#232735" weight={500}>
          {date}
        </Text>
      </DateWrapper>
      <ContentBox>
        <Text level={2} color="#232735">
          {props.content}
        </Text>
        {props.image && (
          <ImageHolder>
            <Img src={props.image}></Img>
          </ImageHolder>
        )}
      </ContentBox>
      <TagWrapper>
        <Icon
          style={{ width: "1.5rem", height: "1.5rem", marginRight: "0.3rem" }}
          fill="#232735"
        ></Icon>
        <TagButton text="Tag text" tagtype="modalview"></TagButton>
        <TagButton text="Tag text" tagtype="modalview"></TagButton>
      </TagWrapper>
      {props.userEmail === user.userData.email && (
        <ButtonWrapper>
          <Button>
            <Text level={1} weight={500} color="#232735">
              게시글 수정
            </Text>
          </Button>
          <Button>
            <Text level={1} weight={500} color="#232735">
              게시글 삭제
            </Text>
          </Button>
        </ButtonWrapper>
      )}
    </Middle>
  );
}

const DateWrapper = styled.div`
  width: 100%;
  height: 1rem;
  flex-direction: row;
  margin-bottom: 0.5rem;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  display: flex;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 28rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow-y: scroll;
`;

const TagWrapper = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const ButtonWrapper = styled.div`
  height: 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ImageHolder = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 1rem;
`;
