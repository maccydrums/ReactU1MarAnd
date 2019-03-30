import React, { Component } from 'react';
import styles from './CardComponent.module.css';

class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: true
    }
  }

  showContent = (condition) => {
    if (this.state.condition) {
      return (
        this.setState({condition: false})
      )
    } return (
      this.setState({condition: true})
    )
  }

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
