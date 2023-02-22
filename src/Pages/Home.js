import React from 'react'
import VideoCard from '../Components/VideoCard'
import './home.css'
import { options, baseurl } from '../Requests'

const Home = () => {

  const [homedata, sethomedata] = React.useState([])

  React.useEffect(()=>{
    fetch(`${baseurl}trending`, options)
      .then(response => response.json())
      .then(response => {
        sethomedata(response.data)
        console.log(response.data)
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <>
      <h2 className="trending">Trending...</h2>
      <div className='homebody'>
        {
          homedata.length === 0 ?
          <p className="loading">Data Loading...</p>
            :
          homedata.map(m => <VideoCard key={m.videoId} relatedData={m} />)
        }
      </div>
    </>
  )
}

export default Home