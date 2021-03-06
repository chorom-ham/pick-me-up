import React, { useState } from "react";
import styled, { css } from "styled-components";
import Colors from "@colors";
import Text from "../../atoms/Text";
import Edit from "../../atoms/Icon/Edit";
import Filter from "../Filter/Filter";
import { RECRUITMENT_FIELD, REGION } from "../Filter/ItemData";

type UniversityProps = {
  isUniversityPublic: boolean;
  university: string;
  major: string;
  setIsUniversityPublic: () => void;
  setMajor: React.Dispatch<React.SetStateAction<string>>;
  setUniversity: React.Dispatch<React.SetStateAction<string>>;
};

type AreaProps = {
  isRegionPublic: boolean;
  region: string;
  setIsRegionPublic: () => void;
  setRegion: React.Dispatch<React.SetStateAction<string>>;
};

type InterestProps = {
  isInterestsPublic: boolean;
  interest: string;
  setInterest: React.Dispatch<React.SetStateAction<string>>;
  setIsInterestsPublic: () => void;
};

export function University(props: UniversityProps) {
  const [isEditUniv, setIsEditUniv] = useState(false);

  const onChangeUnivHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setUniversity(e.target.value);
  };
  const onChangeMajorHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setMajor(e.target.value);
  };
  return (
    <Content>
      <ToggleSwitchWrapper>
        <Toggle onClick={props.setIsUniversityPublic}>
          <ToggleBall isToggled={props.isUniversityPublic}></ToggleBall>
          <RippleBackground
            isVisible={props.isUniversityPublic}
          ></RippleBackground>
        </Toggle>
      </ToggleSwitchWrapper>
      {isEditUniv && (
        <>
          <Input
            placeholder="학교"
            type="text"
            value={props.university}
            onChange={onChangeUnivHandler}
            width="10.5rem"
            marginRight="0.6rem"
          ></Input>
          <Input
            placeholder="전공"
            type="text"
            value={props.major}
            onChange={onChangeMajorHandler}
            width="10.5rem"
            marginRight="2.3rem"
          ></Input>
        </>
      )}
      {!isEditUniv && (
        <Row marginRight="2.4rem" paddingLeft="1rem" width="21.5rem">
          <Text level={3} color={Colors.BLACK} align="left">
            {props.university} {props.major}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => setIsEditUniv(!isEditUniv)}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem" }}
          fill={Colors.BLACK}
        ></Edit>
      </ButtonWrapper>
    </Content>
  );
}

export function Area(props: AreaProps) {
  const [isEditRegion, setIsEditRegion] = useState(false);
  return (
    <Content>
      <ToggleSwitchWrapper>
        <Toggle onClick={props.setIsRegionPublic}>
          <ToggleBall isToggled={props.isRegionPublic}></ToggleBall>
          <RippleBackground isVisible={props.isRegionPublic}></RippleBackground>
        </Toggle>
      </ToggleSwitchWrapper>
      {isEditRegion && (
        <Filter
          width="21rem"
          height="1.2rem"
          level={0}
          defaultText={props.region ? props.region : "지역을 선택하세요"}
          onClick={props.setRegion}
          data={REGION}
          previousItemTitle={props.region}
          isUserInfoEdit={true}
        ></Filter>
      )}
      {!isEditRegion && (
        <Row marginRight="3rem" paddingLeft="1rem" width="21.5rem">
          <Text level={3} color={Colors.BLACK} align="left">
            {props.region}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => setIsEditRegion(!isEditRegion)}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem" }}
          fill={Colors.BLACK}
        ></Edit>
      </ButtonWrapper>
    </Content>
  );
}

export function Interest(props: InterestProps) {
  const [isEditInterest, setIsEditInterest] = useState(false);
  return (
    <Content>
      <ToggleSwitchWrapper>
        <Toggle onClick={props.setIsInterestsPublic}>
          <ToggleBall isToggled={props.isInterestsPublic}></ToggleBall>
          <RippleBackground
            isVisible={props.isInterestsPublic}
          ></RippleBackground>
        </Toggle>
      </ToggleSwitchWrapper>
      {isEditInterest && (
        <Filter
          width="21rem"
          height="1.2rem"
          level={0}
          defaultText={
            props.interest ? props.interest : "관심분야를 선택하세요"
          }
          onClick={props.setInterest}
          data={RECRUITMENT_FIELD}
          previousItemTitle={props.interest}
          isUserInfoEdit={true}
        ></Filter>
      )}
      {!isEditInterest && (
        <Row marginRight="2.4rem" paddingLeft="1rem" width="21.5rem">
          <Text level={3} color={Colors.BLACK} align="left">
            {props.interest}
          </Text>
        </Row>
      )}
      <ButtonWrapper onClick={() => setIsEditInterest(!isEditInterest)}>
        <Edit
          style={{ width: "0.8rem", height: "0.8rem" }}
          fill={Colors.BLACK}
        ></Edit>
      </ButtonWrapper>
    </Content>
  );
}

const Content = styled.div`
  justify-content: space-between;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 1.2rem;
  margin: 0.3rem 0;
  padding-left: 0.5rem;
  box-sizing: border-box;
`;

const ButtonWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  background-color: transparent;
  border: none;
  margin: unset;
  padding: unset;
  outline: none;
`;

const Row = styled.div`
  ${(props: { width: string; marginRight: string; paddingLeft: string }) => css`
    width: ${props.width};
    text-align: center;
    padding-bottom: 0.2rem;
    margin-right: ${props.marginRight};
    padding-left: ${props.paddingLeft};
  `}
`;

const Input = styled.input`
  ${(props: { width: string; marginRight: string }) => css`
    background-color: ${Colors.LIGHT_GREY};
    border-radius: 0.32rem;
    border: none;
    box-sizing: border-box;
    width: ${props.width};
    outline: none;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 0.64rem;
    align-items: center;
    height: 1.2rem;
    padding-left: 1rem;
    margin-right: ${props.marginRight};
  `}
`;

const Toggle = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  transform: translate3d(0, 0, 0);
  background-color: ${Colors.LIGHT_GREY};
  height: 1.1rem;
  width: 2rem;
  border-radius: 2rem;
  padding: 0.08rem;
  border: none;
  margin-right: 0.84rem;
`;
const ToggleBall = styled.div`
  z-index: 2;
  border-radius: 50%;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s cubic-bezier(1, 0.19, 0.15, 0.7);
  transition-delay: 0.1s;
  will-change: transform;
  background-color: ${Colors.WHITE};
  border: 1px solid ${Colors.LIGHT_GREY};
  height: 1rem;
  width: 1rem;
  transform: ${(props: { isToggled: boolean }) =>
    props.isToggled ? `translateX(0.9rem)` : "translateX(0rem)"};
  &:active {
    background-color: ${Colors.LIGHT_GREY};
  }
`;
const RippleBackground = styled.div`
  ${(props: { isVisible: boolean }) => css`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-image: radial-gradient(
      circle,
      ${Colors.PURPLE} 10%,
      transparent 10.01%
    );
    background-repeat: no-repeat;
    background-position: 50%;
    pointer-events: none;
    transition: transform 0.5s, opacity 0.3s ease;
    transform: ${props.isVisible ? "scale(10, 10)" : "scale(0, 0)"};
    opacity: ${props.isVisible ? 1 : 0};
    position: absolute;
    z-index: 1;
  `}
`;

const ToggleSwitchWrapper = styled.div`
  diplay: flex;
  flex-direction: column;
`;
