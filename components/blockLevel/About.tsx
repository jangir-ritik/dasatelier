import React from "react";

function About() {
  return (
    <div className="flex flex-col gap-8 justify-center items-start">
      <div className="gap-2 flex flex-col justify-center items-start">
        <h3 className="font-bold uppercase">Who we are</h3>
        <p className="text-description">
          By default, the values they receive will be the default values you
          have specified when creating the contexts. However, by itself this
          isnt useful because the default values never change.
        </p>
      </div>
      <div className="gap-2 flex flex-col justify-center items-start">
        <h3 className="font-bold uppercase">What is design thinking</h3>
        <p className="text-description">
          To update the containerHeight when the viewport size changes, you can
          use the resize event listener in combination with the useEffect hook.
          Heres how you can modify your ContentContainer component to achieve.
        </p>
      </div>
      <div className="gap-2 flex flex-col justify-center items-start">
        <h3 className="font-bold uppercase">
          What if you get hurt, would it stop you?
        </h3>
        <p className="text-description">
          By adding these type annotations, you provide TypeScript with the
          necessary information to understand the types involved, and it should
          resolve the issue youre facing. By adding these type annotations, you provide TypeScript with the
          necessary information to understand the types involved, and it should
          resolve the issue youre facing.
        </p>
      </div>
    </div>
  );
}

export default About;
