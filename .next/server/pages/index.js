"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 37:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: external "react-intersection-observer"
const external_react_intersection_observer_namespaceObject = require("react-intersection-observer");
// EXTERNAL MODULE: ./constants/colors.ts
var colors = __webpack_require__(503);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./styles/globals.ts


const RoundedButton = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "globals__RoundedButton",
  componentId: "sc-1mkxp3b-0"
})(["display:flex;width:100%;height:50px;margin:5px;background-color:", ";border-radius:25px;justify-content:center;align-items:center;cursor:pointer;color:white;"], props => props.backgroundColor);
const SquareButton = external_styled_components_default().div.withConfig({
  displayName: "globals__SquareButton",
  componentId: "sc-1mkxp3b-1"
})(["position:relative;width:100%;height:83px;padding:10px;background-color:white;border:1px solid black;cursor:pointer;display:flex;justify-content:center;align-items:center;"]);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./components/FlowerImage/FlowerImage.tsx + 1 modules
var FlowerImage = __webpack_require__(688);
;// CONCATENATED MODULE: ./components/GridItem/style.ts


const GridItemContainer = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "style__GridItemContainer",
  componentId: "sc-1cr2elp-0"
})(["display:flex;flex-direction:column;align-items:center;position:relative;margin-bottom:50px;cursor:pointer;border-radius:20px;"]);
const ImageContainer = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "style__ImageContainer",
  componentId: "sc-1cr2elp-1"
})(["width:100%;height:240px;"]);
const TextCard = external_styled_components_default().div.withConfig({
  displayName: "style__TextCard",
  componentId: "sc-1cr2elp-2"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:195px;height:88px;background-color:white;border-radius:15px;position:absolute;bottom:-50px;box-shadow:2px 3px 6px 1px rgba(50,50,50,0.5);"]);
const FlowerName = external_styled_components_default().p.withConfig({
  displayName: "style__FlowerName",
  componentId: "sc-1cr2elp-3"
})(["margin:0px;font-size:1.2rem;font-family:Slabo-13px;"]);
const FlowerNameLatin = external_styled_components_default()(FlowerName).withConfig({
  displayName: "style__FlowerNameLatin",
  componentId: "sc-1cr2elp-4"
})(["font-size:1rem;"]);
;// CONCATENATED MODULE: ./components/GridItem/GridItem.tsx







const GridItem = ({
  flower
}) => {
  const router = (0,router_namespaceObject.useRouter)();

  const navigate = () => {
    router.push({
      pathname: "/[flowerId]",
      query: {
        flowerId: flower.id
      }
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(GridItemContainer, {
    onClick: navigate,
    initial: {
      scale: 1,
      opacity: 1
    },
    whileHover: {
      scale: 1.1,
      opacity: 0.6
    },
    transition: {
      duration: 0.1
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(ImageContainer, {
      layoutId: flower.id,
      type: "crossfade",
      children: /*#__PURE__*/jsx_runtime_.jsx(FlowerImage/* default */.Z, {
        image: flower.cover_image,
        name: flower.common_name
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextCard, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FlowerName, {
        children: flower.common_name
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlowerNameLatin, {
        children: ["(", flower.latin_name, ")"]
      })]
    })]
  });
};

/* harmony default export */ const GridItem_GridItem = (GridItem);
// EXTERNAL MODULE: ./constants/text.ts
var constants_text = __webpack_require__(206);
;// CONCATENATED MODULE: ./components/FlowerGridSection/style.ts



const GridSectionContainer = external_styled_components_default().section.withConfig({
  displayName: "style__GridSectionContainer",
  componentId: "sc-dw6v1b-0"
})(["padding:120px 20vw 120px 20vw;min-height:100vh;@media (max-width:1400px){padding:120px 10vw 120px 10vw;}@media (max-width:1000px){padding:30px 10vw 30px 10vw;}"]);
const HeadlineContainer = external_styled_components_default().div.withConfig({
  displayName: "style__HeadlineContainer",
  componentId: "sc-dw6v1b-1"
})(["display:flex;justify-content:space-between;margin-bottom:120px;@media (max-width:1000px){flex-direction:column;align-items:center;margin-bottom:5vh;}"]);
const Headline = external_styled_components_default()(external_framer_motion_.motion.h2).withConfig({
  displayName: "style__Headline",
  componentId: "sc-dw6v1b-2"
})(["font-size:2.5rem;", " margin-bottom:5px;@media (max-width:1000px){font-size:2rem;margin-bottom:15px;}@media (max-width:500px){display:none;}"], constants_text/* Oswald */.L);
const LeftHeadlineContainer = external_styled_components_default().div.withConfig({
  displayName: "style__LeftHeadlineContainer",
  componentId: "sc-dw6v1b-3"
})(["width:15vw;@media (max-width:1400px){width:300px;}@media (max-width:1000px){width:100%;text-align:center;}"]);
const FilterContainer = external_styled_components_default().div.withConfig({
  displayName: "style__FilterContainer",
  componentId: "sc-dw6v1b-4"
})(["display:flex;flex-direction:column;@media (max-width:1000px){width:80%;align-items:center;}@media (max-width:500px){width:100%;align-items:center;}"]);
const FilterButtonContainer = external_styled_components_default().div.withConfig({
  displayName: "style__FilterButtonContainer",
  componentId: "sc-dw6v1b-5"
})(["display:flex;justify-content:space-between;@media (max-width:1000px){width:100%;}@media (max-width:500px){flex-direction:column;width:245px;}"]);
const Grid = external_styled_components_default()(external_framer_motion_.motion.ul).withConfig({
  displayName: "style__Grid",
  componentId: "sc-dw6v1b-6"
})(["display:grid;grid-gap:3vw;justify-content:center;grid-template-columns:repeat(auto-fit,minmax(240px,240px));list-style-type:none;padding:0px;"]);
;// CONCATENATED MODULE: ./components/FlowerGridSection/FlowerGridSection.tsx










const FlowerGridSection = ({
  flowers,
  scrollRef
}) => {
  const {
    0: renderedFlowers,
    1: setRenderedFlowers
  } = (0,external_react_.useState)(flowers);
  const {
    0: filter,
    1: setFilter
  } = (0,external_react_.useState)("No filter");
  const [ref, inView] = (0,external_react_intersection_observer_namespaceObject.useInView)({
    triggerOnce: true,
    threshold: 0.2
  });
  const animation = (0,external_framer_motion_.useAnimation)();
  (0,external_react_.useEffect)(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1
        }
      });
    } else {
      animation.start({
        x: "-50vw"
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [inView]);
  (0,external_react_.useEffect)(() => {
    if (filter === "Summer" || filter === "Spring") {
      filterFlowers(filter);
    } else {
      setRenderedFlowers(flowers);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [filter]);

  const filterFlowers = filterWord => {
    const filteredFlowers = flowers.filter(flower => flower.blooming_season.includes(filterWord));
    setRenderedFlowers(filteredFlowers);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    ref: scrollRef,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(GridSectionContainer, {
      ref: ref,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(HeadlineContainer, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(LeftHeadlineContainer, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Headline, {
            animate: animation,
            children: "Click on a flower in the list to learn more"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FilterContainer, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Headline, {
            children: "Filter flowers by blooming season"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FilterButtonContainer, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(RoundedButton, {
              backgroundColor: colors/* colorGreen */.yx,
              onClick: () => setFilter("Spring"),
              initial: {
                scale: 1
              },
              whileHover: {
                scale: 1.1
              },
              children: "Spring"
            }), /*#__PURE__*/jsx_runtime_.jsx(RoundedButton, {
              backgroundColor: colors/* colorYellow */.ng,
              onClick: () => setFilter("Summer"),
              whileHover: {
                scale: 1.1
              },
              children: "Summer"
            }), /*#__PURE__*/jsx_runtime_.jsx(RoundedButton, {
              backgroundColor: colors/* colorRed */.BU,
              onClick: () => setFilter("No filter"),
              whileHover: {
                scale: 1.1
              },
              children: "No filter"
            })]
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Grid, {
        children: renderedFlowers.map(flower => /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.li, {
          initial: {
            scale: 0.5
          },
          animate: {
            scale: 1
          },
          layout: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(GridItem_GridItem, {
            flower: flower
          })
        }, flower._id.oid))
      })]
    })
  });
};

/* harmony default export */ const FlowerGridSection_FlowerGridSection = (FlowerGridSection);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: ./public/images/daisy.jpg
/* harmony default export */ const daisy = ({"src":"/_next/static/image/public/images/daisy.2a5addb28f8954f9611aeab38f59213e.jpg","height":479,"width":640,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAYACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAE/9oACAEBAAAAAGf/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAB//xAAdEAABBAIDAAAAAAAAAAAAAAADAQIREgAEBRMh/9oACAEBAAE/AF3Qg4c5FedCgFVp2xfrtEe5/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAJB/9oACAECAQE/AGh//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAJB/9oACAEDAQE/AGh//9k="});
;// CONCATENATED MODULE: ./public/images/growing-plant.jpg
/* harmony default export */ const growing_plant = ({"src":"/_next/static/image/public/images/growing-plant.bdffc17b460b737f999581f212c08207.jpg","height":617,"width":926,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAB/9oACAEBAAAAAH//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAACf/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAEDEAAAAE//xAAbEAABBQEBAAAAAAAAAAAAAAACAQMEETEABf/aAAgBAQABPwA/XkTXAbJBQG6Wtzv/xAAYEQACAwAAAAAAAAAAAAAAAAAAAgETIf/aAAgBAgEBPwCtFyFP/8QAGBEAAgMAAAAAAAAAAAAAAAAAAQIAETH/2gAIAQMBAT8AKqdFz//Z"});
;// CONCATENATED MODULE: ./public/images/ray-flower.jpg
/* harmony default export */ const ray_flower = ({"src":"/_next/static/image/public/images/ray-flower.b8ed7dc86d6e8dc0e4cd7636287eb98f.jpg","height":663,"width":977,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAACf/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAF//xAAaEAADAAMBAAAAAAAAAAAAAAABAhEABBIh/9oACAEBAAE/AN4qujy690J7YQQLc//EABkRAAEFAAAAAAAAAAAAAAAAAAABAgMxcv/aAAgBAgEBPwCGn6U//8QAGREAAQUAAAAAAAAAAAAAAAAAAQACAxNz/9oACAEDAQE/AJyTTk1f/9k="});
;// CONCATENATED MODULE: ./public/images/globe-amaranth.jpg
/* harmony default export */ const globe_amaranth = ({"src":"/_next/static/image/public/images/globe-amaranth.4c75727bac88719c2817dc4080a63c9b.jpg","height":1244,"width":1244,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAC/9oACAEBAAAAAB//xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAABf/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAC//xAAaEAEAAgMBAAAAAAAAAAAAAAACAQMABBHB/9oACAEBAAE/AKtCuaG0DCcHvfM//8QAGREAAQUAAAAAAAAAAAAAAAAAAgABISIx/9oACAECAQE/AAIrS+r/xAAYEQEBAAMAAAAAAAAAAAAAAAABAwAhMf/aAAgBAwEBPwClFTRzP//Z"});
;// CONCATENATED MODULE: ./public/images/lotus.jpg
/* harmony default export */ const lotus = ({"src":"/_next/static/image/public/images/lotus.8942c91b16a5b3301cfbf0c5f2e9f1dc.jpg","height":2002,"width":3158,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAACn/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/9oACAECEAAAAG//xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oACAEDEAAAADf/xAAdEAABBAIDAAAAAAAAAAAAAAADAgQFEwABERQy/9oACAEBAAE/AHEiDpnajjwDrPWoiPS9c5//xAAXEQEAAwAAAAAAAAAAAAAAAAABAAMS/9oACAECAQE/AKwzP//EABoRAAMBAAMAAAAAAAAAAAAAAAECIQMAEYH/2gAIAQMBAT8AfR9GJY0HqSec/9k="});
;// CONCATENATED MODULE: ./public/images/cherry-blossom.jpg
/* harmony default export */ const cherry_blossom = ({"src":"/_next/static/image/public/images/cherry-blossom.0953fadc999c5455283ed0bcd5b48291.jpg","height":611,"width":1000,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAHP/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAD/9oACAEDEAAAAG//xAAcEAACAgIDAAAAAAAAAAAAAAABEQIDABMiMVH/2gAIAQEAAT8AounOma4jYWuyz7n/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAWEQADAAAAAAAAAAAAAAAAAAAAAjH/2gAIAQMBAT8Aan//2Q=="});
;// CONCATENATED MODULE: ./public/images/sunflower.jpg
/* harmony default export */ const sunflower = ({"src":"/_next/static/image/public/images/sunflower.b308e30d073bed00eb6e5cb20449d56f.jpg","height":450,"width":675,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAD/9oACAEBAAAAAC//xAAUAQEAAAAAAAAAAAAAAAAAAAAF/9oACAECEAAAABP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDEAAAAH//xAAcEAEAAgIDAQAAAAAAAAAAAAABAgMEEQASIiH/2gAIAQEAAT8AjmNGNe9VI2VjHfmUbPPV2PwXfP/EABkRAQEBAAMAAAAAAAAAAAAAAAIBEgAxUv/aAAgBAgEBPwAgutLVWu7b5l5//8QAGhEBAAIDAQAAAAAAAAAAAAAAAQIRAANREv/aAAgBAwEBPwCWyZ5BKrh1z//Z"});
;// CONCATENATED MODULE: ./components/Hero/style.ts




const HeroGrid = external_styled_components_default().section.withConfig({
  displayName: "style__HeroGrid",
  componentId: "sc-xb7jap-0"
})(["width:100vw;height:100vh;max-width:100%;min-height:100vh;z-index:1;padding:20px;padding-bottom:20px;display:grid;grid-template-columns:repeat(15,1fr);grid-template-rows:repeat(10,1fr);grid-gap:20px;background-color:", ";overflow:hidden;@media (max-width:700px){grid-template-rows:1fr 0.5fr 1fr;grid-template-columns:1fr;grid-gap:0px;padding:0px;}"], colors/* colorLightGrey */.Nt);
const Overlay = external_styled_components_default().div.withConfig({
  displayName: "style__Overlay",
  componentId: "sc-xb7jap-1"
})(["position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,0.5);z-index:2;"]);
const HeaderContainer = external_styled_components_default().div.withConfig({
  displayName: "style__HeaderContainer",
  componentId: "sc-xb7jap-2"
})(["display:flex;flex-direction:column;align-items:center;justify-content:space-between;grid-column-start:7;grid-column-end:10;grid-row-start:5;grid-row-end:7;outline:20px solid ", ";background-color:", ";z-index:10;@media (max-width:855px){grid-column-end:11;}@media (max-width:700px){grid-column-start:1;grid-column-end:2;grid-row-start:2;grid-row-end:3;}@media (max-height:900px){grid-row-end 8;}"], colors/* colorLightGrey */.Nt, colors/* colorLightGrey */.Nt);
const HeroText = external_styled_components_default()(external_framer_motion_.motion.h1).withConfig({
  displayName: "style__HeroText",
  componentId: "sc-xb7jap-3"
})(["position:relative;font-size:2rem;", " @media (max-width:1100px){font-size:1.5rem;}"], constants_text/* Oswald */.L);
const HeroButton = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "style__HeroButton",
  componentId: "sc-xb7jap-4"
})(["position:relative;width:100%;height:70px;padding:10px;border:1px solid black;cursor:pointer;display:flex;justify-content:center;align-items:center;@media (max-width:700px){width:200px;}"]);
const HeroButtonText = external_styled_components_default()(external_framer_motion_.motion.p).withConfig({
  displayName: "style__HeroButtonText",
  componentId: "sc-xb7jap-5"
})(["", " font-size:1.5rem;"], constants_text/* Oswald */.L);
const style_ImageContainer = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "style__ImageContainer",
  componentId: "sc-xb7jap-6"
})(["position:relative;height:100%;width:100%;outline:20px solid ", ";@media (max-width:700px){visibility:hidden;outline:none;}"], colors/* colorLightGrey */.Nt);
const Image1 = external_styled_components_default()(style_ImageContainer).withConfig({
  displayName: "style__Image1",
  componentId: "sc-xb7jap-7"
})(["grid-column-start:1;grid-column-end:4;grid-row-start:1;grid-row-end:5;@media (max-width:700px){grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:2;visibility:visible;}"]);
const Image2 = external_styled_components_default()(style_ImageContainer).withConfig({
  displayName: "style__Image2",
  componentId: "sc-xb7jap-8"
})(["grid-column-start:4;grid-column-end:10;grid-row-start:1;grid-row-end:5;@media (max-width:700px){grid-column-start:1;grid-column-end:2;grid-row-start:3;grid-row-end:4;visibility:visible;}"]);
const Image3 = external_styled_components_default()(style_ImageContainer).withConfig({
  displayName: "style__Image3",
  componentId: "sc-xb7jap-9"
})(["grid-column-start:10;grid-column-end:13;grid-row-start:1;grid-row-end:7;z-index:5;outline:20px solid ", ";@media (max-width:855px){grid-row-end:5;}@media (max-height:900px){grid-row-end:8;}"], colors/* colorLightGrey */.Nt);
const Image4 = external_styled_components_default()(style_ImageContainer).withConfig({
  displayName: "style__Image4",
  componentId: "sc-xb7jap-10"
})(["grid-column-start:13;grid-column-end:end;grid-row-start:1;grid-row-end:5;"]);
const Image5 = external_styled_components_default()(style_ImageContainer).withConfig({
  displayName: "style__Image5",
  componentId: "sc-xb7jap-11"
})(["grid-column-start:1;grid-column-end:7;grid-row-start:5;grid-row-end:end;"]);
const Image6 = external_styled_components_default()(style_ImageContainer).withConfig({
  displayName: "style__Image6",
  componentId: "sc-xb7jap-12"
})(["grid-column-start:7;grid-column-end:11;grid-row-start:7;grid-row-end:end;@media (max-height:900px){grid-row-start:8;}"]);
const Image7 = external_styled_components_default()(style_ImageContainer).withConfig({
  displayName: "style__Image7",
  componentId: "sc-xb7jap-13"
})(["grid-column-start:11;grid-column-end:end;grid-row-start:5;grid-row-end:end;z-index:1;"]);
;// CONCATENATED MODULE: ./components/Hero/Hero.tsx












const textScale = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.1,
      type: "tween"
    }
  }
};

const Hero = ({
  executeScroll
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeroGrid, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(HeroText, {
        initial: {
          opacity: "0%"
        },
        animate: {
          opacity: "100%"
        },
        transition: {
          delay: 0.5,
          duration: 1
        },
        children: "LEARN MORE ABOUT FLOWERS"
      }), /*#__PURE__*/jsx_runtime_.jsx(HeroButton, {
        onClick: executeScroll,
        initial: {
          opacity: "0%"
        },
        animate: {
          opacity: "100%"
        },
        transition: {
          delay: 4,
          duration: 1.5
        },
        whileHover: "hover",
        children: /*#__PURE__*/jsx_runtime_.jsx(HeroButtonText, {
          variants: textScale,
          children: "Learn now"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Image1, {
      initial: {
        width: "0%",
        opacity: "0%"
      },
      animate: {
        width: "100%",
        opacity: "100%"
      },
      transition: {
        duration: 1,
        delay: 3
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: daisy,
        alt: "Image of daisy flowers",
        objectFit: "cover",
        layout: "fill",
        quality: 30,
        sizes: "30vw",
        priority: true
      }), /*#__PURE__*/jsx_runtime_.jsx(Overlay, {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Image2, {
      initial: {
        height: "0%",
        opacity: "0%"
      },
      animate: {
        height: "100%",
        opacity: "100%"
      },
      transition: {
        duration: 2.5,
        delay: 2
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: growing_plant,
        alt: "Image of growing plants",
        objectFit: "cover",
        layout: "fill",
        quality: 30,
        sizes: "30vw",
        priority: true
      }), /*#__PURE__*/jsx_runtime_.jsx(Overlay, {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Image3, {
      initial: {
        y: "-120%",
        opacity: "0%"
      },
      animate: {
        y: "0%",
        opacity: "100%"
      },
      transition: {
        duration: 1.5,
        delay: 1
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: ray_flower,
        alt: "Image of a ray-flower",
        objectFit: "cover",
        layout: "fill",
        quality: 30,
        sizes: "30vw",
        priority: true
      }), /*#__PURE__*/jsx_runtime_.jsx(Overlay, {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Image4, {
      initial: {
        x: "120%",
        opacity: "0%"
      },
      animate: {
        x: "0%",
        opacity: "100%"
      },
      transition: {
        duration: 3,
        delay: 1.5
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: globe_amaranth,
        alt: "Image of globe amaranth flowers",
        objectFit: "cover",
        layout: "fill",
        quality: 30,
        sizes: "30vw",
        priority: true
      }), /*#__PURE__*/jsx_runtime_.jsx(Overlay, {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Image5, {
      initial: {
        width: "0%",
        opacity: "0%"
      },
      animate: {
        width: "100%",
        opacity: "100%"
      },
      transition: {
        duration: 3,
        delay: 1
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: lotus,
        alt: "Image of a lotus flower",
        objectFit: "cover",
        layout: "fill",
        quality: 50,
        sizes: "30vw",
        priority: true
      }), /*#__PURE__*/jsx_runtime_.jsx(Overlay, {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Image6, {
      initial: {
        y: "120%",
        opacity: "0%"
      },
      animate: {
        y: "0%",
        opacity: "100%"
      },
      transition: {
        duration: 1,
        delay: 1.5
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: cherry_blossom,
        alt: "Image of cherry blossoms",
        objectFit: "cover",
        layout: "fill",
        quality: 30,
        sizes: "30vw",
        priority: true
      }), /*#__PURE__*/jsx_runtime_.jsx(Overlay, {})]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Image7, {
      initial: {
        x: "120%",
        opacity: "0%"
      },
      animate: {
        x: "0%",
        opacity: "100%"
      },
      transition: {
        duration: 2,
        delay: 2
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: sunflower,
        alt: "Image of sun flowers",
        objectFit: "cover",
        layout: "fill",
        quality: 30,
        sizes: "30vw",
        priority: true
      }), /*#__PURE__*/jsx_runtime_.jsx(Overlay, {})]
    })]
  });
};

/* harmony default export */ const Hero_Hero = (Hero);
// EXTERNAL MODULE: ./lib/flowerAPI.ts
var flowerAPI = __webpack_require__(433);
;// CONCATENATED MODULE: ./pages/index.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Home = ({
  flowers
}) => {
  for (let i = 0; i < flowers.length; i++) {
    flowers[i] = _objectSpread(_objectSpread({}, flowers[i]), {}, {
      id: i.toString()
    });
  }

  const scrollRef = (0,external_react_.useRef)(null);

  const executeScroll = () => scrollRef.current.scrollIntoView();

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Hero_Hero, {
      executeScroll: executeScroll
    }), /*#__PURE__*/jsx_runtime_.jsx(FlowerGridSection_FlowerGridSection, {
      flowers: flowers,
      scrollRef: scrollRef
    })]
  });
};

/* harmony default export */ const pages = (Home);
async function getStaticProps() {
  const flowers = await (0,flowerAPI/* getAllFlowers */.L)();
  return {
    props: {
      flowers: flowers
    },
    revalidate: 600
  };
}

/***/ }),

/***/ 376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,258], () => (__webpack_exec__(37)));
module.exports = __webpack_exports__;

})();