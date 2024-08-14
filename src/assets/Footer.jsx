function Footer( {handleReset} ) {
  return (
  <section className="footer-section">
    <button
      className="footer-btn" 
      onClick={handleReset}
    >
      Reset Quiz
    </button>
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
  </section>
  )
}

export default Footer
