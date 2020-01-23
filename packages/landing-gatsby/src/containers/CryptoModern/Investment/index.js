import React from 'react';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './investment.style';
import GraphImg from 'common/src/assets/image/cryptoModern/graph.png';
import dummyImg from 'common/src/assets/image/cryptoModern/pattern.png';

const InvestmentPortal = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="content">
            <Heading content="Total Investment sale from last year transaction" />
            <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu" />
          </div>
          <div className="image">
            <Image src={GraphImg} alt="Graph Image" />
          </div>
        </ContentWrapper>
      </Container>
      <Image className="patternImg" src={dummyImg} alt="pattern Image" />
    </SectionWrapper>
  );
};

export default InvestmentPortal;
