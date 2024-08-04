import { useState } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "../assets/chitti pics.jpeg";
import Quiz from "./Quiz";

function PuzzleJigsaw() {
    const [passed, setPassed] = useState(false);

    const set = () => {
        setPassed(true);
    };

    return (
        <>
            {passed ? (
                <Quiz />
            ) : (
                <JigsawPuzzle
                    imageSrc={img}
                    rows={2}
                    columns={2}
                    onSolved={set}
                    className="jigsaw-puzzle"
                    style={{
                        border: '2px solid black',
                        margin: 'auto',
                        boxShadow: '0 5px 10px 2px rgba(0, 0, 0, 0.25)'
                    }}
                />
            )}
        </>
    );
}

export default PuzzleJigsaw;
