import React, { useState } from "react";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import IconButton from "@material-ui/core/IconButton";

const Color = (props) => {
  const [copied, setCopied] = useState(false);
  const { id, name, year, color, pantone_value } = props.colorInfo;

  const style = {
    colorPicker: {
      backgroundColor: color,
    },
  };

  const handleClick = () => {
    navigator.clipboard.writeText(color).then(
      () => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      },
      () => console.log("Welp, didnt work")
    );
  };

  return (
    <div key={id} style={style.colorPicker} className="color-picker">
      <p>{year}</p>
      <div className="name-and-code">
        <p>{name}</p>
        <p>
          <b>{color}</b>
        </p>
        {!copied ? (
          <IconButton onClick={handleClick} aria-label="copy">
            <FileCopyIcon />
          </IconButton>
        ) : (
          <h2>¡Copiado!</h2>
        )}
      </div>
      <h3 className="pantone">{pantone_value}</h3>
    </div>
  );
};

export default Color;
