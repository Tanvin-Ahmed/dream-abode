import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getSpecificPropertyInfo } from "../../app/actions/dataAction";
import "./Review.css";

const Review = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGetSpecificPropertyData = (id) => {
    history.push(`/checkout/${id}`);
  };

  useEffect(() => {
    dispatch(getSpecificPropertyInfo(parseInt(id, 10)));
  }, []);

  const { data } = useSelector((state) => ({
    data: state.dataReducer.specificPropertyInfo,
  }));

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${data.homeImg})` }}
        className="main__Image"
      >
        <div className="main__text">
          <h2>Price : BDT {data.price}</h2>
          <div className="buttonGroup">
            <button
              onClick={() => handleGetSpecificPropertyData(data.id)}
              className="_btn book__btn"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <img
              style={{ width: "500px", height: "250px", borderRadius: "10px" }}
              className="img-fluid"
              src={data.bedroomImg}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h3>Bed Room</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              necessitatibus consequatur deleniti neque incidunt labore
              laudantium optio nesciunt atque eveniet!
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <h3>Drawing Room</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              necessitatibus consequatur deleniti neque incidunt labore
              laudantium optio nesciunt atque eveniet!
            </p>
          </div>
          <div className="col-md-6">
            <img
              style={{ width: "500px", height: "250px", borderRadius: "10px" }}
              className="img-fluid"
              src={data.drawingRoomImg}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6">
            <img
              style={{ width: "500px", height: "250px", borderRadius: "10px" }}
              className="img-fluid"
              src={data.kitchenImg}
              alt=""
            />
          </div>
          <div className="col-md-6">
            <h3>Kitchen Room</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              necessitatibus consequatur deleniti neque incidunt labore
              laudantium optio nesciunt atque eveniet!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
