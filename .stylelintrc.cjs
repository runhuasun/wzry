module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  overrides: [
    {
      files: ["**/*.(less|vue)"],
      customSyntax: "postcss-less",
    },
    {
      files: ["**/*.(vue)"],
      customSyntax: "postcss-html",
    },
  ],
  rules: {
    "selector-class-pattern": null, //必须使用中划线命名
    "font-family-no-missing-generic-family-keyword": null, //禁止在字体族名称中使用缺少的通用系列关键字
    "no-descending-specificity": null, //禁止在特定的选择器和规则集中使用降序的选择器和规则集
    "media-feature-range-notation": null, //将媒体查询max-width转换为width<=的形式
    "declaration-block-no-redundant-longhand-properties": null, //使用合并一些属性
    "property-no-vendor-prefix": null, //禁止在属性中使用供应商前缀
    /** 选择器伪类未知时进行检查 */
    "selector-pseudo-class-no-unknown": [
      true,
      {
        /** 忽略的伪类列表中添加了 "deep" */
        ignorePseudoClasses: ["deep"],
      },
    ],
    /** 指定样式的排序 */
    "order/properties-order": [
      "content",
      /* 表示定位/布局的属性 */
      "position",
      "top",
      "left",
      "right",
      "bottom",
      "z-index",
      "display",
      "justify-content",
      "align-items",
      "flex",
      "flex-flow",
      "flex-basis",
      "flex-direction",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "visibility",
      "overflow",
      "overflow-x",
      "overflow-y",
      /* 表示盒子模型的属性 */
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "margin",
      "margin-top",
      "margin-left",
      "margin-right",
      "margin-bottom",
      "padding",
      "padding-top",
      "padding-left",
      "padding-right",
      "padding-bottom",
      "border",
      "border-style",
      "border-width",
      "border-color",
      "border-top-style",
      "border-top-width",
      "border-top-color",
      "border-left-style",
      "border-left-width",
      "border-left-color",
      "border-right-style",
      "border-right-width",
      "border-right-color",
      "border-bottom-style",
      "border-bottom-width",
      "border-bottom-color",
      "border-radius",
      "box-shadow",
      "outline",
      "resize",
      "aspect-ratio",
      /* 字体相关的属性 */
      "color",
      "font-size",
      "font-family",
      "font-weight",
      "text-align",
      "text-justify",
      "text-indent",
      "text-overflow",
      "text-decoration",
      "text-shadow",
      "line-height",
      "list-style",
      "white-space",
      "white-space",
      "word-spacing",
      "word-wrap",
      "word-break",
      /* 背景 */
      "background",
      "background-color",
      "background-image",
      "background-attachment",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-clip",
      "background-origin",
      "background-size",
      "background-repeat",
      /* CSS3 */
      "transition",
      "transition-delay",
      "transition-timing-function",
      "transition-duration",
      "transition-property",
      "transform",
      "transform-origin",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-play-state",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "opacity",
      "filter",
      "pointer-events",
    ],
  },
};
