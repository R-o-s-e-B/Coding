import { useEffect } from "react";
import confetti from '../assets/confetti.png'
import cake from '../assets/bi_cake.png'

function FinalMessage() {
    useEffect(() => {
        const audio = new Audio('./assets/hbd.mp3');
        audio.play();
        return () => {
            audio.pause();
            audio.currentTime = 0;
        };
    }, []);

    return (
        <>
        <img src={confetti} style={{position:"absolute", zIndex:'4', left:"10%", top:"30%", height:"200px"}}/>
        <img src={confetti} style={{position:"absolute", zIndex:'4', right:"10%", top:"30%", height:"200px", transform: 'scaleX(-1)'}}/>
        <img src={cake} style={{position:"absolute", zIndex:'4', left:"34%", top:"60%", height:"100px"}}/>

        <div style={styles.container}>
        
            <h2 className="josefin-slab-regular font-bold text-3xl mb-4">Congratulations!</h2>
            <p className="josefin-slab-regular font-semibold text-xl mb-4">You&apos;ve reached Level 3</p>
            <p className="josefin-slab-regular font-semibold text-xl mb-4">Here is your special message: </p>
            <p style={styles.message} className="josefin-slab-regular font-black text-2xl mb-4">&quot;You are the most important person in my life.&quot;</p>
        </div>
        </>
    );
}

const styles = {
    container: {
        position: "absolute",
        top:"28%",
        textAlign: 'center',
        padding: '20px',
        maxWidth: '400px',
        margin: '20px auto',
        zIndex: 4
    },
    header: {
        fontSize: '24px',
        margin: '10px 0',
        color: '#333'
    },
    message: {
        fontWeight:"700"
    }
};

export default FinalMessage;