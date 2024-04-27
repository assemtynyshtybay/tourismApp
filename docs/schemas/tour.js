const tourSchema = {
  type: "object",
  required: [
    "locationName",
    "duration",
    "price",
    "currency",
    "description",
    "imageCover",
  ],
  properties: {
    _id: {
      type: "ObjectId",
    },
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
};
export default tourSchema;
