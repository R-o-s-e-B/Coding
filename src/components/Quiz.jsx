import { useState } from "react";

function Quiz() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const options = ["Air", "Water", "Food", "Shelter"];
    const correctOption = "Haarvish";

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsCorrect(option === correctOption);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Most required thing to live</h2>
            <ul style={styles.list}>
                {options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        style={{
                            ...styles.option,
                            backgroundColor: selectedOption === option ? (isCorrect ? '#4CAF50' : '#F44336') : '#f0f0f0',
                            color: selectedOption === option ? '#fff' : '#000'
                        }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
            {selectedOption && (
                <p style={styles.message}>
                    {isCorrect ? "Correct!" : "Incorrect, Right Option is Haarvish."}
                </p>
            )}
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: '20px auto'
    },
    header: {
        fontSize: '24px',
        margin: '10px 0',
        color: '#333'
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    option: {
        padding: '10px 15px',
        margin: '10px 0',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s, color 0.3s'
    },
    message: {
        fontSize: '18px',
        color: '#333',
        marginTop: '20px'
    }
};

export default Quiz;
