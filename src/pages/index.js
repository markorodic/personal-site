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
            offer a great user experience. I strive to build elegant solutions,
            and build products that have a purpose, delight users, and empower
            them to do more with technology.
          </ContentBody>
          <ContentBody>
            I'm a front-end engineer at Onfido where I build dashboards to help
            businesses verify who their users are safely. I attended the Recurse
            Center in New York City&ensp;
            <span role="img" aria-label="US flag">
              🇺🇸
            </span>
            , a self directed retreat for programmers to work on open source
            software. There I was able to explore making programming more
            accessible and human, learning lower-level languages, and pairing
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
            for a few years as a kid, and have grown up in London&ensp;
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
            Having spent a few years as a dancer, I wanted to explore
            programming with movement. I was also interested in how compilers
            work so I built a visual code editor to explore programming using
            gestures. The editor takes gestures as input and allows the user to
            edit text similar to vim commands.
          </ContentBody>
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
            One the first things I did when I learnt to program was to build a
            simple game in the browser. I was curious about functional
            programming and decided to revisit this project as a way to learn
            more about it.
          </ContentBody>
          <ContentBody>
            I built an in-browser clone of the breakout game using four
            different paradigms; vanilla JS, functional JS, Elm, and Rust
            (wasm). A game provided me with immediate feedback, on the screen,
            and dealt with enough complexity to help me understand functional
            mechanisms whilst allowing me to reason about it. I measured the
            code execution time of each game using Jest and Puppeteer and mapped
            the speed of the ball to the respective performance to visualise the
            execution time of each game.
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
            show the user their identity in a visual way. At a recent hackathon,
            together with a Product Designer Fabien Mahe, we created generative
            art from a user's face detection data to visualise their identity.
          </ContentBody>
          <ContentBody>Demo coming shortly.</ContentBody>
        </Card>
      </div>
    </PageContainer>
  );
};

export default IndexPage;
