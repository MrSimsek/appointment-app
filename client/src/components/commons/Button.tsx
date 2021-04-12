import React from "react";

type Props = {
  text: string;
};

export default function Button(props: Props) {
  const { text } = props;

  return <button className="rounded-md p-2 mr-2">{text}</button>;
}
