import React from 'react'
import { Link, useParams } from 'react-router-dom'

function BoardListContent(props) {

  const { page } = useParams();


  return (
    <li>
        <span className="col1">{props.num}</span>
        <span className="col2">
          <Link to={`/boardlist/${page}/${props.actual_num}`}>
           {props.subject}
          </Link></span>
        <span className="col3">{props.name}</span>
        <span className="col4">{props.file_name}</span>
        <span className="col5">{props.regist_day}</span>
        <span className="col6">{props.hit}</span>   
    </li>
  )
}
 
export default BoardListContent