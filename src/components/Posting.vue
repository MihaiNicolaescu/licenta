<template>
  <div class="container-fluid">
    <div class="d-flex align-items-center flex-column">
      <nav style="width: 600px" v-if="post !== 'INVALID_POSTING'" class="navbar navbar-light bg-light">
        <a href="/"><img src="@/assets/Logo.png" alt="Logo" width="50px"></a>
      </nav>
    </div>
    <div class="container">
      <div v-if="invalidPost === true && invalidPost !== null" class="container">
        <p class="not-found">Postarea nu este gasita.</p>
        <p class="go-home">Apasa <router-link :to="{path: '/'}">aici</router-link> pentru a te intoarce la pagina principala.</p>
      </div>
    </div>
    <div class="posts-container d-flex align-items-center flex-column">
      <div v-if="invalidPost === false && invalidPost !== null" id="posts">
          <div class="container-post sn p-3">
            <div class="user-info">
              <img class="user-info-img" :src="backend + post.link_profile">
              <a style="color: black; text-decoration: none; margin-left: 10px;" :href="'/profile/' + post.user_id">{{post.firstName + " " + post.lastName}}</a>
              <button class="btn btn-secondary btn-sm" style="float: right; background: transparent; border: 0;"><span style="color:black" class="material-icons" data-toggle="modal" data-target="#modalPostare">more_horiz</span></button>
            </div>
            <div style="margin-bottom: 10px; margin-top: 10px;" class="post-description">
              {{post.description}}
            </div>
            <div class="d-flex align-items-center flex-column image-post">
              <img v-if="post.has_photo === 1" class="post-image" :src="backend + post.link">
            </div>
            <button v-show="post.vote === 0 || post.vote === null || post.vote === -1" class="btn btn-react" type="button" v-on:click="voteUp(post.id, index, 1)"><span class="material-icons">thumb_up_alt</span></button>
            <button v-show="post.vote === 1" class="btn btn-react" type="button" v-on:click="cancelVoteUp(post.id, index, 0)"><span class="material-icons" style="color: blue;">thumb_up_alt</span></button>
            <span>{{post.votes}}</span>
            <div class="form-group">
              <textarea v-model="comment" maxlength="255" style="resize: none; height: 60px;" class="form-control" id="exampleFormControlTextarea1"></textarea>

              <button style="margin-top: 5px;" class="btn btn-success btn-sm" type="button" v-on:click="addComment">Adauga comentariu</button>
            </div>

            <ul class="list-group list-group-flush">
              <li v-for="comment in comments" :key="comment.id" class="list-group-item list-group-flush">
                <div class="row">
                  <div class="col-sm-1">
                    <div class="user-info">
                      <img class="profile-image" :src="backend + comment.link_profile">
                    </div>
                  </div>
                  <div class="col-10">
                    <p style="margin-left: 20px; word-wrap: break-word;"><a  style="color: black; text-decoration: none; font-weight: bold" :href="'/profile/' + comment.user_id">{{ comment.firstName }} {{ comment.lastName }}</a><br>{{ comment.comment }}</p>
                  </div>
                  <div class="col-1">
                    <button v-if="id === comment.user_id " style="border: 0; background: transparent;" class="btn btn-outline-danger" v-on:click="deleteComment(comment.id)"><span class="material-icons">delete</span></button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
      </div>
    </div>
    <!-- Modal setari postare -->
    <div class="modal fade bd-example-modal-sm" id="modalPostare" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Actiuni postare</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div style="display: grid;" class="modal-body">
            <button class="btn btn-secondary" type="button" v-on:click="confirm_raport">Raportare</button>
            <button style="margin-top: 5px;" v-if="isAdmin === 1" class="btn btn-danger" type="button" v-on:click="confirm_delete_post">Sterge postarea</button>
            <button style="margin-top: 5px;" v-if="id===post.user_id" class="btn btn-secondary" type="button" v-on:click="deletePost">Sterge postarea</button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Inchide</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal delete -->
    <div class="modal fade" id="deletePostModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="deleteModal">Sterge postarea utilizatorului</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input v-model="reportReason" type="text" class="input-group-text" style="width: 100%; font-weight: normal" placeholder="Motivul stergerii postarii." >
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Anuleaza</button>
            <button type="button" class="btn btn-primary" v-on:click="deleteUserPost">Sterge postarea</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="confirmReportModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="raportareTitle">Raporteaza postarea</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input v-model="reportReason" type="text" class="input-group-text" style="width: 100%; font-weight: normal" placeholder="Motivul raportari. Ex: Postare cu continut inadecvat." >
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Inchide</button>
            <button type="button" class="btn btn-primary" v-on:click="sendReport">Trimite raportarea</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal succes send raportare -->
    <div class="modal fade" id="succesReportSend" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="reportSendModalTitle">Success</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Raportul a fost trimis cu succes, in scurt timp un administrator se va ocupa de acest lucru.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Inchide</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal failed send raportare -->
    <div class="modal fade" id="failedReportSend" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="reportFailedSendModalTitle">Success</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Am intampinat o problema la trimiterea sesizari tale, te rugam sa incerci mai tarziu, iti multumim!</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Inchide</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import {backend} from '../constants.js';
