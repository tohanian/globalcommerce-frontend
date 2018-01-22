import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Icon, Popup, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';

class ListingMarker extends Component {
  state = {
    color: 'blue',
    clicked: false
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.hoverListingCard !== this.props.hoverListingCard &&
      nextProps.hoverListingCard === nextProps.mlsId
    ) {
      this.setState({ color: 'red' });
    } else {
      this.setState({ color: 'blue' });
    }
  }

  convertToDollarAmount = number => {
    if (number) {
      const dollarAmount =
        '$' +
        number.toFixed(0).replace(/./g, function(c, i, a) {
          return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? ',' + c : c;
        });
      return dollarAmount;
    }
  };

  handleMouseOver = () => this.setState({ color: 'red' });
  handleMouseOut = () => this.setState({ color: 'blue' });
  handleClick = () => this.setState({ clicked: true });

  mapMarker = () => (
    <Icon
      name="marker"
      size="huge"
      link
      onClick={this.handleClick}
      color={this.state.color}
      onMouseOver={this.handleMouseOver}
      onMouseOut={this.handleMouseOut}
    />
  );

  formattedPopupContent = () => {
    return (
      <div>
        <Image src={this.props.popupImage} />
        {this.props.popupContent}
      </div>
    );
  };

  render() {
    if (this.state.clicked) {
      return <Redirect to={`/listings/${this.props.mlsId}`} />;
    } else {
      return (
        <Popup
          trigger={this.mapMarker()}
          header={this.convertToDollarAmount(this.props.popupHeader)}
          content={this.formattedPopupContent()}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    hoverListingCard: state.listing.hoverListingCard
  };
};

export default connect(mapStateToProps)(ListingMarker);
