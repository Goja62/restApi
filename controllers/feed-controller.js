exports.getPost = (req, res, next) => {
  res.status(200).json({
    posts: [{ title: 'First title', content: 'This is the first post' }],
  });
};

exports.createtPost = (req, res, next) => {
  // Databas
  const title = req.body.title;
  const content = req.body.content;

  res.status(201).json({
    message: 'Post Created!',
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
