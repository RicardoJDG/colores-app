import React, { useState, useEffect } from "react";
import { Container, Button } from "@material-ui/core";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import Color from "./Color";

const Grid = () => {
  //Definimos variables y colores a usar
  const [colores, setColores] = useState();
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    const URL = `https://reqres.in/api/colors?page=${pageNum}`;
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setColores(json.data);
      });
  }, [pageNum]);

  const handleNext = () => {
    if (pageNum === 2) {
      return;
    }
    setPageNum(pageNum + 1);
  };

  const handlePrev = () => {
    if (pageNum === 1) {
      return;
    }
    setPageNum(pageNum - 1);
  };

  return (
    <>
      <Container>
        <h1 className="header">Colores</h1>
        {!colores ? (
          <h1>Cargando...</h1>
        ) : (
          <div className="color-container">
            {colores.map((color) => (
              <Color colorInfo={color} />
            ))}
          </div>
        )}
        <div className="footer">
          <Button
            onClick={handlePrev}
            color="secondary"
            startIcon={<ArrowLeftIcon />}
          >
            Anterior
          </Button>
          <Button
            onClick={handleNext}
            color="primary"
            endIcon={<ArrowRightIcon />}
          >
            Siguiente
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Grid;
