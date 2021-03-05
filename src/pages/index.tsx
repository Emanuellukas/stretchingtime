import React from 'react'
import Head from "next/head";

import ExperienceBar from "../components/ExperienceBar";
import {Profile} from "../components/Profile";
import styles from '../styles/pages/Home.module.scss'
import {CompletedChallenges} from "../components/CompletedChallenges";
import {Countdown} from "../components/Countdown";
import {ChallangeBox} from "../components/ChallengeBox";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Início | Stretching Time</title>
            </Head>
            <ExperienceBar />

            <section>
                <div>
                    <Profile/>
                    <CompletedChallenges/>
                    <Countdown/>
                </div>
                <div>
                    <ChallangeBox/>
                </div>
            </section>
        </div>
    )
}
