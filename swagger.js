import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
// Swagger Schemas
import userSchema from "./docs/schemas/user.js";
// import cardSchema from "./docs/schemas/card.js";
import tourSchema from "./docs/schemas/tour.js";
import cardSchema from "./docs/schemas/card.js";

// Swagger Paths
import authPaths from "./docs/paths/auth.js";
import userPaths from "./docs/paths/user.js";
import tourPaths from "./docs/paths/tour.js";
import cardPaths from "./docs/paths/card.js";

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
        Card: cardSchema,
      },
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    paths: {
      ...authPaths,
      ...userPaths,
      ...tourPaths,
      ...cardPaths,
    },
  },
  apis: [],
};

const swaggerDoc = swaggerJSDoc(swaggerOptions);

export default function (app) {
  app.use("/api/tourismApp/", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}
