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

  handleClick = () => {
    console.log('clicked');
    // this.setState(prevState => ({ active: prevState.active!}))
    // if (this.props.filters.sort === 'priceSortAs') {
    //   this.setState({ active: true });
    //   console.log('should be active', this.state);
    // } else {
    //   this.setState({ active: false });
    //   console.log('should not be active', this.state);
    // }
    // this.props.setFilters('priceSortAsc');
  };

  render() {
    const { active } = this.state;

    return (
      <div>
        <Form>
          <Form.Group widths="equal">
            <Button toggle active={active} onClick={this.handleClick}>
              Sort by Price
            </Button>
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
