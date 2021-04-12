import React from "react";

type Props = {
  text: string;
};

export default function FormErrorText(props: Props) {
  const { text } = props;
  return <p className="text-red-500 text-xs">{text}</p>;
}
