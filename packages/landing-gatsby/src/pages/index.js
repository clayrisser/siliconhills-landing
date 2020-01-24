import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "common/src/theme/appclassic";
import { ResetCSS } from "common/src/assets/css/style";
import Sticky from "react-stickynode";
import ProcessSection from "../containers/Silicon/Process";
import WorkHistory from "../containers/Silicon/WorkHistory";
import BlogSection from "../containers/Silicon/BlogSection";
import FeatureSection from "../containers/Silicon/FeatureSection";
import Navbar from "../containers/Silicon/Navbar";
import Banner from "../containers/Silicon/Banner";
import Customer from "../containers/Silicon/Customer";
import KeyFeatures from "../containers/Silicon/KeyFeatures";
import AppSlider from "../containers/Silicon/AppSlider";
import Features from "../containers/Silicon/Features";
import DesignedAndBuilt from "../containers/Silicon/DesignedAndBuilt";
import FeatureTab from "../containers/Silicon/FeatureTab";
import ClientBlock from "../containers/Silicon/ClientBlock";
import PricingPolicy from "../containers/Silicon/PricingPolicy";
import Testimonial from "../containers/Silicon/Testimonial";
import Faq from "../containers/Silicon/Faq";
import JoinTrail from "../containers/Silicon/JoinTrail";
import Footer from "../containers/Silicon/Footer";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper
} from "../containers/Silicon/appClassic.style";

import SEO from "../components/seo";

export default function() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="App Classic" />
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <Customer />
            <ProcessSection />
            <WorkHistory />
            <BlogSection />

            <FeatureSection />
            {/* <PricingPolicy /> */}
            <Testimonial />
            {/* <Faq /> */}
            <ClientBlock />
            <JoinTrail />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
