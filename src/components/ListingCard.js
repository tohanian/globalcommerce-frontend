import React, { Component } from 'react';
import { Card, Image, Icon, Reveal } from 'semantic-ui-react';

export default class ListingCard extends Component {
  state = { liked: false };

  convertToDollarAmount = number => {
    const dollarAmount =
      '$' +
      number.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? ',' + c : c;
      });
    return dollarAmount;
  };

  handleHeartClick = e => {
    e.preventDefault();
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const l = this.props.listing;
    return (
      <Card link href={`/listings/${l.mlsId}`} color="green" centered>
        <div
          style={{
            width: '100hh',
            height: '180px',
            overflow: 'hidden'
          }}
        >
          <Reveal animated="fade">
            <Reveal.Content visible>
              <Image src={l.photos[0]} />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={l.photos[1]} />
            </Reveal.Content>
          </Reveal>
        </div>

        <Card.Content>
          <Card.Header>
            {this.state.liked ? (
              <Icon onClick={this.handleHeartClick} name="heart" color="red" />
            ) : (
              <Icon onClick={this.handleHeartClick} name="heart outline" />
            )}

            {`   `}
            {this.convertToDollarAmount(l.listPrice)}
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
    );
  }
}
