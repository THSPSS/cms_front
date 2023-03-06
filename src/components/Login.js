import '../css/Login.css'
import login from '../images/login.png'
import kakaoLogin from '../images/kakao_login.png'
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { AuthContext } from '../context/authoContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api';



function Login() {

    const {userLogin} = useContext(AuthContext);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
      } = useForm({mode: "onChange"});


    // const { mutate } = useMutation(loginUser , {
    //     onSuccess : (data, variables , context) => {
    //         console.log(data)
    //         if(data.message === "successfully logged in") {
    //             console.log("로그인 성공")  
    //             reset()
    //         }
    //     }
    // });

    const {mutate} = useMutation(userLogin , {
            onSuccess : (data, variables , context) => { 
                    navigate("/")
                    reset()
            }
        }
    )

      const onLoginSubmit = ({id, pass}) => {
        console.log({id,pass})
        mutate({id, pass})
    }



    return (
        <div id="login_box">
        <div id="login_title">
            <span>로그인</span>
        </div>
        <div id="login_form">
            <form  name="login_form" onSubmit={handleSubmit(onLoginSubmit)}>		       	
                <ul>
                <li><input  {...register('id', { 
                    required: "아이디는 필수 입력입니다",
                    pattern : {
                        value :  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "이메일 형식에 맞지 않습니다."
                      },
                })} type="email" name="id" placeholder="아이디"/></li>
                {errors.id && <p>{errors.id.message}</p>}
                <li><input  {...register('pass', { 
                    required: "패스워드는 필수입력입니다.",
                    minLength : {
                        value : 8,
                        message : "8자 이상 작성해야합니다"
                    }
                })} type="password" placeholder="비밀번호"/></li> 
                {errors.pass && <p>{errors.pass.message}</p>}
                </ul>
                <div id="login_btn" >
                    <button type='submit'><img src={login}/></button>
                    {/* <a href="#"><img src={login}/></a> */}
                    {/* <input type="submit"/> /^[a-z0-9-]+$/*/}
                </div>		    	
            </form>
            <div id='social_login_btn'>
                <a href="#"><img src={kakaoLogin} alt='kakao_login' /></a>
            </div>
        </div> 
    </div>
    );
}

export default Login;

//api-key store
//https://kauth.kakao.com/oauth/authorize?client_id=4bf5390b8a0cbfd6547db07b83e362e4&redirect_uri=http://localhost/cms/social_login.php&response_type=code