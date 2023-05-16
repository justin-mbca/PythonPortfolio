var index = lunr(function () {
    // Index configuration and field definitions will go here
    this.field('title');
    this.field('content');
  });

  index.add({
    id: 'page1',
    title: 'Page 1',
    content: 'This is the content of Page 1.'
  });
