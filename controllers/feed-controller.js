exports.getPost = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: '1',
        title: 'First title',
        content: 'This is the first post',
        imageUrl: 'images/Jana.jpg',
        creator: {
          name: 'Goja',
        },
        createdAt: new Date(),
      },
    ],
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
