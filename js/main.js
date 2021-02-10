import {createProfile} from './create-profiles.js';
import {NUMBER_PROFILES} from './constants-data.js';

let profiles = [];

for (let i = 0; i <= NUMBER_PROFILES - 1; i++) {
  profiles[i] = createProfile();
}
