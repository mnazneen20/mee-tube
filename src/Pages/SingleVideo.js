import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player';
import { options, baseurl } from '../Requests'
import './singlevideo.css'
import Videobox from '../Components/Videobox';
import { useContext } from 'react'
import { GeneralContext } from '../Context/Contextprovider'

export default function SingleVideo() {
    const { videoId } = useParams();
    const [videodetail, setvideodetail] = React.useState(null)
    const [related, setrelated] = React.useState([])

     // importing from context provider 
    const { likecounts } = useContext(GeneralContext);

    React.useEffect(()=>{
        // fetching the video data *****************
        fetch(`${baseurl}video?id=${videoId}`, options)
            .then(response => response.json())
            .then(response => {
                setvideodetail(response)
                console.log(response)
            })
            .catch(err => console.error(err));
    }, [videoId])

    React.useEffect(() => {
        // fetching related videos **********************
        fetch(`${baseurl}related?id=${videoId}`, options)
            .then(response => response.json())
            .then(response => {
                setrelated(response.data)
                // console.log(response.data)
            })
            .catch(err => console.error(err));
    }, [videoId])

  return (
    <div className='videopage'>
        <div className="videoplayer">
            {videodetail && <ReactPlayer width="100%" height="80%" url={`https://www.youtube.com/watch?v=${videodetail.id}`} controls={true} />}
            {videodetail && 
            <div className="vidDets">
                <h1 className="titlename giveMeEllipsis">
                    {videodetail.title}
                </h1>
                <p className="deets">
                    {videodetail.channelTitle}  <b>·</b> {likecounts(videodetail.viewCount)} views
                </p>
            </div>}
        </div>
        
        <div className="relatedvideosection">
            {related.length > 0 && related.map(m => <Videobox key={m.videoId} dets={m} />)}
        </div>
    </div>
  )
}
