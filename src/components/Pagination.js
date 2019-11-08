import React, { Fragment } from "react";
import { Buttons, Button } from "rebul";

const Pagination = props => {
  const { isLoading, onClickBack, onClickNext, showBack, showNext } = props;
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

export default Pagination;
