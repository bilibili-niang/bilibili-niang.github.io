#### 1.图片压缩和合并  
> 在企业开发中为了提升网页的访问速度, 我们除了会压缩HTML/CSS/JS以外  
还会对网页上的图片进行压缩和合并, 压缩可以减少网页体积, 合并可以减少请求次数  

---

#### 1.压缩打包之后的图片
> 每次在打包图片之前,我们可以通过配置webpack对打包的图片进行压缩, 以较少打包之后的体积

#### 2.如何压缩图片?
> 利用image-webpack-loader/img-loader压缩图片
https://www.npmjs.com/package/image-webpack-loader
https://www.npmjs.com/package/img-loader