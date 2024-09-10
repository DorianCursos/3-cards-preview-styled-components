import {
	StyledCard,
	StyledCardButton,
	StyledCardIcon,
	StyledCardText,
	StyledCardTitle
} from './card.styles';

const Card = ({ icon, title, text, color, position }) => {
	return (
		<StyledCard $color={color} $position={position}>
			<StyledCardIcon src={icon} alt='Car icon' />
			<StyledCardTitle>{title}</StyledCardTitle>
			<StyledCardText>{text}</StyledCardText>
			<StyledCardButton $color={color}>Learn More</StyledCardButton>
		</StyledCard>
	);
};

export default Card;
