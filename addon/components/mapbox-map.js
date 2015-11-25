import Ember from 'ember';
import layout from '../templates/components/mapbox-map';

export default Ember.Component.extend({
  layout: layout,
  divId: 'map',

  mapId: null,
  mapDblClickCoords: null,

  setup: Ember.on('didInsertElement', function() {
    Ember.run.scheduleOnce('afterRender', this, function () {
      let map = L.mapbox.map(this.get('divId'), this.get('mapId'));

      if (this.get('center') && this.get('zoom')) {
        map.setView(this.get('center'), this.get('zoom'));
      }
      this.set('map', map);
      map.on('dblclick', function (e) {
          console.log(
              // e.containerPoint is the x, y coordinates of the mouse event relative
              // to the top-left corner of the map
              // e.lngLat is the longitude, latitude geographical position of the event
              e.containerPoint.toString() + ', ' + e.latlng.toString(); 
      });      
    });

  }),
});
