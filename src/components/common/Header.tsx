import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { notify } from '../../hooks/notify';
import TitleLogo from '../../assets/icon/title.svg';
import List from '../../assets/icon/list.svg';
import ListBlack from '../../assets/icon/listBlack.svg';
import Search from '../../assets/icon/search.svg';
import Alarm from '../../assets/icon/alarm.svg';

const Header = () => {
  const [current, setCurrent] = useState<string>('/');
  const { pathname } = useLocation();

  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  return (
    <StyledHeader>
      <Row>
        <StyledLink to="/" $current={current === '/'}>
          <img src={TitleLogo} />
        </StyledLink>
        <Menu>
          <StyledLink to="/myworkroad" $current={current === '/myworkroad'}>
            내 출근길
          </StyledLink>
          <StyledLink
            to="/recentworkroad"
            $current={current === '/recentworkroad'}
          >
            {current === '/recentworkroad' ? (
              <img src={List} />
            ) : (
              <img src={ListBlack} />
            )}
            요즘 출근길
          </StyledLink>
        </Menu>
      </Row>
      <Row2>
        <img
          src={Search}
          onClick={() =>
            notify({ text: '궁금한 내용을 검색해보세요!', icon: '🔍' })
          }
        />
        <img
          src={Alarm}
          onClick={() => notify({ text: '알림이 도착했습니다.', icon: '🛎' })}
        />
        <Button
          onClick={() =>
            notify({ text: '개발 중인 페이지입니다!', icon: '🙌🏻' })
          }
        >
          마이페이지
        </Button>
      </Row2>
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
  display: flex;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 64px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`;

const Row2 = styled(Row)`
  gap: 10px;
`;
const StyledLink = styled(Link)<StyledLinkProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  font-feature-settings: 'ss10' on;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 146.7%; /* 22.005px */
  letter-spacing: 0.144px;
  color: ${({ $current }) => ($current ? '#3B64F6' : '#171719')};
`;

const Button = styled.div`
  width: 86px;
  height: 32px;
  border-radius: 6px;
  border: 1px solid #f0f0f0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
