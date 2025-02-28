import { useEffect, useState } from "react";
import "./Counter.css"
const Counter = () => {
  //TODO: Add local Storage to remember count value
  const [count, SetCount] = useState();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:8080/count", {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        }
      })
      if (response.ok) {
        const data = await response.json();
        SetCount(data);
      }
      console.error("Error")
    }
    fetchData();
  }, [])

  return (
    <>
      <div className="container">

        <span className="span-counter">We currently shorten  {!count ? 0 : count} URL's! </span>
       
      </div>
    </>
  )

}

export default Counter;