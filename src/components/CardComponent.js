import React, { Component } from 'react';
import styles from './CardComponent.module.css';

//Komponent som innehåller en wrapper med en button som togglar om innehållet ska visas. Renderar även det som passas in som children
class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: true
    }
  }

  //Toggle som sätter condition till antingen true eller false
  showContent = (condition) => {
    if (this.state.condition) {
      return this.setState({condition: false})
    }
    return this.setState({condition: true})
  }

  //Om condition är true så visas innehållet (children som passas in)
  showChildren = (condition) => {
    if (this.state.condition) {
      return <div className="cardContent">{this.props.children}</div>;
    }
  }

  render() {
    return (
      <div className={styles.cardWrapper}>
      {this.showChildren()}
      <button type="button" className="btn btn-primary" onClick={this.showContent}>Show content</button>
      </div>
    );
  }
}

export default CardComponent;
