import styled from "styled-components";
import Postblock from "../organisms/Postblock";
import Link from "next/link";
import Text from "../atoms/Text";
import Col from "../atoms/Col";
import Icon from "../atoms/Icon/Chevron/Right";

export default function Preview(props) {
  if (props.type === "new") {
    return (
      <Wrapper>
        <Col>
          <LinkWrapper>
            <Link href="project">
              <A>
                <Text level={8} color="#232735" weight="bold">
                  신규 프로젝트
                </Text>
              </A>
            </Link>
            <Icon
              style={{ width: "0.4rem", height: "0.8rem" }}
              fill="#232735"
            ></Icon>
          </LinkWrapper>
          <InnerWrapper>
            <Postblock type={props.type}></Postblock>
            <Postblock type={props.type}></Postblock>
            <Postblock type={props.type}></Postblock>
            <Postblock type={props.type}></Postblock>
          </InnerWrapper>
        </Col>
      </Wrapper>
    );
  }
  if (props.type === "most") {
    return (
      <Wrapper>
        <Col>
          <LinkWrapper>
            <Link href="project">
              <A>
                <Text level={8} color="#232735" weight="bold">
                  가장 많이 본 프로젝트
                </Text>
              </A>
            </Link>
            <Icon
              style={{ width: "0.4rem", height: "0.8rem" }}
              fill="#232735"
            ></Icon>
          </LinkWrapper>
          <InnerWrapper>
            <Postblock type={props.type} rank={1}></Postblock>
            <Postblock type={props.type} rank={2}></Postblock>
            <Postblock type={props.type} rank={3}></Postblock>
            <Postblock type={props.type} rank={4}></Postblock>
          </InnerWrapper>
        </Col>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 1.6rem 0 1.6rem 0;
`;

const InnerWrapper = styled.div`
  max-width: 1200px;
  width: 48rem;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  margin: 0 4rem 0 4rem;
`;

const LinkWrapper = styled.div`
  max-width: 1200px;
  width: 48rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin: 0 4rem 1.2rem 4rem;
`;

const A = styled.a`
  margin-right: 0.8rem;
`;