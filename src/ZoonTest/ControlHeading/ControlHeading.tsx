import * as React from 'react';

import {Card} from "./Card";

import {
  CardsContainer
} from "./ControlHeading.styled";



const ControlHeading = () => (
    <CardsContainer>
      <Card /><Card /><Card /><Card />
    </CardsContainer>
);

export {ControlHeading} ;
