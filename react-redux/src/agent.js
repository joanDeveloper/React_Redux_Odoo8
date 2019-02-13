import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'https://conduit.productionready.io/api';
const API_ODOO = 'http://localhost:8069';

const encode = encodeURIComponent;
const responseBody = res => res.body;
//const responseBodyOdoo = res => res.text;

let token = null;
//const tokenPlugin = req => {if (token) {req.set('Authorization', `Bearer ${token}`);}}
/*const tokenPluginOdoo = token => {if (token) {console.log("TOKENNNN_ODOOO",token)}}*/
//{"authorization":token}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
  getOdoo: url =>
    superagent.get(`${API_ODOO}${url}`).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody),
  postOdoo: (url, body) =>
    superagent.post(`${API_ODOO}${url}`, body).then(responseBody),
  postOdooToken: (url, token) =>
    superagent.post(`${API_ODOO}${url}`, token).then(responseBody)
};

const Auth = {
  current: () =>
    requests.get('/user'),
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
  register: (username, email, password) =>
    requests.post('/users', { user: { username, email, password } }),
  save: user =>
    requests.put('/user', { user })
};

const User = {
  register: (username, email, password) =>
    requests.postOdoo('/register', { "username":username, "email":email, "password":password }),
  login: (email, password) =>
    requests.postOdoo('/signin', { "email":email, "password":password } ),
  current: (token) =>
    requests.postOdooToken('/user',{"token":token}),

}

const Tags = {
  getAll: () => requests.get('/tags')
};

const Contact = {
  sendEmail: (name, email, subject, comment) => 
    requests.postOdoo('/contact', { contact: { name, email, subject, comment } })
};
const Devices = {
  all: page =>
    requests.postOdoo('/device', {'offset': page ? page * 10 : 0, 'limit': 10}),
  feed: () =>
    requests.postOdoo('/device',{'offset': 0, 'limit': 10}),
  detail: slug =>
    requests.postOdoo('/device-detail', {"slug":slug}),
  byCategory: (page,slug) =>
    requests.postOdoo('/device-category', {'offset': page ? page * 10 : 0, 'limit': 10, 'slug':slug}),
  test: page =>
    requests.postOdoo('/testing', {'offset': page ? page * 10 : 0, 'limit': 10}),
  offers: () =>
    requests.postOdoo('/device-offers',{}),
}

const Categories = {
  all: slug =>
    requests.postOdoo('/categories',{"slug": slug ? slug : ""}),
}

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

const omitSlug = article => Object.assign({}, article, { slug: undefined })
const Articles = {
  all: page =>
    requests.get(`/articles?${limit(10, page)}`),
  byAuthor: (author, page) =>
    requests.get(`/articles?author=${encode(author)}&${limit(5, page)}`),
  byTag: (tag, page) =>
    requests.get(`/articles?tag=${encode(tag)}&${limit(10, page)}`),
  del: slug =>
    requests.del(`/articles/${slug}`),
  favorite: slug =>
    requests.post(`/articles/${slug}/favorite`),
  favoritedBy: (author, page) =>
    requests.get(`/articles?favorited=${encode(author)}&${limit(5, page)}`),
  feed: () =>
    requests.get('/articles/feed?limit=10&offset=0'),
  get: slug =>
    requests.get(`/articles/${slug}`),
  unfavorite: slug =>
    requests.del(`/articles/${slug}/favorite`),
  update: article =>
    requests.put(`/articles/${article.slug}`, { article: omitSlug(article) }),
  create: article =>
    requests.post('/articles', { article })
};

const Comments = {
  create: (slug, comment, user) =>
    requests.postOdoo(`/comments`, { "slug_device":slug, "comment":comment, "user":user }),
  get: (id_slug) =>
    requests.postOdoo(`/getComments`, { "device_id":id_slug })
  
    
  /*delete: (slug, commentId) =>
    requests.del(`/articles/${slug}/comments/${commentId}`),
  forArticle: slug =>
    requests.get(`/articles/${slug}/comments`)*/
};

const Profile = {
  follow: username =>
    requests.post(`/profiles/${username}/follow`),
  get: username =>
    requests.get(`/profiles/${username}`),
  unfollow: username =>
    requests.del(`/profiles/${username}/follow`)
};

export default {
  Articles,
  Devices,
  Categories,
  Auth,
  Comments,
  Profile,
  Tags,
  Contact,
  User,
  setToken: _token => { token = _token; }
};
