import { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "../assets/haarvish.jpeg";
import Quiz from "./Quiz";
import FinalMessage from "./FinalMessage.jsx";
import puzzles from '../assets/puzzles.png';
import qn from '../assets/qn.png';

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
        zIndex:"5",
        height:"50px",
        width:"100px",
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
        <img src={level === 1 ? puzzles : level === 2 ? qn : ''} style={{position:"absolute", zIndex:'4', left:"10%", top:"20%", height:"300px"}}/>
        <img src={level === 1 ? puzzles : level === 2 ? qn : ''} style={{position:"absolute", zIndex:'4', right:"10%", top:"20%", height:"300px", transform: 'scaleX(-1)'}}/>

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
            <div style={{ display: 'flex', justifyContent: 'center', alignItems:"center", marginTop: '20px' }}>
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
        height: '68%',
        width: '70%',
        marginTop:"40px",
        zIndex:3,
        backgroundColor:"#64CCC5",
        backgroundOpacity:"0.7",
        borderRadius:"16px",
        boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1)",
        justifyContent:"center",
        alignItems:"center",
        padding:"80px",
    },
    container2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:"600px",
        width: "700px",
        zIndex:2,
        
    },
};

export default PuzzleJigsaw;