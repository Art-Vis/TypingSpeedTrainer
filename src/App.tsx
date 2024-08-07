import React, { useEffect } from "react";
import TextDisplay from "./components/TextDisplay/TextDisplay";
import TextInput from "./components/TextInput/TextInput";
import StatsDisplay from "./components/StatsDisplay/StatsDisplay";
import { TypingProvider, useTypingContext } from "./context/TypingContext";
import styles from "./App.module.css";

const AppContent: React.FC = () => {
	const {
		text,
		userInput,
		setUserInput,
		startTime,
		setStartTime,
		setWpm,
		setErrors,
		isFinished,
		setIsFinished,
	} = useTypingContext();

	useEffect(() => {
		if (userInput.length === 1 && !startTime) {
			setStartTime(new Date());
		}

		if (userInput.length === text.length) {
			const endTime = new Date();
			const timeDiff = (endTime.getTime() - startTime!.getTime()) / 1000 / 60;
			const wordsTyped = text.split(" ").length;
			setWpm(Math.round(wordsTyped / timeDiff));
			setIsFinished(true);
		}

		const errorCount = userInput.split("").reduce((acc, char, index) => {
			if (char !== text[index]) {
				return acc + 1;
			}
			return acc;
		}, 0);

		setErrors(errorCount);
	}, [
		userInput,
		startTime,
		setStartTime,
		setWpm,
		setErrors,
		setIsFinished,
		text,
	]);

	const handleRestart = () => {
		setUserInput("");
		setStartTime(null);
		setWpm(0);
		setErrors(0);
		setIsFinished(false);
	};

	return (
		<div className={styles.container}>
			<h1>Typing Speed Trainer</h1>
			<TextDisplay />
			<TextInput />
			{isFinished && (
				<div>
					<h2>Результаты</h2>
					<StatsDisplay />
					<button onClick={handleRestart}>Начать заново</button>
				</div>
			)}
		</div>
	);
};

const App: React.FC = () => {
	return (
		<TypingProvider>
			<AppContent />
		</TypingProvider>
	);
};

export default App;
