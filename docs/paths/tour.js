const tourPaths = {
  "/tours/getAll": {
    get: {
      summary: "Get info about tours",
      tags: ["Tour"],
      responses: {
        200: {
          description: "This route return data of tours",
        },
      },
      security: [
        {
          BearerAuth: [],
        },
      ],
    },
  },
  "/tours/create": {
    post: {
      summary: "Create tour",
      security: [
        {
          BearerAuth: [],
        },
      ],
      tags: ["Tour"],
      responses: {
        201: {
          description: "This route return created data of tour",
        },
      },
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                locationName: {
                  type: "string",
                },
                duration: {
                  type: "number",
                },
                price: {
                  type: "number",
                },
                currency: {
                  type: "string",
                },
                description: {
                  type: "string",
                },
                imageCover: {
                  type: "string",
                  default: null,
                },
                images: {
                  type: ["string"],
                  default: null,
                },
              },
            },
          },
        },
      },
    },
  },
  "/tours/getById/{id}": {
    get: {
      summary: "Get tour",
      security: [
        {
          BearerAuth: [],
        },
      ],
      tags: ["Tour"],
      responses: {
        200: {
          description: "This route return data of tour by id",
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
  "/tours/update/{id}": {
    patch: {
      summary: "Update tour",
      security: [
        {
          BearerAuth: [],
        },
      ],
      tags: ["Tour"],
      responses: {
        201: {
          description: "This route return data of updated tour",
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
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                locationName: {
                  type: "string",
                },
                duration: {
                  type: "number",
                },
                price: {
                  type: "number",
                },
                currency: {
                  type: "string",
                },
                description: {
                  type: "string",
                },
                imageCover: {
                  type: "string",
                  default: null,
                },
                images: {
                  type: ["string"],
                  default: null,
                },
              },
            },
          },
        },
      },
    },
  },
  "/tours/delete/{id}": {
    delete: {
      summary: "Delete tour",
      security: [
        {
          BearerAuth: [],
        },
      ],
      tags: ["Tour"],
      responses: {
        201: {
          description: "This route return data of deleted tour",
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
};
export default tourPaths;
