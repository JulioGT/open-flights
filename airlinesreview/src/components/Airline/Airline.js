import React from "react";
import axios from "axios";
import styled from "styled-components";

import Header from "./Header";
import ReviewForm from "./ReviewForm";
import Review from "./Review";

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  $:last-child {
    background: #000;
  }
`;
const Main = styled.div`
  padding-left: 50px;
`;

function Airline(props) {
  const [airline, setAirline] = React.useState({});
  const [review, setReview] = React.useState({});
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    const slug = props.match.params.slug;
    const url = `http://localhost:3000/api/v1/airlines/${slug}`;

    axios
      .get(url)
      .then((resp) => {
        setAirline(resp.data);
        setLoaded(true);
      })
      .catch((resp) => console.log(resp));
  }, [props.match.params.slug]);

  const handleChange = (e) => {
    e.preventDefault();

    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //const csrfToken = document.querySelector("[name=csrf-token]").content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = "csj123jaf99";

    const airline_id = airline.data.id;
    axios
      .post("http://localhost:3000/api/v1/reviews", { review, airline_id })
      .then((resp) => {
        const included = [...airline.included, resp.data.data];
        setAirline({ ...airline, included });
        setReview({ title: "", description: "", score: 0 });
      })
      .catch((resp) => {
        console.log(resp);
      });
  };

  const setRating = (score, e) => {
    e.preventDefault();

    setReview({ ...review, score });
  };

  const reviews = () => {
    let revs = null;
    if (loaded && airline.included) {
      revs = airline.included.map((item, index) => {
        console.log(item.attributes);
        return (
          <Review key={index} attributes={item.attributes} />
        )
      })
    }
    return revs;
  }

  

  return (
    <Wrapper className="wrapper">
      {loaded && (
        <>
          <Column className="column">
            <Main>
              <Header
                attributes={airline.data.attributes}
                reviews={airline.included}
              />
              {reviews()}
            </Main>
          </Column>
          <Column className="column">
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={airline.data.attributes}
              review={review}
              setRating={setRating}
            />
          </Column>
        </>
      )}
    </Wrapper>
  );
}

export default Airline;
