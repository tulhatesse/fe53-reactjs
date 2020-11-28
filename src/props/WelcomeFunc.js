import React from "react";

// Function component luôn có 1 params là props
// export default function WelcomeFunc({age, name})
export default function WelcomeFunc(props) {
  return (
    <div>
      Hello {props.name} - Age: {props.age}
    </div>
  );
}
