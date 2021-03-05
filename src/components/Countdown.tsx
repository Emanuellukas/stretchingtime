import styles from '../styles/components/Countdown.module.scss'
import {useState, useEffect} from "react";
import {func} from "prop-types";

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsAtive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsAtive(false);
        }
    }, [isActive, time]);

    function startCountdown() {
        setTime(0.05 * 60);
        setIsAtive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsAtive(false);
    }

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button disabled className={styles.countdownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button type='button' className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button type='button' className={styles.countdownButton} onClick={startCountdown}>
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    )
}