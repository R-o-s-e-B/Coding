import { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "../assets/haarvish.jpeg";
import Quiz from "./Quiz";
import FinalMessage from "./FinalMessage.jsx";

function PuzzleJigsaw() {
    const [level, setLevel] = useState(1);
    const [showbutton, setShowbutton] = useState(false);

    const handleLevelUp = () => {
        setLevel(level + 1);
    };

    const onSolved = () => {
        setShowbutton(true);
    }

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#007BFF',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s, transform 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)',
    };

    const handleButtonMouseOver = (e) => {
        Object.assign(e.target.style, buttonHoverStyle);
    };

    const handleButtonMouseOut = (e) => {
        Object.assign(e.target.style, buttonStyle);
    };

    return (
        <>
            <div style={styles.container2}>
                {level === 1 && (
                    <div style={styles.container}>
                        <JigsawPuzzle
                            imageSrc={img}
                            rows={2}
                            columns={2}
                            onSolved={onSolved}
                            className="jigsaw-puzzle"
                            style={{
                                border: '2px solid black',
                                margin: 'auto',
                                boxShadow: '0 5px 10px 2px rgba(0, 0, 0, 0.25)'
                            }}
                        />
                    </div>
                )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {showbutton && level === 1 && (
                    <button
                        onClick={() => setLevel(level + 1)}
                        style={buttonStyle}
                        onMouseOver={handleButtonMouseOver}
                        onMouseOut={handleButtonMouseOut}
                    >
                        Next
                    </button>
                )}
            </div>
            {level === 2 && <Quiz onLevelUp={handleLevelUp} />}
            {level === 3 && <FinalMessage />}
        </>
    );
}

const styles = {
    container: {
        height: '50%',
        width: '50%',
        border: '2px solid black',
    },
    container2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

export default PuzzleJigsaw;