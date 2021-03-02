//Ao acessar a página do aplicativo, o arquivo '_document' é lido apenas uma vez, importando globalmente as fontes

import Document, {Html, Head, Main, NextScript} from 'next/document'
import React from "react";

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Stretching Time</title>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}