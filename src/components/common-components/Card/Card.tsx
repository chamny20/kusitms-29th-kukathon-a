import styled from 'styled-components';
import { CardProps } from './Card.types';

export const Card = (props: CardProps) => {
  const { title, subTitle, children, divider } = props;
  return (
    <CardContainer>
      {title && (
        <div className="title-box">
          <div className="card-title">{title}</div>
          <div className="card-sub-title">{subTitle}</div>
          {divider && <span />}
        </div>
      )}

      <div className="card-child">{children}</div>
    </CardContainer>
  );
};

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.07);
  font-style: normal;
  margin: 0 auto;

  .title-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: flex-start;
    text-align: left;

    span {
      border-bottom: 2px solid #e2e2e2;
      margin-bottom: 30px;
    }

    .card-title {
      color: #74747e;
      font-size: 18px;
      font-weight: 700;
    }

    .card-sub-title {
      color: ${(props) => props.theme.gray_03};
      font-size: 16px;
      font-weight: 400;
      line-height: 180%;
      letter-spacing: -0.32px;
    }
  }

  .card-child {
    /* margin-top: 50px; */
    box-sizing: border-box;
  }
`;
