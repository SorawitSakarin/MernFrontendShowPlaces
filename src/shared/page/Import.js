import React, { useState } from "react";
import Card from "../components/UIElements/Card";

const Import = () => {
  const [file, setFile] = useState();
  const [textRead, setTextRead] = useState();

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const csvOutput = event.target.result;
        setTextRead(csvOutput.split("\n"));
        console.log(csvOutput.split("\n")[1]);
      };
      fileReader.readAsText(file);
      console.log(file);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Card>
        <h1>REACTJS CSV IMPORT EXAMPLE </h1>

        <form>
          <input
            type={"file"}
            id={"csvFileInput"}
            accept={".csv"}
            onChange={handleOnChange}
          />

          <button
            onClick={(e) => {
              handleOnSubmit(e);
            }}
          >
            IMPORT CSV
          </button>
        </form>

        <span>
          <p>CSV file:</p>
          <p>{textRead}</p>
        </span>
      </Card>
    </div>
  );
};

export default Import;
