class BasicResponse {
  constructor({ code, message, response }) {
    this.status = code;
    this.message = message;
    if (response) this.response = response;
  }
}

module.exports = BasicResponse;
