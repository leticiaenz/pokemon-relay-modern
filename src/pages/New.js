import React, { Component } from "react";
import styled from "styled-components";
import { mutationNewPokemonCommit } from "../mutations/pokemonMutations";

const Container = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  color: #495057;
  h1 {
    padding-bottom: 20px;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      margin: 10px;
      padding: 10px;
      height: 20px;
      width: 200px;
    }
    button {
      margin: 10px;
      height: 30px;
      width: 200px;
      font-size: 16px;
    }
  }
`;

export default class New extends Component {
  state = {
    pokemon: "",
    number: "",
    image: ""
  };

  render() {
    return (
      <Container>
        <h1>Adicionar Novo Pokemon</h1>
        <form>
          <label>Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <label>Number:</label>
          <input
            type="text"
            value={this.state.number}
            onChange={e => this.setState({ number: e.target.value })}
          />
          <label>Image:</label>
          <input
            type="text"
            value={this.state.image}
            onChange={e => this.setState({ image: e.target.value })}
          />
          <button onClick={this.newPokemon}>Salvar</button>
        </form>
      </Container>
    );
  }

  pokemonMutationSuccess = () => {
    this.props.history.push("/");
  };

  newPokemon = e => {
    e.preventDefault();
    const { name, number, image } = this.state;

    const variables = {
      name,
      number,
      image
    };

    mutationNewPokemonCommit(variables, this.pokemonMutationSuccess);
  };
}
