<template>
  <div class="container-fluid container-view">
    <div class="d-flex align-items-center flex-column">
      <nav style="width: 900px; margin-bottom: 10px;" class="navbar navbar-light bg-light">
        <a href="/"><img src="@/assets/Logo.png" alt="Logo" width="50px"></a>
        <h2>Notificări</h2>
      </nav>
    </div>
    <div class="d-flex align-items-center flex-column notifications">
      <div style="width: 900px;" class="d-flex justify-content-center">
        <ul style="width: 100%" class="list-group">
          <li v-for="notification in notifications" :key="notification.id" class="list-group-item">
            <div class="row">
              <div class="col-sm-1">
                <img  v-if="notification.type === 1" :src="backend + notification.link_profile" width="50" height="50" style="object-fit: cover">
                <p v-if="notification.type === -123" style="font-size: 30px">🎇</p>
                <p v-if="notification.type === -124" style="font-size: 30px">⚠️</p>
                <p v-if="notification.type === -122" style="font-size: 30px">⚠️</p>
                <p v-if="notification.type === -125" style="font-size: 30px">❌️</p>
              </div>
              <div class="col-sm-9">
                <p class="notification-message"><a class="link" :href="'/profile/' + notification.from">{{ notification.firstName }} {{ notification.lastName }}</a> {{ notification.message }}.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {backend} from '@/constants';

  export default {
    data(){
      return{
        notifications: [],
        backend: backend,
      }
    },
    mounted(){
      this.verifyToken();
      this.getNotifications();
    },
    methods:{
      getNotifications: function(){
        axios.get(backend+'/api/getNotifications', {
          params:{
            token: localStorage.getItem('token'),
          }
        }).then((res) =>{
          this.notifications = res.data['notifications'];
          if(this.notifications.length > 0) this.hasNotifications = 1;
          else this.hasNotifications = 0;
        }).catch((error)=>{
          console.log(error);
        })
      },
      back: function(){
        this.$router.push('/');
      },
      verifyToken: function(){
        axios.get(backend+'/api/fetchUserData', {
          params: {
            token: localStorage.getItem('token'),
          }
        }).then(()=>{
        }).catch(() =>{
          this.$router.push('login');
        })
      }
    }
  }
</script>

<style>
  .link{
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  .notification-message{
    font-size: 20px;
    padding-top: 5px;

  }
.notifications{
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  height: 900px;
}
  .container-fluid {
    background-image: url('../assets/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
  }

</style>