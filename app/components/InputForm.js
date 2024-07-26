import Image from "next/image";

function InputForm() {
  return (
    <div>
      <div
        style={{
          paddingRight: "2px",
          paddingLeft: "10px",
          paddingTop: "7px",
          paddingBottom: "5px",
          cursor: "pointer",

          border: "1px solid black",
          borderColor: "gray",
          width: "500px",
          borderRadius: "8px",
        }}
      >
        <Image
          src="/Google.png"
          alt="Brand Logo"
          width={40}
          height={40}
          style={{ height: "30px", justifyItems: "end", paddingLeft: "10px" }}
        />

        <span style={{ paddingLeft: "150px", fontWeight: "bold" }}>
          Continue with Google
        </span>
      </div>
      <br />
      <div
        style={{
          paddingRight: "2px",
          paddingLeft: "10px",
          paddingTop: "7px",
          paddingBottom: "5px",
          cursor: "pointer",

          border: "1px solid black",
          borderColor: "gray",
          width: "500px",
          borderRadius: "8px",
        }}
      >
        <Image
          src="/Facebook.png"
          alt="Brand Logo"
          width={30}
          height={30}
          style={{ height: "30px", justifyItems: "end", paddingLeft: "10px" }}
        />

        <span style={{ paddingLeft: "150px", fontWeight: "bold" }}>
          Continue with Facebook
        </span>
      </div>
      <br />
      <p className="paragraph">Or connect with</p>

      <form>
        <input
          placeholder="Email"
          type="email"
          style={{
            paddingRight: "2px",
            paddingLeft: "10px",
            paddingTop: "7px",
            paddingBottom: "5px",
            cursor: "pointer",
            color: "GrayText",
            border: "1px solid white",
            borderColor: "aliceblue",
            boxShadow: "1px ",
            width: "500px",
            borderRadius: "8px",
          }}
        />
        <br />
        <br />
        <input
          placeholder="Password"
          type="password"
          style={{
            paddingRight: "2px",
            paddingLeft: "10px",
            paddingTop: "7px",
            paddingBottom: "5px",
            cursor: "pointer",
            color: "GrayText",
            border: "1px solid white",
            borderColor: "aliceblue",
            boxShadow: "1px ",
            width: "500px",
            borderRadius: "8px",
          }}
        />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "500px",
          }}
        >
          <div>
            <input type="checkbox" />
            <span style={{ paddingLeft: "2px" }}> Remember me</span>
          </div>
          <div>
            <Image
              src="/Vector (1).png"
              alt="Brand Logo"
              width={15}
              height={15}
              style={{ marginRight: "5px" }}
            />
            <span style={{ paddingLeft: "5px" }}>Forgot password</span>
          </div>
        </div>
        <br />
        <div
          style={{
            paddingRight: "2px",
            paddingLeft: "10px",
            paddingTop: "7px",
            paddingBottom: "5px",
            cursor: "pointer",

            border: "1px solid black",
            borderColor: "gray",
            width: "500px",
            borderRadius: "8px",
          }}
        >
          <span style={{ paddingLeft: "150px", fontWeight: "bold" }}>
            Continue
          </span>
        </div>
      </form>
    </div>
  );
}

export default InputForm;
