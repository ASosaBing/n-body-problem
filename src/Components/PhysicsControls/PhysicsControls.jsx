
import styles from './physicsControls.module.css';
import "../../app/globals.css";
import PhysicsButton from '../Button/PhysicsButton';


const PhysicsControls = () => {
    return (
        <div className={styles.physicsControlContainer}>
            <PhysicsButton text={"Configure Initial Conditions"} width={400} height={30}/>
            <div className={styles.buttonRow}>
                <PhysicsButton text={"Start"} width={170} height={30}/>
                <PhysicsButton text={"Restart"} width={170} height={30}/>
            </div>
            
        </div>
    );
}

export default PhysicsControls;