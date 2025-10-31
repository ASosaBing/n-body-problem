
import styles from './physicsControls.module.css';
import "../../app/globals.css";
import PhysicsButton from '../Button/PhysicsButton';


const PhysicsControls = ({onClickFunctions, simulationPaused}) => {

    let pauseText = "Pause";
    if(simulationPaused === true){
        pauseText = "Pause";
    } else [
        pauseText = "Start"
    ]


    return (
        <div className={styles.physicsControlContainer}>
            <PhysicsButton text={"Configure Initial Conditions"} width={400} height={30} borderRadius={{topLeft: 0, topRight: 0, bottomRight: 0}}/>
            <div className={styles.buttonRow}>
                <PhysicsButton text={pauseText} width={170} height={30} borderRadius={{bottomLeft: 0, bottomRight: 0}} onClick={onClickFunctions.pauseFunction}/>
                <PhysicsButton text={"Restart"} width={170} height={30} borderRadius={{bottomLeft: 0, bottomRight: 0}} onClick={onClickFunctions.resetFunction}/>
            </div>
            
        </div>
    );
}

export default PhysicsControls;