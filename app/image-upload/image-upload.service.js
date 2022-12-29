angular.module("app.image-upload", []).factory("ImageUpload", [
  "$http",
  function ($http) {
    this.signToken = async function () {
      return await $http
        .get("http://localhost:4466/sign")
        .then((res) => res.data);
    };
    this.uploadFile = async function (file) {
      const { signature, token, expire } = await this.signToken().then(
        (res) => {
          return res;
        }
      );
      var form_data = new FormData();
      // const data = {
      //   file,
      //   ...sign,
      //   publicKey: "public_S6vyU9FG56dNofgzx0hbbBAZGDs=",
      //   fileName: "DEMO",
      // };
      // for (var key in data) {
      //   form_data.append(key, data[key]);
      // }

      // form_data.append("key", "6d207e02198a847aa98d0a2a901485a5");
      // // var headers = new Headers({
      // //   "Content-Type": "multipart/form-data",
      // //   Accept: "multipart/form-data",
      // // });
      // form_data.append("source", file.split(",")[1]);
      form_data.append("signature", signature);
      form_data.append("token", token);
      form_data.append("expire", expire);

      const result = await $http.post(
        "https://upload.imagekit.io/api/v1/files/upload",
        form_data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(result);
      return result.data;
    };
    return {
      signToken: this.signToken,
      uploadFile: this.uploadFile,
    };
  },
]);
