import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';

export const Home = () => {

  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();

  const acitveStatus = searchParam.get("filter") === "active";
  return (
    <>
      <h3>Home Page</h3>
      <button onClick={() => setSearchParam({"filter" : "active"})}>Favourite products</button>
      <button onClick={() => setSearchParam({})}>Reset filter</button>

      {
        acitveStatus?<h3>here are your faviorite products</h3>: <h3>here are all products</h3>
      }
    </>
  )
}
