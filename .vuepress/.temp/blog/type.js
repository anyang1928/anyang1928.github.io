export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-15054f24","v-9d2b35ce","v-21e72558","v-5229fefb","v-395ce022","v-c3da2626","v-0daed70d","v-0bf5ba7a","v-3bfce520","v-f61d40f6","v-dbb3e1e0","v-152db918"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-15054f24","v-9d2b35ce","v-21e72558","v-5229fefb","v-395ce022","v-c3da2626","v-0daed70d","v-0bf5ba7a","v-3bfce520","v-f61d40f6","v-dbb3e1e0","v-152db918"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
