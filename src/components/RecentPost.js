import React ,{ useEffect } from 'react';
import { useMutation } from 'react-query';
import { getRecentBoardList } from '../api';
import '../css/RecentPost.css'


function RecentPost() {

  const {isLoading, isError, isSuccess , data , mutate } = useMutation(
      getRecentBoardList
    );

  //call mutate to fetch the recent board list data
  useEffect(() =>{
    mutate()
  }, [mutate])

  return (
    <div id="latest">
        <h4>최근 게시글</h4>
        {isLoading && <div>Loading...</div>}
        {isSuccess && (
          <ul>
            {data.map((board,index) => (
              <li key={index}>
              <span>{board.subject}</span>
              <span>{board.name}</span>
              <span>{board.regist_day}</span>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

export default RecentPost;





