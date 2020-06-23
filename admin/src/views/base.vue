<template>
  <div id="base">
    <el-form :model="baseForm" label-width="80px">
      <el-form-item label="背景图">
        <el-upload
          class="avatar-uploader"
          :action="baseUrl+'/upload'"
          :show-file-list="false"
          :on-success="bgAfterUpload"
        >
          <img v-if="baseForm.bgUrl" :src="baseForm.bgUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item label="轮播图">
        <el-upload
          :action="baseUrl+'/upload'"
          list-type="picture-card"
          :on-success="swiperAfterUpload"
          :on-remove="swiperAfterRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASEURL,
      baseForm: {
        bgUrl: "",
        swiperImg: []
      },
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    // 背景图上传成功
    bgAfterUpload(res) {
      this.baseForm.bgUrl = res.url;
    },
    //轮播图上传成功
    swiperAfterUpload(res) {
      console.log(res);
      this.baseForm.swiperImg.push({
        url: res.url,
        title: res.originalname.split(".")[0]
      });
    },
    //轮播图删除
    swiperAfterRemove(file, fileList) {
      console.log(file);
      console.log(fileList);
    },
    //数据提交
    onSubmit() {}
  }
};
</script>

<style lang="scss">
#base {
  .title {
    font-size: 20px;
    margin: 10px 0;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .swiper {
    margin-top: 20px;
  }
}
</style>