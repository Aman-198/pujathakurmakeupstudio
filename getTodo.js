//Bussiness logic are written here

// import the model
const Todo = require("../models/Todo");

// create a new todo item
exports.getTodo = async (req, res) => {
  try {
    //fetch all todo items grom databases
    const todos = await Todo.find({});

    // response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo Data is Fetch ",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

exports.getTOdoById = async (req, res) => {
  try {
    //extract todo items basis on id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // data for given id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with Given Id",
      });
    }

    // Data for given Id Found
    res.status(200).json({
      success: true,
      data: todo,
      message: `TOdo ${id} data successfully fetch`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
