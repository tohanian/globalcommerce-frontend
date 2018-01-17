import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class ListingCard extends Component {
  convertToDollarAmount = number => {
    const dollarAmount =
      '$' +
      number.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? ',' + c : c;
      });
    // debugger;
    return dollarAmount;
  };

  render() {
    const l = this.props.listing;
    return (
      <Link to={`/listings/${l.mlsId}`}>
        <Card link color="blue">
          <Image src={l.photos[0]} />
          <Card.Content>
            <Card.Header>
              {this.convertToDollarAmount(l.listPrice)}
              <Icon name="heart outline" />
            </Card.Header>
            <Card.Meta>
              <div>{`${l.property.bedrooms} bd / ${l.property.bathsFull +
                l.property.bathsHalf * 0.5 +
                l.property.bathsThreeQuarter * 0.75} ba ● ${
                l.property.area
              } sq.ft`}</div>
            </Card.Meta>
            <Card.Description>
              {`${l.address.streetNumberText} ${l.address.streetName.replace(
                /\w\S*/g,
                txt => {
                  return (
                    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                  );
                }
              )}`}
              <br />
              <small>{`${l.address.city}, ${l.address.state}`}</small>
            </Card.Description>
          </Card.Content>
        </Card>
      </Link>
    );
  }
}
