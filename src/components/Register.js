import '../css/Register.css'
import resetBtn from '../images/button_reset.gif'
import checkId from '../images/check_id.gif'
import saveBtn from '../images/button_save.gif'
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { registUser , checkID } from '../api';
import { useToast } from '@chakra-ui/react';

function Register() {

    const navigate = useNavigate();

    const [message, setMessage] = useState('');

    const toast = useToast()
    
    const {
      register,
      handleSubmit,
      reset,
      watch,
      trigger,
      formState: { errors },
    } = useForm({mode : "onChange"});
    
    const { mutate } = useMutation(registUser, {
      onSuccess : () => {
        console.log("success")
        toast ({
          title: "회원가입이 성공적으로 완료되었습니다.",
          status : "success"
        })
        reset()
      }
    });

    
    const onSubmit = ({id , pass , name}) => {
      mutate({id, pass , name })
    }

    const handleEmailChange = async (e) => {
      const { value } = e.target;
        const response = await checkID(value);
        setMessage(response.message);
    };

    // const handleEmailChange = async (formData) => {
    //   try {
    //     await trigger('id'); // Trigger validation for the email input field
    //     if (!errors.id) { // If there are no errors for the email field
    //       console.log(formData)
    //       const response = await checkID(formData.id); // Call checkID function
    //       setMessage(response.message);
    //     }
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
  

    return (
        <div id="join_box">
        <form  name="member_form" onSubmit={handleSubmit(onSubmit)}>
          <h2>회원 가입</h2>
                <div className="form">
                  <div className="col1">아이디/이메일</div>
                  <div className="col2">
                      <input {...register('id' , {
                        required: "아이디/이메일은 필수입력입니다.",
                        pattern : {
                          value :  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                          message: "이메일 형식에 맞지 않습니다."
                        },
                        onChange : (e) => handleEmailChange(e)
                      })} type="email" name="id" required/>
                      {errors.id && <p>{errors.id.message}</p>}
                      <p>{message? message : null}</p>
                  </div>                 
                 </div>
                 <div className="clear"></div>
                 <div className="form">
                  <div className="col1">비밀번호</div>
                  <div className="col2">
                      <input {...register('pass', { 
                            required: "패스워드는 필수입력입니다.",
                            minLength : {
                                value : 8,
                                message : "8자 이상 작성해야합니다"
                            }
                        })}type="password" name="pass"/>
                        {errors.pass && <p>{errors.pass.message}</p>}
                  </div>                 
                 </div>
                 <div className="clear"></div>
                 <div className="form">
                  <div className="col1">비밀번호 확인</div>
                  <div className="col2">
                      <input {...register('pass_confirm', {
                        required : "패스워드 확인은 필수입력입니다.",
                        validate : (val) => {
                          if (watch('pass') != val) {
                            return "패스워드가 일치하지 않습니다."
                          }
                        }
                      })} type="password" name="pass_confirm"/>
                    {errors.pass_confirm && <p>{errors.pass_confirm.message}</p>}
                  </div>                 
                 </div>
                 <div className="clear"></div>
                 <div className="form">
                  <div className="col1">이름</div>
                  <div className="col2">
                      <input {...register('name', {
                        required : "이름은 필수입력입니다."
                      })} type="text" name="name" />
                      {errors.name && <p>{errors.name.message}</p>}
                  </div>                 
                 </div>
                 <div className="clear"></div>

                 <div className="bottom_line"> </div>
                 <div className="buttons">
                    <button type='submit'><img src={saveBtn}/></button>
                    <button type='button' onClick={() => { navigate("/")}}><img id="reset_button"src={resetBtn}/></button>
                    {/* <button type='button' onClick="history.back()"><img id="reset_button"src={resetBtn}/></button> */}
                 </div>
        </form>
      </div>
      
    );
  }
  
  export default Register;
  


