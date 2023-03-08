import React, { useEffect, useState } from 'react'

const Beranda = () => {
    const [boxCilckedBy, setBoxCilckedBy] = useState(null)

    const winPattern1 = [1, 2, 3]
    const winPattern2 = [4, 5, 6]
    const winPattern3 = [7, 8, 9]
    const winPattern4 = [1, 4, 7]
    const winPattern5 = [2, 5, 8]
    const winPattern6 = [3, 6, 9]
    const winPattern7 = [1, 5, 9]
    const winPattern8 = [3, 5, 7]


    const [player1Position, setPlayer1Position] = useState([])
    const [player2Position, setPlayer2Position] = useState([])
    const [winnerP1, setWinnerP1] = useState("")
    const [winnerP2, setWinnerP2] = useState("")

    const [playerInBox1, setPlayerInBox1] = useState("")
    const [playerInBox2, setPlayerInBox2] = useState("")
    const [playerInBox3, setPlayerInBox3] = useState("")
    const [playerInBox4, setPlayerInBox4] = useState("")
    const [playerInBox5, setPlayerInBox5] = useState("")
    const [playerInBox6, setPlayerInBox6] = useState("")
    const [playerInBox7, setPlayerInBox7] = useState("")
    const [playerInBox8, setPlayerInBox8] = useState("")
    const [playerInBox9, setPlayerInBox9] = useState("")

    const winChecker = () => {
        const pattern1P1 = player1Position.filter((resFilter) => resFilter === 1 || resFilter === 2 || resFilter === 3)
        const pattern2P1 = player1Position.filter((resFilter) => resFilter === 4 || resFilter === 5 || resFilter === 6)
        const pattern3P1 = player1Position.filter((resFilter) => resFilter === 7 || resFilter === 8 || resFilter === 9)
        const pattern4P1 = player1Position.filter((resFilter) => resFilter === 1 || resFilter === 4 || resFilter === 7)
        const pattern5P1 = player1Position.filter((resFilter) => resFilter === 2 || resFilter === 5 || resFilter === 8)
        const pattern6P1 = player1Position.filter((resFilter) => resFilter === 3 || resFilter === 6 || resFilter === 9)
        const pattern7P1 = player1Position.filter((resFilter) => resFilter === 1 || resFilter === 5 || resFilter === 9)
        const pattern8P1 = player1Position.filter((resFilter) => resFilter === 3 || resFilter === 5 || resFilter === 7)

        const pattern1P2 = player2Position.filter((resFilter) => resFilter === 1 || resFilter === 2 || resFilter === 3)
        const pattern2P2 = player2Position.filter((resFilter) => resFilter === 4 || resFilter === 5 || resFilter === 6)
        const pattern3P2 = player2Position.filter((resFilter) => resFilter === 7 || resFilter === 8 || resFilter === 9)
        const pattern4P2 = player2Position.filter((resFilter) => resFilter === 1 || resFilter === 4 || resFilter === 7)
        const pattern5P2 = player2Position.filter((resFilter) => resFilter === 2 || resFilter === 5 || resFilter === 8)
        const pattern6P2 = player2Position.filter((resFilter) => resFilter === 3 || resFilter === 6 || resFilter === 9)
        const pattern7P2 = player2Position.filter((resFilter) => resFilter === 1 || resFilter === 5 || resFilter === 9)
        const pattern8P2 = player2Position.filter((resFilter) => resFilter === 3 || resFilter === 5 || resFilter === 7)

        if (JSON.stringify(pattern1P1.sort()) === JSON.stringify(winPattern1) ||
            JSON.stringify(pattern2P1.sort()) === JSON.stringify(winPattern2) ||
            JSON.stringify(pattern3P1.sort()) === JSON.stringify(winPattern3) ||
            JSON.stringify(pattern4P1.sort()) === JSON.stringify(winPattern4) ||
            JSON.stringify(pattern5P1.sort()) === JSON.stringify(winPattern5) ||
            JSON.stringify(pattern6P1.sort()) === JSON.stringify(winPattern6) ||
            JSON.stringify(pattern7P1.sort()) === JSON.stringify(winPattern7) ||
            JSON.stringify(pattern8P1.sort()) === JSON.stringify(winPattern8)) {
            setWinnerP1("player1 win")
        } else if (JSON.stringify(pattern1P2.sort()) === JSON.stringify(winPattern1) ||
            JSON.stringify(pattern2P2.sort()) === JSON.stringify(winPattern2) ||
            JSON.stringify(pattern3P2.sort()) === JSON.stringify(winPattern3) ||
            JSON.stringify(pattern4P2.sort()) === JSON.stringify(winPattern4) ||
            JSON.stringify(pattern5P2.sort()) === JSON.stringify(winPattern5) ||
            JSON.stringify(pattern6P2.sort()) === JSON.stringify(winPattern6) ||
            JSON.stringify(pattern7P2.sort()) === JSON.stringify(winPattern7) ||
            JSON.stringify(pattern8P2.sort()) === JSON.stringify(winPattern8)) {
            setWinnerP2("player2 win")
        } else if (player1Position.length === 5 && player2Position.length === 4) {
            setWinnerP1("draw")
            setWinnerP2("draw")
        }
    }

    const box1 = () => {
        if (playerInBox1) return
        if (boxCilckedBy === null) {
            setBoxCilckedBy("player1")
            setPlayerInBox1("player1")
            setPlayer1Position((prev) => [...prev, 1])
        } else if (boxCilckedBy === "player1") {
            setBoxCilckedBy("player2")
            setPlayerInBox1("player2")
            setPlayer2Position((prev) => [...prev, 1])
        } else if (boxCilckedBy === "player2") {
            setBoxCilckedBy("player1")
            setPlayerInBox1("player1")
            setPlayer1Position((prev) => [...prev, 1])
        }
    }

    const box2 = () => {
        if (playerInBox2) return
        if (boxCilckedBy === null) {
            setBoxCilckedBy("player1")
            setPlayerInBox2("player1")
            setPlayer1Position((prev) => [...prev, 2])
        } else if (boxCilckedBy === "player1") {
            setBoxCilckedBy("player2")
            setPlayerInBox2("player2")
            setPlayer2Position((prev) => [...prev, 2])
        } else if (boxCilckedBy === "player2") {
            setBoxCilckedBy("player1")
            setPlayerInBox2("player1")
            setPlayer1Position((prev) => [...prev, 2])
        }
    }

    const box3 = () => {
        if (playerInBox3) return
        if (boxCilckedBy === null) {
            setBoxCilckedBy("player1")
            setPlayerInBox3("player1")
            setPlayer1Position((prev) => [...prev, 3])
        } else if (boxCilckedBy === "player1") {
            setBoxCilckedBy("player2")
            setPlayerInBox3("player2")
            setPlayer2Position((prev) => [...prev, 3])
        } else if (boxCilckedBy === "player2") {
            setBoxCilckedBy("player1")
            setPlayerInBox3("player1")
            setPlayer1Position((prev) => [...prev, 3])
        }
    }

    const box4 = () => {
        if (playerInBox4) return
        if (boxCilckedBy === null) {
            setBoxCilckedBy("player1")
            setPlayerInBox4("player1")
            setPlayer1Position((prev) => [...prev, 4])
        } else if (boxCilckedBy === "player1") {
            setBoxCilckedBy("player2")
            setPlayerInBox4("player2")
            setPlayer2Position((prev) => [...prev, 4])
        } else if (boxCilckedBy === "player2") {
            setBoxCilckedBy("player1")
            setPlayerInBox4("player1")
            setPlayer1Position((prev) => [...prev, 4])
        }
    }

    const box5 = () => {
        if (playerInBox5) return
        if (boxCilckedBy === null) {
            setBoxCilckedBy("player1")
            setPlayerInBox5("player1")
            setPlayer1Position((prev) => [...prev, 5])
        } else if (boxCilckedBy === "player1") {
            setBoxCilckedBy("player2")
            setPlayerInBox5("player2")
            setPlayer2Position((prev) => [...prev, 5])
        } else if (boxCilckedBy === "player2") {
            setBoxCilckedBy("player1")
            setPlayerInBox5("player1")
            setPlayer1Position((prev) => [...prev, 5])
        }
    }

    const box6 = () => {
        if (playerInBox6) return
        if (boxCilckedBy === null) {
            setBoxCilckedBy("player1")
            setPlayerInBox6("player1")
            setPlayer1Position((prev) => [...prev, 6])
        } else if (boxCilckedBy === "player1") {
            setBoxCilckedBy("player2")
            setPlayerInBox6("player2")
            setPlayer2Position((prev) => [...prev, 6])
        } else if (boxCilckedBy === "player2") {
            setBoxCilckedBy("player1")
            setPlayerInBox6("player1")
            setPlayer1Position((prev) => [...prev, 6])
        }
    }

    const box7 = () => {
        if (playerInBox7) return
        if (boxCilckedBy === null) {
            setBoxCilckedBy("player1")
            setPlayerInBox7("player1")
            setPlayer1Position((prev) => [...prev, 7])
        } else if (boxCilckedBy === "player1") {
            setBoxCilckedBy("player2")
            setPlayerInBox7("player2")
            setPlayer2Position((prev) => [...prev, 7])
        } else if (boxCilckedBy === "player2") {
            setBoxCilckedBy("player1")
            setPlayerInBox7("player1")
            setPlayer1Position((prev) => [...prev, 7])
        }
    }

    const box8 = () => {
        if (playerInBox8) return
        if (boxCilckedBy === null) {
            setBoxCilckedBy("player1")
            setPlayerInBox8("player1")
            setPlayer1Position((prev) => [...prev, 8])
        } else if (boxCilckedBy === "player1") {
            setBoxCilckedBy("player2")
            setPlayerInBox8("player2")
            setPlayer2Position((prev) => [...prev, 8])
        } else if (boxCilckedBy === "player2") {
            setBoxCilckedBy("player1")
            setPlayerInBox8("player1")
            setPlayer1Position((prev) => [...prev, 8])
        }
    }

    const box9 = () => {
        if (playerInBox9) return
        if (boxCilckedBy === null) {
            setBoxCilckedBy("player1")
            setPlayerInBox9("player1")
            setPlayer1Position((prev) => [...prev, 9])
        } else if (boxCilckedBy === "player1") {
            setBoxCilckedBy("player2")
            setPlayerInBox9("player2")
            setPlayer2Position((prev) => [...prev, 9])
        } else if (boxCilckedBy === "player2") {
            setBoxCilckedBy("player1")
            setPlayerInBox9("player1")
            setPlayer1Position((prev) => [...prev, 9])
        }
    }


    useEffect(() => {
        winChecker()
        // eslint-disable-next-line
    }, [boxCilckedBy])


    return (
        <div className='beranda-container'>
            <div className='player-status-container'>
                <div className='shadow' style={{ height: "60px", width: "200px" }}>player 1 " <span className="bi bi-circle player1-status o-shadow-neon-light" /> "</div>
                <div className='shadow' style={{ height: "60px", width: "200px" }}>player 2 "<span className="bi bi-x player2-status x-shadow-neon-light" />"</div>
            </div>
            <div className='shadow'>
                <div className='field'>
                    <div className="item-of-field" onClick={() => box1()} style={{ borderRight: "solid 2px rgba(255, 255, 255, 0.712)", borderBottom: "solid 2px rgba(255, 255, 255, 0.712)" }}>
                        <div className='icon-container'>
                            {
                                (playerInBox1 === "player1") ?
                                    <span className="bi bi-circle circle-icon o-shadow-neon-light" />
                                    : (playerInBox1 === "player2") &&
                                    <span className="bi bi-x x-icon x-shadow-neon-light" />
                            }
                        </div>
                    </div>
                    <div className="item-of-field" onClick={() => { box2() }} style={{ borderBottom: "solid 2px rgba(255, 255, 255, 0.712)" }}>
                        <div className='icon-container'>
                            {
                                (playerInBox2 === "player1") ?
                                    <span className="bi bi-circle circle-icon o-shadow-neon-light" />
                                    : (playerInBox2 === "player2") &&
                                    <span className="bi bi-x x-icon x-shadow-neon-light" />
                            }
                        </div>
                    </div>
                    <div className="item-of-field" onClick={() => { box3() }} style={{ borderBottom: "solid 2px rgba(255, 255, 255, 0.712)", borderLeft: "solid 2px rgba(255, 255, 255, 0.712)" }}>
                        <div className='icon-container'>
                            {
                                (playerInBox3 === "player1") ?
                                    <span className="bi bi-circle circle-icon o-shadow-neon-light" />
                                    : (playerInBox3 === "player2") &&
                                    <span className="bi bi-x x-icon x-shadow-neon-light" />
                            }
                        </div>
                    </div>
                    <div className="item-of-field" onClick={() => { box4() }} style={{ borderRight: "solid 2px rgba(255, 255, 255, 0.712)", borderBottom: "solid 2px rgba(255, 255, 255, 0.712)" }}>
                        <div className='icon-container'>
                            {
                                (playerInBox4 === "player1") ?
                                    <span className="bi bi-circle circle-icon o-shadow-neon-light" />
                                    : (playerInBox4 === "player2") &&
                                    <span className="bi bi-x x-icon x-shadow-neon-light" />
                            }
                        </div>
                    </div>
                    <div className="item-of-field" onClick={() => { box5() }} style={{ borderBottom: "solid 2px rgba(255, 255, 255, 0.712)" }}>
                        <div className='icon-container'>
                            {
                                (playerInBox5 === "player1") ?
                                    <span className="bi bi-circle circle-icon o-shadow-neon-light" />
                                    : (playerInBox5 === "player2") &&
                                    <span className="bi bi-x x-icon x-shadow-neon-light" />
                            }
                        </div>
                    </div>
                    <div className="item-of-field" onClick={() => { box6() }} style={{ borderLeft: "solid 2px rgba(255, 255, 255, 0.712)", borderBottom: "solid 2px rgba(255, 255, 255, 0.712)" }}>
                        <div className='icon-container'>
                            {
                                (playerInBox6 === "player1") ?
                                    <span className="bi bi-circle circle-icon o-shadow-neon-light" />
                                    : (playerInBox6 === "player2") &&
                                    <span className="bi bi-x x-icon x-shadow-neon-light" />
                            }
                        </div>
                    </div>
                    <div className="item-of-field" onClick={() => { box7() }} style={{ borderRight: "solid 2px rgba(255, 255, 255, 0.712)" }}>
                        <div className='icon-container'>
                            {
                                (playerInBox7 === "player1") ?
                                    <span className="bi bi-circle circle-icon o-shadow-neon-light" />
                                    : (playerInBox7 === "player2") &&
                                    <span className="bi bi-x x-icon x-shadow-neon-light" />
                            }
                        </div>
                    </div>
                    <div className="item-of-field" onClick={() => { box8() }}>
                        <div className='icon-container'>
                            {
                                (playerInBox8 === "player1") ?
                                    <span className="bi bi-circle circle-icon o-shadow-neon-light" />
                                    : (playerInBox8 === "player2") &&
                                    <span className="bi bi-x x-icon x-shadow-neon-light" />
                            }
                        </div>
                    </div>
                    <div className="item-of-field" onClick={() => { box9() }} style={{ borderLeft: "solid 2px rgba(255, 255, 255, 0.712)" }}>
                        <div className='icon-container'>
                            {
                                (playerInBox9 === "player1") ?
                                    <span className="bi bi-circle circle-icon o-shadow-neon-light" />
                                    : (playerInBox9 === "player2") &&
                                    <span className="bi bi-x x-icon x-shadow-neon-light" />
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                (winnerP1 === "player1 win") ?
                    <div className='winner-container'>
                        <h1 className='title-p1 tracking-in-expand-fwd'>PLAYER 1 " <span className="bi bi-circle circle-icon o-shadow-neon-light" />" MENJADI PEMENANG</h1>
                        <div onClick={() => { window.location.reload() }} className='shadow refresh-button'> <h1 className='txt-of-button'>Main lagi</h1></div>
                    </div>
                    :
                    (winnerP2 === "player2 win") ?
                        <div className='winner-container'>
                            <h1 className='title-p2 tracking-in-expand-fwd'>PLAYER 2 "<span className="bi bi-x x-icon x-shadow-neon-light" />" MENJADI PEMENANG</h1>
                            <div onClick={() => { window.location.reload() }} className='shadow refresh-button'> <h1 className='txt-of-button'>Main lagi</h1></div>
                        </div>
                        : (winnerP1 === "draw" && winnerP2 === "draw") &&
                        <div className='winner-container'>
                            <h1 className='title-draw tracking-in-expand-fwd'>"<span className="bi bi-x x-icon x-shadow-neon-light" />" DRAW "<span className="bi bi-circle circle-icon o-shadow-neon-light" />"</h1>
                            <div onClick={() => { window.location.reload() }} className='shadow refresh-button'> <h1 className='txt-of-button'>Main lagi</h1></div>
                        </div>
            }
        </div >
    )
}

export default Beranda