import React, { useState } from "react"
import './Card.css';
import { CircularProgress } from "@mui/material";
import { useNavigate, useLocation } from "react-router";

type CardProps = {
  arrowToHome: boolean
}

const Card: React.FC<CardProps> = ({ arrowToHome }) => {
  const navigation = useNavigate();
  const location = useLocation();
  const [longUrl, SetLongUrl] = useState('');
  const [error, SetError] = useState('');
  const [isLoading, SetIsLoading] = useState(false);
  const [shortenUrl, SetShortenUrl] = useState('');


  async function fetchData(url: string) {
    SetIsLoading(true)
    SetError('');

    const response = await fetch("http://localhost:8080/create", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ longUrl: url })
    })
    const data = await response.json();
    SetShortenUrl(data.URI)
    SetIsLoading(false)
    navigation('/share', { state: { shortUrl: data.URI } })
  }
  function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();
    // hook to request the shorten url and redirect user to /share
    fetchData(longUrl)
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
            {isLoading ? (
              <CircularProgress />
            ) : (
              <button type="submit" className="button"> GENERATE</button>
            )}
          </form>

        </div>
      </>)
  }
  return (
    <>
      <div className="card-container">
        <div className="card-div-container">
          <span className="input-text">{location.state?.shortUrl}</span>
        </div>

      </div >
    </>
  )
}

export default Card;
