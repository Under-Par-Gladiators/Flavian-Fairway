import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const AboutUs = () => {
  return (
    <div>
      <h2>AboutUs</h2>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Blake C.</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Product Manager
          </CardSubtitle>
          <CardText>The Boss</CardText>
          <Button>GitHub</Button>
          <Button>linkedIn</Button>
        </CardBody>
      </Card>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Tyler K.</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Project Manager
          </CardSubtitle>
          <CardText>The Other Boss</CardText>
          <Button>GitHub</Button>
          <Button>linkedIn</Button>
        </CardBody>
      </Card>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Manny E.</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Tech Lead
          </CardSubtitle>
          <CardText>Their Boss</CardText>
          <Button>GitHub</Button>
          <Button>linkedIn</Button>
        </CardBody>
      </Card>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Immanuel P.</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Design Lead
          </CardSubtitle>
          <CardText>The Boss, Me too</CardText>
          <Button>GitHub</Button>
          <Button>linkedIn</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default AboutUs;
