import React, { Component } from 'react';
import logo from './logo.svg';
import tausta from "./tausta.png"

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentQuestionId: 1,
      questions: [
          {
              id: 1,
              question: "Haluatko lukea kirjaa?",
              yes: 2,
              no: 3
          },
          {
              id:2,
              question: "Kun olet lukenut kirjan, juoksetko?",
              yes: 4,
              no: 5
          },
          {
              id:3,
              question: "Etkö osaa lukea?",
              yes: 6,
              no: 7
          },
          {
              id:4,
              question: "Juoksetko kauas?",
              yes: 8,
              no: 1
          },
          {
              id:5,
              question: "Miksi et juokse",
              yes: 1,
              no: 1
          },
          {
              id:6,
              question: "opetatko minutkin sitten lukemaan?",
              yes: 1,
              no: 1
          },
          {
              id:7,
              question: "Haluatko opetella lukemaan?",
              yes: 1,
              no: 1
          },
          {
              id:8,
              question: "En usko",
              yes: 1,
              no: 1
          },
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
        switch (e.keyCode) {
            case 65:
                console.log("yes")
                this.yes()
                break
            case 76:
              this.no()
                console.log("no");
                break;
            
                
        }
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
            <img src={tausta} alt="TAUSTA" className="background-image"/>
            <div className="app-content">
                <h1 className="title">{this.state.currentQuestionId === 1 ? "GORS" : "????"}</h1>
                <span style={{flexDirection: "row", marginBottom: 20}}>
                    <h3 className="question">{question.question}</h3>
                </span>
                <span>
            <span
                onClick={this.yes}
                style={{...styles.answer, color: "lightgreen", zIndex: 5}}>KYLLÄ</span>
            <span
                onClick={this.no}
                style={{...styles.answer, color: "red"}}>EI</span>
          </span>
            </div>
        </header>
      </div>
    );
  }
}

const styles = {
  answer: {
      margin: 25,
      fontWeight: "bold",
  }
}

export default App;
