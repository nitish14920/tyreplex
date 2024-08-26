import React from "react";

const Test = () => {
  return (
    <div class="row">
      <div class="col-md-6 bg-primary ">
        <div class="row bg-success">
          <div class="col-md-6 bg-info">Nested Column 1</div>
          <div class="col-md-6">Nested Column 2</div>
        </div>
      </div>
    </div>
  );
};

export default Test;