export default{
  data(){
    return{
      id: -1,
      comment: '',
      invalidPost: null,
      reportReason: null,
      post: null,
      comments: null,
      isAdmin: null,
      backend: backend,
    }
  },
  mounted() {
    this.verifyToken();
    this.getPost();
    this.getComments();
    this.getID();
  },
  methods: {
    deletePost: function(){
      axios.post(backend+'/api/deletePost',{
        token: localStorage.getItem('token'),
        postID: this.post.id,
      }).then(()=>{
        // eslint-disable-next-line no-undef
        $('#modalPostare').modal('hide');
        // eslint-disable-next-line no-undef
        this.$router.push('/');
      }).catch((error)=>{
        console.log(error);
      })
    },
    deleteUserPost: function(){
      axios.post(backend+'/api/deleteUserPost',{
        token: localStorage.getItem('token'),
        postID: this.post.id,
        reason: this.reportReason,
        userID: this.post.user_id,
      }).then(()=>{
        // eslint-disable-next-line no-undef
        $('#deletePostModal').modal('hide');
        // eslint-disable-next-line no-undef
        this.$router.push('/');
      }).catch((error)=>{
        console.log(error);
      })
    },
    confirm_delete_post: function(){
      // eslint-disable-next-line no-undef
      $('#modalPostare').modal('hide');
      // eslint-disable-next-line no-undef
      $('#deletePostModal').modal('show');
      // eslint-disable-next-line no-undef
    },
    confirm_raport: function(){
      // eslint-disable-next-line no-undef
      $('#modalPostare').modal('hide');
      // eslint-disable-next-line no-undef
      $('#confirmReportModal').modal('show');
      // eslint-disable-next-line no-undef
    },
    getID: function(){
      const sendGetRequest = async() => {
        try{
          const response = await axios.get(backend + '/api/fetchUserData', {
            params: {
              token: localStorage.getItem('token'),
            }});
              this.id = response.data['id'];
        }catch(error){
          console.log(error);
        }
      }
      sendGetRequest();
    },
    deleteComment: function(commentID){
    axios.post(backend+ '/api/deleteComment',{
          token: localStorage.getItem('token'),
          commentID: commentID,
      }).then(()=>{
        this.getComments();
        this.comment = '';
      }).catch((error)=>{
        console.log(error)
      })
    },
    addComment: function(){
      if(this.comment !== ''){
        axios.post(backend+ '/api/addComment',{
          token: localStorage.getItem('token'),
          postID: this.post.id,
          comment: this.comment,
        }).then(()=>{
          this.getComments();
          this.comment = '';
        }).catch((error)=>{
          console.log(error)
        })
      }
    },
    getComments: function(){
      axios.get(backend+'/api/getComments',{
        params:{
          token: localStorage.getItem('token'),
          postID: this.$route.params.id,
        }
      }).then((res)=>{
        this.comments = res.data['comments'];
      }).catch((error)=>{
        console.log(error);
      })
    },
    getPost: function(){
        axios.get(backend+'/api/getPost',{
            params:{
              token: localStorage.getItem('token'),
              postID: this.$route.params.id,
            }
        }).then((res)=>{
            this.post = res.data['post'];
            if(this.post === "INVALID_POSTING") this.invalidPost = true;
            else this.invalidPost = false;
        }).catch((error)=>{
          console.log(error);
        })
    },
    sendReport: function(){
      axios.post(backend+'/api/sendReport', {
        token: localStorage.getItem('token'),
        reason: this.reportReason,
        link: this.$route.params.id,
        type: 2,
        reported_id: this.post.user_id,
      }).then(()=>{
        // eslint-disable-next-line no-undef
        $('#confirmReportModal').modal('hide');
        // eslint-disable-next-line no-undef
        $('#succesReportSend').modal('show');

      }).catch((error)=>{
        // eslint-disable-next-line no-undef
        $('#confirmReportModal').modal('hide');
        // eslint-disable-next-line no-undef
        $('#failedReportSend').modal('show');
        console.log(error);
      })
    },
    modifyVote: function(userId, postId, vote){ // functia modifica reactia userului de la o anumita postare cand reactioneaza cu up sau down
      axios.get(backend + '/api/modifyVote',{
        params:{
          token: localStorage.getItem('token'),
          userId: userId,
          postId: postId,
          vote: vote,
        }
      })
    },
    cancelVoteUp: function(postId, index, vote){
      axios.get(backend + '/api/vote', {
        params:{
          token: localStorage.getItem('token'),
          postId: postId,
          vote: -1,
        }
      }).then(
          this.post.votes--,
          this.post.vote = 0,
      ).catch((error)=>{
        console.log(error);
      })
      this.modifyVote(this.id, postId, vote)
    },
    voteUp: function(postId, index, vote){
      axios.get(backend+'/api/vote', {
        params:{
          token: localStorage.getItem('token'),
          postId: postId,
          vote: 1,
        }
      }).then(
          this.post.votes++,
          this.post.vote = 1,
      ).catch((error)=>{
        console.log(error);
      })
      this.modifyVote(this.id, postId, vote)
    },
    verifyToken: function(){
      axios.get(backend + '/api/fetchUserData', {
        params: {
          token: localStorage.getItem('token'),
        }
      }).then((res)=>{
         if(res.data['admin'] === 1) this.isAdmin = 1;
         else this.isAdmin = 0;
      }).catch(() =>{
        document.getElementById('overlay-alert').style.display ="block";
      })
    },
    home: function(){
      this.$router.go(-1);
    },
  }
}
</script>
<style scoped>
.comments-from-users{
  border: 1px black solid;
}
.profile-image{
  border-radius: 50%;
  margin-left:10px;
  object-fit: cover;
  width: 50px;
  height: 50px;
}
/*Fonts from frontend server*/
@font-face {
  font-family: "NerkoOne";
  src: url("../fonts/NerkoOne-Regular.ttf");
}
/*For invalid post*/
.not-found{
  font-size: 80px;
  font-family: "Courier New";
  text-align: center;
}
.go-home{
  font-size: 20px;
  font-family: "Courier New";
  text-align: center;
  font-weight: bold;
}
/*Post*/
.posts-container{
  height:900px;
  overflow: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

}
.container-post{
  background-color: #f8f9fa !important;
  width: 600px;
  height: auto;
  padding: 10px;
  margin-top: 10px;

}
.user-info{
  display: block ruby;
  font-size: 15px;
  font-weight: bold;
}
.user-info-img{
  width: 50px;
  height: 50px;
  border-radius: 50px;
  object-fit: cover;
}

.post-image{
  width: 100%;
  max-height: 600px;
  margin: auto;
  object-fit: cover;
}
.image-post{
  width: 555px;
  margin-left: auto;
  margin-right: auto;
}

::-webkit-scrollbar {
  display: none;
}
/*BUTTONS*/
.btn-react{
  background: transparent;
}
.row{
  margin-right: 0;
}
.container-fluid{
  background-image: url('../assets/background.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>