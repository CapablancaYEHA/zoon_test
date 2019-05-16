import * as React from 'react';

import {
  Container,
  TabItem,
  SyncTab
} from "./TabsPanel.styled";

import {TabsPanelType} from "../../types";

type TabsPanelProps = {
  tabItems: TabsPanelType;
}

const TabsPanel = ({tabItems}:TabsPanelProps) => (
  <Container>
    <SyncTab isSynced={tabItems.sync}>
      {tabItems.sync ? "Cинхронизовано" : "Создаём 3 страницы"}
    </SyncTab>
    { (tabItems.items !== null && tabItems.items !== undefined) ? (
      tabItems.items.map((item, i) => (
      <TabItem key={i}>{item}</TabItem>
    ))
    ) : (
      null
    )
  }
  </Container>
);

export {TabsPanel};
