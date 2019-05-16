import * as React from 'react';

import {MenuToggle} from "./MenuToggle";
import {Rating} from "./Rating";
import {TabsPanel} from "./TabsPanel";

import {RatingInfoType, TabsPanelType} from "../types";
import {
  PlaygroundContainer,
  HeaderRow,
  Name,
  InfoContainer,
  InfoStatus,
  GreyText,
  ActionRequired,
  Updates
} from "./Playground.styled";

type PlaygroundProps = {
  actReq?: boolean;
  updates?: number;
  infoStatData?: string[];
  name: string;
  defaultActive: boolean;
  RatingInfo?: RatingInfoType;
  searchActive?: boolean;
  tabItems: TabsPanelType;
}

type PlaygroundState = {
  isActive?: boolean;
}

class Playground extends React.Component<PlaygroundProps, PlaygroundState> {
  state = {
    isActive: this.props.defaultActive
  }

  toggleItemState = (event: React.MouseEvent<HTMLDivElement, MouseEvent>):void => {
    event.preventDefault();
    this.setState({ isActive: !this.state.isActive })
  }

  render() {

    const {name, actReq, updates, infoStatData = [], RatingInfo, searchActive, tabItems } = this.props;
    return (
      <PlaygroundContainer isActive={this.state.isActive}>
        <MenuToggle onClick={this.toggleItemState} groundActive={this.state.isActive}/>

        <HeaderRow>
          <Name isActive={this.state.isActive}>{name}</Name>
          {this.state.isActive === false
            ? null
            :
            <InfoContainer>

              {infoStatData.map((infoItem, i: number )=> (
                <InfoStatus key={i} color="bbbcc4">{infoItem}</InfoStatus>
              ))}

            </InfoContainer>
          }
        </HeaderRow>


        {this.state.isActive == false
          ? (
            <GreyText>Площадка отключена</GreyText>
          ) : (
            <>
            <TabsPanel tabItems={tabItems}/>
            {searchActive
              ? <GreyText>Поиск заведений: 15 из 78…</GreyText>
              : <Rating RatingInfo={RatingInfo}/>
            }
            {actReq && <ActionRequired>Требует действий</ActionRequired>}
            {updates && <Updates>{updates} обновления</Updates>}
            </>
          )}

        {/*
          noRating === true && <GreyText>Портал без рейтинга</GreyText>

          searchActive && <GreyText>Поиск заведений: 15 из 78…</GreyText>
        */}



      </PlaygroundContainer>
    )
  }
};
export {Playground};
