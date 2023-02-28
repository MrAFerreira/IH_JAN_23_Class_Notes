import React from 'react';

function Button(props) {
  //url
  //text
  const { url, text } = props;
  return (
    <a href={url} target="_blank">
      <button>Visit {text}</button>
    </a>
  );
}

export default Button;
