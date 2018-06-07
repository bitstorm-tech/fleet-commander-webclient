<template>
  <div id="root">
    <fc-menu></fc-menu>
    <div class="fc-panel resources">
      <table>
        <tbody>
        <tr>
          <td>Titanium</td>
          <td class="amount">{{titanium}}</td>
          <td>
            <button @click="updateResource(0)">Harvest {{titaniumHarvested}}</button>
          </td>
        </tr>
        <tr>
          <td>Fuel</td>
          <td class="amount">{{fuel}}</td>
          <td>
            <button @click="updateResource(1)">Harvest {{fuelHarvested}}</button>
          </td>
        </tr>
        <tr>
          <td>Energy</td>
          <td class="amount">{{energy}}</td>
          <td>
            <button @click="updateResource(2)">Harvest {{energyHarvested}}</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import fcMenu from "@/components/Menu.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    fcMenu
  }
})
export default class Overview extends Vue {
  intervalRef: any;
  // rules;
  titanium = 0;
  fuel = 0;
  energy = 0;
  titaniumHarvested = 0;
  fuelHarvested = 0;
  energyHarvested = 0;

  updateResource(type: number) {
    // axios
    //   .put("/resources", type)
    //   .then(response => {
    //     const resource = Resources[type];
    //     const resourceHarvested = resource + "Harvested";
    //     this[resource] = response.data;
    //     this[resourceHarvested] = 0;
    //   })
    //   .catch(console.log);
  }

  created() {
    // axios
    //   .get("/rules")
    //   .then(response => (rules = response.data))
    //   .catch(console.log);

    // axios
    //   .get("/resources")
    //   .then(response => {
    //     this.titanium = response.data.titanium;
    //     this.fuel = response.data.fuel;
    //     this.energy = response.data.energy;
    //   })
    //   .catch(console.log);

    this.intervalRef = setInterval(() => {
      // if (rules) {
      //   this.titaniumHarvested += rules.TitaniumHarvester.perSecond[0];
      //   this.fuelHarvested += rules.FuelHarvester.perSecond[0];
      //   this.energyHarvested += rules.EnergyHarvester.perSecond[0];
      // }
      this.titaniumHarvested += 15;
      this.fuelHarvested += 7;
      this.energyHarvested += 5;
    }, 2000);
  }

  // destroyed() {
  //   clearInterval(intervalRef);
  // }
}
</script>

<style scoped>
#root {
  display: flex;
  padding: 15px;
}

.resources {
  display: flex;
  width: 50%;
  flex-direction: column;
  padding: 15px;
  margin-left: 10px;
}

td {
  padding: 10px;
}

.amount {
  width: 150px;
}

button {
  width: 200px;
}
</style>
