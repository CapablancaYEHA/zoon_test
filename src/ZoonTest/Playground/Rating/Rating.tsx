import * as React from 'react';

import {
  RatingContainer,
  RatingText,
  InfoStatus
} from "./Rating.styled";

import {RatingInfoType} from "../../types";

type RatingProps = {
  RatingInfo?: RatingInfoType | null;
}

const Rating = ({ RatingInfo = null }: RatingProps) => (
  <>
    {
      RatingInfo === null ? (
        <RatingContainer RatingInfo={RatingInfo}>
          <RatingText RatingInfo={RatingInfo}>Портал без рейтинга</RatingText>
        </RatingContainer>
      ) : (
        <RatingContainer RatingInfo={RatingInfo}>
          <RatingText RatingInfo={RatingInfo}>{RatingInfo.rating}</RatingText>
          <InfoStatus color="222222">{RatingInfo.caption}</InfoStatus>
        </RatingContainer>
      )
    }
  </>
);

export {Rating};
