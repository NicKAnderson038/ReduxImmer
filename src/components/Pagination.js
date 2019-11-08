import React, { Component, Fragment } from "react";
import { Buttons, Button } from "rebul";

export default class Pagination extends Component {
  render = () => {
    const {
      isLoading,
      onClickBack,
      onClickNext,
      showBack,
      showNext
    } = this.props;
    return (
      <Fragment>
        <div>
          <Buttons>
            {showBack && <Button onClick={onClickBack}>Back</Button>}
            {showNext && <Button onClick={onClickNext}>Next</Button>}
          </Buttons>
        </div>
        {isLoading && <p>Loading...</p>}
      </Fragment>
    );
  };
}
