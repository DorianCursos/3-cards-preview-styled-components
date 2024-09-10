import styled from 'styled-components';

const StyledCards = styled.div`
	display: flex;
	flex-direction: column;
	width: 20.4375rem;
	margin-inline: auto;

	@media screen and (width>768px) {
		flex-direction: row;
		width: 57.5rem;
		height: 31.25rem;
	}
`;

export { StyledCards };
