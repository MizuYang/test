<template>
  <button type="button" class="btn me-5" @click="enterPage('/chatroomHome/chatroomList')">討論區列表</button>

<div class="border mb-5 p-5">
  <p>影片</p>
  <input type="file" id="videoInput">
  <p>分辨率: <span id="resolution"></span></p>
</div>

<div class="border p-5">
  <p>圖片</p>
  <input type="file" id="imageInput">
  <p>分辨率: <span id="resolution2"></span></p>
</div>

<div class="my-5">
  <p>取得影片解析度</p>
  <input type="file" accept=".hevc, video/*" @change="handleFileChange">
  <p v-if="videoResolution">Video Resolution: {{ videoResolution }}</p>
</div>

<div class="my-5">
  <p>測試1</p>
  <input type="file" accept=".hevc, video/*" capture="camcorder" @change="test">
</div>
<div class="my-5">
  <p>測試2</p>
  <input type="file" accept=".hevc, video/*" capture="camcorder" @change="test2">
</div>

<div class="my-5">
  <p>測試3: 只调用手机相册</p>
  <code>accept="image/*;"</code>
  <input type="file" accept="image/*;" @change="test3">
</div>
<div class="my-5">
  <p>測試4: 只调用手机相机拍照</p>
  <code>capture="camera"</code>
  <input type="file" accept="image/*" capture="camera" @change="test3">
</div>
<div class="my-5">
  <p>測試5: 调用手机相册和拍照</p>
  <code>accept="image/*"</code>
  <input type="file" accept="image/*" @change="test3">
</div>
<div class="my-5">
  <p>測試6: 測試 禁用移動端長按圖片出現選單</p>
  <pre>
    <code>{{ `-webkit-touch-callout: none !important;
    -webkit-user-select: none !important;` }}</code></pre>
  <img src='https://picsum.photos/500/300'
       width="100" alt=''>
</div>
<div class="my-5">
  <p>測試7: 測試 禁用移動端長按圖片出現選單</p>
  <pre>
    <code>{{ `@contextmenu.prevent` }}</code></pre>
  <img src='https://picsum.photos/500/300'
       @contextmenu.prevent
       width="100" alt=''>
</div>
<div class="my-5">
  <p>測試8: 測試 禁用移動端長按圖片出現選單</p>
  <pre>
    <code>{{ `@touchstart.prevent` }}</code></pre>
    <img src='https://picsum.photos/500/300'
         @touchstart.prevent
         width="100" alt=''>
</div>
<div class="my-5">
  <p>測試9: 測試 禁用移動端長按圖片出現選單</p>
  <p>加一層遮罩在圖片上</p>
  <div class="position-relative">
    <img src='https://picsum.photos/500/300'
         width="100" alt=''>
    <span class="position-absolute top-0 bottom-0 start-0 end-0 z110"
          style="background-color:rgba(0,0,0,40%)"></span>
  </div>
  <p>遮罩加上 @contextmenu.prevent</p>
  <div class="position-relative">
    <img src='https://picsum.photos/500/300'
         width="100" alt=''>
    <span class="position-absolute top-0 bottom-0 start-0 end-0 z110"
          @contextmenu.prevent
          style="background-color:rgba(0,0,0,40%)"></span>
  </div>

  <p>遮罩加上 @touchstart.prevent</p>
  <div class="position-relative">
    <img src='https://picsum.photos/500/300'
         width="100" alt=''>
    <span class="position-absolute top-0 bottom-0 start-0 end-0 z110"
          @touchstart.prevent
          style="background-color:rgba(0,0,0,40%)"></span>
  </div>
</div>
<div class="my-5">
  <p>測試10: 測試 禁用移動端長按圖片出現選單</p>
  <p>-webkit-touch-callout:none;(加在父層)</p>
  <div style="-webkit-touch-callout:none;">
    <img src='https://picsum.photos/500/300'
         width="100" alt=''>
  </div>
</div>
<div class="my-5">
  <p>測試11: 測試 禁用移動端長按圖片出現選單</p>
  <p>-webkit-touch-callout:none;(加在圖片)</p>
  <img src='https://picsum.photos/500/300'
       width="100" alt='' style="-webkit-touch-callout:none;">
</div>
<div class="my-5">
  <p>測試12: 測試 禁用移動端長按圖片出現選單</p>
  <p>@click.prevent</p>
  <img src='https://picsum.photos/500/300'
       width="100" alt='' @click.prevent>
