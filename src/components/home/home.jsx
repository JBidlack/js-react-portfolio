import React, {useState, useRef, useEffect} from 'react';
import '../../App.css';

const Home = () => {

    const [text, setText] = useState("");

    let textContent = 'Joohn is a full-stack developer who focuses primarily on Java programming. He graduated Magna Cum Laude from University of Maryland Global Campus with a bachelors degree in Computer Science. While there, he found interest in software development and has, since graduation taken it upon himself to begin learning C#, Python and Javascript in his own time.'
    
    useEffect(() => {
        let i = 0;
        let textArray = textContent.split("");
        let loopTimer = setInterval(() => {
          if (i < textArray.length-1) {
            setText((previous) => previous + textArray[i]);
            i++;
          } else {
            clearInterval(loopTimer);
          }
        }, 50);
    
        return () => clearInterval(loopTimer);
    }, [textContent]);

    return(
        <div id="text" className=" m-10 mx-20">{text}</div>
        );
}

export default Home
