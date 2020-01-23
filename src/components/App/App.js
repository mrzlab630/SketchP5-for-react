/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 23.01.2020
 * Time: 14:02
 * About:
 *
 */
import React from "react";
import './App.scss';
import SketchP5 from '../SketchP5';
import {SketchP5MrZLab} from '../sketches';



const App = () => {

    return (<>

        <div className={`wrapper`}>

            <div className={`title`}>
                <h1>p5.js wrapper for React.js</h1>
            </div>

        </div>

        <SketchP5
            {...SketchP5MrZLab()}
        />

    </>);
};


export default App;