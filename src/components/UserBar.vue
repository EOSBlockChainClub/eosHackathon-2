<template>
<div>
<div class="user-header"><h3>User Information</h3></div>
  <div class="user-container">
    <div class="user-avatar"></div>
    <div class="user-info-container">
      <div class="user-info">
        <UserTextPretty header="Name" :text="name" />
        <UserTextPretty header="Employer" :text="employer" />
        <UserTextPretty header="Insurance" :text="insurance" />
        <UserTextPretty header="DOB" :text="dateOfBirth" />
      </div>
      <div class="user-info">
        <UserTextPretty header="DOB" :text="dateOfBirth" />
        <UserTextPretty header="Gender" :text="gender" />
      </div>
      <div class="user-improvement">
        <div class="user-score">{{ score + ' %' }}</div>
        <div class="user-score-container">
          <h3 class="user-text">Improvement</h3>
          <UserScore :score="score" />
        </div>
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
      name: "John J Doe",
      employer: "Super Cool Blockchain Inc.",
      insurance: "Decentralized Healthcare.",
      dateOfBirth: "5/8/1983",
      gender: 'Male',
      score: 50
    }
  }
}
</script>



<style>
  .user-container {
    width: 95%;
    height: 200px;
    background-color: #f5f5f5;
    border: 2px solid #f5f5f5;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin: auto;
    display: flex;
    flex-direction: row;
  }

  .user-avatar {
    width: 150px;
    height: 150px;
    background-image: url('../assets/avatar-placeholder.png');
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;
    margin-left: 25px;
    margin-top: 12.5px;
  }

  .user-info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 120px;
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
    background-color: #f5f5f5;
    width: 95%;
    height: 40px;
    margin: 15px auto 0 auto;
    padding-left: 15px;
    padding-top: 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    justify-content: center;
  }

  .user-score {
    width: 75px;
    height: 75px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font: bold;
    font-size: 25px;
  }

  .user-score-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center
  }
</style>