</div>
<div class="my-5">
  <p>測試13: 測試 禁用移動端長按圖片出現選單</p>
  <p>pointer-events: none;</p>
  <img src='https://picsum.photos/500/300'
       width="100" alt='' style="pointer-events: none;">
</div>
<div class="my-5">
  <p>測試13: 測試 禁用移動端長按圖片出現選單</p>
  <p>使用背景圖</p>
  <div style="background-image:url('https://picsum.photos/500/300');width:100px;height:100px;background-position:center center;"></div>
</div>

<div class="my-5">
  <p>測試1: 測試 檔案上傳類型</p>
  <input type="file" accept="file_extension">
  <input type="file" accept="media_type">
  <input type="file" accept="image/*,video/*" capture="false">
  <input type="file" accept="image/png, image/jpeg" capture="filesystem">
</div>

</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      videoResolution: null
    }
  },

  computed: {
    ...mapState('user', ['userInfo'])
  },

  methods: {
    ...mapActions('user', ['getUserInfo']),

    async enterPage (path) {
      const { $router, getUserInfo } = this
      await getUserInfo()

      if (this.userInfo.manNickName) $router.push(path)
    },
    handleFileChange (event) {
      const file = event.target.files[0]
      if (file) {
        this.videoResolution = ''
        const videoElement = document.createElement('video')
        videoElement.src = URL.createObjectURL(file)

        videoElement.onloadedmetadata = async () => {
          const resolution = `${videoElement.videoWidth}x${videoElement.videoHeight}`
          this.videoResolution = resolution
        }
      }
    },
    async test (e) {
      const file = e.target.files[0]
      console.log(file)
      if (file) {
        const videoStream = await navigator.mediaDevices.getUserMedia({ video: true })
        console.log('videoStream', videoStream)

        // 在這裡你可以設定影片流的參數，以獲得更高的畫質
        const videoTrack = videoStream.getVideoTracks()[0]
        console.log('videoTrack', videoTrack)
        const constraints = { width: { ideal: 1920 }, height: { ideal: 1080 } }
        console.log('constraints', constraints)
        videoTrack.applyConstraints(constraints)

        const videoElement = document.createElement('video')
        console.log('videoElement', videoElement)
        videoElement.srcObject = videoStream
        videoElement.controls = true
        document.body.appendChild(videoElement)
      }
    },
    async test2 (e) {
      const file = e.target.files[0]
      if (file) {
        const videoStream = await navigator.mediaDevices.getUserMedia({ video: true })
        console.log('videoStream', videoStream)
        const videoTrack = videoStream.getVideoTracks()[0]
        console.log('videoTrack', videoTrack)

        // 設定理想的解析度
        const idealConstraints = { width: 1920, height: 1080 }
        console.log('idealConstraints', idealConstraints)

        // 嘗試應用理想參數
        try {
          await videoTrack.applyConstraints(idealConstraints)
          console.log('videoTrack.applyConstraints(idealConstraints)', videoTrack.applyConstraints(idealConstraints))
          console.log('影片解析度已設定為理想參數')
        } catch (error) {
          console.error('無法設定影片解析度:', error)
        }

        const videoElement = document.createElement('video')
        videoElement.srcObject = videoStream
        videoElement.controls = true
        console.log(videoElement)
        document.body.appendChild(videoElement)
      }
    },
    test3 (e) {
      console.log(e.target.files[0])
    }
  },

  async mounted () {
    const videoInput = document.getElementById('videoInput')
    const resolutionSpan = document.getElementById('resolution')

    videoInput.addEventListener('change', function (event) {
      const file = event.target.files[0]
      if (file) {
        const video = document.createElement('video')
        video.preload = 'metadata'
        video.onloadedmetadata = function () {
          const width = video.videoWidth
          const height = video.videoHeight
          resolutionSpan.textContent = `${width} x ${height}`
        }
        video.src = URL.createObjectURL(file)
      }
    })

    const imageInput = document.getElementById('imageInput')
    const resolutionSpan2 = document.getElementById('resolution2')

    imageInput.addEventListener('change', function (event) {
      const file = event.target.files[0]
      if (file && file.type.startsWith('image/')) {
        const image = new Image()
        image.onload = function () {
          const width = image.width
          const height = image.height
          resolutionSpan2.textContent = `${width} x ${height}`
        }
        image.src = URL.createObjectURL(file)
      }
    })
  }

}
</script>

<style lang='scss' scope>
</style>
