import React, { useEffect, useState } from "react";

const Home = () => {
  const [loadingData, setLoadingData] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();

  let defineData = () => {
    const url = `http://localhost:4000/api/cars/`;
    fetch(url)
      .then((response) => response.text())
      .then((d) => {
        const data = JSON.parse(d);
        setLoadingData(data);
        setLoading(false);
        setError(undefined);
      })
      .catch((er) => {
        console.error("Error:", er);
        setError(er.message);
        setLoading(false);
        setLoadingData([]);
      });
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/cars/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(add()),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  const add = () => {
    let arrayInput = userInput.split(" ");
    let resultObj = {
      make: arrayInput[0],
      model: arrayInput[1],
      color: arrayInput[2],
      year: arrayInput[3],
    };
    loadingData.push(resultObj);
    setLoadingData([...loadingData]);
    return resultObj;
  };

  const handleClick = async (e) => {
    const saved = e;
    await fetch(
      `http://localhost:4000/api/cars/${e.target.id}`,
      {
        method: "DELETE",
      },
      e.persist()
    )
      .then((res) => res.json())
      .then(() =>
        setLoadingData(loadingData.filter((car) => car.id === saved.target.id))
      )
      .catch((err) => console.log(err));
    let newArray = loadingData.filter((car) => car.id !== saved.target.id);
    setLoadingData([...newArray]);
  };

  useEffect(() => {
    defineData();
  }, []);

  console.log(loadingData);

  return (
    <div className="main">
      <div>
        {error && <div>{error}</div>}
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <ul>
            {loadingData !== undefined && loadingData.length !== 0
              ? loadingData.map((obj, index) => {
                  return (
                    <div className="card" key={index}>
                      {obj.make} {obj.model} {obj.color} {obj.year} {obj.origin}
                      <button
                        className="button"
                        id={obj.id}
                        onClick={handleClick}
                      >
                        delete
                      </button>
                    </div>
                  );
                })
              : null}
          </ul>
        )}
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            onChange={handleChange}
            type="name"
            placeholder="make model colour year"
            data-testid="carinput"
          />
          <button className="button">insert new car</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
