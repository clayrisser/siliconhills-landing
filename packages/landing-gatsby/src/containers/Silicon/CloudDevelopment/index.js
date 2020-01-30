import React, { Fragment } from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Text from "reusecore/src/elements/Text";
import Heading from "reusecore/src/elements/Heading";
import Container from "common/src/components/UI/Container";
import SectionWrapper, { CarouselWrapper } from "./cloudDevelopment.style";
import FeatureBlock from "../../../../../common/src/components/FeatureBlock";

const CloudDevelopment = (featureDescription, featureTitle) => {
  const data = useStaticQuery(graphql`
    query {
      cloudInfrastructureDevelopmentJson {
        features {
          title
          description
        }
      }
    }
  `);

  const { features } = data.cloudInfrastructureDevelopmentJson;
  console.log("features", features);

  const glideOptions = {
    type: "carousel",
    gap: 0,
    autoplay: 5000,
    perView: 2,
    animationDuration: 700,
    breakpoints: {
      991: {
        perView: 1
      }
    }
  };

  return (
    <SectionWrapper id="mobileDevelopment">
      <Container>
        {features.map(title => (
          <FeatureBlock
            title={<Heading content={title.title} {...featureTitle} />}
            description={
              <Text content={title.description} {...featureDescription} />
            }
          />
        ))}
        <CarouselWrapper></CarouselWrapper>
      </Container>
    </SectionWrapper>
  );
};

// FeatureSection style props
CloudDevelopment.propTypes = {
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object
};
CloudDevelopment.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["40px", "56px"]
  },
  featureTitle: {
    fontSize: ["18px", "20px"],
    fontWeight: "400",
    color: "#0f2137",
    lineHeight: "1.5",
    mb: ["10px", "10px", "10px", "20px"],
    letterSpacing: "-0.020em",
    textALign: "right"
  },
  // feature description default style
  featureDescription: {
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#343d48cc"
  }
};

export default CloudDevelopment;
