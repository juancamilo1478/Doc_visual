<script>
import { reactive, onMounted, watch } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "@/assets/svg/local.svg";

export default {
  name: "MapLeaflet",
  props: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    description: { type: String, default: "Ubicación" },
  },
  setup(props) {
    const state = reactive({
      lat: props.latitude,
      lng: props.longitude,
      desc: props.description,
      map: null,
      marker: null,
    });

    onMounted(() => {
      state.map = L.map("map").setView([state.lat, state.lng], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(state.map);

      const customIcon = L.icon({
        iconUrl: markerIcon,
        iconSize: [32, 32],
      });

      state.marker = L.marker([state.lat, state.lng], { icon: customIcon })
        .addTo(state.map)
        .bindPopup(state.desc)
        .openPopup();
    });

    // Detectar cambios en props y actualizar mapa
    watch(
      () => [props.latitude, props.longitude, props.description],
      ([newLat, newLng, newDesc]) => {
        if (state.map && state.marker) {
          state.marker.setLatLng([newLat, newLng]).setPopupContent(newDesc).openPopup();
          state.map.setView([newLat, newLng], 13, { animate: true }); // Centra con animación
          state.map.invalidateSize(); // Corrige posibles errores de tamaño
        }
      },
      { immediate: true } // Asegura que el mapa se actualice al montar el componente
    );

    return { state };
  },
};
</script>

<template>
  <div class="h-96">
    <div id="map" class="h-full w-full"></div>
  </div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
