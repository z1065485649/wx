<template>
  <div>
    <quill-editor ref="myTextEditor" v-model="content" :options="editorOption" @change="onEditorChange($event)"
                  @blur="onEditorBlur($event)" @ready="onEditorReady($event)" style="height:200px">
    </quill-editor>
    <input type="file" hidden id="getFile" @change="uploadFunction($event)"/>
  </div>
</template>

<script>
  import {quillEditor} from 'vue-quill-editor';
  export default {
    props: {
      contents: {
        type: String
      }
    },
    data: function () {
      return {
        content: '',
        editorOption: {
          placeholder: "请输入内容",
          imageHandler:'',
          modules: {
            toolbar: {
              container: [
                [{'size': ['small', false, 'large']}],
                ['bold', 'italic'],
                [{'list': 'ordered'}, {'list': 'bullet'}],
                ['link'],['image']]
                 /* handlers: {
                    'image': function () {
                  document.getElementById('getFile').click()
                }
              }*/
            }
          }
        }
      }
    }
    ,
    components: {
      quillEditor
    }
    ,
    methods: {
      onEditorChange({editor, html, text})
      {
        //this.content = html;
        this.$emit('onEditorChange', this.content);
      },
      onEditorBlur(editor) {
        this.$emit('onEditorBlur', this.content);
        //console.log(this.content+'editor blur!', editor)
      },
      onEditorReady(editor) {
        //console.log('editor ready!', editor)
      },
      uploadFunction(e){
          console.info(e);
        var form = new FormData();
        form.append('file[]', e.target.files[0]);
        //do your post
        var imageUrl="<img src='https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'/>";
        //console.log(this.$refs.myTextEditor.quillEditor.getSelection())
        //this.content = this.content+imageUrl;
//        var range = this.$refs.myTextEditor.quillEditor.getSelection();
//        var length = range.index;
       // this.$refs.myTextEditor.quillEditor.insertEmbed(length, 'image', "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar");
      }

    }
    ,
    computed: {
      editor()
      {
        return this.$refs.myTextEditor.quillEditor;
      }
    },
    created: function () {
      this.content = this.contents;
    }
  }
</script>
<style scoped>
  .editor-btn {
    margin-top: 20px;
  }

  .ql-container .ql-editor {
    min-height: 20em;
    padding-bottom: 1em;
    max-height: 25em;
  }

  .html {
    height: 9em;
    overflow-y: auto;
    border: 1px solid #ccc;
    border-top: none;
    resize: vertical;
  }
</style>
