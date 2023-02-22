import React from 'react'
import './searchpage.css'
import Videobox from '../Components/Videobox'
import { options, baseurl } from '../Requests'
import { useParams } from 'react-router-dom'

export default function Searchpage() {

    const [resultdata, setresultdata] =React.useState([])

    // getting query term from url     
    const { queryterm } = useParams();


    React.useEffect(() => {
        

    // fetch data of the search query 
    fetch(`${baseurl}search?query=${queryterm}`, options)
      .then(response => response.json())
      .then(response => {
        // setvideodetail(response)
        setresultdata(response.data)
        console.log(response.data)
        
        })
      .catch(err => console.error(err));

    }, [queryterm])
  return (
    <div className="searchpage">
        {resultdata.length === 0 ? 
        <p>Nothing to show</p>
        :
        <div className='serachresults'>
            {resultdata.map(m => {
                if(m.type === 'video'){
                    return <Videobox key={m.videoId} dets={m} />
                }
                return ''
            })}
        </div>}
    </div>
  )
}
