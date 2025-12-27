//👉 asyncHandler ek safety cover hai jo async controller ke errors ko Express tak safely pahucha deta hai.


// asyncHandler is a function that takes another function as input
// This function is the actual Express middleware
// Express automatically passes req, res, and next
// Promise.resolve ensures requestHandler is treated as a Promise
// Call the actual controller function with req, res, next
// If any error occurs inside the async function,
// catch it and pass it to Express error middleware
// Export asyncHandler so it can be used in routes/controllers


const asyncHandler = (requestHandler) => (req, res, next) =>
  Promise.resolve(requestHandler(req, res, next))

    .catch(next);

export { asyncHandler };
