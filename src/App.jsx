import PuzzleJigsaw from "./components/PuzzleJigsaw";
import bgImg from './assets/bg.png';

export default function App() {
    return (
        <div style={styles.app}>
            <h1 style={styles.header}>Happy birthday</h1>
            <PuzzleJigsaw />
        </div>
    );
}

const styles = {
    header: {
        textAlign: 'center',
        margin: '20px 0',
        fontSize: '32px',
        color: '#333'
    },
    app: {
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: -1
    },
};
