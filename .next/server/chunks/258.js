"use strict";
exports.id = 258;
exports.ids = [258];
exports.modules = {

/***/ 688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FlowerImage_FlowerImage)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./constants/colors.ts
var colors = __webpack_require__(503);
// EXTERNAL MODULE: ./constants/text.ts
var constants_text = __webpack_require__(206);
;// CONCATENATED MODULE: ./components/FlowerImage/style.ts



const ImageContainer = external_styled_components_default().div.withConfig({
  displayName: "style__ImageContainer",
  componentId: "sc-1tqkbg8-0"
})(["height:100%;width:100%;position:relative;border-radius:20px;overflow:hidden;"]);
const MissingImage = external_styled_components_default()(ImageContainer).withConfig({
  displayName: "style__MissingImage",
  componentId: "sc-1tqkbg8-1"
})(["display:flex;border:1px solid ", ";justify-content:center;align-items:center;font-size:200%;text-align:center;color:", ";", ""], colors/* colorGrey */.dK, colors/* colorGrey */.dK, constants_text/* Oswald */.L);
;// CONCATENATED MODULE: ./components/FlowerImage/FlowerImage.tsx





const FlowerImage = ({
  image,
  name
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(ImageContainer, {
    children: image ? /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      unoptimized: true,
      src: image,
      alt: `Image of ${name}`,
      layout: "fill",
      objectFit: "cover",
      priority: true
    }) : /*#__PURE__*/jsx_runtime_.jsx(MissingImage, {
      children: "Image not avaliable"
    })
  });
};

/* harmony default export */ const FlowerImage_FlowerImage = (FlowerImage);

/***/ }),

/***/ 503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BU": () => (/* binding */ colorRed),
/* harmony export */   "yx": () => (/* binding */ colorGreen),
/* harmony export */   "ng": () => (/* binding */ colorYellow),
/* harmony export */   "JZ": () => (/* binding */ colorBlue),
/* harmony export */   "dK": () => (/* binding */ colorGrey),
/* harmony export */   "g7": () => (/* binding */ colorBlueGrey),
/* harmony export */   "Nt": () => (/* binding */ colorLightGrey),
/* harmony export */   "bI": () => (/* binding */ colorError),
/* harmony export */   "f3": () => (/* binding */ colorBlueAccent),
/* harmony export */   "Iq": () => (/* binding */ colorRedAccent),
/* harmony export */   "oA": () => (/* binding */ colorFadedGreen),
/* harmony export */   "hf": () => (/* binding */ colorFadedRed)
/* harmony export */ });
const colorRed = "#F1A9A9";
const colorGreen = "#ABCF9E";
const colorYellow = "#E2E3A1";
const colorBlue = "#BEC0CD";
const colorGrey = "#8C8C8C";
const colorBlueGrey = "#BEC9CD";
const colorLightGrey = "#F4F4F4";
const colorError = "red";
const colorBlueAccent = "#839FE5";
const colorRedAccent = "#DF8585";
const colorFadedGreen = "#CDCCBE";
const colorFadedRed = "#CDBEBE";

/***/ }),

/***/ 206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ Oswald),
/* harmony export */   "i": () => (/* binding */ Slabo)
/* harmony export */ });
const Oswald = {
  "font-family": "Oswald",
  "font-weight": "200",
  margin: "0"
};
const Slabo = {
  "font-family": "slabo-13px",
  "font-weight": "200",
  margin: "0"
};

/***/ }),

/***/ 433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ getAllFlowers),
/* harmony export */   "R": () => (/* binding */ getFlower)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const flowerApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "https://flowers-mock-data.firebaseio.com/flowers"
});
const getAllFlowers = async () => {
  const response = await flowerApi.get("/.json");
  return response.data;
};
const getFlower = async flowerId => {
  const response = await flowerApi.get(`/${flowerId}.json`);
  return response.data;
};

/***/ })

};
;