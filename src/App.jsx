import React from "react";
import ExampleSpotlightCard from "./components/spotlight_card/example";
import ExampleDetails from "./components/details/example";
import ExampleMarquee from "./components/marquee/example";
import ExampleMagneicText from "./components/magnetic_text/example";
import ExampleTextReveal from "./components/text_reveal/example";
import ExampleMotionText from "./components/motion_text/example";
import ExampleScrollObserver from "./components/scroll_observer/example";
import ExampleTextHighlighter from "./components/text_highlighter/example";
import ExampleScrollReveal2 from "./components/scroll_reveal/example2";
import ExampleColorSwapper from "./components/color_swaper/example";
import ExampleSpotlightButton from "./components/spotlight_button/example";

const App = () => {
  return (
    <div>
      <ExampleSpotlightCard />
      <ExampleDetails />
      <ExampleMarquee />
      <ExampleMagneicText>Joel Nicolas Sartori</ExampleMagneicText>
      <ExampleTextReveal>Hola, soy Joel Nicolas Sartori</ExampleTextReveal>
      <ExampleMotionText>
        {`Revelando El Texto. Revisando Todo Esto`}
      </ExampleMotionText>
      <ExampleScrollObserver />
      <ExampleTextHighlighter />
      <ExampleScrollReveal2 />
      <ExampleSpotlightButton />
      {/* <ExampleColorSwapper /> */}
    </div>
  );
};

export default App;
