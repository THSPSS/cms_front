import React from 'react'
import BoardListContent from './BoardListContent';

function list(props) {

  let result
  if(props.data === "") {
    const a = [...new Array(props.limit)].map((_ , i) => i + 1);
    result = a.map((index) => (
      <li key={index}>
        <span className='loading'>불러오는 중</span>
      </li>
    ))
  }else {

    let new_num;
    
    if(props.data.total[0].total <= props.itemsCountPerPage){
      new_num = props.data.total[0].total
      console.log(new_num)
    } else {
      const pageNextNum = (props.activePage - 1) * props.itemsCountPerPage
      console.log(pageNextNum)
      new_num = props.data.total[0].total - pageNextNum
    }
    result = props.data.rows.map(
      (data,index) => (<BoardListContent 
                  key = {index} 
                  actual_num = {data.num}
                  page = {props.page}
                  num = {new_num-index} 
                  subject = {data.subject}
                  name = {data.name}          
                  file_name = {data.file_name}
                  regist_day = {data.regist_day}
                  hit = {data.hit}
                />)
    )
  }

  return (
    <>
        {result}
    </>
  );
}


export default list