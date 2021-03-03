import styles from '../styles/components/Profile.module.scss'

export function Profile(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Emanuellukas.png" alt="Lucas Emanuel"/>
            <div>
                <strong>Lucas Emanuel</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}