import React, { Component } from "react";
import PropTypes from "prop-types";

import SelectItens from "./SelectItens";

export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
  };
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: "",
    itemSelected: "",
    originalList: {},
  };

  handleChance = (e) => {
    const { options } = this.props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value,
      itemSelected: "",
      original: {},
    });
  };
  handleClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: "",
      itemSelected: e.currentTarget.innerText,
      originalList: this.props.original,
    });
  };
  handleNew = (e) => {
    const { userInput } = this.state;
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: "",
      itemSelected: userInput,
      originalList: this.props.original,
    });
  };

  handleKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption],
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    } else {
      this.setState({
        activeOption: 0,
        filteredOptions,
        showOptions: true,
        userInput: e.currentTarget.value,
        itemSelected: "",
        original: {},
      });
    }
  };

  render() {
    const {
      handleChance,
      handleClick,
      handleKeyDown,
      handleNew,

      state: {
        activeOption,
        filteredOptions,
        showOptions,
        userInput,
        itemSelected,
        originalList,
      },
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = "option-active";
              }
              return (
                <li className={className} key={index} onClick={handleClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <button onClick={handleNew} className="btn">
              Inserir novo produto
            </button>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <input
          type="text"
          className="searchBar"
          placeholder="Procure o produto que deseja"
          onChange={handleChance}
          onKeyDown={handleKeyDown}
          value={userInput}
        />
        {optionList}
        <SelectItens atual={itemSelected} original={originalList} />
      </React.Fragment>
    );
  }
}

export default Autocomplete;
