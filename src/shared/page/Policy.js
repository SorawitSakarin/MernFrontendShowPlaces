//rfce
import React from "react";
import Button from "../components/FormElements/Button";
import Card from "../components/UIElements/Card";
import QRCode from "react-qr-code";

export const Policy = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
    <Card >
      <h2>Hello world</h2>
      <p>This section is to testing print function</p>
      <QRCode value={props.value} />
    </Card>
    </div>
  );
});
