export const Login = () => {
  return (
    <>
      <div className="login-page">
        <h1>Enter email to continue</h1>

        <form>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <input
              type="submit"
              name="submitButton"
              id="submitButton"
              value={"Continue"}
            />
          </div>
        </form>
      </div>
    </>
  );
};
