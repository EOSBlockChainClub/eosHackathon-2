<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-checkbox class="inline"
      v-model="checkbox"
      label="Weight loss program"
      required
    ></v-checkbox>
    <v-checkbox class="inline"
      v-model="checkbox"
      label="Nutritionist consultation"
      required
    ></v-checkbox>
    <v-checkbox class="inline"
      v-model="checkbox"
      label="Smoking cessation program"
      required
    ></v-checkbox>
    <v-text-field
      label="Blood Pressure"
      required
    ></v-text-field>
    <v-text-field
      label="Last wellness assessment"
      required
    ></v-text-field>
    <v-text-field
      label="AC1/Glucose"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<style scoped>
  .inline{
    display:inline-block;
    max-width: 25%;
    margin-left:20px;
  }
</style>
