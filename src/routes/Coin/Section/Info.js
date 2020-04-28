import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import Tabs from "./Tabs";

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 50px;
    text-align: center;
  }
`;

const LinksContainer = styled.div`
  width: 100%;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Links = styled.div`
  margin: 10px auto;
`;

const Title = styled.span`
  font-weight: bold;
`;

function Info({
  name,
  description,
  homepage,
  site,
  current_price,
  market_cap,
  reddit,
  github,
  tickers,
}) {
  return (
    <Wrapper>
      <Container>
        <InfoContainer>
          <Link to="/">
            <i class="fas fa-arrow-left" style={{ fontSize: "30px" }}></i>
          </Link>
          <h1>{name}</h1>
          <div style={{ fontSize: "22px" }}>₩{current_price}</div>
          <div>시가총액: ₩{market_cap}</div>
        </InfoContainer>

        <LinksContainer>
          <Title>공식사이트</Title>
          <Links>
            <Button
              variant="outlined"
              href={homepage && `${homepage[0]}`}
              target="_blank"
              color="secondary"
            >
              {homepage && homepage[0]}
            </Button>
          </Links>
          <Title>관련사이트</Title>
          <Links>
            {site &&
              site.map((link, index) => {
                if (link === "") {
                  return null;
                } else {
                  return (
                    <React.Fragment key={index}>
                      <Button
                        variant="outlined"
                        href={`${link}`}
                        target="_blank"
                        color="primary"
                      >
                        {link}
                      </Button>
                    </React.Fragment>
                  );
                }
              })}
          </Links>
          <Title>커뮤니티</Title>
          <Links>
            <Button
              variant="outlined"
              href={`${reddit}`}
              target="_blank"
              color="primary"
            >
              {reddit}
            </Button>
          </Links>
          <Title>소스코드</Title>
          <Links>
            <Button
              variant="outlined"
              href={github && `${github[0]}`}
              target="_blank"
              color="primary"
            >
              {github && github[0]}
            </Button>
          </Links>
        </LinksContainer>
      </Container>

      <Tabs
        description={description}
        tickers={tickers}
        name={name}
        current_price={current_price}
        homepage={homepage}
      />
    </Wrapper>
  );
}

export default Info;
