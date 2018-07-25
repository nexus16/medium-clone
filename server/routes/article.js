const articleController = require('./../controllers/article.ctrl');
const multipart = require('connect-multiparty');
const multipartWare = multipart();

module.exports = (router) => {
    router.route('/articles').get(articleController.getAll);
    router.route('/article').post(multipartWare, articleController.addArticle);
    router.route('/article/comment').post(articleController.commentArticle);
    router.route('/article/:id').get(articleController.getArticle);
}