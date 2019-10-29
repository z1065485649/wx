<template>
  <!--<SearchList></SearchList>-->
  <div class="test">
    <h1>请查看README.md了解如何开发</h1>

    <iframe src="http://www.baidu.com" width="100%" height="100%"></iframe>
    <!--输入框自动提示补全 -->
    <!--<Row>
      &lt;!&ndash; size size为large和small设置为大和小尺寸，不设置为默认（中）尺寸 &ndash;&gt;
      <Col span="3" style="margin-bottom:-10000px; padding-bottom:10000px;">
      <AutoComplated :minLength="3" :size="'small'" :placeholder="'请输入身份证...'" :tipsData="tips"
                     @onChange="onChange"></AutoComplated>
      </Col>
    </Row>

    &lt;!&ndash;图片上传预览 &ndash;&gt;
    <Row style="margin-top: 20px">
      <Col span="10" class="left">
      <Upload></Upload>
      </Col>
    </Row>

    &lt;!&ndash;图片点击放大 &ndash;&gt;
    <Row style="margin-top: 20px">
      <Col span="10" class="left">
      <ImgZoom :title="'查看大图'" :imgUrl="imgUrl">
      </ImgZoom>
      </Col>
    </Row>

    &lt;!&ndash; 编辑器
    <Row style="margin-top: 20px" >
      <Col span="10" >
         &lt;!&ndash; <VueEditor :contents="''" ></VueEditor>&ndash;&gt;
    &lt;!&ndash; <div id="summernote"></div>
     <div class="components-container">
       <div class="info">UE编辑器示例<br>需要使用编辑器时，调用UE公共组件即可。可设置填充内容defaultMsg，配置信息config(宽度和高度等)，可调用组件中获取内容的方法。支持页面内多次调用。</div>
       <button @click="getUEContent()">获取内容</button>
       <div class="editor-container">
         <UE :defaultMsg=defaultMsg :config=config :id=ue1 ref="ue"></UE>
       </div>
     </div>
 </Col>
</Row> &ndash;&gt;
    <br/>
    &lt;!&ndash; 标签管理组件 &ndash;&gt;
    <Row style="margin-top: 80px">
      <Col span="10">
      &lt;!&ndash;:selectValue="['beijing','shenzhen']" :selectName="['北京市','深圳市']"  &ndash;&gt;
      <TagManage v-model="value" :selectValue="selectValue" :selectName="selectName"></TagManage>
      </Col>
    </Row>
    <Row>

      <div>
        <div v-for="(item,idx) in list">{{idx}}- {{item}}</div>
        <a href="javascript:void(0)" @click="addItem">add</a>
      </div>
    </Row>
    <br/>
    <Row>
      <div id="summernote"></div>
    </Row>-->
  </div>


</template>
<style scoped>
  /*@import "../../node_modules/bootstrap/dist/css/bootstrap.css";*/
  @import "../../node_modules/font-awesome/css/font-awesome.css";
  @import "../../node_modules/summernote/dist/summernote.css";

  .info {
    border-radius: 10px;
    line-height: 20px;
    padding: 10px;
    margin: 10px;
    background-color: #ffffff;
  }
</style>

<script>
  import SearchList from '@/components/SearchList'
  import AutoComplated from '@/components/AutoComplated'
  import Upload from '@/components/Upload'
  import ImgZoom from '@/components/ImgZoom'
  import TagManage from '@/components/TagManage'
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        tips: [],
        imgUrl: [{url: 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar', id: 1, title: '图片1'}
          , {url: 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar', id: 2, title: '图片2'}
          , {url: 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar', id: 3, title: '图片3'}],
        value: '',
        selectValue: ['beijing', 'shenzhen'],
        selectName: ['北京市', '深圳市'],
        list: [],

        defaultMsg: '这里是UE测试',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        },
        ue1: "ue1", // 不同编辑器必须不同的id
        ue2: "ue2"
      }
    }, methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent(); // 调用子组件方法
        console.log(content)
      },
      onChange: function (value) {
        var a = [];
        for (var idx = 0; idx < 3; idx++) {
          a.push({id: idx, name: "扁舟" + value});
        }
        this.tips = a;
      },
      selectOnChangeX: function (object) {//下拉回调
        this.value = object;
      },
      addItem: function () {
        this.list.push(new Date());
      },
      sendFile: function (files) {
        var dfd = this.ajaxUploadParam("editor");
        dfd.then(function (obj) {//成功获取上传文件参数 再 加载 文件上传组件
          var data = new FormData();
          data.append("file", files[0]);
          data.append("policy", obj.policy);
          data.append("Signature", obj.Signature);
          $.ajax({
            data: data,
            type: "POST",
            url: obj.url,
            cache: false,
            contentType: false,
            processData: false,
            success: function (res) {
              if (res) {
                var result = eval("(" + res + ")");
                $("#summernote").summernote('insertImage', result.data.location + result.data.filepath, 'image name'); // the insertImage API
              } else {
                alert("上传图片失败！");
              }
            }, error: function () {
              alert("上传图片失败！");
            }
          });
        });
      }
    },
    watch: {
      value: function (va) {
      }
    },
    mounted(){
      function loadjscssfile(filename, filetype) {
        if (filetype == "css") {
          var fileref = document.createElement("link");
          fileref.setAttribute("rel", "stylesheet");
          fileref.setAttribute("type", "text/css");
          fileref.setAttribute("href", filename);
        }
        if (typeof fileref != "undefined")
          document.getElementsByTagName("head")[0].appendChild(fileref);
      }
      loadjscssfile("../../static/css/bootstrap.css", "css");

      $('#summernote').summernote({
        height: 200, // set editor height
        minHeight: null, // set minimum height of editor
        maxHeight: null, // set maximum height of editor
        focus: true,
        toolbar: [
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['font', ['strikethrough']],
          ['fontsize', ['fontsize']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['height', ['height']],
          ['fullscreen', ['fullscreen']],
          ['picture', ['picture']],
          ['link', ['link']],
          ['codeview', ['codeview']]
        ],
        callbacks: {
          onImageUpload: (files) => {
            this.sendFile(files);
          }
        }
      });
    }

    ,
    components: {
      SearchList, AutoComplated, Upload, ImgZoom, TagManage
    }
    ,
    destroyed: function () {
      removejscssfile("bootstrap.css", "css");
      function removejscssfile(filename, filetype) {
        var targetelement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none";
        var targetattr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none";
        var allsuspects = document.getElementsByTagName(targetelement);
        for (var i = allsuspects.length; i >= 0; i--) {
          if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) != null && allsuspects[i].getAttribute(targetattr).indexOf(filename) != -1)
            allsuspects[i].parentNode.removeChild(allsuspects[i]);
        }
      }
    }
  }
</script>
