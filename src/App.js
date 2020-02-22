import React, {Component} from 'react';
import logo from './logo.svg';
import saltSackImage from "./gors_salt_sack.JPG"
import backgroundImage from "./gors_bg.jpeg"

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            startScreenIndex: 1,
            gameStarted: true,
            currentQuestionId: 1,
            questions: [
                {
                    id: 1,
                    question: "ENTER THE WORLD",
                    yes: 2,
                    no: 2,
                    yesText: "YES",
                    noText: "WOHOO"
                },
                {
                    id: 2,
                    question: "Go look for answers",
                    yes: 3,
                    no: null,
                    yesText: "LEFT",
                    noText: "RIGHT"
                },
                {
                    id: 3,
                    yes: 4,
                    no: 8,
                    yesText: "Check the forest",
                    noText: "Look into the fountain"
                },
                {
                    id: 4,
                    question: "THUNDER STRIKES",
                    yes: 5,
                    no: 5,
                    yesText: "Run to safety",
                    noText: "Embrace the thunder"
                },
                {
                    id: 5,
                    question: "HUNGER STRIKES",
                    yes: 6,
                    no: null,
                    yesText: "Eat the frog",
                    noText: "Keep on looking"
                },
                {
                    id: 6,
                    yes: 7,
                    no: null,
                    yesText: "Help Thalamis",
                    noText: "Search the saltbag from iglu"
                },
                {
                    id: 7,
                    question: "YOU FOUND AN ENDING\n" +
                    "White blids: x,\n" +
                    "lost and found: route, frogfriend, empowerement, poison, kombo = gloves + fungi",
                    yes: 1,
                    no: 1,
                    yesText: "OK"
                },
                
                {
                    id: 8,
                    question: "You found an ancient terasure but you need a key to open it",
                    yes: 9
                },
                {
                    id: 9,
                    yes: 10,
                    no: null,
                    yesText: "JUMPS AND TURNS",
                    noText: "SWING AND FLY"
                },
                {
                    id: 10,
                    yes: 11,
                    no: null,
                    yesText: "VENTURE THE ENDLESS DESERT",
                    noText: "STICK TOGETHER"
                },
                {
                    id: 11,
                    question: "YOU FOUND AN ENDING\n" +
                    "White blids: x,\n" +
                    "lost and found: route, hyper vision, rolling spin, body care, separation",
                    yes: 1,
                    no: 1,
                    yesText: "OK"
                }
            ]
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
                    this.no()
                    console.log("no");
                    break;
                case 82:
                    this.setState({gameStarted: false, currentQuestionId: 1})
                    console.log("restart");
                    break;
                case 89:
                    console.log("yes")
                    this.yes()
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
    
    yes = () => {
        const question = this.state.questions.filter(q => q.id === this.state.currentQuestionId)[0]
        if(question.yes){
            this.setState({currentQuestionId: this.state.questions.map(q => q.id).filter(id => id === question.yes)[0]})
        }
    }
    no = () => {
        const question = this.state.questions.filter(q => q.id === this.state.currentQuestionId)[0]
        if(question.no){
            this.setState({currentQuestionId: this.state.questions.map(q => q.id).filter(id => id === question.no)[0]})
        }
    }
    
    
    render() {
        const question = this.state.questions.filter(q => q.id === this.state.currentQuestionId)[0]
        if(question && !question.yesText) {
            setTimeout(() => this.yes(), 5000);
        }
        
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
                                    {question.yesText &&
                                    <span
                                        className="button"
                                        onClick={this.yes}
                                        style={{...styles.answer, color: "#00de3b"}}>{question.yesText}</span>}
                                    {question.noText &&
                                    <span
                                        className="button"
                                        onClick={this.no}
                                        style={{...styles.answer, color: "#ff1414"}}>{question.noText}</span>}
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
