import * as React from "react";
import styled from "@emotion/styled";
import "../components/layout.css";
import Card from "../components/card";
import printThumbnail from "../images/print_thumbnail.gif";
import bp from "../components/breakpoints";
import gestureEditor from "../images/gestureEditor.gif";
import breakoutGame from "../images/breakoutGame.gif";

const PageContainer = styled.div`
  color: #232129;
  padding: 20px;
  font-family: "-apple-system, Roboto, sans-serif, serif";
  padding: 88px 152px;
  ${bp.tablet} {
    padding: 64px 48px;
  }
  ${bp.mobile} {
    padding: 64px 20px;
  }
`;

const Logo = styled.h3`
  font-family: "Reem Kufi";
  margin: 0;
  position: fixed;
  top: 8px;
  left: 40px;
  ${bp.tablet} {
    position: absolute;
    left: 48px;
  }
  ${bp.mobile} {
    position: absolute;
    left: 20px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  > a {
    margin: 8px 0;
    font-family: "Source Code Pro", monospace;
    font-size: 16px;
    width: fit-content;
  }
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 16px;
  margin-top: 64px;
  scroll-margin-top: 20px;
`;

const ContentBody = styled.p`
  margin-bottom: 16px;
  &:not(:last-of-type) {
  }
`;

const Link = styled.a``;

const IndexPage = () => {
  return (
    <PageContainer>
      <title>Home Page</title>
      <Logo>marko.</Logo>
      <Navigation>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="https://www.linkedin.com/in/markorodic/">Experience</a>
        <a href="mailto:mrmarkorodic@gmail.com">Contact</a>
      </Navigation>
      <div>
        <Card
          subtitle="I’m a Software Engineer based in London interested in building interfaces that provide a better user experience."
          button="More about me"
          hasExpand
        >
          <ContentBody>
            I'm motivated by solving hard problems and creating interfaces that
            offer a great user experience. I strive to build products that have a purpose, delight users, and empower
            them to do more with technology.
          </ContentBody>
          <ContentBody>
            I work at Onfido where I build dashboards to help
            businesses verify who their users are safely. I attended the Recurse
            Center in New York City&ensp;
            <span role="img" aria-label="US flag">
              🇺🇸
            </span>
            , a self directed retreat for programmers. There I was able to explore how to make programming more
            accessible and human, played around with some lower-level languages, worked on some generative art projects and paired
            with lots of great people.
          </ContentBody>
          <ContentBody>
            I was born in Serbia&ensp;
            <span role="img" aria-label="Serbia flag">
              🇷🇸
            </span>
            , lived in Australia&ensp;
            <span role="img" aria-label="Australia flag">
              🇦🇺
            </span>
            &ensp;for a few years as a kid, and have grown up in London&ensp;
            <span role="img" aria-label="UK flag">
              🇬🇧
            </span>
            . In my spare time I like to dance, cook, and play tennis. You can
            find me on&ensp;
            <a href="https://www.instagram.com/markordc/">Instagram</a>, or 
            <a href="https://www.linkedin.com/in/markorodic/">LinkedIn</a>, and
            if you want to say hello here's my&ensp;
            <a href="mailto:mrmarkorodic@gmail.com">email</a>.
          </ContentBody>
        </Card>
      </div>
      <div>
        <Title id="projects">Some things I've worked on</Title>
        <Card
          title="Gestural code editor"
          image={gestureEditor}
          button="Exploring visual programming"
        >
          <ContentBody>
          I was interested in exploring programming through movement. I built a code editor that uses gestures to navigate and edit a snippet of code, similar to vim commands.          </ContentBody>
          <Link href="https://markorodic.github.io/lines_of_code/">
            See demo
          </Link>
        </Card>
        <Card
          title="Performance game"
          image={breakoutGame}
          button="Building a simple game in four different ways"
        >
          <ContentBody>
          One of the ways I learned how to program was by building games in the browser. They provided me with immediate feedback, on the screen, and dealt with enough complexity to help me reason about fundamental concepts.
          </ContentBody>
          <ContentBody>
          I was curious about functional programming and decided to build a clone of the breakout game using four different paradigms; vanilla JS, functional JS, Elm, and Rust (wasm). I used automated tests, with Jest and Puppeteer, to measure the code execution time of each game and map it to the speed of the ball, creating a visual of execution time between each implementation.
          </ContentBody>
          <Link href="https://markorodic.github.io/the-brick-break/">
            See demo
          </Link>
        </Card>
        <Card
          title="Print"
          image={printThumbnail}
          button="Visualising identity"
          hasImage
        >
          <ContentBody>
            Having worked in the identity space over the last couple of years I
            wondered how we could make the verification process more human and
            allow the user to see their identity. At a recent hackathon,
            together with a Product Designer at Onfido Fabien Mahe, we created generative
            art print using face detection data.
          </ContentBody>
          <ContentBody>Demo coming shortly.</ContentBody>
        </Card>
      </div>
    </PageContainer>
  );
};

export default IndexPage;
