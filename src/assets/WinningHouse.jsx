import { useContext, useState } from "react"
import { WinningHouseContext } from "../App"

const winningHouseObject = [
  {
    house: "Gryffindor",
    image: "./Gryffindor.jpg",
    backgroundColour: "#740001",
    fontColour: "#d3a625",
    famousMembers: ["Albus Dumbledore", "Harry Potter", "Ronald Weasly", "Hermione Granger"],
    ghost: "Nearly-Headless Nick",
    flavourText: "Gryffindor was founded by Godric Gryffindor and favours students who possess characteristics such as courage, bravery and determination. The house colours are scarlet and gold, and the emblematic animal is a lion, which decorates the walls of the Gryffindor common room." 
  }, {
    house: "Hufflepuff",
    image: "./Hufflepuff.jpg",
    backgroundColour: "#372e29",
    fontColour: "#ecb939",
    famousMembers: ["Nymphadora Tonks", "Pomona Sprout", "Newton Scamander ", "Cedric Diggory"],
    ghost: "Fat Frier",
    flavourText: "Hufflepuff's founder was the medieval witch Helga Hufflepuff. Hufflepuff was the most inclusive among the four houses, valuing hard work, dedication, patience, loyalty, and fair play rather than a particular aptitude in its members"
  }, {
    house: "Ravenclaw",
    image: "./Ravenclaw.jpg",
    backgroundColour: "#222f5b",
    fontColour: "#bebebe",
    famousMembers: ["Gilderoy Lockhart", "Filius Flitwick", "Luna Lovegood", "Cho Chang"],
    ghost: "Grey Lady",
    flavourText: "Ravenclaw's founder was the medieval witch Rowena Ravenclaw.Members of this house were characterised by their wit, learning, and wisdom. The emblematic animal symbol was an eagle, and blue and bronze were its colours."
  }, {
    house: "Slytherin",
    image: "./Slytherin.jpg",
    backgroundColour: "#2a623d",
    fontColour: "#aaaaaa",
    famousMembers: ["Tom Riddle", "Severus Snape", "Dolores Umbridge", "Draco Malfoy"],
    ghost: "Bloody Baron",
    flavourText: "Slytherin was founded by Salazar Slytherin and favours students who possess characteristics such as cunning, resourcefulness, leadership, and ambition. The founder highly valued and favoured pure-blood students and the Sorting Hat admitted that it could be a factor when being sorted. Students of any blood status could be placed in the house. However, a Muggle-born student from that house was considered to be quite rare."
  }
];

  function FlavourText({flavourText, setFlavourText, winningHouse}) {  

    if(
      winningHouse === winningHouseObject[0].house
      ) {
      setFlavourText(winningHouseObject[0].flavourText)
      console.log(`from flavour text flav text is ${flavourText}`)
    } else if (
      winningHouse === winningHouseObject[1].house
    ) {
      setFlavourText(winningHouseObject[1].flavourText)
    } else if (
      winningHouse === winningHouseObject[2].house
    ) {
      setFlavourText(winningHouseObject[2].flavourText)
    } else if (
      winningHouse === winningHouseObject[3].house
    ) {
      setFlavourText(winningHouseObject[3].flavourText)
    } else {
      setFlavourText("Something went wrong")
    }

    return (
      <>
        <h3>Description of {winningHouse} House</h3>
        <p>{flavourText}</p>
      </>
    )
  }

  function Image ({image, setImage, winningHouse}) {
    if(
      winningHouse === winningHouseObject[0].house
      ) {
      setImage(winningHouseObject[0].image)
    } else if (
      winningHouse === winningHouseObject[1].house
    ) {
      setImage(winningHouseObject[1].image)
    } else if (
      winningHouse === winningHouseObject[2].house
    ) {
      setImage(winningHouseObject[2].image)
    } else if (
      winningHouse === winningHouseObject[3].house
    ) {
      setImage(winningHouseObject[3].image)
    } else {
      console.log('Something went wrong with the image');
    }
   
    return (
      <img src={image} alt="Winning House Logo"className="winning-house-logo" />
    )
  }

function Theme({winningHouse, setBackgroundColour, setFontColour}) {
  if(
    winningHouse === winningHouseObject[0].house
    ) {
      setBackgroundColour(winningHouseObject[0].backgroundColour)
      setFontColour(winningHouseObject[0].fontColour)
    } else if (
      winningHouse === winningHouseObject[1].house
    ) {
      setBackgroundColour(winningHouseObject[1].backgroundColour)
      setFontColour(winningHouseObject[1].fontColour)
    } else if (
      winningHouse === winningHouseObject[2].house
    ) {
      setBackgroundColour(winningHouseObject[2].backgroundColour)
      setFontColour(winningHouseObject[2].fontColour)
    } else if (
      winningHouse === winningHouseObject[3].house
    ) {
      setBackgroundColour(winningHouseObject[3].backgroundColour)
      setFontColour(winningHouseObject[3].fontColour)
    } else {
      setBackgroundColour('black');
      setFontColour('white');
    }
}

 function FamousMembers({winningHouse, setFamousMembers, famousMembers}) {

  if(
    winningHouse === winningHouseObject[0].house
    ) {
    setFamousMembers(winningHouseObject[0].famousMembers)
  } else if (
    winningHouse === winningHouseObject[1].house
  ) {
    setFamousMembers(winningHouseObject[1].famousMembers)
  } else if (
    winningHouse === winningHouseObject[2].house
  ) {
    setFamousMembers(winningHouseObject[2].famousMembers)
  } else {
    setFamousMembers(winningHouseObject[3].famousMembers)
  }

  return (
    <>
      <h3>Famous Past Members of {winningHouse}</h3>
      {famousMembers.map(member => {
        const famousList = <li key={member}>{member}</li> 
        return <ul key={member}>{famousList}</ul>
      })}
    </> 
  ) 

}
  
function WinningHouse( {handleReset, secondPlaceHouse, setWinningHouse, setSecondPlaceHouse} ) {

  const winningHouse = useContext(WinningHouseContext);

  const [image, setImage] = useState("");
  const [backgroundColour, setBackgroundColour] = useState("black");
  const [fontColour, setFontColour] = useState("white");
  const [flavourText, setFlavourText] = useState("");
  const [famousMembers, setFamousMembers] = useState([]);

  return (
    <>
      <Theme winningHouse={winningHouse} setBackgroundColour={setBackgroundColour} setFontColour={setFontColour}/>  
        <div style={{backgroundColor: backgroundColour, color: fontColour}} className="winning-house-container">
          <div className="winning-house-column-1">
            <h2>Congratulations! You have been sorted to....{winningHouse}!</h2>
            <Image winningHouse={winningHouse} image={image} setImage={setImage}/>
            <FamousMembers className="winning-house-famous-members" winningHouse={winningHouse} famousMembers={famousMembers} setFamousMembers={setFamousMembers}/>   
          </div>
          <div className="winning-house-column-2">
          <FlavourText className="winning-house-flavour-text" winningHouse={winningHouse} flavourText={flavourText}setFlavourText={setFlavourText}/>
          <div>
            If not for {winningHouse} you would have been sorted to 
            <button className="winning-house-restart-btn" style={{backgroundColor: "#726255"}} 
              onClick={() => {
              setWinningHouse(secondPlaceHouse)
              setSecondPlaceHouse(winningHouse)
            }}>
              {secondPlaceHouse}
            </button>
          </div>
          <button className="winning-house-restart-btn" onClick={handleReset}>Restart Sorting</button>
          </div>   
        </div>
        
    </>        
  )
      }
export default WinningHouse
