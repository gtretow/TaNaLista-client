import React, { Component } from "react";
import PropTypes from "prop-types";

import SearchBar from "./SearchBar";
import SelectItens from "./SelectItens";

export class Autocomplete extends Component {
  static propTypes = {
    options: PropTypes.instanceOf(Array).isRequired,
  };
  //state contendo as informações das mudanças no search
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: "",
    itemSelected: "",
    originalList: {},
    categorySelected: Object.keys(this.props.original)[0],
  };

  //função de mudança conforme escreve na search
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
  //função ao clicar nos produtos existentes envia para o SelectItens
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
  //função ao clicar em inserir novo produto
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
  //função para salvar o nome do novo produto conforme a usuário escreve
  handleSelect = (e) => {
    this.setState({ ...this.state, categorySelected: e.currentTarget.value });
  };
  //função que identifica a tecla clicada e interage, teclas => Enter, Seta para baixo, Seta para Cima
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
  //no método render renderiza a lista dinâmica conforme o escrito na searchbar
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
    //se o escrito/produto existir é renderizado
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
      }
      //e for um produto novo vai renderizar o else
      else {
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
    //componente SearchBar é o componete de procura
    //componente SelectItens é o que cria as tabelas automaticamente conforme escolhe os produtos na search, tanto existentes quanto novos.
    return (
      <React.Fragment>
        <SearchBar
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
          userInput={userInput}
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
