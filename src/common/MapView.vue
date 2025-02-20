<template>
  <div style="height: 600px; width: 800px">
    <l-map ref="map" :zoom="zoom" :center="center" style="height: 100%; width: 100%">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      />
    </l-map>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  setup() {
    const zoom = ref(2);
    const center = ref([47.41322, -1.219482]);
    const map = ref(null);

    onMounted(() => {
      if (map.value) {
        console.log("Mapa montado correctamente", map.value);
      } else {
        console.error("El mapa no se ha montado correctamente");
      }
    });

    return { zoom, center, map };
  },
};
</script>
