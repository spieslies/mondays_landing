import React, { PureComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import Landing from 'core/ui/pages/Landing';
import theme from 'core/ui/theme';
import GlobalStyles from 'core/ui/globalStyles';

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
