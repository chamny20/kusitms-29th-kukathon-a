import styled from 'styled-components';

export const ListBox = () => {
  return (
    <ListBoxContainer>
      <div className="tag">공부</div>
      <div className="content">중급한자어어쩌구</div>
    </ListBoxContainer>
  );
};

export const ListBoxContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  /* max-width: 246px; */
  padding: 20px 18px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #fedada;

  .tag {
    width: 70px;
    height: 26px;
    background-color: #fdb5b5;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #47474d;
    font-size: 14px;
  }

  .content {
    color: #171719;
    font-size: 18px;
    font-weight: 600;
  }
`;
