import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// Swagger Schemas
import userSchema from "./docs/schemas/user.js";
// import cardSchema from "./docs/schemas/card.js";
import tourSchema from "./docs/schemas/tour.js";
// Swagger Paths
import authPaths from "./docs/paths/auth.js";
import tourPaths from "./docs/paths/tour.js";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Simple Tourism App",
      version: "1.0.0",
      description: "The API list of Simple Social Network App",
    },
    components: {
      schemas: {
        User: userSchema,
        Tour: tourSchema,
      },
      securitySchemas: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    paths: {
      ...authPaths,
      ...tourPaths,
    },
  },
  apis: [],
};

const swaggerDoc = swaggerJSDoc(swaggerOptions);

export default function (app) {
  app.use("/api/tourismApp/", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}
