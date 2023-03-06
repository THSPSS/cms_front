import '../css/Board.css'
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';
import { useMutation } from 'react-query';
import { addBoardList } from '../api';
import { AuthContext } from '../context/authoContext';
import { useContext } from 'react';


function Board() {

	const {currentUser} = useContext(AuthContext)


    const boardList= () => {
        window.location.href='/boardlist/1'
    }

	const toast = useToast()

	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm({mode: "all"});


	const {mutate} = useMutation(addBoardList, {
		onSuccess : () => {
			console.log("success")
			toast({
				title: "작성하신 상담신청을 전달하였습니다.",
				status: "success",
			  });
			reset();
		},

	});

	const onSubmit = ({name , subject , content }) => {
		mutate({name , subject , content})
	}
	

  return (
    <div id="board_box">
	    <h3 id="board_title"> 게시판 - 글 쓰기</h3>
	    <form  name="board_form" onSubmit={handleSubmit(onSubmit)} >
	    	 <ul id="board_form">
				<li>
					<span className="col1">이름 : </span>
					<span className="col2"><input {...register('name')} name="name" type="text" defaultValue={currentUser.name} readOnly/></span>
				</li>		
	    		<li>
	    			<span className="col1">제목 : </span>
	    			<span className="col2"><input {...register('subject')} name="subject" type="text" /></span>
	    		</li>	    	
	    		<li id="text_area">	
	    			<span className="col1">내용 : </span>
	    			<span className="col2">
	    				<textarea {...register('content')} name="content"></textarea>
	    			</span>
	    		</li>
	    		<li>
			        <span className="col1"> 첨부 파일</span>
			        <span className="col2"><input {...register('upfile')} type="file" name="upfile" /></span>
			    </li>
	    	    </ul>
	    	<ul className="buttons">
				<li><button type="submit" >완료</button></li>
				<li><button type="button" onClick={boardList} >목록</button></li>
			</ul>
	    </form>
	</div>
        
  );
}

export default Board;
