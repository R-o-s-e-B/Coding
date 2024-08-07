import { useState } from "react";
import PropTypes from 'prop-types';

function Quiz({ onLevelUp }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);
    const [clickedOptions, setClickedOptions] = useState([]);
    const [enteredText, setEnteredText] = useState("");

    const options = ["Air", "Water", "Food", "Shelter"];
    const correctOption = "Haarvish";

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsCorrect(option === correctOption);

        if (!clickedOptions.includes(option)) {
            const newClickedOptions = [...clickedOptions, option];
            setClickedOptions(newClickedOptions);
            console.log("Clicked options:", newClickedOptions);

            if (newClickedOptions.length === options.length || option === correctOption) {
                setIsCorrect(option === correctOption);
            }
        }
    };

    const handleTextChange = (event) => {
        setEnteredText(event.target.value);
    };

    const handleTextSubmit = () => {
        if (enteredText.toLowerCase() === correctOption.toLowerCase()) {
            onLevelUp();
        } else {
            alert("Incorrect! Please try again.");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header} className="josefin-slab-regular">Most required thing to live</h2>
            <ul style={styles.list}>
                {options.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        style={{
                            ...styles.option,
                            backgroundColor: selectedOption === option ? (isCorrect ? '#4CAF50' : '#F44336') : '#D5FAE1',
                            color: selectedOption === option ? '#fff' : '#000'
                        }}
                        className="josefin-slab-regular"
                    >
                        {option}
                    </li>
                ))}
            </ul>
            {clickedOptions.length === options.length && (
                <div style={styles.textBoxContainer}>
                    <p style={styles.message}>The correct answer is Haarvish.</p>
                    <input
                        type="text"
                        value={enteredText}
                        onChange={handleTextChange}
                        placeholder="Enter the correct answer"
                    />
                    <button onClick={handleTextSubmit} style={styles.button}>Submit</button>
                </div>
            )}
        </div>
    );
}

Quiz.propTypes = {
    onLevelUp: PropTypes.func.isRequired,
};

const styles = {
    container: {
        position:"absolute",
        top:"20%",
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#B1EFD9',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '500px',
        height:'fit-content',
        margin: '20px auto',
        zIndex:2
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
        //transition: 'background-color 0.3s, color 0.3s',
        backgroundColor:"#D5FAE1;",
    },
    message: {
        fontSize: '18px',
        color: '#333',
        marginTop: '20px'
    },
    textBoxContainer: {
        marginTop: '20px',
        textAlign: 'center'
    },
    button: {
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
    }
};

export default Quiz;
