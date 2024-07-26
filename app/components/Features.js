import React from "react";

const Features = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-2">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">People</h5>
              <p className="card-text">
                Find a teacher, coach, or expert for your hobby interest...
              </p>
              <button className="btn btn-outline-primary">Connect</button>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Place</h5>
              <p className="card-text">Find a class, school, playground...</p>
              <button className="btn btn-outline-primary">Meet up</button>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Product</h5>
              <p className="card-text">
                Find equipment or supplies required for your hobby...
              </p>
              <button className="btn btn-outline-primary">Get it</button>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Program</h5>
              <p className="card-text">
                Find events, meetups and workshops related to your hobby...
              </p>
              <button className="btn btn-outline-primary">Attend</button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-5 text-center">
        <button className="btn btn-outline-success">Add your own</button>
      </div>
      <div className="text-center">
        <blockquote className="blockquote">
          <p className="mb-0">
            In a fast-growing and ever-changing city like Bangalore...
          </p>
          <footer className="blockquote-footer">
            Shubha Nagarajan <cite title="Source Title">Classical Dancer</cite>
          </footer>
        </blockquote>
      </div> */}
    </>
  );
};

export default Features;
