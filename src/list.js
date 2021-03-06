(function(exports) {
  function List() {
  this.articles = []
}

List.prototype = {

  getArticles: function() {
    return this.articles
  },

  addArticle: function(article) {
    this.articles.push(article)
  },

  view: function(article) {
  listHTML =
  '<ul style="list-style:none">' +
    '<li>' +
      '<div align=center>' +
        '<img src=' + article.getThumbnail() + '>' +
        '<h2>' + article.getHeadline() + '<h2>'
        '<input type=button onclick=' + 'location.href="' + article.getUrl() + '" value="Read full article"/>' +
      '</div>' +
    '</li>' +
  '</ul>'
  return listHTML
  }
}

  exports.List = List
})(this);
