import React, {Component} from 'react';
import startScreenImage from "./images/bg5.jpeg"
import backgroundImage from "./images/gors_bg.jpeg"
import questions from "./questions"
import Sound from "react-sound"

import './App.css';

const dev = false

class App extends Component {
    constructor() {
        super();
        this.state = {
            startScreenIndex: 1,
            gameStarted: false,
            currentQuestionId: 1,
            isAutoLeftTimerRunning: false,
            isQuestionExpanding: false,
            currentQuestionCharacterIndex: 1,
            isDisplayingReply: false,
            latestReply: ""
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
            this.startExpandingQuestion(questions.find(q => q.id === this.state.currentQuestionId))
        } else {
            switch (e.keyCode) {
                case 78:
                    if(this.isGameInputAllowed()) this.answerQuestion("right")
                    console.log("right");
                    break;
                case 82:
                    this.setState({gameStarted: false, currentQuestionId: 1})
                    console.log("restart");
                    break;
                case 89:
                    console.log("left")
                    if(this.isGameInputAllowed()) this.answerQuestion("left")
                    break
                default:
                    break
            }
        }
    }
    
    left = () => {
        const question = questions.filter(q => q.id === this.state.currentQuestionId)[0]
        if(question.left){
            this.setState(
                {
                    currentQuestionId: questions.map(q => q.id).filter(id => id === question.left)[0],
                    isAutoLeftTimerRunning: false
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
        const question = questions.find(q => q.id === this.state.currentQuestionId)
        if(question && !question.leftText) {
            this.setState({isAutoLeftTimerRunning: true})
            setTimeout(() => {
                if(this.state.isAutoLeftTimerRunning) this.nextQuestion("left")
            }, dev ? 50 : 5000);
        }
        this.setState({currentQuestionCharacterIndex: 1})
        if(question && question.question) this.startExpandingQuestion(question)
    }
    
    startExpandingQuestion = (question) => {
        this.setState({isQuestionExpanding: true})
        this.expandQuestion(question)
    }
    
    expandQuestion = (question) => {
        this.setState({currentQuestionCharacterIndex: this.state.currentQuestionCharacterIndex+1})
        if(this.state.currentQuestionCharacterIndex < question.question.length){
            setTimeout(() => this.expandQuestion(question), 25)
        }else{
            this.setState({isQuestionExpanding: false})
        }
    }
    
    answerQuestion = (leftRight) => {
        const question = questions.find(q => q.id === this.state.currentQuestionId)
        this.setState({isDisplayingReply: true, latestReply: question[`${leftRight}Text`]})
        setTimeout(() => {
            this.nextQuestion(leftRight)
            this.setState({isDisplayingReply: false})
        }, dev ? 50 : 5000)
    }
    
    isGameInputAllowed = () => !this.state.isAutoLeftTimerRunning && !this.state.isDisplayingReply && !this.state.isQuestionExpanding
    
    render() {
        const question = questions.filter(q => q.id === this.state.currentQuestionId)[0]
        
        return (
            <div className="App">
                <header className="App-header">
                    <Sound
                        url="GORS_1.wav"
                        playStatus={!dev && Sound.status.PLAYING}
                    />
                    {this.state.gameStarted ?
                        <React.Fragment>
                            <img src={backgroundImage} alt="TAUSTA" className="background-image"/>
                            {this.state.isDisplayingReply ?
                                <h1 className="displayedReply">{this.state.latestReply}</h1> :
                                <div className="app-content">
                                    {question.question &&
                                    <h1 className={question.style || "title"}>{question.question.substring(0, this.state.currentQuestionCharacterIndex)}</h1>}
                                    <span>
                                    {question.leftText && !this.state.isQuestionExpanding &&
                                    <div
                                        className="button"
                                        onClick={() => this.answerQuestion("left")}
                                        style={{...styles.answer}}>{"■ " + question.leftText.toLowerCase()}{!question.left && "(missing)"}</div>}
                                        {question.rightText && !this.state.isQuestionExpanding &&
                                        <div
                                            className="button"
                                            onClick={() => this.answerQuestion("right")}
                                            style={{...styles.answer}}>{"▴ " + question.rightText.toLowerCase()}{!question.right && "(missing)"}</div>}
          </span>
                                </div>}
                        </React.Fragment> :
                        <React.Fragment>
                            <img
                                src={startScreenImage}
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
        margin: 35,
        fontSize: "2.5em",
        padding: 15,
        borderRadius: 10,
        opacity: ".75",
        textShadow:  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
    }
}

export default App;
