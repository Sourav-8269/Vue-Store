<template>
  <div>
    <div id="navbar">
        <div id="left">
            <h1>Home</h1>
        </div>
        <div id="right">
            <div>Account</div>
            <div id="cart">
                <div id="cart_count">1</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script scoped></script>

<style scoped>
#navbar{
    width:90%;
    padding: 1%;
    margin: auto;
    display: flex;
    height: 70px;
    align-items: center;
    border-bottom: 1px solid black;
}
#left{
    display: flex;
    flex: 3;
    align-items: center;
}
#right{
    display: flex;
    flex: 7;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
}
</style>

