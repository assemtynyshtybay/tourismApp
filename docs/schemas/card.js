const Card = {
  type: "object",
  required: ["tourId", "userId"],
  properties: {
    _id: {
      type: "ObjectId",
    },
    userId: {
      type: "ObjectId",
      description: "Ref to User model",
    },
    tourId: {
      type: ["ObjectId"],
      description: "Ref to User model",
    },
  },
};
export default Card;
