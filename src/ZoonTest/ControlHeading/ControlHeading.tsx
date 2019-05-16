import * as React from 'react';

import {Card} from "./Card";

import {
  CardsContainer
} from "./ControlHeading.styled";

import {cardsArray} from "./constants/cardsArray";

const ControlHeading = () => (
    <CardsContainer>
      {cardsArray.map((card, i: number) => (
        <Card key={i} bgIcon={card.bgIcon} info={card.info} caption={card.caption} />
      ))}

    </CardsContainer>
);

export {ControlHeading} ;
