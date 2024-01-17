import { useState } from "react";
import React from "react";
import "./App.css";
import WinningHouse from "./assets/WinningHouse";
import Footer from "./assets/Footer";

export const WinningHouseContext = React.createContext();

function App() {
  const [points, setPoints] = useState({
    gryffindorPoints: 0,
    ravenclawPoints: 0,
    hufflepuffPoints: 0,
    slytherinPoints: 0,
  });

  const [questionIndex, setQuestionIndex] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);
  const [winningHouse, setWinningHouse] = useState("");
  const [secondPlaceHouse, setSecondPlaceHouse] = useState("");
  const [tie, setTie] = useState(false);
  const [sorted, setSorted] = useState(false);
  const [showWinningHouse, setShowWinningHouse] = useState(false);

  //Functions to add points to houses in state object
  const gryfFive = () =>
    setPoints({
      ...points,
      gryffindorPoints: points.gryffindorPoints + 5,
    });

  const slythFive = () =>
    setPoints({
      ...points,
      slytherinPoints: points.slytherinPoints + 5,
    });

  const huffFive = () =>
    setPoints({
      ...points,
      hufflepuffPoints: points.hufflepuffPoints + 5,
    });

  const ravenFive = () =>
    setPoints({
      ...points,
      ravenclawPoints: points.ravenclawPoints + 5,
    });

  const noPoints = () =>
    setPoints({
      ...points,
    });

  //Question List
  const questions = [
    {
      id: 0,
      text: "Which element do you prefer?",
      options: [
        { answer: "Fire", points: gryfFive },
        { answer: "Air", points: ravenFive },
        { answer: "Earth", points: huffFive },
        { answer: "Water", points: slythFive },
      ],
    },
    {
      id: 1,
      text: "Which is your least favourite house?",
      options: [
        { answer: "Gryfindor", points: slythFive },
        { answer: "Ravenclaw", points: huffFive },
        { answer: "Hufflepuff", points: ravenFive },
        { answer: "Slytherin", points: gryfFive },
        {answer: "Not sure", points: noPoints}
      ],
    },
    {
      id: 2,
      text: "How brave would you describe yourself out of 5?",
      options: [
        { answer: 1, points: slythFive },
        { answer: 2, points: noPoints },
        { answer: 3, points: noPoints },
        { answer: 4, points: gryfFive },
        { answer: 5, points: gryfFive },
      ],
    },
    {
      id: 3,
      text: "Which subject would you enjoy the most?",
      options: [
        { answer: "Potions", points: slythFive },
        { answer: "Defence Against the Dark Arts", points: gryfFive },
        { answer: "Charms", points: ravenFive },
        { answer: "Herbology and Animal Studies", points: huffFive },
      ],
    },
    {
      id: 4,
      text: "Which animal appeals most to you?",
      options: [
        { answer: "Eagle", points: ravenFive },
        { answer: "Lion", points: gryfFive },
        { answer: "Badger", points: huffFive },
        { answer: "Snake", points: slythFive },
      ],
    },
    {
      id: 5,
      text: "How much do you value loyalty and patience?",
      options: [
        {answer: "A lot!", points: huffFive },
        {answer: "Somewhat", points: noPoints},
        {answer: "Not much...", points: slythFive},
      ],
    },
    {
      id: 6,
      text: "Which of the following colour combinations is best?",
      options: [
        {answer: "black/yellow", points: huffFive },
        {answer: "green/silver", points: slythFive },
        {answer: "blue/bronze", points:ravenFive },
        {answer: "scarlet/gold", points: gryfFive },
      ],
    },
    {
      id: 7,
      text: "Voldemort did nothing wrong",
      options: [
        {answer: "Agreed!", points: slythFive },
        {answer: "I'm sorry, what?!", points: gryfFive, huffFive, ravenFive },
      ],
    },
    {
      id: 8,
      text: "Which of the following is the most important",
      options : [
        {answer: "Intelligence", points: ravenFive},
        {answer: "Courage", points: gryfFive },
        {answer: "Ambition", points: slythFive},
        {answer: "Kindness", points: huffFive }
      ]
    }
  ];

  const handleClick = (points) => {
    points();
    if (questionIndex === questions.length - 1) {
      setEndQuiz(true);
    }
    const nextQuestion = questionIndex + 1;
    setQuestionIndex(nextQuestion);
  };

  const handleSort = () => {
    setSorted(true);
    const pointsArray = [
      [points.gryffindorPoints, "Gryffindor"],
      [points.hufflepuffPoints, "Hufflepuff"],
      [points.ravenclawPoints, "Ravenclaw"],
      [points.slytherinPoints, "Slytherin"],
    ];

    const sortedPointsArray = pointsArray.sort(function (a, b) {
      return b[0] - a[0];
    });

    setWinningHouse(sortedPointsArray[0][1]);
    setSecondPlaceHouse(sortedPointsArray[1][1]);

    if (sortedPointsArray[0][0] === sortedPointsArray[1][0]) {
      setTie(true);
    } else {
      setTie(false);
    }
  };

  const handleReset = () => {
    setEndQuiz(false);
    setQuestionIndex(0);
    setPoints({
      gryffindorPoints: 0,
      slytherinPoints: 0,
      hufflepuffPoints: 0,
      ravenclawPoints: 0,
    });
    setWinningHouse("");
    setSecondPlaceHouse("");
    setSorted(false);
    setTie(false);
  };

  const handleWinningHouse = () => {
    return setShowWinningHouse(true);
  };

  return (
    <>
      <WinningHouseContext.Provider value={winningHouse}>
        {
          endQuiz === false ? (
          <>
            <div className="question__wrapper">
              <h1 className="question__heading">{`Question: ${questionIndex + 1}`}</h1>
              <p className="question__text">{questions[questionIndex].text}</p>
              {questions[questionIndex].options.map((x,index) => {
                return <button
                className="question__answer-button"
                onClick={() => handleClick(x.points)} key={index}>
                  {x.answer}
                </button>
              })}
            </div>
            <Footer handleReset={handleReset}/>
          </>
          ) : (
            <div className="sorting-hat-page-container">
              <p>You have reached the end of the quiz</p>
              <p>Click below to find out your house</p>
            {sorted === false ? (
                <img src="./SortingHat.jpg" alt="The Sorting Hat" className="sorting-hat"  onClick={() => {
                  setTimeout(handleSort, setShowWinningHouse(true),3000);   
                }}/>
            ) : (
              <></>
            )}
            {winningHouse === "" ? (
              <></>
            ) : tie === true ? (
              <p>
                Interesting...Very Interesting. It seems you would be equally
                great in two houses...Please choose between
                <button
                  onClick={() => {
                    setWinningHouse(winningHouse);
                    handleWinningHouse();
                    setShowWinningHouse(true);
                  }}
                >
                  {winningHouse}
                </button>{" "}
                and{" "}
                <button
                  onClick={() => {
                    setWinningHouse(secondPlaceHouse);
                    handleWinningHouse();
                    setShowWinningHouse(true);
                  }}
                >
                  {secondPlaceHouse}
                </button>
                {showWinningHouse === false ? (
                  <></>
                ) : (
                  <WinningHouse 
                  handleReset={handleReset} 
                  setWinningHouse={setWinningHouse} 
                  secondPlaceHouse={secondPlaceHouse}
                  setSecondPlaceHouse={setSecondPlaceHouse}>    
                  </WinningHouse>
                )}
              </p>
            ) : 
                <WinningHouse 
                handleReset={handleReset} 
                setWinningHouse={setWinningHouse} 
                secondPlaceHouse={secondPlaceHouse}
                setSecondPlaceHouse={setSecondPlaceHouse}/>
              }
          </div>  
          )
        }
      </WinningHouseContext.Provider>
    </>
  );
}

export default App;