import { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "../assets/chitti pics.jpeg";
import Quiz from "./Quiz";
import LevelThree from "./LevelThree.jsx";

function PuzzleJigsaw() {
    const [level, setLevel] = useState(1);

    const handleLevelUp = () => {
        setLevel(level + 1);
    };

    return (
        <>
            {level === 1 && (
                <JigsawPuzzle
                    imageSrc={img}
                    rows={2}
                    columns={2}
                    onSolved={handleLevelUp}
                    className="jigsaw-puzzle"
                    style={{
                        border: '2px solid black',
                        margin: 'auto',
                        boxShadow: '0 5px 10px 2px rgba(0, 0, 0, 0.25)'
                    }}
                />
            )}
            {level === 2 && <Quiz onLevelUp={handleLevelUp} />}
            {level === 3 && <LevelThree />}
        </>
    );
}

export default PuzzleJigsaw;
