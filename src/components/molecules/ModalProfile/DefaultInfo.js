import Text from "../../atoms/Text";
import User from "../../atoms/Icon/User";
import Camera from "../../atoms/Icon/Camera";
import Edit from "../../atoms/Icon/Edit";
import Thumbnail from "../../atoms/Icon/ThumbNail";
import styled from "styled-components";
import React, { useState } from "react";
function DefaultInfo(props) {
  const [title, setTitle] = useState("");
  const [introduce, setIntroduce] = useState("");

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const onChangeIntroduceHandler = (e) => {
    setIntroduce(e.target.value);
  };
  return (
    <Wrapper>
      <Title>
        <Text weight={600} level={8} color="#232735">
          내 정보 수정
        </Text>
      </Title>
      <Div>
        <Text weight={600} level={3} color="#232735">
          프로필 사진
        </Text>
        <Camera
          style={{ width: "0.88rem", height: "0.72rem" }}
          fill="#232735"
        ></Camera>
      </Div>
      <Thumbnail
        style={{
          width: "3.6rem",
          height: "3.6rem",
          marginTop: "0.6rem",
          marginBottom: "1rem",
        }}
        fill="#d3d4d8"
      ></Thumbnail>
      <Div>
        <DivTitle>
          <User
            style={{
              width: "0.72rem",
              height: "0.8rem",
              marginRight: "0.32rem",
            }}
            fill="#d3d4d8"
          ></User>
          <Text weight={600} level={3} color="#232735">
            닉네임
          </Text>
        </DivTitle>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem" }}
          fill="#232735"
        ></Edit>
      </Div>
      <Input
        placeholder="username"
        type="text"
        //value={props.username}
        onChange={onChangeTitleHandler}
      ></Input>
      <Div>
        <Text weight={600} level={3} color="#232735">
          나를 소개할 한 마디
        </Text>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem" }}
          fill="#232735"
        ></Edit>
      </Div>
      <Input
        placeholder="introduce textbox"
        type="text"
        //value={props.introduce}
        onChange={onChangeIntroduceHandler}
      ></Input>
    </Wrapper>
  );
}

export default DefaultInfo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1.2rem;
`;

const Title = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 1.7rem;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
  padding-bottom: 0.32rem;
  border-bottom: 0.08rem solid #f0f1f3;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
`;

const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: unset;
  box-sizing: border-box;
  width: 6rem;
  outline: none;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 0.64rem;
  margin: 0 0 0.3rem 0;
  text-align: center;
`;
