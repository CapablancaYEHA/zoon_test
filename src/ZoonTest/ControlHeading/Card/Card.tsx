import * as React from 'react';

import {
  CardBody,
  CardInfo,
  CardCaption
} from "./Card.styled";

import {ControlCardType} from "../../types";

const Card = ({ bgIcon, info, caption}:ControlCardType) => (
    <CardBody bgIcon={bgIcon}>
      <CardInfo>{info}</CardInfo>
      <CardCaption>{caption}</CardCaption>
    </CardBody>
);

export {Card} ;
