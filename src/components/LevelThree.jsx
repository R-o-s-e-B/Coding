import { useEffect } from "react";

function LevelThree() {
    useEffect(() => {
        const audio = new Audio('./assets/hbd.mp3');
        audio.play();
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Congratulations! You&apos;ve reached Level 3</h2>
            <p style={styles.message}>Here is your special message: &quot;You are the most important person in my life.&quot;</p>
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
    message: {
        fontSize: '18px',
        color: '#333',
        marginTop: '20px'
    }
};

export default LevelThree;