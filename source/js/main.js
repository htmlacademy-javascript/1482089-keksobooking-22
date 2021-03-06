/* global _:readonly */

import './check-form.js';
import './map.js';
import './upload-images.js'

import {RERENDER_DELAY} from './constants-data.js';
import {setListener} from './filters.js';
import {addOffersToMap, typeInput, priceInput, roomsInput, guestInput, featuresCheckList} from './map.js';
import {getData} from './data.js';

getData((profiles) => {
  addOffersToMap(profiles)
  setListener(_.debounce(() => {addOffersToMap(profiles)}, RERENDER_DELAY), typeInput)
  setListener(_.debounce(() => {addOffersToMap(profiles)}, RERENDER_DELAY), priceInput);
  setListener(_.debounce(() => {addOffersToMap(profiles)}, RERENDER_DELAY), roomsInput);
  setListener(_.debounce(() => {addOffersToMap(profiles)}, RERENDER_DELAY), guestInput);
  setListener(_.debounce(() => {addOffersToMap(profiles)}, RERENDER_DELAY), featuresCheckList);
});
