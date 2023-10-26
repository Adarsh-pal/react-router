import React from 'react'
import { useNavigate} from 'react-router-dom'
export const Contact = () => {

  const navigate = useNavigate();
  console.log(window.history)
  return (
    <>
      <h3>Contact Page</h3>
      <button onClick={() =>{
          const newWin = window.open('/contact', "_blank");
          newWin.focus();
      }}>open this page in new tab</button>
      {/* <button onClick={() => navigate(-1)}>go to Home</button> */}
    </>
    
  )
}
