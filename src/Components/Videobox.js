import React from 'react'
import './videobox.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GeneralContext } from '../Context/Contextprovider'

export default function Videobox(props) {

     // importing from context provider 
    const { likecounts } = useContext(GeneralContext);

  return (
    <Link to={`/videos/${props.dets.videoId}`}>
        <div className='videobox'>
            <img src={props.dets.thumbnail[0].url} alt={`thumbnail for ${props.dets.title}`} className="boximg" />
            <div className="relatedDetails">
                <div className="title giveMeEllipsis">
                    <b>{props.dets.title}</b>
                </div>
                <div className="channel">
                    {props.dets.channelTitle}
                </div>
                <div className="miscellinious">
                    {likecounts(props.dets.viewCount)} views <b>·</b> {props.dets.publishedTimeText}
                </div>
            </div>
        </div>
    </Link>
  )
}
