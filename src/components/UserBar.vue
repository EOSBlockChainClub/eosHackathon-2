<template>
<div>
<div class="user-header"><h3>User Information</h3></div>
  <div class="user-container">
    <div class="user-avatar"></div>
    <div class="user-score">{{ score + ' %' }}</div>
    <div class="user-info-container">
      <div class="user-info">
        <UserTextPretty header="Name" :text="name" />
        <p class="user-text">{{ employer }}</p>
        <p class="user-text">{{ other }}</p>
        <p class="user-text">{{ otherTwo }}</p>
      </div>
      <div class="user-improvement">
        <h3 class="user-text">Improvement</h3>
        <UserScore :score="score" />
      </div>
    </div>
  </div>
</div>
</template>

<script>

import UserScore from './UserScore'
import UserTextPretty from './UserTextPretty'

export default {
  components: {
    UserScore,
    UserTextPretty
  },
  data: function() {
    return {
      name: "NAME",
      employer: "PLACEHOLDER",
      insurance: "PLACEHOLDER",
      otherTwo: "PLACEHOLDER",
      score: 25
    }
  }
}
</script>



<style>
  .user-container {
    width: 95%;
    height: 200px;
    background-color: #f5f5f5;
    border: 2px solid #2196f3;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin: auto;
    display: flex;
    flex-direction: row;
  }

  .user-avatar {
    width: 75px;
    height: 75px;
    background-color: black;
    margin-left: 25px;
    margin-top: 37.5px;
  }

  .user-info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 20px;
  }

  .user-info {
    display: flex;
    flex-direction: row;
  }

  .user-improvement {
    display: flex;
    flex-direction: row;
  }

  .user-text {
    margin: 0px 10px 0px 10px;
  }

  .user-bar {
    border-left: 6px solid black;
    height: 25px;
  }

  .user-header {
    background-color: #2196f3;
    width: 95%;
    max-height: 40px;
    margin: 15px auto 0 auto;
    padding-left: 15px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .user-score {
    width: 75px;
    height: 75px;
    margin-left: 200px;
    margin-top: 37.5px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font: bold;
    font-size: 25px;
  }
</style>
