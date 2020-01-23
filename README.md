## SketchP5-for-react

<br>
<br>

### It's a wrapper p5.Js for React.Js.

<br>

![preview](https://github.com/mrzlab630/SketchP5-for-react/blob/master/src/assets/png/preview.png?raw=true)

<br>
<br>

## How it works

<br>

look at the file ./src/components/App/App.js

<br>
<br>
 
```
import React from "react";
  
  import SketchP5 from '../SketchP5';
  import { SketchP5MrZLab } from '../sketches';

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
```

**Sketch structure**

<br>

```
const SketchP5MrZLab = (p5, canvasParentRef) =>{

   // some code, functions, classes, etc...


return {
        preload: p5 => {
            // preload data: image, video, etc...
        },
        setup: (p5, canvasParentRef) => {
             // some code
        },
        draw: p5 => {
            // some code
        },
        windowResized: p5 =>{
           // some code
        },
           // etc...
}


export default SketchP5MrZLab;

```

## Development

<br>

**yarn install / npm install**
<br>
**yarn start / npm start**
<br>
open **http://localhost:3000**
<br>
<br>

## The component uses

<br>

* [React.js](https://reactjs.org/)
* [p5.js](https://p5js.org)

<br>
<br>


## Donation

<br>

If this project help you reduce time to develop, you can give me a cup of coffee :)

<br>
<br>

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3FYLY9YVBTSEL)
<br>
<br>

## License

The MIT License.

<br>
<br>

## By

<br>

**mrZ** - mrz@mrzlab630.pw