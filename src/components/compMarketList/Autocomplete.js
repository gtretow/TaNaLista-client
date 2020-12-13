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
    categorySelected: Object.keys(this.props.original)[0],
  };

  handleChange = (e) => {
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
      categorySelected: Object.keys(this.props.original)[0],
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
    const { categorySelected, userInput } = this.state;
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: "",
      itemSelected: userInput
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" "),
      originalList: this.props.original,
      categorySelected: categorySelected,
    });
  };
  handleSelect = (e) => {
    this.setState({ ...this.state, categorySelected: e.currentTarget.value });
  };
  handleKeyDown = (e) => {
    const {
      userInput,
      activeOption,
      filteredOptions,
      categorySelected,
    } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: "",
        itemSelected:
          filteredOptions[activeOption] === undefined
            ? userInput
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ")
            : filteredOptions[activeOption],
        originalList: this.props.original,
        categorySelected: categorySelected,
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
      handleChange,
      handleClick,
      handleKeyDown,
      handleNew,
      handleSelect,

      state: {
        activeOption,
        filteredOptions,
        showOptions,
        userInput,
        itemSelected,
        originalList,
        categorySelected,
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
            <select className="btn" onChange={handleSelect}>
              {Object.keys(this.props.original).map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </select>
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
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={userInput}
        />
        {optionList}
        <SelectItens
          atual={itemSelected}
          original={originalList}
          newCategory={categorySelected}
        />
      </React.Fragment>
    );
  }
}

export default Autocomplete;
