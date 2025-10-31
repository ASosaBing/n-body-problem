
import styles from './physicsButton.module.css';
import "../../app/globals.css";

const PhysicsButton = ({text, height, width, borderRadius = {}, onClick}) => {
    


    return (
        <div
            onClick={onClick} 
            style={{
            "--button-height": height ? `${height}px` : "50px",
            "--button-width": width ? `${width}px` : "400px",
            "--font-size": (height/2) <= 25 ? `${height / 2}` : "24px",
            "--top-left-radius": borderRadius.topLeft || borderRadius.topLeft === 0? `${borderRadius.topLeft}px` : "15px",
            "--top-right-radius": borderRadius.topRight || borderRadius.topRight === 0? `${borderRadius.topRight}px` : "15px",
            "--bottom-right-radius": borderRadius.bottomRight || borderRadius.bottomRight === 0? `${borderRadius.bottomRight}px` : "15px",
            "--bottom-left-radius": borderRadius.bottomLeft || borderRadius.bottomLeft === 0? `${borderRadius.bottomLeft}px` : "15px",
            "pointer-events": "all"}}
             className={styles.button}>
            <h3 className="">{text}</h3>
        </div>
    );
}

export default PhysicsButton;