<template>
  <!-- Education and Work  -->
  <!-- timeline... must work (slide/scroll) -->
<p> w</p>
</template>

<script>
export default {
    props:["experience"]
};
</script>

<style>
/* Timeline */
.hori-timeline .events {
  background-color: #171f28;

  border-top: 3px solid #171f28;
}
.hori-timeline .events .event-list {
  display: block;
  position: relative;
  text-align: center;
  padding-top: 70px;
  margin-right: 0;
}
.hori-timeline .events .event-list:before {
  background-color: #171f28;

  content: "";
  position: absolute;
  height: 36px;
  border-right: 2px dashed #283541;
  top: 0;
}
.hori-timeline .events .event-list .event-date {
  position: absolute;
  top: 36px;
  left: 0;
  right: 0;
  width: 75px;
  margin: 0 auto;
  border-radius: 4px;
  padding: 2px 4px;
}
@media (min-width: 1140px) {
  .hori-timeline .events .event-list {
    display: inline-block;
    width: 24%;
    padding-top: 45px;
  }
  .hori-timeline .events .event-list .event-date {
    top: -12px;
  }
}
.car {
    color: #fff;
  border: none;
  margin-bottom: 24px;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 13px 0 rgba(236, 236, 241, 0.44);
  box-shadow: 0 0 13px 0 rgba(255, 255, 255, 0.44);
}
/* End of timeline */
</style>
