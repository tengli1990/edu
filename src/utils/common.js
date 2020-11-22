

const CommonJs = {
  install(Vue){
    this.vm = Vue
  },
  $getImgBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
}

export default CommonJs
