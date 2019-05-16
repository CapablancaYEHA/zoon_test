import * as React from 'react';

import {
  MenuContainer,
  Modal,
  Action
} from "./MenuToggle.styled";

type MenuToggleState = {
  isOpen?: boolean;
}

type MenuToggleProps = {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  groundActive: boolean;
}

class MenuToggle extends React.Component<MenuToggleProps, MenuToggleState> {
  state = {
    isOpen: false
  }

  getButtonText = (arg: boolean):any => {
    switch(arg) {
      case false:
        return "Включить";
      case true:
        return "Выключить";
    }
  }

  handleMenu = (event: React.MouseEvent<HTMLDivElement, MouseEvent>):void => {
    event.preventDefault();
    this.setState({isOpen:!this.state.isOpen })
  }

  render() {

    return (
      <MenuContainer onClick={this.handleMenu} isOpen={this.state.isOpen} >
        <Modal visible={this.state.isOpen}>
          <Action onClick={this.props.onClick}>{this.getButtonText(this.props.groundActive)}</Action>
        </Modal>
      </MenuContainer>
    )
  }
};
export {MenuToggle};
