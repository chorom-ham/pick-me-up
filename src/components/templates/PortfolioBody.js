import WriteButton from "../molecules/Button/Write";
import styled from "styled-components";
import Portfoliolist from "../templates/Portfoliolist";
import { useModal } from "react-modal-hook";
import ModalWrite from "../organisms/ModalWrite";
import ModalView from "../organisms/ModalView";
import { useState } from "react";

export default function PortfolioBody() {
	const [viewVisible, setViewVisible] = useState(false);
	const [writeVisible, setWriteVisible] = useState(false);
	const openView = () => {
		setViewVisible(true);
	};
	const openWrite = () => {
		setWriteVisible(true);
	};

	const closeView = () => {
		setViewVisible(false);
	};
	const closeWrite = () => {
		setWriteVisible(false);
	};

	return (
		<Wrapper>
			<InnerWrapper>
				<Portfoliolist openView={openView}></Portfoliolist>
				{viewVisible && (
					<ModalView visible={viewVisible} maskClosable={true} onClose={closeView}></ModalView>
				)}
			</InnerWrapper>
			<WriteButton openWrite={openWrite}></WriteButton>
			{writeVisible && (
				<ModalWrite visible={writeVisible} maskClosable={true} onClose={closeWrite}></ModalWrite>
			)}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-color: #f5edff;
	width: 100%;
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: row;
`;
const InnerWrapper = styled.div`
	margin: 0 3rem 0 3rem;
	max-width: 1200px;
	width: 48rem;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
`;
