import React from 'react';
import './styles.css';
import img from './react.png';
import imgLogo from './react-logo.svg';

export default function App() {
    const [count, setCount] = React.useState(0);

    return (
        <>
            <h1 className="h1'">Hello from </h1>
            <b>
                {process.env.NODE_ENV}
                {' '}
                :
            </b>
            <b>{process.env.name}</b>
            <img
                src={img}
                alt="..."
                style={{ width: '100px', height: '100px' }}
            />
            <img
                src={imgLogo}
                alt="..."
                style={{ width: '100px', height: '100px' }}
            />
            {' '}
            <button type="button" onClick={() => setCount(count + 1)}>
                count:
                {count}
            </button>
        </>
    );
}
