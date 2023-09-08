import styled from "styled-components";
export default function Input({ type, placeholder, value, onChange }) {
  return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />;
}

const StyledInput = styled.input`
	background: rgba(255, 255, 255, 0.15);
	box-shadow: 0 8px 32px 0 rgba(0, 173, 181, 0.17);
	border-radius: 2rem;
	width: 80%;
	height: 3rem;
	padding: 1rem;
	border: none;
	outline: none;
	color: #00adb5;
	font-size: 1rem;
	font-weight: bold;
	&:focus {
		display: inline-block;
		box-shadow: 0 0 0 0.2rem #00adb5;
		backdrop-filter: blur(12rem);
		border-radius: 2rem;
	}
	&::placeholder {
		color: #00adb5;
		font-weight: 100;
		font-size: 1rem;
	}
`;