import React from 'react';
import Text from 'common/src/components/Text';
import Image from 'common/src/components/Image';
import Button from 'common/src/components/Button';
import Heading from 'common/src/components/Heading';
import Input from 'common/src/components/Input';
import Container from 'common/src/components/UI/ContainerTwo';
import BannerWrapper, {
  BannerContent,
  Subscribe,
  SponsoredBy,
  ImageGroup,
} from './banner.style';

import paypal from 'common/src/assets/image/agencyModern/paypal.png';
import google from 'common/src/assets/image/agencyModern/google.png';
import dropbox from 'common/src/assets/image/agencyModern/dropbox.png';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Heading
            as="h1"
            content="We build, launch and grow ecommerce for any business."
          />
          <Text
            className="banner-caption"
            content="We take any business and drive online sales - from design, development, photography and channel launch, through to growth tactics, optimisation and analytics."
          />
          <Subscribe>
            <Input
              inputType="email"
              placeholder="Enter Email Address"
              iconPosition="left"
              aria-label="email"
            />
            <Button title="Subscribe" type="submit" />
          </Subscribe>
          <SponsoredBy>
            <Text className="sponsoredBy" content="Sponsored by:" />
            <ImageGroup>
              <Image src={paypal} alt="Paypal" />
              <Image src={google} alt="Google" />
              <Image src={dropbox} alt="Dropbox" />
            </ImageGroup>
          </SponsoredBy>
        </BannerContent>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
