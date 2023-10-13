//"use client";

import { MagneticText } from "./magnetic_text";

export default function ExampleMagneicText({ children }) {
  return (
    <div className="mx-auto flex max-w-xl items-center justify-center">
      <div>
        <MagneticText
          body={children}
          as="div"
          className="w-full max-w-2xl text-center font-var text-4xl md:text-6xl"
        >
          {(tokens) =>
            tokens.map((token, index) => (
              <MagneticText.Token
                key={index}
                body={token}
                className="inline-block cursor-default whitespace-pre"
              />
            ))
          }
        </MagneticText>
      </div>
    </div>
  );
}
