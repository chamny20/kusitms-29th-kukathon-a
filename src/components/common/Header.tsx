import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { notify } from '../../hooks/notify';
import Logo from '../../assets/icon/logo.svg';

const Header = () => {
  const [current, setCurrent] = useState<string>('/');
  const { pathname } = useLocation();

  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  return (
    <StyledHeader>
      <StyledLink to="/" $current={current === '/'}>
        <img src={Logo} />
      </StyledLink>
      <Menu>
        <StyledLink to="/test1" $current={current === '/test1'}>
          테스트1
        </StyledLink>
        <StyledLink to="/test2" $current={current === '/test2'}>
          테스트2
        </StyledLink>
        <StyledLink to="/test3" $current={current === '/test3'}>
          테스트3
        </StyledLink>
      </Menu>
      <button onClick={() => notify({ text: '로그아웃 성공', icon: '🙌🏻' })}>
        로그아웃
      </button>
    </StyledHeader>
  );
};

export default Header;

interface StyledLinkProps {
  $current: boolean;
}

const StyledHeader = styled.div`
  width: 100%;
  height: 88px;
  background-color: #ffffff;
  border-bottom: 1px solid #e4e4e7;
  padding: 30px 50px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 2fr 0.5fr;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;

const StyledLink = styled(Link)<StyledLinkProps>`
  color: ${({ $current }) => ($current ? '#3B64F6' : '#242424')};
`;
