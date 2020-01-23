import React,{useEffect,useRef} from "react";


const SketchP5 = (props) => {

    const canvasParentRef = useRef(null);

    const {className, style,setup} = props || null;



    useEffect(()=>{

        // for Server Side Render
        if(typeof window === 'undefined'){
            return false;
        }

        const p5 = require('p5');

       let scketch = new p5(p => {
            p.setup = () => {
                setup(p, canvasParentRef.current);
            };
            const p5Events = [
                "draw",
                "windowResized",
                "preload",
                "mouseClicked",
                "doubleClicked",
                "mouseMoved",
                "mousePressed",
                "mouseWheel",
                "mouseDragged",
                "mouseReleased",
                "keyPressed",
                "keyReleased",
                "keyTyped",
                "touchStarted",
                "touchMoved",
                "touchEnded",
                "deviceMoved",
                "deviceTurned",
                "deviceShaken"
            ];
            p5Events.forEach(event => {
                if (props[event]) {
                    p[event] = () => {
                        props[event](p);
                    };
                }
            });
        });



       return () => scketch.remove();

    },[]);


    return (
     <div ref={canvasParentRef} className={ className || "p5Canvas"} style={style || {}} />
    );


};


export default SketchP5;