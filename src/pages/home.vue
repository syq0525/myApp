<!--
 * @Description: 
 * @Author: ShiYangquan
 * @Date: 2019-12-25 15:11:45
 * @LastEditors  : ShiYangquan
 * @LastEditTime : 2020-01-17 09:19:43
 -->
<template>
  <app-layout @update:scrolltop="val => scrollTop = val">
    <nav class="navbar-custom navbar navbar-expand-md fixed-top" :class="{'top-nav-collapse':scrollTop>20}">
      <a class="navbar-brand" @click="pageScroll('intro')">前端工程师</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <i class="fa fa-bars"></i>
      </button>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav ml-auto">
          <!-- Hidden li included to remove active class from about link when scrolled up past about section -->
          <li class="nav-item">
            <a class="nav-link" @click="pageScroll('services')">基本资料</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="pageScroll('works')">项目经验</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="pageScroll('about')">专业技能</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="pageScroll('team')">工作经历</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="pageScroll('testimonials')">自我评价</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="pageScroll('contact')">联系方式</a>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </nav>

    <!-- Header -->
    <header class="intro" id="intro">
      <div class="intro-body">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2">
              <h1>
                简历<span class="brand-heading">-前端工程师</span>
              </h1>
              <p class="intro-text">喜欢技术，热爱挑战</p>
              <a @click="pageScroll('services')" class="btn btn-circle">
                <i class="fa fa-angle-double-down animated"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
      <!-- Services Section -->
    <div id="services" class="text-center">
      <div class="container">
        <div class="section-title center">
          <h3>
            基本 <strong>资料</strong>
          </h3>
          <hr>
        </div>
        <div class="space"></div>
        <div class="row">
          <div class="col-lg-3 col-sm-6 service">
            <i class="fa fa-laptop"></i>
            <h5>
              <strong>个人信息</strong>
            </h5>
            <p>姓名: 施养权 &nbsp;性别：男</br>年龄: 28岁 籍贯：福建晋江
            </p>
          </div>
          <div class="col-lg-3 col-sm-6 service">
            <i class="fa fa-code"></i>
            <h5>
              <strong>专业学历</strong>
            </h5>
            <p>专业：软件工程</br>学历：大学本科</br></p>
          </div>
          <div class="col-lg-3 col-sm-6 service">
            <i class="fa fa-rocket"></i>
            <h5>
              <strong>毕业学校</strong>
            </h5>
            <p>毕业学校：福建工程学院</br>学习技能：编程
            </p>
          </div>
          <div class="col-lg-3 col-sm-6 service">
            <i class="fa fa-bullseye"></i>
            <h5>
              <strong>联系方式</strong>
            </h5>
            <p>电话：15750735865</br>邮箱：347538230@qq.com</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Portfolio Section -->
    <div id="works">
      <div class="container">
        <!-- Container -->
        <div class="section-title text-center center">
          <h3>
            项目 <strong>经验</strong>
          </h3>
          <hr>
          <div class="clearfix"></div>
          <p>主要涉及电商，游戏，系统管理，包括PC端，移动端，小程序，APP端等，主要技术是HTML+CSS+JS+VUE+REACT+UNIAPP</p>
        </div>
        <div class="categories">
          <ul class="type"> 
            <li>
              <a @click="selcetProj(0)" :class="{'active':showProj==0}">所有</a>
            </li>
            <li>
              <a @click="selcetProj(1)" :class="{'active':showProj==1}">PC端</a>
            </li>
            <li>
              <a @click="selcetProj(2)" :class="{'active':showProj==2}">移动端</a>
            </li>
            <li>
              <a @click="selcetProj(3)" :class="{'active':showProj==3}">小程序</a>
            </li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="row">
            <div class="col-6 col-sm-6 col-md-3 col-lg-3" v-show="showProj==0||showProj==2">
              <div class="portfolio-item">
                <div class="hover-bg">
                  <div class="hover-text">
                    <h5>
                      <a href='https://www.lechengclub.com/wxwap?#/home' target='_blank' title="盈众乐橙汇">盈众乐橙汇</a>
                    </h5>
                    <small>技术：vue</small>
                    <div class="clearfix"></div>
                  </div>
                  <img src="@/assets/img/proj1.jpg" class="img-responsive">
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-3 col-lg-3" v-show="showProj==0||showProj==3">
              <div class="portfolio-item">
                <div class="hover-bg">
                  <div class="hover-text">
                    <h5>
                      <a title="盈众合伙人" @click="showPartner=true">盈众合伙人</a>
                    </h5>
                    <small>技术：uni-app</small>
                    <div class="clearfix"></div>
                    <img src="@/assets/img/partner.jpg" v-show="showPartner"  @click="showPartner=false">
                  </div>
                  <img src="@/assets/img/proj2.jpg" class="img-responsive">
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-3 col-lg-3" v-show="showProj==0||showProj==3">
              <div class="portfolio-item">
                <div class="hover-bg">
                  <div class="hover-text">
                    <h5>
                      <a title="盈众员工端" @click="showStaff=true">盈众员工端</a>
                    </h5>
                    <small>技术：uni-app</small>
                    <div class="clearfix"></div>
                    <img src="@/assets/img/staff.jpg" v-show="showStaff" @click="showStaff=false">
                  </div>
                  <img src="@/assets/img/proj3.jpg" class="img-responsive">
                  
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-3 col-lg-3" v-show="showProj==0||showProj==1">
              <div class="portfolio-item">
                <div class="hover-bg">
                  <div class="hover-text">
                    <h5>
                      <a href='https://www.vqida.com' target='_blank' title="微企达">微企达</a>
                    </h5>
                    <small>技术：小程序+vue+jquery</small>
                    <div class="clearfix"></div>
                  </div>
                  <img src="@/assets/img/proj4.jpg" class="img-responsive">
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-3 col-lg-3" v-show="showProj==0||showProj==1">
              <div class="portfolio-item">
                <div class="hover-bg">
                  <div class="hover-text">
                    <h5>
                      <a href='https://www.vqida.com' target='_blank' title="易速推">易速推</a>
                    </h5>
                    <small>技术：jquery</small>
                    <div class="clearfix"></div>
                  </div>
                  <img src="@/assets/img/proj5.jpg" class="img-responsive">
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-3 col-lg-3" v-show="showProj==0||showProj==1">
              <div class="portfolio-item">
                <div class="hover-bg">
                  <div class="hover-text">
                    <h5>
                      <a title="盈众CRM后台">盈众CRM后台</a>
                    </h5>
                    <small>技术：react+antd</small>
                    <div class="clearfix"></div>
                  </div>
                  <img src="@/assets/img/proj6.jpg" class="img-responsive">
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>

    <!-- About Section -->
    <div id="about">
      <div class="container">
        <div class="section-title text-center center">
          <h3>
            <strong>专业</strong>
            技能
          </h3>
          <hr>
        </div>
        <div class="row">
          <div class="col-md-6">
            <img src="@/assets/img/about.png" class="img-responsive">
          </div>
          <div class="col-md-6">
            <div class="about-text">
              <div class="padding-left">
                <h5>html/css/js</h5>
                <div class="progress">
                  <div class="progress-bar bg-info" style="width:80%"></div>
                </div>
              </div>
              <div class="padding-left">
                <h5>vue/uni-app/小程序</h5>
                <div class="progress">
                  <div class="progress-bar bg-info" style="width:80%"></div>
                </div>
              </div>
              <div class="padding-left">
                <h5>react</h5>
                <div class="progress">
                  <div class="progress-bar bg-info" style="width:50%"></div>
                </div>
              </div>
              <div class="padding-left">
                <h5>webpack/gulp</h5>
                <div class="progress">
                  <div class="progress-bar bg-info" style="width:40%"></div>
                </div>
              </div>
              <div class="padding-left">
                <h5>nodejs/express/mongodb</h5>
                <div class="progress">
                  <div class="progress-bar bg-info" style="width:40%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div id="team" class="text-center">
      <div class="container">
        <div class="section-title center">
          <h3>
            工作 <strong>经历</strong>
          </h3>
          <hr>
          <p>热爱互联网，热爱技术，专注于技术开发和用户体验</p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="thumbnail">
              <img src="@/assets/img/team1.jpg" class="img-circle team-img">
              <div class="caption">
                <h5>福建工程学院</h5>
                <p>软件工程</p>
                <p>主要学习编程语言，前端技术，网站制作和开发</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="thumbnail">
              <img src="@/assets/img/team2.jpg" class="img-circle team-img">
              <div class="caption">
                <h5>厦门千聚科技有限公司</h5>
                <p>前端开发</p>
                <p>工作时间：2015.8-2017.7，主要做微企达、易速推等项目开发</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="thumbnail">
              <img src="@/assets/img/team3.jpg" class="img-circle team-img">
              <div class="caption">
                <h5>厦门盈众乐承科技有限公司</h5>
                <p>前端开发</p>
                <p>工作时间：2017.8-至今，主要做盈众乐橙汇、盈众合伙人、盈众员工端、CRM管理系统等项目开发</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div id="testimonials" class="text-center">
      <div class="container">
        <div class="section-title center">
          <h3>
            自我 <strong>评价</strong>
          </h3>
          <hr>
        </div>
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <div id="testimonial" class="carousel slide" data-ride="carousel">
 
              <!-- 指示符 -->
              <ul class="carousel-indicators">
                <li data-target="#testimonial" data-slide-to="0" class="active"></li>
                <li data-target="#testimonial" data-slide-to="1"></li>
                <li data-target="#testimonial" data-slide-to="2"></li>
              </ul>
            
              <!-- 轮播图片 -->
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <p>热爱学习,良好的团队合作精神，能迅速融入新的团队
                    </br>易和人相处，拥有良好的亲和力
                  </p>
                </div>
                <div class="carousel-item">
                  <p>有强烈的责任感，工作踏实，积极上进，吃苦耐劳
                    </br>能在较大的压力下保持良好的工作状态，善于自我调节
                  </p>
                </div>
                <div class="carousel-item">
                  <p>喜欢钻研新的技术，喜欢接受各种不同的挑战
                    </br>具有很强的自学能力和良好的学习方法
                  </p>
                </div>
              </div>
            
              <!-- 左右切换按钮 -->
              <a class="carousel-control-prev" href="#testimonial" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#testimonial" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Section -->
    <div id="contact" class="text-center">
      <div class="container">
        <div class="section-title center">
          <h3>
            <strong>联系</strong>
            方式
          </h3>
          <hr>
        </div>
        <div class="col-md-8 offset-md-2">
          <div class="row">
            <div class="col-md-4">
              <i class="fa fa-map-marker fa-2x"></i>
              <p>福建省厦门市</p>
            </div>
            <div class="col-md-4">
              <i class="fa fa-envelope-o fa-2x"></i>
              <p>347538230@qq.com</p>
            </div>
            <div class="col-md-4">
              <i class="fa fa-phone fa-2x"></i>
              <p>电话:15750735865</p>
            </div>
          </div>
          <hr>
          <div class="clearfix"></div>
        </div>
        <div class="col-md-8 offset-md-2">
          <h4>给我发邮件</h4>
          <div class="row" style="padding: 2rem 0;">
            <div class="col-md-6">
              <div class="form-group">
                <input type="text" v-model="name"  class="form-control" placeholder="姓名" required="required">
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input type="email" v-model="email"  class="form-control" placeholder="邮箱" required="required">
                <p class="help-block text-danger"></p>
              </div>
            </div>
          </div>
          <div class="form-group">
            <textarea name="message" v-model="content" class="form-control" rows="4" placeholder="内容" required></textarea>
            <p class="help-block text-danger"></p>
          </div>
          <button class="btn btn-primary" @click="sendMessage">确认发送</button>
          
        </div>
      </div>
    </div>
  </app-layout>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      scrollTop:0,
      showProj:0,
      showPartner:false,
      showStaff:false,
      name:'',
      email:'',
      content:''
    };
  },
  activated() {},
  methods: {
    pageScroll(name){
      this.$nextTick(() => {
        this.$children[0].pageScroll(name);
      });
    },
    selcetProj(type){
      this.showProj = type
    },
    async sendMessage(){
      if(this.name==''){
        alert('请输入姓名')
      }else if(this.email==''){
        alert('请输入邮箱')
      }else if(this.email==''){
        alert('请输入内容')
      }
      const data={
        name:this.name,
        email:this.email,
        content:this.content
      }
      
      const res = await this.$post("/syq/sendMessage", data);
      if(res.status==0){
        alert(res.content)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.img-responsive{
  display: block;
  max-width: 100%;
  height: auto;
}
.section-title{
  &.center{
    padding: 1.6rem 0 0 0;
    hr {
      height: 4px;
      width: 70px;
      text-align: center;
      position: relative;
      background: #f4d03f;
      margin: 0 auto;
      margin-bottom: 30px;
      border: 0;
    }
  }
  h3{
    font-weight: 400;
    margin-bottom: 1.6rem;
  }
}

/* Navigation */
.navbar-custom {

  margin-bottom: 0;
  text-transform: uppercase;
  background-color: #000;
  .nav-link{
    cursor:pointer;
    &:hover{
      color:#F4D03F
    }
  }
  
  .navbar-brand {
    cursor:pointer;
    font-weight: 600;
    font-size: 1rem;
    &:hover{
      color:#F4D03F
    }
  }
  a {
    color: #fff;
    font-size: .9rem;
  }
  .navbar-toggler{
    color:rgba(255,255,255,.5)
  }
}

@media (min-width: 768px) {
  .navbar-custom {
    padding: 1.2rem 2rem;
    border-bottom: 0;
    letter-spacing: 1px;
    background: 0 0;
    transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
    &.top-nav-collapse{
      background: #000;
    }
  }
}
@media (min-width: 992px) {
  .navbar-custom {
    padding: 1.2rem 5rem;
    border-bottom: 0;
    letter-spacing: 1px;
    background: 0 0;
    transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
  }
}

/* Home Style */
.intro {
  display: table;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  background: url(../assets/img/intro-bg.jpg) no-repeat bottom center;
  background-color: #000;
  background-size: cover;
  .intro-body {
    display: table-cell;
    vertical-align: middle;
    .brand-heading {
      color: #f4d03f;
      text-transform: uppercase;
    }
    .intro-text {
      font-size: 1rem;
    }
    .btn-circle {
      width: 4rem;
      height: 4rem;
      margin-top: 2.5rem;
      padding: .3rem .8rem;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 100% !important;
      font-size: 2.2rem;
      color: #f4d03f;
      background: 0 0;
      transition: background 0.3s ease-in-out;
      margin-bottom: 0;
    }
    .btn-circle:hover,
    .btn-circle:focus {
      outline: 0;
      color: #f4d03f;
      background: rgba(255, 255, 255, 0.1);
    }

    .btn-circle i.animated {
      transition-property: transform;
      transition-duration: 1s;
    }

    .btn-circle:hover i.animated {
      animation-name: pulse;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    @keyframes pulse {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.2);
      }

      100% {
        transform: scale(1);
      }
    }
  }
}

@media (min-width: 768px) {
  .intro {
    height: 100%;
    padding: 0;
    .intro-body {
      h1 {
        font-size: 3.5rem;
        font-weight: 600;
        letter-spacing: .2rem;
      }
      .intro-text {
        font-size: 1.3rem;
        text-transform: uppercase;
        letter-spacing: .5rem;
        margin-bottom: 2.5rem;
      }
    }
  }
}




/* Services Section */
#services {
	padding: 5rem 0;
	color: #aaa;
	background: #6f7275; /* Old browsers */
	background: linear-gradient(to bottom, #6f7275 0%, #31353a 100%); /* W3C */
  .section-title.center hr {
    background: #c1a533;
  }
  h3 {
    color: #ddd;
  }
  h5 {
    color: #F4D03F;
    transition: all 0.5s;
  }
  .space {
    margin-top: 2.5rem;
  }
  i.fa {
    font-size: 3rem;
    width: 7rem;
    height: 7rem;
    padding: 2rem 0;
    margin-bottom: 1rem;
    border-radius: 50%;
    color: #aaa;
    background: #474b4f;
    transition: all 0.5s ease-out;
  }
  .service:hover > i.fa {
    color: #F4D03F;
    transform: scale(1.3);
  }
  p{
    font-size: .9rem
  }
}


/* Gallery Section */
#works {
	padding: 5rem 0;
	background: #ffffff; /* Old browsers */
	background: linear-gradient(to bottom, #ffffff 0%, #cccccc 100%); /* W3C */
  p{
    font-size: .9rem
  }
  a{
    color: #F4D03F;
  }
  .categories {
    padding-bottom: 2rem;
    text-align: center;
    font-size: .9rem;
    .type{
      li {
        display: inline-block;
        margin-left: 1.2rem;
        &::after{
          content: ' | ';
          margin-left: 1.2rem;
        }
        &:last-child:after {
          content: '';
        }
        a {
          color: #444;
          padding: 2px 8px;
          &.active {
            background: #F4D03F;
            padding: 2px 8px;
            border-radius: 4px;
          }
          &:hover {
            background: #F4D03F;
            padding: 2px 8px;
            border-radius: 4px;
          }
        }
      }
    }
  }
  .isotope-item {
    z-index: 2
  }
  .isotope-hidden.isotope-item {
    z-index: 1
  }
  .isotope, .isotope .isotope-item {
    transition-duration: 0.8s;
  }
  .isotope-item {
    margin-right: -1px;
    backface-visibility: hidden;
  }
  .isotope {
    backface-visibility: hidden;
    transition-property: height, width;
    .isotope-item {
      backface-visibility: hidden;
      transition-property: transform, opacity;
    }
  }

  .portfolio-item {
    margin-bottom: 2rem;
    transition: all 0.5s ease-out;
    .hover-bg {
      overflow: hidden;
      position: relative;
    }
    // &:hover {
    //   margin-bottom: 2rem;
    //   transform: scale(1.2);
    // }
  }

  .hover-bg{
   .hover-text {
      position: absolute;
      text-align: center;
      margin: 0 auto;
      color: #ffffff;
      background: rgba(0, 0, 0, 0.66);
      padding: 25% 0;
      height: 100%;
      width: 100%;
      transition: all 0.5s;
      >h5 {
        transition: all 0.3s;
        
      }
      img{
        transition: all 0.3s;
        width: 80%;
        position: absolute;
        top: 10%;
        left: 10%;
      }
    }
  }

}

/* About Section */
#about {
	padding: 5rem 0;
	color: #444;
	background: #f4d03f; /* Old browsers */
	background: linear-gradient(to bottom, #f4d03f 70%, #c3a632 100%); /* W3C */
  .about-text {
    margin-left: .5rem;
  }
  .padding-left {
    // padding-left: 3rem;
    margin-top:1rem;
  }
  h4 {
    color: #333;
  }
  .section-title.center hr {
    background: #f7dc6f;
  }
  i.fa {
    float: left;
    display: block;
    margin-right: 15px;
    color: #fff;
    font-size: 24px;
    text-shadow: 0 0 1px #666;
  }
  img {
   
  }
  p {
    margin-top: 1.2rem;
    margin-bottom: 2rem;
  }
}


/* Team Section */
#team {
	padding: 5rem 0;
	background: #ffffff; /* Old browsers */
	background: linear-gradient(to bottom, #ffffff 0%, #cccccc 100%); /* W3C */
  img.img-circle.team-img {
    width: 7rem;
    height: 7rem;
    border: 4px solid transparent;
    transition: all 0.5s;
    object-fit: cover;
  }
  p{
    font-size: .9rem;
  }
  .thumbnail:hover>img.img-circle.team-img {
    border: 4px solid #F4D03F;
    font-size: medium;
  }
  .thumbnail {
    background: transparent;
    border: 0;
    .caption {
      padding: 9px;
      color: #5a5a5a;
    }
  }
}

/* Testimonials Section */
#testimonials {
	background: url(../assets/img/testimonial-bg.jpg);
	background-size: cover;
	// background-attachment: fixed;
	color: #ddd;
  padding: 5rem 0;
  #testimonial{
    .carousel-item{
      height:10rem;
      p{
        font-size: .8rem;
        width:100%;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%)
      }
    }
  }
  
}

/* Contact Section */
#contact {
	padding: 5rem 0;
	background: #ffffff; /* Old browsers */
  background: linear-gradient(to bottom, #ffffff 0%, #cccccc 100%); /* W3C */
  p{
    font-size: .9rem
  }
  h4 {
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
  }
  .fa {
    color: #F4D03F;
    margin-bottom: 10px;
  }
  .text-danger {
    color: #ff3333;
    text-align: left;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 2px;
    box-shadow: none;
    transition: none;
  }
  .form-control:focus {
    border-color: inherit;
    outline: 0;
    box-shadow: transparent;
  }
  .btn {
    // background:#F4D03F;
    margin-top: 1rem;
    border:0;
  }

}



</style>