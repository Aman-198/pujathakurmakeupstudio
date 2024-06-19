//Bussiness logic are written here

// import the model
const Todo = require("../models/Todo");

// create a new todo item
exports.createTodo = async (req, res) => {
  try {
    //extract title and description from the request body
    const { title, description } = req.body;
    //create a new TODO object and insert in DB
    const response = await Todo.create({ title, description });

    //send the json response with a succes flag
    res.status(201).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.err(err);
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
