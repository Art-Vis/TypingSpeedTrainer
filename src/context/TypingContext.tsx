import React, { createContext, useState, useContext, ReactNode } from "react";

// Определяем интерфейс для контекста, который будет использоваться в приложении
interface TypingContextProps {
	text: string; // Текст для ввода
	userInput: string; // Введенный пользователем текст
	setUserInput: (input: string) => void; // Функция для обновления введенного текста
	startTime: Date | null; // Время начала набора текста
	setStartTime: (time: Date | null) => void; // Функция для установки времени начала
	wpm: number; // Скорость печати в словах в минуту
	setWpm: (wpm: number) => void; // Функция для определения скорости печати
	errors: number; // Количество ошибок
	setErrors: (errors: number) => void; // Функция для определения количества ошибок
	isFinished: boolean; // Статус завершения тренировки
	setIsFinished: (isFinished: boolean) => void; // Функция для установки статуса завершения
}

// Создаем контекст с начальным значением undefined
const TypingContext = createContext<TypingContextProps | undefined>(undefined);

// Пример текста для набора
const sampleText = "Test text for 'Typing Speed Trainer'";

// Провайдер для контекста, оборачивает дочерние компоненты и предоставляет состояние
export const TypingProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [text] = useState<string>(sampleText);
	const [userInput, setUserInput] = useState<string>("");
	const [startTime, setStartTime] = useState<Date | null>(null);
	const [wpm, setWpm] = useState<number>(0);
	const [errors, setErrors] = useState<number>(0);
	const [isFinished, setIsFinished] = useState<boolean>(false);

	return (
		<TypingContext.Provider
			value={{
				text,
				userInput,
				setUserInput,
				startTime,
				setStartTime,
				wpm,
				setWpm,
				errors,
				setErrors,
				isFinished,
				setIsFinished,
			}}
		>
			{children}
		</TypingContext.Provider>
	);
};

// Хук для доступа к контексту
export const useTypingContext = () => {
	const context = useContext(TypingContext);
	if (context === undefined) {
		throw new Error("useTypingContext must be used within a TypingProvider");
	}
	return context;
};
