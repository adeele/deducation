import React, {Component} from 'react';

import GTip from 'grommet/components/Tip';

import './Highlight.css';

let count = 0;

class Highlight extends Component {
  constructor(props) {
    super(props);
    this.state = {showTip: false};
  }

  toggleTip = event => {
    event.stopPropagation();
    this.setState({showTip: !this.state.showTip});
  };

  render() {
    const id = count++;
    const {showTip} = this.state;
    const {children, type, hint, visible, onClick} = this.props;

    const discover = e => {
      onClick(e);
      this.toggleTip(e);
    };

    return (
      <React.Fragment>
        {visible &&
          showTip &&
          hint && (
            <GTip
              colorIndex="neutral-4"
              target={`highlight--${id}`}
              onClose={this.toggleTip}>
              <span className="tip">{hint}</span>
            </GTip>
          )}
        <span
          onClick={
            (visible && this.toggleTip) || (onClick && (e => discover(e)))
          }
          className={
            visible
              ? `highlight highlight--${id} ${type ? `highlight--${type}` : ''}`
              : ''
          }>
          {children}
        </span>
      </React.Fragment>
    );
  }
}

export default Highlight;
