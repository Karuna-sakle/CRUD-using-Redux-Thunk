import React, { Component } from 'react';
import Select from 'react-select';

const options = [
  { value: 'santoshi', label: 'santoshi' },
  { value: 'ruchika', label: 'ruchika' },
  { value: 'ambalika', label: 'Ambalika' },
  { value: 'karuna', label: 'Karuna' },
  { value: 'madhu', label: 'madhu' },
];


class SelectPost extends Component {

  state = {
    selectedOption: null,
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  render() {
    const { selectedOption } = this.state;

    return (
      <div className="App" >
        <h3>select friends</h3>
        <Select
          isMulti = {true}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />

        {this.state.selectedOption ? (
            <div>
              <h3>Selected friends</h3>
              <ul>
                {this.state.selectedOption.map((option) =>
                  <li key={option.value}>
                    {option.label}
                  </li>
                )}
              </ul>
            </div>) : ''
          }


      </div>
    );
  }

}

export default SelectPost;