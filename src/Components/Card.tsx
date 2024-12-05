import React, { useState } from "react"
import './Card.css';

type CardProps = {
  arrowToHome: boolean
}

const Card: React.FC<CardProps> = ({ arrowToHome }) => {
  const [longUrl, SetLongUrl] = useState('');
  const [isLoading, SetIsLoading] = useState(false);
  function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(longUrl)
  }

  if (arrowToHome) {
    return (
      <>
        <div className="card-container">
          <div className="card-arrow-home"></div>

          <form onSubmit={handlerSubmit} className="card-div-container">
            <input
              className="input-text"
              type="text"
              placeholder="your long url here"
              value={longUrl}
              onChange={(e) => { SetLongUrl(e.target.value) }}
            />

            <button type="submit" className="button"> GENERATE</button>
          </form>

        </div>
      </>)
  }
  return (
    <>
      <div className="card-div-container">
        <form>

        </form>
        <div className="card-input">
        </div>
        <div className="card-button"></div>
      </div>
    </>
  )
}

export default Card;
