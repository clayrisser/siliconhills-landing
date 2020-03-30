import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import Box from "reusecore/src/elements/Box";
import Card from "reusecore/src/elements/Card";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import FeatureBlock from "common/src/components/FeatureBlock";
import Container from "common/src/components/UI/Container";
import WorkHistoryWrapper, { CounterUpArea } from "./workHistory.style";
import Shamel from "../../../images/shamel.png";
import Shamel_User from "../../../images/Shamel_User.jpg";
import Ride from "../../../images/rideuser.jpg";
import WaitCheck from "../../../images/waitcheck.jpg";
import ModrenGreek from "../../../images/modrengreek.jpg";
import Gold from "../../../images/goldiq.png";
import { borderColor, backgroundColor } from "styled-system";
import "./workHistory.style";

const WorkHistory = ({ row, col, cardStyle, title, description, btnStyle }) => {
  return (
    <WorkHistoryWrapper id="ourWork">
      <Container>
        <h1 style={{ textAlign: "center", font: "10px", color: "brown" }}>
          Some of our projects
        </h1>
        <Box className="row">
          <Box
            className="col"
            style={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: "15px",
              justifyContent: "space-around"
            }}
          >
            <Card className="card" {...cardStyle}>
              <div
                style={{
                  height: "300px",
                  width: "350px",
                  padding: "10px 15px 20px 20px",
                  textAlign: "center"
                }}
              >
                <Link to="/portfolio">
                  <img height="100%" width="100%" src={Shamel} alt="Shamel" />
                  Shamel
                </Link>
              </div>
            </Card>
            <Card className="card" {...cardStyle}>
              <div
                style={{
                  height: "300px",
                  width: "350px",
                  padding: "10px 15px 20px 20px",
                  textAlign: "center"
                }}
              >
                <Link to="/portfolio">
                  <img
                    height="100%"
                    width="100%"
                    src={Shamel_User}
                    alt="Shameluser"
                  />
                  Shameluser
                </Link>
              </div>
            </Card>
            <Card className="card" {...cardStyle}>
              <div
                style={{
                  height: "300px",
                  width: "350px",
                  padding: "10px 15px 20px 20px",
                  textAlign: "center"
                }}
              >
                <Link to="/portfolio">
                  <img height="100%" width="100%" src={Ride} alt="Ridemap" />
                  Ridemap
                </Link>
              </div>
            </Card>
          </Box>

          <Box
            className="col"
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: "15px",
              justifyContent: "space-around"
            }}
          >
            <Card className="card" {...cardStyle}>
              <div
                style={{
                  height: "300px",
                  width: "350px",
                  padding: "10px 15px 20px 20px",
                  textAlign: "center"
                }}
              >
                <Link to="/portfolio">
                  <img
                    height="100%"
                    width="100%"
                    src={WaitCheck}
                    alt="WaitCheck"
                  />
                  Waitcheck
                </Link>
              </div>
            </Card>
            <Card className="card" {...cardStyle}>
              <div
                style={{
                  height: "300px",
                  width: "350px",
                  padding: "10px 15px 20px 20px",
                  textAlign: "center"
                }}
              >
                <Link to="/portfolio">
                  <img
                    height="100%"
                    width="100%"
                    src={ModrenGreek}
                    alt="ModrenGreek"
                  />
                  ModrenGreek
                </Link>
              </div>
            </Card>
            <Card className="card" {...cardStyle}>
              <div
                style={{
                  height: "300px",
                  width: "350px",
                  padding: "10px 15px 20px 20px",
                  textAlign: "center"
                }}
              >
                <Link to="/portfolio">
                  <img
                    height="100%"
                    width="100%"
                    src={Gold}
                    style={{
                      objectFit: "cover",
                      backgroundImageColor: "whitesmoke"
                    }}
                    alt="Goldiq"
                  />
                  Goldiq
                </Link>
              </div>
            </Card>
          </Box>

          {/* <img height="400px" width="300px" src={Shamel_User} alt="" />
            <img height="400px" width="300px" src={Ride} alt="" />
            <img height="400px" width="300px" src={WaitCheck} alt="" />
            <img height="400px" width="300px" src={ModrenGreek} alt="" />
            <img height="400px" width="300px" src={Gold} alt="" /> */}
          {/* <FeatureBlock
              title={
                <Heading
                  content="Working With Knowledge, Passion, Heart & Soul "
                  {...title}
                />
              }
              description={
                <Text
                  content="We have worked with some leading agencies around the globe and their appreciation is our main strength ."
                  {...description}
                />
              }
              button={<Button title="WORK HISTORY" {...btnStyle} />}
            />
          </Box>
          <Box className="col" {...col}>
            <CounterUpArea>
              <Card className="card" {...cardStyle}>
                <h3>
                  <CountUp start={0} end={20} />+
                </h3>
                <Text content="Companies Engaged" />
              </Card>
              <Card className="card" {...cardStyle}>
                <h3>
                  <CountUp start={0} end={199} duration={5} />
                </h3>
                <Text content="Happy Customers" />
              </Card>
              <Card className="card" {...cardStyle}>
                <h3>
                  <CountUp start={0} end={300} duration={5} />+
                </h3>
                <Text content="Project Complete" />
              </Card>
              <Card className="card" {...cardStyle}>
                <Text content="& Much More" />
                <a href="#1">View work history</a>
              </Card>
            </CounterUpArea> */}
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
  cardStyle: PropTypes.object
};

// WorkHistory default style
WorkHistory.defaultProps = {
  // WorkHistory section row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  // WorkHistory section col default style
  col: {
    pr: "15px",
    pl: "15px",
    width: [1, 1, 1 / 2, 1 / 3],
    flexBox: true,
    alignSelf: "center"
  },
  // // Card default style
  cardStyle: {
    p: ["20px 20px", "30px 20px", "30px 20px", "53px 40px"],
    borderRadius: "10px",
    boxShadow: "0px 8px 20px 0px rgba(16, 66, 97, 0.07)",
    borderColor: "black"
  },

  // WorkHistory section title default style
  title: {
    fontSize: ["26px", "26px", "30px", "40px"],
    lineHeight: "1.5",
    fontWeight: "300",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "20px"
  },
  // WorkHistory section description default style
  description: {
    fontSize: "16px",
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "33px"
  },
  // Button default style
  btnStyle: {
    minWidth: "156px",
    fontSize: "14px",
    fontWeight: "500"
  }
};

export default WorkHistory;
