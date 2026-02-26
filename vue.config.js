const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    publicPath: "",     // 루트 경로 기준
    outputDir: "docs",    // 빌드 결과물 폴더
})