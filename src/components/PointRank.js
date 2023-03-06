import React, {useEffect} from 'react'
import { useMutation } from 'react-query';
import { getMemberPointRank } from '../api';
import '../css/PointRank.css'

function PointRank() {

  const {isLoading, isError, isSuccess , data , mutate } = useMutation(
    getMemberPointRank
  );

  //call mutate to fetch the recent board list data
  useEffect(() =>{
    mutate()
  }, [mutate])


  return (
    <div id="point_rank">
        <h4>포인트 랭킹(15장)</h4>
          {isLoading && <div>Loading...</div>}
          {isSuccess && (
            <ul>
              {data.map((member,index) => (
                <li  key={index}>
                    <span>{member.name}</span>
                    <span>{member.id}</span>
                    <span>{member.point}</span>
                </li>
              ))}
            </ul>
          )}
    </div>
  );
}

export default PointRank;




