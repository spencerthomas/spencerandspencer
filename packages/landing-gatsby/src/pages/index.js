import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/agencyModern';
import { ResetCSS } from 'common/src/assets/css/style';
import {
  GlobalStyle,
  ContentWrapper,
} from '../containers/AgencyModern/agencyModern.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/AgencyModern/Navbar';
import Banner from '../containers/AgencyModern/Banner';
import SEO from '../components/seo';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <SEO title="AgencyModern" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <Banner />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
