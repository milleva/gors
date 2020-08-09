import React, {Component} from 'react';
import startScreenImage from "./images/bg5.jpeg"
import backgroundImage from "./images/gors_bg.jpeg"
import dangerBubble from "./images/danger_bubble.png"
import questions from "./questions"
import Sound from "react-sound"

import './App.css';

const dev = false

const DEFAULT_PAUSE_MILLISECONDS = 5000
const INITIAL_GAME_START_PREVENTION_DURATION = 10000
const INITIAL_GAME_STARTING_PAUSE_MILLISECONDS = 20000
//20sec (3.8.2020)


const capitalizeFirstLetter = (str) => {
    if (!str || str.length < 2) return str
    return str[0].toUpperCase() + str.substr(1, str.length)
}

const initialAppState = {
    gameStarted: false,
    currentQuestionId: 1,
    isAutoLeftTimerRunning: false,
    isQuestionExpanding: false,
    currentQuestionCharacterIndex: 1,
    isDisplayingReply: false,
    latestReply: "",
    soundFile: "Stonegarden_&_Eternal_hello_LOOP",
    endingEdit: "",
    isShowingBackgroundOnly: true
}

class App extends Component {
    constructor() {
        super();
        this.state = initialAppState
    }
    
    componentWillMount() {
        document.addEventListener("keydown", this.onKeyPressed.bind(this));
        setTimeout(() => this.setState({isShowingBackgroundOnly: false}), dev ? 1 : INITIAL_GAME_START_PREVENTION_DURATION)
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyPressed.bind(this));
    }
    
    onKeyPressed(e) {
        console.log(e.keyCode);
        const isGameInputAllowed = (!this.state.isAutoLeftTimerRunning
            && !this.state.isDisplayingReply
            && !this.state.isQuestionExpanding
            && !this.state.isShowingBackgroundOnly)
        if (e.keyCode === 82) {
            this.setState(initialAppState)
        } else if (!this.state.gameStarted && !this.state.isShowingBackgroundOnly) {
            this.setState({isShowingBackgroundOnly: true})
            this.setSoundFile("Start_the_Game_22s")
            setTimeout(
                () => {
                    if(this.state.isShowingBackgroundOnly) {
                        this.setState({isShowingBackgroundOnly: false, gameStarted: true})
                        this.setSoundFile("silence")
                        this.startExpandingQuestion(questions.find(q => q.id === this.state.currentQuestionId))
                    }
                },
                dev ? 1 : INITIAL_GAME_STARTING_PAUSE_MILLISECONDS)
        } else if (isGameInputAllowed) {
            switch (e.keyCode) {
                case 78://78 = 'n'
                    this.answerQuestion("right")
                    console.log("right");
                    break;
                case 89://89 = 'y'
                    this.answerQuestion("left")
                    console.log("left")
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
        if(question && question.soundFile) this.setSoundFile(question.soundFile)
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
    
    setSoundFile = (fileName) => {
        this.setState({soundFile: fileName + ".wav"})
    }
    
    toggleSoundFile = () => {
        if (this.state.soundFile === 1) this.setState({soundFile: 2})
        else this.setState({soundFile: 1})
    }
    
    answerQuestion = (leftRight) => {
        const question = questions.find(q => q.id === this.state.currentQuestionId)
        this.setSoundFile(question[`${leftRight}SoundFile`])
        this.setState({isDisplayingReply: true, latestReply: question[`${leftRight}Text`]})
        const replyDisplayDuration = question[`${leftRight}Duration`] || DEFAULT_PAUSE_MILLISECONDS
        setTimeout(() => {
            this.nextQuestion(leftRight)
            this.setState({isDisplayingReply: false})
        }, dev ? 50 : replyDisplayDuration)
    }
    
    render() {
        const question = questions.filter(q => q.id === this.state.currentQuestionId)[0]
        const displayedMainText = question.style === "game-over" ? question.question + this.state.endingEdit : question.question
        return (
            <div className="App">
                <header className="App-header">
                    <Sound
                        url={`http://s3.amazonaws.com/gors-songs/${this.state.soundFile}`}
                        playStatus={!dev && Sound.status.PLAYING}
                        loop={true}
                    />
                    {this.state.gameStarted ?
                        <React.Fragment>
                            <img src={backgroundImage} alt="TAUSTA" className="background-image"/>
                            {this.state.isDisplayingReply ?
                                <h1 className="displayedReply">{capitalizeFirstLetter(this.state.latestReply)}</h1> :
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
                                        {question.leftText}{!question.left && "(missing)"}
                                    </div>}
                                        {question.rightText && !this.state.isQuestionExpanding &&
                                        <div
                                            className="button"
                                            onClick={() => this.answerQuestion("right")}
                                            style={{...styles.answer}}>{"▲ " + question.rightText}{!question.right && "(missing)"}</div>}
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
