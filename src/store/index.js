import { createStore } from 'vuex';
import { postJson, getJson, deleteJson } from '@/utils/http';

export default createStore({
  state: {
    token: localStorage.getItem('auth-token'),
    feeds: [],
    articles: []
  },
  getters: {
    token(state) {
      return state.token;
    },
    feeds(state) {
      return state.feeds;
    },
    articles(state) {
      return state.articles;
    }
  },
  mutations: {
    setToken(state, value) {
      state.token = value;
      localStorage.setItem('auth-token', value);
    },
    setArticles(state, value) {
      state.articles = value;
    },
    setFeeds(state, feeds) {
      state.feeds = feeds;
    }
  },
  actions: {
    registerUser(context, data) {
      return postJson({
        url: '/register',
        data
      }).then(obj => {
        if (obj.token) {
          context.commit('setToken', obj.token);
        }
        return obj;
      });
    },
    login(context, data) {
      return postJson({
        url: '/login',
        data
      }).then(obj => {
        if (obj.token) {
          context.commit('setToken', obj.token);
        }
        return obj;
      });
    },
    getFeed(context, feed) {
      return getJson({
        url: `/feeds/${feed._id}`
      }).then(data => {
        if (data.err) {
          return data;
        }
        context.commit('setArticles', data.items);
        return data;
      });
    },
    getFeeds(context) {
      return getJson({
        url: '/feeds'
      }).then(data => {
        if (data.feeds) {
          context.commit('setFeeds', data.feeds);
        }
        return data;
      });
    },
    addFeed(context, data) {
      return postJson({
        url: '/feeds',
        data
      }).then(data => {
        if (data.feeds) {
          context.commit('setFeeds', data.feeds);
          return data;
        }
      });

    },
    removeFeed(context, feed) {
      return deleteJson({
        url: `/feeds/${feed._id}`
      }).then(data => {
        if (data.feeds) {
          context.commit('setFeeds', data.feeds);
          return data;
        }
      });
    }
  },
  modules: {
  }
});
