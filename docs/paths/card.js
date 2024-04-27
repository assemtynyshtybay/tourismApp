const cardPaths = {
  "/card/getInfo/{userId}": {
    get: {
      summary: "Get info about card",
      tags: ["Card"],
      responses: {
        200: {
          description: "This route return card data of user",
        },
      },
      security: [
        {
          BearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "userId",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
    },
  },
  "/card/addToCard": {
    post: {
      summary: "Create card",
      security: [
        {
          BearerAuth: [],
        },
      ],
      tags: ["Card"],
      responses: {
        201: {
          description: "This route return created data of card",
        },
      },
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                userId: {
                  type: "ObjectId",
                  example: "662b9847d545af5a7b090722",
                },
                tourIds: {
                  type: ["ObjectId"],
                  example: [
                    "66210a6886429960fdbf8807",
                    "662a6054d817d61bb41a1eed",
                  ],
                },
              },
            },
          },
        },
      },
    },
  },
  "/card/deleteCard": {
    delete: {
      summary: "Delete card",
      security: [
        {
          BearerAuth: [],
        },
      ],
      tags: ["Card"],
      responses: {
        201: {
          description: "This route return deleted data of card",
        },
      },
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                userId: {
                  type: "ObjectId",
                },
              },
            },
          },
        },
      },
    },
  },
  "/card/deleteOneTour": {
    patch: {
      summary: "Update card",
      security: [
        {
          BearerAuth: [],
        },
      ],
      tags: ["Card"],
      responses: {
        201: {
          description: "This route return updated data of card",
        },
      },
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                userId: {
                  type: "ObjectId",
                },
                tourId: {
                  type: "ObjectId",
                },
              },
            },
          },
        },
      },
    },
  },
};
export default cardPaths;
