import React, { useEffect, useState } from 'react';
import WinStateModal from './WinStateModal';
import BlackDropback from '../LayoutComponents/BlackDropback';

const GameMode = ({gameData, time, setTime, setGameMode}) => {

    const [ winModal, setWinModal ] = useState(false);
    const [ winState, setWinState ] = useState([]);
    const [ barWidth, setBarWidth ] = useState(100);

    function checkAnswer(e) {

        if (e.target.value === gameData.rightA) {
            setWinState([true, `Gratuliere! "${e.target.value}" ist die richtige Antwort. Prof. Eich wäre bestimmt stolz auf dich.`]);
        } else {
            setWinState([false, `"${e.target.value}" ist leider die falsche Antwort. Hoffentlich hört Prof. Eich nichts davon.`]);
        }

        setWinModal(true);
    }

    useEffect( () => {
        if (time) {
            const interval = setInterval( () => {
    
                if ( barWidth > 0 ) {
                    setBarWidth( barWidth - 1 );
                }
    
                if ( barWidth === 0 ) {
                    setWinState([false, "Die Zeit ist leider abgelaufen. Beim nächsten Mal hast du bestimmt mehr Glück."]);
                    setWinModal(true);
                    setTime(false);
                    return;
                }
    
            }, 100);
    
            return () => clearInterval(interval);
        }   
    })

    return (
        <>
            {(winModal) ? <> <WinStateModal winState={winState} setWinModal={setWinModal} setGameMode={setGameMode}/> <BlackDropback/> </> : <></>}

            <div className="game-mode--offset-layer">
                <div className="game-mode--wrapper col-11 col-sm-10 col-md-8 col-lg-6">
                    <div className="game-mode--title">
                        {gameData.title}
                    </div>
                    <div className="game-mode--specs-container col-11">
                        <div className="game-mode--pokemon col-7" dangerouslySetInnerHTML={{__html:gameData.svg}}></div>
                        <div className="game-mode--specs col-5">
                            <span className="game-mode--specs-pokemon">
                                {gameData.pokemon}
                            </span>
                            <span className="game-mode--specs-level">
                                {`Level ${gameData.level}`}
                            </span>
                            <div className="game-mode--specs-reward">
                                <span>{`$${gameData.reward}`}</span>
                                <span><i className="fas fa-coins"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="game-mode--time-container col-11">
                        <div className="game-mode--time-title">Verbleibende Zeit:</div>
                        <div className="game-mode--time-bar--div d-flex">
                            <div className="game-mode--time-bar--icon col-1">
                                <i className="fas fa-hourglass-half"></i>
                            </div>
                            <div className="game-mode--time-bar--max col-11">
                                <div className="game-mode--time-bar--actual-time" style={{width: `${barWidth}%`}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="game-mode--challenge-question--container col-11">
                        <div className="game-mode--challenge-question--div col-12">
                            <div className="game-mode--challenge-question--text">
                                {gameData.question}
                            </div>
                        </div>
                        <div type="select" className="game-mode--form--select col-11">
                            {gameData.answerArr.map( (a, key) => {
                                return (
                                    <option className="game-mode--form--option btn" key={key} value={a} onClick={(e) => {checkAnswer(e); setTime(false)}}>{a}</option>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameMode;