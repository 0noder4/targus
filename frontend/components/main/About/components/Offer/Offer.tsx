import React from "react";
import Button from "/components/global/Button/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "/components/global/Card/Card";

import "./Offer.scss";

const Offer = () => {
  return (
    <div className="itp-l-offer">
      <Card className="itp-l-offer__companies">
        <CardTitle>Firmy</CardTitle>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatus.
        </CardContent>
        <CardFooter>
          <Button>zobacz katalog</Button>
        </CardFooter>
      </Card>
      <Card className="itp-l-offer__cv">
        <CardTitle>Konsultacje CV</CardTitle>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatus.
        </CardContent>
      </Card>
      <Card className="itp-l-offer__workshops">
        <CardTitle>warsztaty</CardTitle>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatus.
        </CardContent>
        <CardFooter>
          <Button disabled={true}>Zapisy wkrótce...</Button>
        </CardFooter>
      </Card>
      <Card className="itp-l-offer__pdi">
        <CardTitle>PDI</CardTitle>
        <CardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatus.
        </CardContent>
      </Card>
    </div>
  );
};

export default Offer;
