import React, {Component} from 'react';
import logo from './logo.svg';
import saltSackImage from "./images/gors_salt_sack.JPG"
import backgroundImage from "./images/gors_bg.jpeg"
import questions from "./questions"

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            startScreenIndex: 1,
            gameStarted: true,
            currentQuestionId: 1,
            isAutoleftTimerRunning: false
        }
    }
    
    componentWillMount() {
        document.addEventListener("keydown", this.onKeyPressed.bind(this));
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyPressed.bind(this));
    }
    
    onKeyPressed(e) {
        console.log(e.keyCode);
        if (!this.state.gameStarted) {
            this.setState({gameStarted: true})
        } else {
            switch (e.keyCode) {
                case 78:
                    this.nextQuestion("right")
                    console.log("right");
                    break;
                case 82:
                    this.setState({gameStarted: false, currentQuestionId: 1})
                    console.log("restart");
                    break;
                case 89:
                    console.log("left")
                    this.nextQuestion("left")
                    break
            }
        }
    }
    
    rotateScreen = async () => {
        let i = this.state.startScreenIndex + 1
        if (i > 3) i = 0
        this.setState({startScreenIndex: i})
        setTimeout(() => this.rotateScreen(), 4000);
    }
    
    left = () => {
        const question = questions.filter(q => q.id === this.state.currentQuestionId)[0]
        if(question.left){
            this.setState(
                {
                    currentQuestionId: questions.map(q => q.id).filter(id => id === question.left)[0],
                    isAutoleftTimerRunning: false
                })
        }
        return question
    }
    right = () => {
        const question = questions.filter(q => q.id === this.state.currentQuestionId)[0]
        if(question.right){
            this.setState({currentQuestionId: questions.map(q => q.id).filter(id => id === question.right)[0]})
        }
        return question
    }
    
    nextQuestion = (leftright) => {
        if(leftright === "left"){
            this.left()
        }else if(leftright === "right"){
            this.right()
        }
        const question = questions.filter(q => q.id === this.state.currentQuestionId)[0]
        if(question && !question.leftText) {
            this.setState({isAutoleftTimerRunning: true})
            setTimeout(() => { if(this.state.isAutoleftTimerRunning) this.left() }, 5000);
        }
    }
    
    
    render() {
        const question = questions.filter(q => q.id === this.state.currentQuestionId)[0]
        
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.gameStarted ?
                        <React.Fragment>
                            <img src={backgroundImage} alt="TAUSTA" className="background-image"/>
                            <div className="app-content">
                                {question.question &&
                                <h1 className="title">{question.question}</h1>}
                                <span>
                                    {question.leftText &&
                                    <span
                                        className="button"
                                        onClick={this.left}
                                        style={{...styles.answer, color: "#7de7ff"}}>{question.leftText}{!question.left && "(missing)"}</span>}
                                    {question.rightText &&
                                    <span
                                        className="button"
                                        onClick={this.right}
                                        style={{...styles.answer, color: "#eba3ff"}}>{question.rightText}{!question.right && "(missing)"}</span>}
          </span>
                            </div>
                        </React.Fragment> :
                        <React.Fragment>
                            <img
                                src={saltSackImage}
                                alt="TAUSTA" className="background-image"/>
                            <div className="app-content">
                                <h3 className="blinking">PRESS ANY BUTTON TO START GAME...</h3>
                            </div>
                        </React.Fragment>}
                </header>
            </div>
        );
    }
}

const styles = {
    answer: {
        margin: 45,
        fontWeight: "bold",
        fontSize: "1.2em",
        backgroundColor: "RGB(0,0,0,.6)",
        padding: 15,
        borderRadius: 10,
        opacity: ".75"
    }
}

export default App;
