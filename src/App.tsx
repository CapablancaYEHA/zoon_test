import * as React from 'react';

import { BaseLayout } from "./layout/BaseLayout";
import { ZoonTest } from "./ZoonTest";

class App extends React.Component {

  render() {
    return (
        <BaseLayout>
          <ZoonTest />
        </BaseLayout>
    );
  }
};

export default App;
