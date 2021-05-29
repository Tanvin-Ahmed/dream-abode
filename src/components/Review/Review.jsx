import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSpecificPropertyInfo } from "../../app/actions/dataAction";

const Review = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificPropertyInfo(parseInt(id, 10)));
  }, [id])

  const { data } = useSelector(state => ({
    data: state.dataReducer.specificPropertyInfo
  }))

  console.log(data);


  return (
    <div>
      <h1>This is Review Page</h1>
    </div>
  );
};

export default Review;
