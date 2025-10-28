
import styles from './physicsButton.module.css';
import "../../app/globals.css";

const PhysicsButton = ({text, height, width}) => {


    return (
        <div style={{
            "--button-height": height ? `${height}px` : "50px",
            "--button-width": width ? `${width}px` : "400px",
            "--font-size": (height/2) <= 25 ? `${height / 2}` : "24px",}}
             className={styles.button}>
            <h3 className="">{text}</h3>
        </div>
    );
}

export default PhysicsButton;