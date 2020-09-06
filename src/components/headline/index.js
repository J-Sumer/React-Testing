import React from 'react'

class Headline extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    const { header, desc } = this.props;

    if(!header) {
      return null;
    }

    return (
      <div data-test="HeadlineComponent">
        <h2 data-test="header">{header}</h2>
        <p data-test="desc">
          {desc}
        </p>
      </div>
    )
  }
}

export default Headline