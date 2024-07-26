import React from "react";
import Image from "next/image";
const AddNew = () => {
  return (
    <div class="p-5">
      <div class="card ">
        <div class="card-body">
          <div className="d-flex" style={{ paddingLeft: "15px" }}>
            <Image
              src="/plus.png"
              alt="Brand Logo"
              width={22}
              height={22}
              style={{ marginRight: "10px" }}
            />
            <h5 className="card-title ">Add your own</h5>
          </div>
          <div class="card-body">
            <p class="card-text">
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
            </p>
            <button
              href="#"
              className="btn "
              style={{
                border: "1px solid #8064A2",
                height: "40px",
                width: "120px",
                padding: "5px",
              }}
            >
              <span style={{ fontSize: "14px" }}> Add new</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
