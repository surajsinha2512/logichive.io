import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const Cards = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  let data = [];

  useEffect(() => {
    fetch("http://localhost:9999")
      .then((r) => r.json())
      .then((r) => {
        console.log(r);
        setDetails(state => [...state,...r])
        data.push(r);
      })
      .then((r) => {
        setLoading(true);
        //setDetails([...details,data]);
        
        setLoading(false);
      })
      .catch((e) => {
        console.log("error" + e);
      });
  }, []);

  return (
    <>
      {!loading &&
        details.map((value,index) => {
          return (
            <>
              {console.log(value,index)}
              <div className="card">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={value.img}
                    style={{ height: "150px", width: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>{value.title}</Card.Title>
                    <Card.Text>{value.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Cards;