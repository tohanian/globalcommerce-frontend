import React, { Component } from 'react';
import { Card, Image, Icon, Reveal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListingCard extends Component {
  state = { liked: false };

  componentDidMount() {
    if (this.props.currentUser) {
      const listingLiked = !!this.props.currentUser.likes.find(
        like => like.mlsId === this.props.listing.mlsId
      );
      if (listingLiked) {
        this.setState({ liked: true });
      }
    }
  }

  convertToDollarAmount = number => {
    const dollarAmount =
      '$' +
      number.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? ',' + c : c;
      });
    return dollarAmount;
  };

  addLike = e => {
    e.preventDefault();
    this.props.addLike(this.props.listing.mlsId);
    this.setState({ liked: true });
  };

  deleteLike = e => {
    e.preventDefault();
    if (this.props.currentUser) {
      const likeId = this.props.currentUser.likes.find(
        like => like.mlsId === this.props.listing.mlsId
      ).id;
      this.props.deleteLike(likeId);
    }
    this.setState({ liked: false });
  };

  handleMouseOver = () =>
    this.props.setHoverListingCard(this.props.listing.mlsId);

  handleMouseOut = () => this.props.unsetHoverListingCard();

  //   import React from 'react'
  // import { Header, Button, Popup, Grid } from 'semantic-ui-react'
  //
  // const PopupExampleFlowing = () => (
  //   <Popup
  //     trigger={<Button>Show flowing popup</Button>}
  //     flowing
  //     hoverable
  //   >
  //     <Grid centered divided columns={3}>
  //       <Grid.Column textAlign='center'>
  //         <Header as='h4'>Basic Plan</Header>
  //         <p><b>2</b> projects, $10 a month</p>
  //         <Button>Choose</Button>
  //       </Grid.Column>
  //       <Grid.Column textAlign='center'>
  //         <Header as='h4'>Business Plan</Header>
  //         <p><b>5</b> projects, $20 a month</p>
  //         <Button>Choose</Button>
  //       </Grid.Column>
  //       <Grid.Column textAlign='center'>
  //         <Header as='h4'>Premium Plan</Header>
  //         <p><b>8</b> projects, $25 a month</p>
  //         <Button>Choose</Button>
  //       </Grid.Column>
  //     </Grid>
  //   </Popup>
  // )
  //
  // export default PopupExampleFlowing

  render() {
    const l = this.props.listing;
    return (
      <Card
        link
        href={`/listings/${l.mlsId}`}
        color="green"
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        centered
      >
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
              <Icon onClick={this.deleteLike} name="heart" color="red" />
            ) : (
              <Icon onClick={this.addLike} name="heart outline" />
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

const mapStateToProps = state => {
  return {
    currentUser: state.user.user
  };
};

export default connect(mapStateToProps, actions)(ListingCard);
