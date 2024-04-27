const userPaths = {
  "/user/getInfo/{id}": {
    get: {
      summary: "Get info about user",
      tags: ["User"],
      security: [
        {
          BearerAuth: [],
        },
      ],
      responses: {
        200: {
          description: "This route return data of user",
        },
      },
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
    },
  },
  "/user/delete": {
    delete: {
      summary: "Delete user",
      security: [
        {
          BearerAuth: [],
        },
      ],
      tags: ["User"],
      responses: {
        201: {
          description: "This route return deleted data of user",
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
              },
            },
          },
        },
      },
    },
  },
  "/user/update/{id}": {
    patch: {
      summary: "Update info about user",
      security: [
        {
          BearerAuth: [],
        },
      ],
      tags: ["User"],
      responses: {
        201: {
          description: "This route return updated data of user",
        },
      },
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      //   fullName, username, email, pasportNumber
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
                fullName: {
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
                pasportNumber: {
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

export default userPaths;
