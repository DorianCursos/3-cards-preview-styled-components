import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const getBorderRadiusMobile = ({ $position }) => {
	if ($position === 'first') return '0.5rem 0.5rem 0 0';
	if ($position === 'last') return '0 0 0.5rem 0.5rem';
};

const getBorderRadiusDesktop = ({ $position }) => {
	if ($position === 'first') return '0.5rem 0 0 0.5rem';
	if ($position === 'last') return '0 0.5rem 0.5rem 0';
};

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	height: 27.625rem;
	padding: 3rem;
	color: ${COLORS.textColor};
	background-color: ${({ $color }) => $color};
	border-radius: ${getBorderRadiusMobile};

	@media screen and (width>768px) {
		border-radius: ${getBorderRadiusDesktop};
	}
`;

const StyledCardIcon = styled.img`
	width: 4rem;
	margin-bottom: 2.1875rem;
`;

const StyledCardTitle = styled.h2`
	margin-block: 0 1.5625rem;
	font-size: 2.5rem;
`;

const StyledCardText = styled.p`
	margin-block: 0;
	line-height: 1.5625rem;
	opacity: 0.75;
`;

const StyledCardButton = styled.button`
	margin-top: auto;
	width: 9.125rem;
	border: none;
	border-radius: 1.5625rem;
	line-height: 3rem;
	background-color: #fff;
	color: ${({ $color }) => $color};
	cursor: pointer;

	@media (hover: hover) {
		&:hover {
			background-color: transparent;
			outline: 2px solid white;
			color: white;
		}
	}
`;

export {
	StyledCard,
	StyledCardIcon,
	StyledCardTitle,
	StyledCardText,
	StyledCardButton
};
