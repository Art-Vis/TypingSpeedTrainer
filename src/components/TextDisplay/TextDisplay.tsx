import { FC } from "react";
import styles from "./TextDisplay.module.css";
import { useTypingContext } from "../../context/TypingContext";

const TextDisplay: FC = () => {
	const { text, userInput } = useTypingContext();

	const renderText = () => {
		return text.split("").map((char: string, index: number) => {
			let className = "";
			if (index < userInput.length) {
				className =
					char === userInput[index] ? styles.correct : styles.incorrect;
			}
			return (
				<span key={index} className={className}>
					{char}
				</span>
			);
		});
	};

	return <div className={styles.textWrapper}>{renderText()}</div>;
};

export default TextDisplay;
