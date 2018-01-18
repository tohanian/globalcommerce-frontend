import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

// Filter Options
const bedroomsFilterOptions = [
  { key: '0', text: 'All', value: '0' },
  { key: '1', text: '1+', value: '1' },
  { key: '2', text: '2+', value: '2' },
  { key: '3', text: '3+', value: '3' },
  { key: '4', text: '4+', value: '4' },
  { key: '5', text: '5+', value: '5' },
  { key: '6', text: '6+', value: '6' }
];
const bathroomsFilterOptions = [
  { key: '0', text: 'All', value: '0' },
  { key: '1', text: '1+', value: '1' },
  { key: '2', text: '2+', value: '2' },
  { key: '3', text: '3+', value: '3' },
  { key: '4', text: '4+', value: '4' },
  { key: '5', text: '5+', value: '5' },
  { key: '6', text: '6+', value: '6' }
];

export default class ListingsFilterForm extends Component {
  state = { active: false };

  handleClick = (e, { name }) => {
    this.setState({ active: !this.state.active });
    if (!this.state.active) {
      this.props.setSort(name);
    } else {
      this.props.setSort('none');
    }
  };

  render() {
    const { active } = this.state;

    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Button
              toggle
              name="sortByLowestPrice"
              active={active}
              onClick={this.handleClick}
            >
              Sort By Lowest Price
            </Button>
            <Form.Input
              name="minPrice"
              label="Min Price"
              placeholder="min"
              onChange={this.props.minPriceChange}
              value={this.props.minPrice}
            />
            <Form.Input
              name="maxPrice"
              label="Max Price"
              placeholder="max"
              onChange={this.props.maxPriceChange}
              value={this.props.maxPrice}
            />
            <Form.Select
              fluid
              label="Beds"
              options={bedroomsFilterOptions}
              placeholder="Beds"
              onChange={this.props.setFilters('bedroomsFilter')}
              value={this.props.filters.bedroomsFilter}
            />
            <Form.Select
              fluid
              label="Baths"
              options={bathroomsFilterOptions}
              placeholder="Baths"
              onChange={this.props.setFilters('bathroomsFilter')}
              value={this.props.filters.bathroomsFilter}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}
