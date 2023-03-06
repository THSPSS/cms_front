import '../css/Message.css'
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';


function Message() {

        // const mutation = useMutation();

        const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
          } = useForm({mode: "onChange"});
    
          console.log(watch("rv_id"));
    
          const onSubmit = ({rv_id}) => {
            console.log({rv_id})
            {/*mutate 로 보냄*/}
            //mutation.mutate({id, pass})
        }


  return (
    <div id="message_box">
    <h3 id="write_title">
            쪽지 보내기
    </h3>
    <ul className="top_buttons">
            <li><span><a href="">수신 쪽지함 </a></span></li>
            <li><span><a href="">송신 쪽지함</a></span></li>
    </ul>
    <form  name="message_form" onSubmit={handleSubmit(onSubmit)}>
        <div id="write_msg">
            <ul>
            <li>
                <span className="col1">보내는 사람 : </span>
                <span className="col2"></span>
            </li>	
            <li>
                <span className="col1">수신 아이디 : </span>
                <span className="col2"><input {...register('rv_id', { 
                    required: "수신 아이디는 필수 입력입니다",
                })} name="rv_id" type="text"/></span>
                {errors.rv_id && <p>{errors.rv_id.message}</p>}
            </li>	
            <li>
                <span className="col1">제목 : </span>
                <span className="col2"><input {...register('subject')} name="subject" type="text"/></span>
            </li>	    	
            <li id="text_area">	
                <span className="col1">내용 : </span>
                <span className="col2">
                    <textarea {...register('context')} name="content"></textarea>
                </span>
            </li>
            </ul>
            <button type="submit" >보내기</button>
        </div>	    	
    </form>
</div>
  );
}

export default Message;
