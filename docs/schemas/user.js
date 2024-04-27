const userSchema = {
  type: "object",
  required: ["username", "email", "password", "isAdmin"],
  properties: {
    _id: {
      type: "ObjectId",
    },
    username: {
      type: "string",
    },
    email: {
      type: "string",
      example: "example@mail.kz",
    },
    password: {
      type: "string",
      description: "Hashed password by BCrypt",
    },
    isAdmin: {
      type: "boolean",
    },
    information: {
      type: "object",
      properties: {
        fullName: {
          type: "string",
        },
        pasportNumber: {
          type: "string",
        },
      },
    },
  },
};
export default userSchema;
