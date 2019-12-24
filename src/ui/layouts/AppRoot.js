import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import Landing from 'ui/pages/Landing';
import theme from 'ui/theme';
import GlobalStyles from 'ui/globalStyles';

class AppRoot extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles/>
          <Landing/>
        </>
      </ThemeProvider>
    );
  }
}

export default AppRoot;
