const counter = require("./counter");
console.log(counter.getAll);

const invokeAction = async ({
  action,
  id,
  currentValue,
  maxValue,
  minValue,
  error,
}) => {
  switch (action) {
    case "read": {
      const allValues = await counter.getAll();
      return console.log(allValues);
    }

    default:
      break;
  }
};
invokeAction({ action: "read" });
