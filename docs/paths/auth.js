const authPaths = {
  "/auth/register": {
    post: {
      summary: "Register new user",
      tags: ["Auth"],
      responses: {
        201: {
          description: "This route return data of new user",
        },
      },
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                username: {
                  type: "string",
                  example: "John",
                },
                email: {
                  type: "string",
                  example: "example@mail.kz",
                },
                password: {
                  type: "string",
                },
                isAdmin: {
                  type: "boolean",
                  default: false,
                },
              },
            },
          },
        },
      },
    },
  },
  "/auth/login": {
    post: {
      summary: "Login user",
      tags: ["Auth"],
      responses: {
        200: {
          description: "This route return JWT of user",
        },
      },
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "example@mail.kz",
                },
                password: {
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
  },
};

export default authPaths;
