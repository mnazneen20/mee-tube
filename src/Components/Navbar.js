import React from 'react'
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const navigate = useNavigate(); 
  const [searchterm, setsearchterm] = React.useState('')

  function handlesearch(e) {
    e.preventDefault();

    navigate(`/searchresults/${searchterm}`);

    setsearchterm('');
  }

  return (
    <nav>
        <Link to={`/`} className={"logo"} >meeTube</Link>
        <form className="searchbox" id='formelement'>
            <input placeholder="Search videos.." type="text" name="searchterm" id="searchterm" value={searchterm} onChange={(e) => setsearchterm(e.target.value)} />
            <button onClick={(e) => handlesearch(e)}><SearchIcon /></button>
        </form>
    </nav>
  )
}
