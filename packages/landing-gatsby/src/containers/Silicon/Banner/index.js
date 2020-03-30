import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Icon from "react-icons-kit";
import ReactPlayer from "react-player";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import Input from "reusecore/src/elements/Input";
import Select from "reusecore/src/elements/Select";
import Container from "common/src/components/UI/Container";
import ParticlesComponent from "../../Hosting/Particle";
import BannerWrapper, {
  SearchWrapper,
  List,
  DiscountWrapper,
  DiscountLabel
} from "./banner.style";

import { search } from "react-icons-kit/feather/search";

const BannerSection = ({
  row,
  title,
  description,
  button,
  textArea,
  searchArea,
  discountAmount,
  discountText
}) => {
  const Data = useStaticQuery(graphql`
    query {
      hostingJson {
        DOMAIN_NAMES {
          label
          value
        }
        DOMAIN_PRICE {
          content
          url
        }
      }
    }
  `);

  useEffect(() => {
    function resize() {
      setWidth(getWidth(window.innerWidth, window.innerHeight - 80));
      setHeight(getHeight(window.innerWidth, window.innerHeight - 80));
    }
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  const [width, setWidth] = useState(
    getWidth(window.innerWidth, window.innerHeight - 80)
  );

  const [height, setHeight] = useState(
    getHeight(window.innerWidth, window.innerHeight - 80)
  );

  function getIsWindowTooWide(aspectRatio = [16, 9]) {
    const windowAR = window.innerWidth / window.innerHeight;
    return aspectRatio[0] / aspectRatio[1] < windowAR;
  }

  function getWidth(width, height, aspectRatio = [16, 9]) {
    const isWindowTooWide = getIsWindowTooWide(aspectRatio);
    if (!width) return "100%";
    if (!height) return width;
    return isWindowTooWide ? width : (height * aspectRatio[0]) / aspectRatio[1];
  }

  function getHeight(width, height, aspectRatio = [16, 9]) {
    const isWindowTooWide = getIsWindowTooWide(aspectRatio);
    if (!height) return "100%";
    if (!width) return height;
    return isWindowTooWide ? (width * aspectRatio[0]) / aspectRatio[1] : height;
  }

  return (
    <>
      <Box
        style={{
          alignItems: "center",
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          paddingTop: "80px",
          position: "absolute",
          zIndex: "-1"
        }}
      >
        <ReactPlayer
          url="https:siliconhills-public.s3-us-west-2.amazonaws.com/silicon-hills-llc.mp4"
          controls={false}
          loop
          playing
          width={width}
          height={height}
          volume={0}
        />
      </Box>
      <Box
        bg="#FFF"
        style={{
          height: "100vh",
          marginTop: "100vh",
          position: "absolute",
          width: "100%",
          zIndex: "-1"
        }}
      />
      <Box
        style={{
          height: "100vh",
          paddingTop: "80px",
          width: "100%",
          position: "absolute",
          backgroundColor: "#ffffff88"
        }}
      />
      <BannerWrapper id="banner_section">
        <ParticlesComponent />
        <Container className="banner_container">
          <Box {...row}>
            <Box {...textArea}>
              <DiscountWrapper>
                <DiscountLabel>
                  <Text {...discountText} content="Custom Digital Products" />
                </DiscountLabel>
              </DiscountWrapper>
              <Heading {...title} content="Empowering Your Business" />
            </Box>
          </Box>
        </Container>
      </BannerWrapper>
    </>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  searchArea: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center"
  },
  textArea: {
    width: ["100%", "100%", "90%", "100%", "55%"]
  },
  title: {
    fontSize: ["26px", "32px", "42px", "46px", "55px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: ["20px", "25px", "25px", "25px", "25px"],
    lineHeight: "1.31",
    textAlign: "center"
  },
  description: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "#343d48cc",
    lineHeight: "1.75",
    mb: "0",
    textAlign: "center"
  },
  button: {
    title: "Search",
    type: "button",
    fontSize: "18px",
    fontWeight: "500",
    color: "#fff",
    pl: "22px",
    pr: "22px",
    colors: "primaryWithBg",
    iconPosition: "left"
  },
  searchArea: {
    className: "search_area",
    width: ["100%", "100%", "80%", "100%", "70%"],
    mt: ["45px", "50px", "60px", "60px", "60px"]
  },
  discountAmount: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    fontWeight: "600",
    color: "#eb4d4b",
    mb: 0,
    as: "span",
    mr: "0.4em"
  },
  discountText: {
    fontSize: ["43px", "44px", "44px", "44px", "44px"],
    fontWeight: "600",
    color: "#0f2137",
    mb: 0,
    as: "span"
  }
};

export default BannerSection;
