function Footer( {handleReset} ) {
  return (
    <div className="footer-container">
        <img
        className="footer-house-pic hufflepuff" 
        src="./Hufflepuff.jpg" 
        alt="Hufflepuff Crest"
        />
        <img
        className="footer-house-pic ravenclaw" 
        src="./Ravenclaw.jpg" 
        alt="Ravenclaw Crest"
        />
        <button
        className="footer-btn" 
        onClick={handleReset}
        >Reset Quiz
        </button>
        <img
        className="footer-house-pic slytherin" 
        src="./Slytherin.jpg" 
        alt="Slytherin Crest"
         />
          <img
        className="footer-house-pic gryffindor" 
        src="./Gryffindor.jpg" 
        alt="Gryffindor Crest"
         />
    </div>
  )
}

export default Footer
