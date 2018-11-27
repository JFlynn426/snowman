import React, { Component } from 'react'
import step0 from './snowman/step_0.png'
import step1 from './snowman/step_1.png'
import step2 from './snowman/step_2.png'
import step3 from './snowman/step_3.png'
import step4 from './snowman/step_4.png'
import step5 from './snowman/step_5.png'
import step6 from './snowman/step_6.png'
import step7 from './snowman/step_7.png'
import './App.css'
import Letter from './Letter'
import word from './wordlist.json'

class App extends Component {
  constructor(props) {
    super(props)
    let randomIndex = Math.floor(Math.random() * 1024)
    this.snowmen = [step0, step1, step2, step3, step4, step5, step6, step7]
    this.state = {
      word: word[randomIndex],
      revealedLetters: ['_', '_', '_', '_', '_', '_', '_'],
      pickableLetters: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ],
      backgroundImage: step0
    }
  }
  snowman = () => {
    let snowmanState = this.state.revealedLetters.filter(
      letter => letter !== '_'
    ).length
    return this.snowmen[snowmanState]
  }
  pickALetter = letter => {
    for (let index = 0; index < 7; index++) {
      if (this.state.word.split('')[index] === letter) {
        this.state.revealedLetters.splice(index, 1, letter)
      }
    }
    let remainingPickableLetters = this.state.pickableLetters

    remainingPickableLetters.splice(
      this.state.pickableLetters.indexOf(letter),
      1
    )

    this.setState({
      pickableLetters: remainingPickableLetters
    })
  }
  render() {
    return (
      <div className="App">
        <img src={this.snowman()} className="snowman" alt="step" />
        <ul className="word">
          {this.state.revealedLetters.map(wordLetter => (
            <li>{wordLetter}</li>
          ))}
        </ul>
        <ul className="letters">
          {this.state.pickableLetters.map(pickableLetter => (
            <Letter
              key={pickableLetter}
              pickALetter={this.pickALetter}
              value={pickableLetter}
            />
          ))}
        </ul>
        <h2>Pick a letter to build the Snowman!</h2>
      </div>
    )
  }
}

export default App
