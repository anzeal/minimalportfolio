import React from "react";
import Card from "../component/Card";

type Props = {};

function Work({}: Props) {
  return (
    <div className='grid gap-4 grid-cols-2'>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default Work;
