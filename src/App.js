import React, {Component} from 'react';
import logo from './logo.svg';
import tausta from "./gors_salt_sack.JPG"
import startScreen1 from "./bg1.JPG"
import startScreen2 from "./bg2.JPG"
import startScreen3 from "./bg3.JPG"
import startScreen4 from "./bg4.JPG"

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            startScreenIndex: 1,
            gameStarted: false,
            currentQuestionId: 1,
            questions: [
                {
                    id: 1,
                    question: "Haluatko lukea kirjaa, joka kertoo jostain, mikä ei kiinnosta sinua yhtään?",
                    yes: 2,
                    no: 3,
                    yesText: "Kyl vitus",
                    noText: "Ei vitus"
                },
                {
                    id: 2,
                    question: "Kun olet lukenut kirjan, juoksetko?",
                    yes: 4,
                    no: 5
                },
                {
                    id: 3,
                    question: "Etkö osaa lukea?",
                    yes: 6,
                    no: 7
                },
                {
                    id: 4,
                    question: "Juoksetko kauas?",
                    yes: 8,
                    no: 1
                },
                {
                    id: 5,
                    question: "Miksi et juokse",
                    yes: 1,
                    no: 1
                },
                {
                    id: 6,
                    question: "opetatko minutkin sitten lukemaan?",
                    yes: 1,
                    no: 1
                },
                {
                    id: 7,
                    question: "Haluatko opetella lukemaan?",
                    yes: 1,
                    no: 1
                },
                {
                    id: 8,
                    question: "En usko",
                    yes: 1,
                    no: 1
                },
            ]
        }
    }
    
    componentWillMount() {
        document.addEventListener("keydown", this.onKeyPressed.bind(this));
        this.rotateScreen()
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
        this.setState({currentQuestionId: this.state.questions.map(q => q.id).filter(id => id === question.yes)[0]})
    }
    no = () => {
        const question = this.state.questions.filter(q => q.id === this.state.currentQuestionId)[0]
        this.setState({currentQuestionId: this.state.questions.map(q => q.id).filter(id => id === question.no)[0]})
    }
    
    
    render() {
        const question = this.state.questions.filter(q => q.id === this.state.currentQuestionId)[0]
        
        return (
            <div className="App">
                <header className="App-header">
                    {this.state.gameStarted ?
                        <React.Fragment>
                            <img src={tausta} alt="TAUSTA" className="background-image"/>
                            <div className="app-content">
                                <h1 className="title">{question.question}</h1>
                                <span>
            <span
                className="button"
                onClick={this.yes}
                style={{...styles.answer, color: "#00de3b"}}>KYLLÄ</span>
            <span
                className="button"
                onClick={this.no}
                style={{...styles.answer, color: "#ff1414"}}>EI</span>
          </span>
                            </div>
                        </React.Fragment> :
                        <React.Fragment>
                            <img
                                src={[startScreen1, startScreen2, startScreen3, startScreen4][this.state.startScreenIndex]}
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
