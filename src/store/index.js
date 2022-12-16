import { createStore } from 'vuex';
import { postJson, getJson } from '@/utils/http';

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
    },
    removeFeed(state, feed) {
      state.feeds.splice(state.feeds.indexOf(feed), 1);
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
    getFeed(context, url) {
      context.commit('setArticles', [{
        title: 'Article 1',
        description: 'Content of article 1'
      },
      {
        title: 'Article 2',
        description: 'Content of article 2'
      },
      {
        title: 'Article 3',
        description: 'Content of article 3'
      }
      ]);
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
      context.commit('removeFeed', feed);
    }
  },
  modules: {
  }
});
