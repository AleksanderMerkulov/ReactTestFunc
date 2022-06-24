import React, {useState} from 'react';

const TwoWayInput = () => {
    const [value,setValue] = useState()

    return (
        <div>
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}/>
            <br/>
        </div>
    );
};

export default TwoWayInput;