<template>
  <div style="padding: 5px; padding-top: 8%">
    <v-row>
      <v-col cols="12" sm="7" md="6" lg="5" class="ml-16">
        <v-sheet elevation="10"  rounded="xl">
          <v-sheet class="pa-3 text-right pb-12" rounded="t-xl"> </v-sheet>
          <div class="pa-4">
            <v-chip-group active-class="primary--text" column>
              <v-chip v-for="tag in tags" :key="tag">
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="12" sm="7" md="6" lg="5" class="ml-16">
        <v-sheet elevation="10" rounded="xl">
          <v-sheet class="pa-3 text-right pb-12" dark rounded="t-xl"> </v-sheet>

          <div class="pa-4">
            <v-chip-group active-class="primary--text" column>
              <v-chip v-for="tag in tags" :key="tag">
                {{ tag }}
              </v-chip>
            </v-chip-group>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    tags: [
      "Work",
      "Home Improvement",
      "Vacation",
      "Food",
      "Drawers",
      "Shopping",
      "Art",
      "Tech",
      "Creative Writing",
    ],
  }),
};
</script>
