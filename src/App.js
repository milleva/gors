import React, {Component} from 'react';
import startScreenImage from "./images/bg5.jpeg"
import backgroundImage from "./images/gors_bg.jpeg"
import dangerBubble from "./images/danger_bubble.png"
import questions from "./questions"
import Sound from "react-sound"

import './App.css';

const dev = false

const DEFAULT_PAUSE_MILLISECONDS = 5000
const INITIAL_GAME_STARTING_PAUSE_MILLISECONDS = 15000

const toNameSpellingFormat = (str) => {
    if (!str || str.length < 2) return str
    return str[0].toUpperCase() + str.substr(1, str.length).toLowerCase()
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            gameStarted: false,
            currentQuestionId: 1,
            isAutoLeftTimerRunning: false,
            isQuestionExpanding: false,
            currentQuestionCharacterIndex: 1,
            isDisplayingReply: false,
            latestReply: "",
            soundFile: 1,
            endingEdit: "",
            isShowingBackgroundOnly: false
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
            this.setState({isShowingBackgroundOnly: true})
            setTimeout(
                () => {
                    this.setState({isShowingBackgroundOnly: false, gameStarted: true})
                    this.startExpandingQuestion(questions.find(q => q.id === this.state.currentQuestionId))
                },
                INITIAL_GAME_STARTING_PAUSE_MILLISECONDS)
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
            }, dev ? 50 : (question.duration || DEFAULT_PAUSE_MILLISECONDS));
        }
        this.setState({currentQuestionCharacterIndex: 1})
        if(question && question.id === 1) this.setState({endingEdit: ""})
        if(question && question.endingEdit) this.setState({endingEdit: question.endingEdit})
        if(question && question.question) this.startExpandingQuestion(question)
    }
    
    startExpandingQuestion = (question) => {
        this.setState({isQuestionExpanding: true})
        this.expandQuestion(question)
    }
    
    expandQuestion = (question) => {
        this.setState({currentQuestionCharacterIndex: this.state.currentQuestionCharacterIndex+1})
        const originalQuestionLength = question.question.length
        const maxLength = question.style === "game-over" ? originalQuestionLength + this.state.endingEdit.length : originalQuestionLength
        if(this.state.currentQuestionCharacterIndex < maxLength){
            setTimeout(() => this.expandQuestion(question), 25)
        }else{
            this.setState({isQuestionExpanding: false})
        }
    }
    
    toggleSoundFile = () => {
        if (this.state.soundFile === 1) this.setState({soundFile: 2})
        else this.setState({soundFile: 1})
    }
    
    answerQuestion = (leftRight) => {
        this.toggleSoundFile()
        const question = questions.find(q => q.id === this.state.currentQuestionId)
        this.setState({isDisplayingReply: true, latestReply: question[`${leftRight}Text`]})
        const replyDisplayDuration = question[`${leftRight}Duration`] || DEFAULT_PAUSE_MILLISECONDS
        setTimeout(() => {
            this.nextQuestion(leftRight)
            this.setState({isDisplayingReply: false})
        }, dev ? 50 : replyDisplayDuration)
    }
    
        isGameInputAllowed = () => !this.state.isAutoLeftTimerRunning && !this.state.isDisplayingReply && !this.state.isQuestionExpanding
    
    render() {
        const question = questions.filter(q => q.id === this.state.currentQuestionId)[0]
        const displayedMainText = question.style === "game-over" ? question.question + this.state.endingEdit : question.question
        console.log(displayedMainText)
        return (
            <div className="App">
                <header className="App-header">
                    <Sound
                        url={`GORS_${this.state.soundFile}.wav`}
                        playStatus={!dev && Sound.status.PLAYING}
                        loop={true}
                    />
                    {this.state.gameStarted ?
                        <React.Fragment>
                            <img src={backgroundImage} alt="TAUSTA" className="background-image"/>
                            {this.state.isDisplayingReply ?
                                <h1 className="displayedReply">{toNameSpellingFormat(this.state.latestReply)}</h1> :
                                <div className="app-content">
                                    {question.question &&
                                    <span>
                                            {question.style === "danger" && <img style={{position: "absolute", left: "15.5em", top: "2em", width: 1300}} src={dangerBubble} alt=""/>}
                                        <h1 className={question.style || "title"}>
                                                {displayedMainText.substring(0, this.state.currentQuestionCharacterIndex)}
                                            </h1>
                                        </span>
                                    }
                                    <span>
                                    {question.leftText && !this.state.isQuestionExpanding &&
                                    <div
                                        className={(question.style === "danger") && "blinking"}
                                        onClick={() => this.answerQuestion("left")}
                                        style={{...styles.answer}}>
                                        {question.style !== "danger" && "■ "}
                                        {question.leftText.toLowerCase()}{!question.left && "(missing)"}
                                    </div>}
                                        {question.rightText && !this.state.isQuestionExpanding &&
                                        <div
                                            className="button"
                                            onClick={() => this.answerQuestion("right")}
                                            style={{...styles.answer}}>{"▴ " + question.rightText.toLowerCase()}{!question.right && "(missing)"}</div>}
          </span>
                                </div>}                        </React.Fragment> :
                        <React.Fragment>
                            <img
                                src={startScreenImage}
                                alt="TAUSTA" className="background-image"/>
                            <div className="app-content">
                                {!this.state.isShowingBackgroundOnly && <h3 className="blinking-start-text">PRESS ANY BUTTON TO START GAME...</h3>}
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
