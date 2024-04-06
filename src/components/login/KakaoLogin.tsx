import styled from 'styled-components';
import kakao_logo from '../../assets/login/kakao-talk.svg';

const KakaoLogin = () => {
  const kakaoURL = `https://tioon.store/oauth2/authorization/kakao`;

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <KakaoBtn onClick={handleKakaoLogin}>
      <p>
        <img src={kakao_logo} alt="Kakao" />
      </p>
      <p>카카오로 시작하기</p>
    </KakaoBtn>
  );
};

export const KakaoBtn = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  border-radius: 5px;
  background: #ffe812;
  gap: 4px;
  border: none;
  font-size: var(--text_b1);
  font-weight: 600;
`;

export default KakaoLogin;
