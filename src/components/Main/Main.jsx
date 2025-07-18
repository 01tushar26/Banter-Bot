import './Main.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import { useContext } from 'react'

const Main = () => {

const {onSent,recentPrompt,showResult,loading,resultData, setInput,input}= useContext(Context);

  return (
   <div className="main">
    <div className="nav">
        <img src="generated-image.png" alt="" />
      <Link to="/login" > <img src="generated-image.png" alt="" /> </Link>
    </div>
    <div className="main-container">
        {!showResult
        ?<>
        <div className="greet">
            <p><span>Hello! Dev</span></p>
            <p>How can i help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Suggest beautifull places to see on an upcoming trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautifull places to see on an upcoming trip</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautifull places to see on an upcoming trip</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Suggest beautifull places to see on an upcoming trip</p>
                <img src={assets.code_icon} alt="" />
            </div>
           </div> 
        </> 
        :<div className='result'>
          <div className="result-title">
            <img src="hwll.jpg" alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src="generated-image.png" alt="" />
            {loading
            ?<div className='loader'>
               <hr />
               <hr />
               <hr />
            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}
          </div>
        </div>
        }
       
        <div className="main-bottom">
          <div className="search-box">
           <input onChange={(e)=>setInput(e.target.value)} value={input}type="text" placeholder='Enter a prompt here' />
           <div>
            <img src={assets.gallery_icon} alt="" />
            <img src={assets.mic_icon} alt="" />
            {input?<img onClick={()=>onSent()}     src={assets.send_icon} alt="" />:null}
            
           </div>
          </div>
          <p className="bottom-info">
            Banter-Bot can make mistake.Check important info.
          </p>
        </div>
    </div>
   </div>
  )
}

export default Main