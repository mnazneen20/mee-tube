import React from 'react'
import { Link } from 'react-router-dom'
import './videocard.css'
import { useContext } from 'react'
import { GeneralContext } from '../Context/Contextprovider'

export default function VideoCard(props) {

    // importing from context provider 
    const { likecounts } = useContext(GeneralContext);

  return (
    <Link to={`/videos/${props.relatedData.videoId}`}>
        <div className='videoCard'>
            <img src={props.relatedData.thumbnail[0]?.url} alt={`thumbnail for ${props.relatedData.title}`} className="thumbnail" />
            <section className="vidDetails">
                <h4 className="title giveMeEllipsis">{props.relatedData.title}</h4>
                <br />
                <p className="channel">
                    {props.relatedData.channelTitle}
                </p>
                <p className="detailinfo">
                    {likecounts(props.relatedData.viewCount)} views <b>·</b> {props.relatedData.publishedText}
                </p>
            </section>
        </div>
    </Link>
  )
}
