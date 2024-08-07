import PuzzleJigsaw from "./components/PuzzleJigsaw";
import bgImg from './assets/bg.png';
import left from './assets/left.png';
import right from './assets/right.png';


export default function App() {
    return (
        <div style={styles.app}>
            <img style={{width:"100%", height:"100%", position:"absolute", zIndex:"0"}} src={bgImg} />
            <img src={left} style={{ position:"absolute", left:"0", top:"0", height:"20%", width:"14%", zIndex:"2"}}/>
            <img src={right} style={{ position:"absolute", right:"0", top:"0", height:"20%", width:"14%", zIndex:"2"}}/>

            <div className="w-full flex justify-center">
            <h1 className="absolute z-1 mr-auto my-4 reenie-beanie-regular">Happy birthday</h1>
            </div>
            <div className="flex justify-center w-full">
             <PuzzleJigsaw />
            </div>
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
   
};