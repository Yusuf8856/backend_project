//ApiResponse ek class hai jo API responses ko standard format me return karne ke liye use hoti hai, jisme status code ke basis par success true ya false set hota hai.

class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
