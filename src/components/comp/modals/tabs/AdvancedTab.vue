<template>
<b-container style="padding:0 0 0 0;">
  <div>
      <div class="mainfont px-2 advancedsetting-heading">
          <strong>Active Devices</strong>
              <div class="advancedsetting-btn">
                  <button class="button1 px-2"><b>View All</b></button>
                </div>
                </div>
                <div class="mainfont px-2 advancedsetting-instruction">
                  Click 'view all' to see a complete listing of devices You're currently logged in from.
                </div>
              </div>
              <div>
                <div class="mainfont px-2 advancedsetting-heading">
                <strong>Allow Connection Request</strong>
                  <div class="flipswitch option-switch" style="margin-left:183px;">
                    <input type="checkbox" name="flipswitch" class="flipswitch-cb" id="fs" checked>
                    <label class="flipswitch-label" for="fs">
                            <div class="flipswitch-inner"></div>
                            <div class="flipswitch-switch"></div>
                          </label>
                  </div>
                </div>
                <div class="mainfont px-2 advancedsetting-instruction">
                  You will be requested to join other classes,institutes which you can either approve or decline.
                </div>
              </div>
              <div>
                <div class="mainfont px-2 advancedsetting-heading">
                  <strong>Allow Notifications</strong>
                  <div class="flipswitch option-switch" style="margin-left:183px;">
                    <input type="checkbox" name="flipswitch" class="flipswitch-cb" id="fs1" checked>
                    <label class="flipswitch-label" for="fs1">
                            <div class="flipswitch-inner"></div>
                            <div class="flipswitch-switch"></div>
                          </label>
                  </div>
                </div>
                <div class="mainfont px-2 advancedsetting-instruction">
                  You will be notified on new stories,chat messages, connection requests,etc.
                </div>
              </div>
              <div>
                <div class="mainfont px-2 advancedsetting-heading">
                  <strong>Allow Email/Mobile Notifications</strong>
                  <div class="flipswitch option-switch" style="margin-left:183px;">
                    <input type="checkbox" name="flipswitch" class="flipswitch-cb" id="fs3" checked>
                    <label class="flipswitch-label" for="fs3">
                            <div class="flipswitch-inner"></div>
                            <div class="flipswitch-switch"></div>
                          </label>
                  </div>
                </div>
                <div class="mainfont px-2 advancedsetting-instruction">
                  Mails and SMS will be sent to your registered email and mobile number when you are not online.
                </div>
              </div>
              <div>
                <div class="mainfont px-2 advancedsetting-heading">
                  <strong>Delete Your Account</strong>
                  <div class="advancedsetting-btn" style="">
                    <button class="button2 px-2"><b>Delete</b></button>
                  </div>
                </div>
                <div class="mainfont px-2 advancedsetting-instruction">
                  This will be remove all notification about you,your classes, and your student.Once deleted,your account can't be
                </div>
              </div>
</b-container>
</template>

<script>
export default{
  name:'AdvancedTab',
  data:function(){
    return{

    }
  }
};
</script>

<style>
.button1 {
  background-color: #fff;
  color: var(--main-primary-color);
  margin-left:165px;
  font-size:15px;
  /* border: 2px solid var(--main-primary-color); */
border:none;
}
.button2 {
  background-color: #fff;
  color: red;
  margin-left:165px;
    font-size:15px;
  /* border:2px solid red; */
  border:none;
}
.option-switch{
margin-top:-25px;
}
.advancedsetting-heading{
  font-size:13px;
  margin-top:20px;
}
.advancedsetting-instruction{
margin-top:8px;
font-size:12px;
}
.advancedsetting-btn{
margin-top:-20px;
}
.flipswitch {
  position: relative;
  width: 79px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.flipswitch input[type=checkbox] {
  display: none;
}
.flipswitch-label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid var(--main-primary-color);
  border-radius: 50px;
}
.flipswitch-inner {
  width: 200%;
  margin-left: -100%;
  -webkit-transition: margin 0.3s ease-in 0s;
  -moz-transition: margin 0.3s ease-in 0s;
  -ms-transition: margin 0.3s ease-in 0s;
  -o-transition: margin 0.3s ease-in 0s;
  transition: margin 0.3s ease-in 0s;
}
.flipswitch-inner:before,
.flipswitch-inner:after {
  float: left;
  width: 50%;
  height: 28px;
  padding: 0;
  line-height: 28px;
  font-size: 13px;
  color: white;
  font-family: Trebuchet, Arial, sans-serif;
  font-weight: bold;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.flipswitch-inner:before {
  content: "ON";
  padding-left: 12px;
  background-color: #FFFFFF;
  color: var(--main-mainfont-color);
}
.flipswitch-inner:after {
  content: "OFF";
  padding-right: 12px;
  background-color: #fff;
  color: var(--main-mainfont-color);
  text-align: right;
}
.flipswitch-switch {
  width: 21px;
  margin: 3.5px;
  background: var(--main-primary-color);
  border: 2px solid var(--main-primary-color);
  border-radius: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50px;
  -webkit-transition: all 0.3s ease-in 0s;
  -moz-transition: all 0.3s ease-in 0s;
  -ms-transition: all 0.3s ease-in 0s;
  -o-transition: all 0.3s ease-in 0s;
  transition: all 0.3s ease-in 0s;
}
.flipswitch-cb:checked+.flipswitch-label .flipswitch-inner {
  margin-left: 0;
}
.flipswitch-cb:checked+.flipswitch-label .flipswitch-switch {
  right: 0;
}
/* .advancedsetting-instruction{
margin-top:8px;font-size:12px;
}
.option-switch{
margin-left:220px;
margin-top:-25px;
} */
</style>
