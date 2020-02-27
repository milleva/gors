import React, {Component} from 'react';
import saltSackImage from "./images/gors_salt_sack.JPG"
import backgroundImage from "./images/gors_bg.jpeg"
import questions from "./questions"

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            startScreenIndex: 1,
            gameStarted: false,
            currentQuestionId: 1,
            isAutoLeftTimerRunning: false,
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
            this.expandQuestion(questions[0])
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
            }, 5000);
        }
        this.setState({currentQuestionCharacterIndex: 1})
        if(question && question.question) this.expandQuestion(question)
    }
    
    expandQuestion = (question) => {
        this.setState({currentQuestionCharacterIndex: this.state.currentQuestionCharacterIndex+1})
        if(this.state.currentQuestionCharacterIndex < question.question.length){
            setTimeout(() => this.expandQuestion(question), 35)
        }
    }
    
    answerQuestion = (leftRight) => {
        const question = questions.find(q => q.id === this.state.currentQuestionId)
        this.setState({isDisplayingReply: true, latestReply: question[`${leftRight}Text`]})
        setTimeout(() => {
            this.nextQuestion(leftRight)
            this.setState({isDisplayingReply: false})
        }, 5000)
    }
    
    isGameInputAllowed = () => !this.state.isAutoLeftTimerRunning && !this.state.isDisplayingReply
    
    render() {
        const question = questions.filter(q => q.id === this.state.currentQuestionId)[0]
        
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.gameStarted ?
                        <React.Fragment>
                            <img src={backgroundImage} alt="TAUSTA" className="background-image"/>
                            {this.state.isDisplayingReply ?
                                <h1 className="title">{this.state.latestReply}</h1> :
                                <div className="app-content">
                                    {question.question &&
                                    <h1 className="title">{question.question.substring(0, this.state.currentQuestionCharacterIndex)}</h1>}
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
                                </div>}
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
