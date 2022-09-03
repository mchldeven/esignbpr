import React from 'react';
import { Box, Column, Heading } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import logobpr from '../components/logo.jpg';

const Header = () => {
  return (
    <Box display="flex" direction="row" paddingY={2} color={'lightGray'} logo={logobpr}>
      <Column span={10}>
        <Box padding={3}>
          <Heading size="lg" logo={logobpr}>
            E-SIGN UNIVERSAL
          </Heading>
        </Box>
      </Column>
    </Box>
  );
};

export default Header;
