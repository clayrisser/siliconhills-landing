import React from 'react';
import Heading from 'reusecore/src/elements/Heading';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, {
  SectionHeader,
  ImageWrapper,
} from './mapSection.style';

import mapImage from 'common/src/assets/image/cryptoModern/map.png';
import country1 from 'common/src/assets/image/cryptoModern/uk.png';
import country2 from 'common/src/assets/image/cryptoModern/africa.png';
import country3 from 'common/src/assets/image/cryptoModern/spain.png';
import countryIcon from 'common/src/assets/image/cryptoModern/countryIcon.png';

const MapSection = () => {
  return (
    <SectionWrapper id="map">
      <Container width="1200px">
        <SectionHeader>
          <Heading content="More than 3 Bilion worldwide use" />
          <Text content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu Lorem ipsum dolor sit ." />
          <Text className="smallText" content="Licenced gambling countries" />
          <div className="countries">
            <div className="countriesSingle">
              <Image src={country1} alt="country image" />
              <Text className="smallText" content="United Kingdom" />
            </div>
            <div className="countriesSingle">
              <Image src={country2} alt="country image" />
              <Text className="smallText" content="South Africa" />
            </div>
            <div className="countriesSingle">
              <Image src={country3} alt="country image" />
              <Text className="smallText" content="Spain" />
            </div>
          </div>
        </SectionHeader>
        <ImageWrapper>
          <Image className="mainImg" src={mapImage} alt="Map Image" />
          <div className="countryIcon">
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon}
                alt="Country Icon"
              />
            </div>
          </div>
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default MapSection;
