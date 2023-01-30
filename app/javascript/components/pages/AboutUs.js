import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import blakepic from "../assets/blakepic.png";
import tylerpic from "../assets/tylerpic.png";
import mannypic from "../assets/mannypic.png";
import immanuelpic from "../assets/immanuelpic.png";

const AboutUs = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">Who We Are</h1>
      <div className="cardLine">
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Product Manager" src={blakepic} />
          <CardBody className="card-text">
            <CardTitle tag="h5">Blake Carta</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Product Manager
            </CardSubtitle>
            <CardText>
              Air force veteran, customer service extraordinaire, and now
              programmer/tech lover. Looking forward to a bright future in the
              tech industry, writing some beautiful and functional code.
            </CardText>
            <Button>
              <a href="https://github.com/BCarta7" target="_blank">
                GitHub
              </a>
            </Button>
            <Button>
              <a
                href="https://www.linkedin.com/in/blake-carta-36b407258/?original_referer="
                target="_blank"
              >
                LinkedIn
              </a>
            </Button>
          </CardBody>
        </Card>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Project Manager" src={tylerpic} />
          <CardBody className="card-text">
            <CardTitle tag="h5">Tyler Cahoon-Kasheta</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Project Manager
            </CardSubtitle>
            <CardText>
              My name is Tyler Cahoon-Kasheta, and I currently hail from the
              Massachusetts Peninsula called Cape Cod. I come from a helicopter
              maintenance background, turning wrenches and trying not to drop
              washers high up on the main rotor blades. My time now is spent
              developing creative and useful web applications, so long as the
              internet is operational.
            </CardText>
            <Button>
              <a href="https://github.com/TKash89" target="_blank">
                GitHub
              </a>
            </Button>
            <Button>
              <a
                href="https://www.linkedin.com/in/tyler-kasheta/"
                target="_blank"
              >
                LinkedIn
              </a>
            </Button>
          </CardBody>
        </Card>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Tech Lead" src={mannypic} />
          <CardBody className="card-text">
            <CardTitle tag="h5">Manuel Espinoza</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Tech Lead
            </CardSubtitle>
            <CardText>
              I am a full stack web developer based in San Diego, CA who has
              always been passionate about computers, gaming, and building
              things. Previous work in the food service industry has solidified
              my communication, conflict resolution, and problem-solving skills
              while also placing an emphasis on teamwork. Stay tuned to see my
              work unfold!
            </CardText>
            <Button>
              <a href="https://github.com/manny-espinoza" target="_blank">
                GitHub
              </a>
            </Button>
            <Button>
              <a
                href="https://www.linkedin.com/in/manny-espinoza-dev/"
                target="_blank"
              >
                LinkedIn
              </a>
            </Button>
          </CardBody>
        </Card>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Handsome Design Lead" src={immanuelpic} />
          <CardBody className="card-text">
            <CardTitle tag="h5">Immanuel P.</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Design Lead
            </CardSubtitle>
            <CardText>
              Transitioning into a new career. Have many concepts and ideas that
              can be brought fourth through technology. Passionate about
              learning...looking forward to the future.
            </CardText>
            <Button>
              <a href="https://github.com/Mannyplg" target="_blank">
                GitHub
              </a>
            </Button>
            <Button>
              <a
                href="https://www.linkedin.com/in/immanuel-pettigrew-538626258/"
                target="_blank"
              >
                LinkedIn
              </a>
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
