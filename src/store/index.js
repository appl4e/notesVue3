import {createStore} from 'vuex';
import notes from './notes';

// Create a new store instance.
const store = createStore({
  modules: {
    notes
  }
});

export default store;