import ProjectList from "./ProjectList";
import Filter from "../molecules/Filter/Filter";
import WriteButton from "../molecules/Button/Write";
import styled from "styled-components";
import DropdownMenu from "../molecules/Filter/DropdownMenu";
export default function ProjectFilter(){
    return (
			<Wrapper>
				<InnerWrapper>
					<Div>
						<Filter title="최신순"></Filter>
					</Div>
					<ProjectList></ProjectList>
				</InnerWrapper>
				<WriteButton></WriteButton>
			</Wrapper>
		);
}

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 1.2rem 0 1.2rem 1rem;
`;

const InnerWrapper = styled.div`
margin: 0 4rem 0 4rem;
max-width: 1200px;
width: 48rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  background-color: #f0f8fd;
  justify-content: center;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;