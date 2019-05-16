import * as React from 'react';

import {Container} from "../layout-components/Container";

import {ControlHeading} from "./ControlHeading";
import {Playground} from "./Playground";

import {
  mockStatData1,
  mockStatData2,
  mockRatingInfo,
  mockTabItems1,
  mockTabItems2,
  mockTabItems3
} from "./mock";

import {
Wrapper
} from "./ZoonTest.styled";

const ZoonTest = () => (
    <Container>
     <Wrapper>
      <ControlHeading />
      <Playground
        defaultActive={true} name="Google" infoStatData={mockStatData1} RatingInfo={mockRatingInfo} updates={2} tabItems={mockTabItems1}
      />
      <Playground
        defaultActive={true} name="Flado" infoStatData={mockStatData2} actReq tabItems={mockTabItems2}
      />
      <Playground
        defaultActive={true} name="2Gis" actReq searchActive tabItems={mockTabItems3}
      />
      <Playground
        defaultActive={false} name="Yell" tabItems={mockTabItems3}
      />


     </Wrapper>
    </Container>
);

export {ZoonTest} ;
