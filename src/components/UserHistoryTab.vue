<template>
  <div>
    <div class="history-container">
      <div>
        <v-radio-group v-model="radioGroup" :mandatory="false">
          <v-radio
            v-for="n in 2"
            :key="n"
            :label="`${(n === 1 ? 'Yes': 'No')}`"
            :value="n"
          ></v-radio>
        </v-radio-group>
      </div>
      <div>Do you smoke?</div>
    </div>
    <div class="history-container">
      <div>
        <v-radio-group v-model="radioGroup" :mandatory="false">
          <v-radio
            v-for="n in 2"
            :key="n"
            :label="`${(n === 1 ? 'Yes': 'No')}`"
            :value="n"
          ></v-radio>
        </v-radio-group>
      </div>
      <div>Do you drink?</div>
    </div>
    <div class="history-container">
      <div>
        <v-radio-group v-model="radioGroup">
          <v-radio
            v-for="n in 2"
            :key="n"
            :label="`${(n === 1 ? 'Yes': 'No')}`"
            :value="n"
          ></v-radio>
        </v-radio-group>
      </div>
      <div>History of Cancer?</div>
    </div>
    <div class="history-container">
      <div>
        <v-radio-group v-model="radioGroup">
          <v-radio
            v-for="n in 2"
            :key="n"
            :label="`${(n === 1 ? 'Yes': 'No')}`"
            :value="n"
          ></v-radio>
        </v-radio-group>
      </div>
      <div>History of Heart Disease?</div>
    </div>
  </div>
</template>


<style>

.history-container {
  display: flex;
  align-items: center;
  font-size: 18px;
}

</style>
