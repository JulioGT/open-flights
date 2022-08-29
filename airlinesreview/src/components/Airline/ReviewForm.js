import React from "react";
import styled from "styled-components";

import Gray from "./Stars/Gray";
import Selected from "./Stars/Selected";
import Hover from "./Stars/Hover";

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 20px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  margin: 20px 0;
  padding: 20px;
  background: #fff;
`;
const RatingBox = styled.div`
  background: #fff;
  display: flex;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8,${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: 0.3s;
    display: block;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Selected}");
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,${Hover}");
  }
`;

const Field = styled.div`
  border-radius: 4px;

  input {
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #6e6e6e;
    margin: 0 0 12px 0;
    padding: 12px;
    width: 96%;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #6e6e6e;
    margin: 12px 0;
    padding: 12px;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  margin-left: 15px;
  border-radius: 0;
  padding-bottom: 80px;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  height: 100vh;
  padding-top: 100px;
  background: black;
  padding-right: 80px;
`;

const SubmitButton = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;
  padding: 12px 12px;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #71b406;
  margin-top: 20px;
  transition: ease-in-out 0.2s;
  text-align: -webkit-center;
  width: 100%;

  &:hover {
    background: #71b406;
    color: #000;
    border: 1px solid #71b406;
    border-color: #71b406;
  }
`;

const Headline = styled.div`
  padding: 15px 0;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

const RatingTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

const Error = styled.div`
  width: 100%;
  color: rgb(255, 80, 44);
  border: 1px solid rgb(255, 80, 44);
  border-radius: 4px;
  margin-top: 8px;
  text-align: center;
  padding: 4px;
`;

export default function ReviewForm(props) {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <div key={index}>
        <input
          type={"radio"}
          value={score}
          checked={props.review.score === score}
          name={"rating"}
          onChange={() => {}}
          id={`rating-${score}`}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </div>
    );
  });

  return (
    <Wrapper className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <Headline>
          Have an experience with {props.attributes.name}? Share your review
        </Headline>
        <Field className="field">
          <input
            type="text"
            onChange={props.handleChange}
            value={props.review.title}
            name="title"
            placeholder="Review Title"
          />
        </Field>
        <Field className="field">
          <input
            type="text"
            onChange={props.handleChange}
            value={props.review.description}
            name="description"
            placeholder="Review Description"
          />
        </Field>
        <Field className="field">
          <RatingContainer className="rating-container">
            <RatingTitle className="rating-title-text">
              Rate this Airline
            </RatingTitle>
            <RatingBox className="rating-box">{ratingOptions}</RatingBox>
          </RatingContainer>
        </Field>
        <SubmitButton type="submit">Submit your Review</SubmitButton>
        {props.error && <Error>{props.error}</Error>}
      </form>
    </Wrapper>
  );
}
