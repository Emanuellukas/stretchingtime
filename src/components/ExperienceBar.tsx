import styles from '../styles/components/ExperienceBar.module.scss'
import {useState} from 'react'

export function ExperienceBar() {
    const [hovered, setHovered] = useState(false);
    return (
        <header className={styles.experienceBar} onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)}>
            <span>0 xp</span>
            <div>
                <div style={{width: '50%'}}/>
                {hovered && (
                    <span className={`${styles.currentExperience} ${hovered ? 'hovered' : ''}`} style={{left: '50%'}}>300xp</span>
                )}
            </div>
            <span>600 xp</span>
        </header>
    );
}

export default ExperienceBar