import '../css/BoardList.css'
import { useState , useEffect , useContext } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import { getBoardLists } from '../api';
import { useQuery } from 'react-query'
import { AuthContext } from '../context/authoContext';
import List from './List';
import Pagination from 'react-js-pagination';


function BoardList() {

    const limit = 5;
    const { page } = useParams();
    const [currentPage, setCurrentPage] = useState(parseInt(page))

    const {currentUser} = useContext(AuthContext)
    let navigate = useNavigate();


    const { data, isLoading, isError } = useQuery(
        ['boardLists', currentPage],
        () => getBoardLists(limit, currentPage),
        {
          keepPreviousData: true,
          staleTime: 0,
          refetchOnWindowFocus: false     //윈도우가 포커스를 가지면 새로고침
        }
      );

    const handlePageChange = (page) => {
        navigate(`/boardlist/${page}`);
        // 지우면 게시판 렌더링에 이상이 있음
        setCurrentPage(parseInt(page));
    }

    const boardList= () => {
        window.location.href='/boardlist/1'
    }

    const board= () => {
        window.location.href='/board'
    }

  return (
    <div id="board_box">
    <h3>
        게시판 - 목록보기
    </h3>
    <ul id="board_list">
            <li>
                <span className="col1">번호</span>
                <span className="col2">제목</span>
                <span className="col3">글쓴이</span>
                <span className="col4">첨부</span>
                <span className="col5">등록일</span>
                <span className="col6">조회</span>
            </li   >
            {isLoading ? <List data = {""} limit={limit}/> : 
                        <>
                        <List data = {data} activePage = {page} itemsCountPerPage = {limit}/>
                    </>	
            }

	</ul>
			<ul id="page_num"> 	
                {isLoading ? <li>로딩중...</li> : 
                (data.total[0].total> limit ? 
                <Pagination 
                    activePage={currentPage}
                    itemsCountPerPage={limit}
                    totalItemsCount={data.total[0].total}
                    pageRangeDisplayed={10}
                    prevPageText={"<"}
                    nextPageText={">"}
                    onChange={handlePageChange}
                />
                :  null)}
            </ul>

            <ul className="buttons">
				<li><button onClick={boardList}>목록</button></li>
				<li>{currentUser ? <button onClick={board}>글쓰기</button> : null} </li>
			</ul>
	</div>
  );
}

export default BoardList;
