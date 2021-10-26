
export type ButtonProps = {
	text: string;
	onClick?: () => void;

};

const Button = ({
	text,
	onClick
}: ButtonProps) => {
	return <button onClick={onClick}>{text}</button>;
};

// Export
export default Button;
