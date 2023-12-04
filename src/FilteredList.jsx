import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "all",
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  //TODO (FilteredList): Set the state of the "type" state variable depending on what is passed in
  onFilter = (event) => {
    // this.setState({ type: event.target.value });
    this.setState({type: event});
  }

  //TODO (FilteredList): Change filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    // return item.name.toLowerCase().search(this.state.search) !== -1;
    // return item.type === this.state.type && item.name.toLowerCase().includes(this.state.search);
    return (this.state.type === "all" || item.type === this.state.type) && item.name.toLowerCase().includes(this.state.search);
  }

  render() {
    return (
      <div className="filter-list">

          {/* TODO (FilteredList): Create a Dropdown Menu with three different menu options: Fruit, Vegetables, and All */}
        
        <DropdownButton id="typeDropdown" title="Select the Type" onSelect={this.onFilter}>
          <Dropdown.Item eventKey="all" style={{ '&:hover': { backgroundColor: 'pink' } }}>All</Dropdown.Item>
          <Dropdown.Item eventKey="Fruit" style={{ '&:hover': { backgroundColor: 'pink' } }}>Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable" style={{ '&:hover': { backgroundColor: 'pink' } }}>Vegetables</Dropdown.Item>
        </DropdownButton>
        <br/>

        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
