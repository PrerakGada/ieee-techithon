import styled from "styled-components";

export default function Button({ content, onClick }) {
	return <StyledButton onClick={onClick}>{content}</StyledButton>;
}

const StyledButton = styled.button`
	background: linear-gradient(to right, #1f3c67 10%, #00adb5 79%);
	text-transform: uppercase;
	letter-spacing: 0.2rem;
	width: 65%;
	height: 3rem;
	border: none;
	color: white;
	border-radius: 2rem;
	cursor: pointer;
`;
