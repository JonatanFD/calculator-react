import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import { evaluate } from 'mathjs';
import '../css/App.css';
import mainLogo from '../pics/freeCodeCampLogo.png';

function App() {
    const [displayContent, setDisplayContent] = useState('');

    const addSymbolToDisplay = (symbol) => {
        setDisplayContent(displayContent + symbol);
    };
    const evaluateDisplay = () => {
        if (displayContent !== '') {
            try {
                setDisplayContent(evaluate(displayContent));
            } catch (error) {
                alert("Enter a correct statment")
            }
        }
    };
    const restartDisplay = () => {
        setDisplayContent('');
    };

    return (
        <div className="App">
            <header className="header-container">
                <img
                    className="freeCodeCamp-logo"
                    src={mainLogo}
                    alt="freeCodeCamp Logo"
                />
            </header>

            <div className="main-container">
                <div className="layer">
                    <Display content={displayContent} />
                </div>
                <div className="buttons-container">
                    <div className="layer">
                        <Button symbol="7" action={addSymbolToDisplay} />
                        <Button symbol="8" action={addSymbolToDisplay} />
                        <Button symbol="9" action={addSymbolToDisplay} />
                        <Button symbol="/" action={addSymbolToDisplay} />
                    </div>
                    <div className="layer">
                        <Button symbol="4" action={addSymbolToDisplay} />
                        <Button symbol="5" action={addSymbolToDisplay} />
                        <Button symbol="6" action={addSymbolToDisplay} />
                        <Button symbol="*" action={addSymbolToDisplay} />
                    </div>
                    <div className="layer">
                        <Button symbol="1" action={addSymbolToDisplay} />
                        <Button symbol="2" action={addSymbolToDisplay} />
                        <Button symbol="3" action={addSymbolToDisplay} />
                        <Button symbol="-" action={addSymbolToDisplay} />
                    </div>
                    <div className="layer">
                        <Button symbol="0" action={addSymbolToDisplay} />
                        <Button symbol="." action={addSymbolToDisplay} />
                        <Button symbol="=" action={evaluateDisplay} />
                        <Button symbol="+" action={addSymbolToDisplay} />
                    </div>
                    <div className="layer">
                        <Button symbol="CLEAR" action={restartDisplay} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
