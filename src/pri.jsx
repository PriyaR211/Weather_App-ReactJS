import { useState } from "react";

function Priya(){
    function initFunc(){
        let count = 0
        console.log("init function is called");
        return count+11;
    }
    let[value, setValue] = useState(initFunc());
    // console.log("type of count: ", typeof count);
    console.log("count -- state variable:", value);
    function incCount(){
        setValue(value+1);
        // count = count+1;
        console.log("value of count:", value);
        // return value;
    }

    return(
        <div>
            <h1>Priya is here</h1>
            <h2>{value}</h2>
            <button onClick={incCount}>Inc Count</button>
        </div>
    );

}


export default Priya;















