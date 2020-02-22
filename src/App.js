import React, {Component} from 'react';
import logo from './logo.svg';
import saltSackImage from "./gors_salt_sack.JPG"
import backgroundImage from "./gors_bg.jpeg"
import questions from "./questions"

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            startScreenIndex: 1,
            gameStarted: false,
            currentQuestionId: 1
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
        const question = questions.filter(q => q.id === this.state.currentQuestionId)[0]
        if(question.yes){
            this.setState({currentQuestionId: questions.map(q => q.id).filter(id => id === question.yes)[0]})
        }
    }
    no = () => {
        const question = questions.filter(q => q.id === this.state.currentQuestionId)[0]
        if(question.no){
            this.setState({currentQuestionId: questions.map(q => q.id).filter(id => id === question.no)[0]})
        }
    }
    
    
    render() {
        const question = questions.filter(q => q.id === this.state.currentQuestionId)[0]
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
