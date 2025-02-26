import React, { useState } from "react"
import './Card.css';

import ArrowBack from "@mui/icons-material/ArrowBack";
import { CircularProgress, } from "@mui/material";
import { useNavigate, useLocation, Link } from "react-router";

type CardProps = {
  arrowToHome: boolean
}

const Card: React.FC<CardProps> = ({ arrowToHome }) => {
  const navigation = useNavigate();
  const location = useLocation();
  const [longUrl, SetLongUrl] = useState('');
  const [isLoading, SetIsLoading] = useState(false);
  const [isCopied, SetIsCopied] = useState(false);

  const urlRegex = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z0-9]{2,}(\/[^\s]*)?$/i;

  async function fetchData(url: string) {
    SetIsLoading(true)

    //TODO: add env variable 
    const response = await fetch("http://localhost:8080/create", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ longUrl: url })
    })
    const data = await response.json();
    SetIsLoading(false)
    navigation('/share', { state: { shortUrl: data.URI } })
  }
  function handlerSubmit(event: React.FormEvent<HTMLFormElement>) {

    event.preventDefault();
    // Prevent wrong formats of URI before request 
    if (!urlRegex.test(longUrl)) {
      console.error("URL wrong format")
      return
    }
    // hook to request the shorten url and redirect user to /share

    fetchData(longUrl)
  }

  async function handlerCopy() {

    navigator.clipboard.writeText(location.state?.shortUrl)
    SetIsCopied(true)
  }
  function handlerArrow() {
    navigation('/')
  }
  if (!arrowToHome) {
    return (
      <>
        <div className="card-container">
          <div className="card-arrow-home" onClick={handlerArrow}>
            <ArrowBack className="arrow-left" />
          </div>

          <div className="card-div-container-result" onClick={handlerCopy}>
            {isCopied ? (
              <span className="result-text" > COPIED!</span>
            ) : location.state?.shortUrl ? (
              <span className="result-text">{location.state?.shortUrl}</span>
            ) :
              (
                <span className="result-text">First, give us a long Url. </span>
              )}
          </div>
        </div >
        <div className="div-description">
          <span className="span">Track your new shorten Url
            <Link to={'/track'} className="span-link"/>
          </span>
        </div>
      </>)
  }
  return (


    <>
      <div className="card-container">
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
      <div className="div-description">
        <span className="span">You already created?
          <Link to={'/track'} className="span-link"> track</Link> your shorten URL.</span>
      </div>
    </>)
}

export default Card;
