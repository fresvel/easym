<template>

<div class="logincenter">


<div class="ui middle aligned center aligned grid">
  <div class="column">
    <img src="images/puce.png" class="image" width="100%" >
      <div class="content">
        Log-in to your account
      </div>
    <form class="ui large form">
      <div class="ui stacked segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password">
          </div>
        </div>
        <div class="ui  large teal submit button">Login</div>
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      New to us? <a href="#">Sign Up</a>
    </div>
  </div>
</div>
</div>

</template>

<script setup>

</script>

<style scoped>

.logincenter{
    height: 100vh;
    width: 100vw;
    padding: 10% 30%;
    background-color: rgba(20, 20, 20, 0.9);
}

.content{
    color: aliceblue;
    margin-bottom: 2%;
    font-size: 1.25em;
}

form{
    background-color: rgba(20, 20, 20, 0.9);
}
</style>