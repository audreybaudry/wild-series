// Some data to make the trick

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions

const categoryActions = (req, res) => {
  res.json(categories);
};

const categoriesId = (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  const category = categories.find((cat) => cat.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};
// Export them to import them somewhere else

module.exports = { categoryActions, categoriesId };
