import React from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import Box from 'reusecore/src/elements/Box';
import Image from 'reusecore/src/elements/Image';
import Card from 'reusecore/src/elements/Card';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import WorkHistoryWrapper, { CounterUpArea } from './workHistory.style';
import shape1 from 'common/src/assets/image/cryptoModern/Shape-1.png';
import shape2 from 'common/src/assets/image/cryptoModern/Shape-2.png';
import shape3 from 'common/src/assets/image/cryptoModern/Shape-3.png';
import shape4 from 'common/src/assets/image/cryptoModern/Shape-4.png';

const WorkHistory = ({ row, col, cardStyle, btnStyle }) => {
  return (
    <WorkHistoryWrapper id="workHistorySection">
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <Image src={shape1} alt="Shape 1" />
                <h3>
                  <CountUp start={0} end={75000} />+
                </h3>
                <Text content="Awards" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={shape2} alt="Shape 2" />
                <h3>
                  <CountUp start={0} end={80} duration={5} />
                </h3>
                <Text content="Million Customers" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={shape3} alt="Shape 3" />
                <h3>
                  <CountUp start={0} end={9350} duration={5} />+
                </h3>
                <Text content="Community" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Image src={shape4} alt="Shape 4" />
                <h3>
                  <CountUp start={0} end={30000} duration={5} />+
                </h3>
                <Text content="Transactions" />
              </Card>
            </CounterUpArea>
          </Box>
          <Box className="col" {...col}>
            <FeatureBlock
              title={<Heading content="Our Largest Achievements " />}
              description={
                <Text content="We have worked with some leading agencies around the globe and their appreciation is our main strength. In the modern cryptocurrency era, customer satisfaction is our main criteria. " />
              }
              button={
                <Button
                  title="See our stories"
                  variant="textButton"
                  icon={<i className="flaticon-next" />}
                  {...btnStyle}
                />
              }
            />
          </Box>
        </Box>
      </Container>
    </WorkHistoryWrapper>
  );
};

// WorkHistory style props
WorkHistory.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // WorkHistory section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: ['20px 20px', '30px 20px', '30px 20px', '53px 40px'],
    borderRadius: '10px',
  },

  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default WorkHistory;
