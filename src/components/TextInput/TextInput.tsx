import { FC } from "react";
import styles from "./TextInput.module.css";
import { useTypingContext } from "../../context/TypingContext";

const TextInput: FC = () => {
	const { userInput, setUserInput, isFinished } = useTypingContext();

	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setUserInput(e.target.value);
	};
	return (
		<textarea
			className={styles.textInput}
			value={userInput}
			onChange={handleChange}
			placeholder='Начните печатать...'
			disabled={isFinished}
		/>
	);
};

export default TextInput;
