import styled from 'styled-components';
import KakaoLogin from '../../components/login/KakaoLogin';
import loginBackImg from '../../assets/login/login_background.png';
import gifImg from '../../assets/login/쉬는시간.gif';

export const LoginPage = () => {
  return (
    <LoginContainer>
      <LefLoginBox>
        <div className="login-title">안녕하세요어쩌구</div>
        <p className="login-text">로그인하세요.</p>
        <InputBox>
          <div className="input-wrapper">
            <p>ID</p>
            <StyledInput placeholder="아이디를 입력하세요." />
          </div>
          <div className="input-wrapper">
            <p>PASSWORD</p>
            <StyledInput
              type="password"
              placeholder="영문, 숫자, 특수문자를 활용한 8~20자"
            />
          </div>
        </InputBox>
        <ButtonBox>
          <LoginButton>로그인</LoginButton>
          <div className="sub-text">회원가입/비밀번호 찾기</div>
          <OrLine>
            <div></div>
            <p className="line-text">SNS 로그인</p>
            <div></div>
          </OrLine>
          <KakaoLogin />
        </ButtonBox>
      </LefLoginBox>
      <RightLoginBox>
        <div className="login-back">
          <img src={gifImg} alt="" />
        </div>
      </RightLoginBox>
    </LoginContainer>
  );
};

export const LoginContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LefLoginBox = styled.div`
  width: 100%;
  max-width: 540px;
  display: flex;
  flex-direction: column;

  .login-title {
    font-size: 36px;
    font-weight: bold;
  }

  .login-text {
    padding-top: 16px;
    padding-bottom: 67px;
    color: #9096a2;
    font-size: 16px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;

    p {
      font-weight: 700;
      color: #9096a2;
    }
  }
`;

export const StyledInput = styled.input`
  width: 335px;
  height: 48px;
  border: 1px solid #cacace;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;

  ::placeholder {
    color: #cacace;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 335px;
  width: 100%;
  .sub-text {
    margin-top: 12px;
    color: #9096a2;
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button`
  background-color: #f4f4f5;
  color: gray;
  text-align: center;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  border: none;
  font-weight: 600;
  margin-top: 64px;
  font-size: 16px;
  height: 48px;
`;

const OrLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 48px 0 16px;
  div {
    width: 128px;
    height: 1px;
    background: #b4c9ff;
  }

  p {
    color: var(--Gray5_400, #b4c9ff);
    text-align: center;
    font-size: 12px;
    font-style: normal;
    padding: 0px 4px;
    box-sizing: border-box;
  }
`;

export const RightLoginBox = styled.div`
  background-image: url(${loginBackImg});
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-back {
    img {
      padding-top: 180px;
    }
  }
`;
