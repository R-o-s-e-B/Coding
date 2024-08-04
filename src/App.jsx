import PuzzleJigsaw from "./components/PuzzleJigsaw";

export default function App() {
    return (
        <>
            <h1 style={styles.header}>Happy birthday</h1>
            <div style={styles.container2}>
                <div style={styles.container}>
                    <PuzzleJigsaw />
                </div>
            </div>
        </>
    );
}

const styles = {
    header: {
        textAlign: 'center',
        margin: '20px 0',
        fontSize: '32px',
        color: '#333'
    },
    container: {
        height:'50%',
        width:'50%',
        border: '2px solid black',
    },
    container2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};
