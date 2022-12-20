import React from "react";
import Card from "../component/Card";

type Props = {};

function Play({}: Props) {
  return (
    <div className='grid gap-2 grid-cols-2'>
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

export default Play;
