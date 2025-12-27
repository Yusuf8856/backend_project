/*ApiError ek custom error hai
Jo hum khud create karte hain taaki:
proper status code mile
proper error message mile
frontend ko clean error response mile
*/

//ApiError ek custom error class hai jo HTTP status code, error message aur extra details ke saath structured error response provide karti hai.



class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went worng",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
