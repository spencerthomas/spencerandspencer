import React from 'react';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/ContainerTwo';
import BannerWrapper, {
  BannerContent,
} from './banner.style';



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
            content="We take any business and drive online sales - from design, development, photography and channel launch, through to growth tactics, optimisation and analytics. Full website launching soon."
          />
          
          
  
        </BannerContent>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
