"use strict";
(() => {
var exports = {};
exports.id = 214;
exports.ids = [214];
exports.modules = {

/***/ 629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _flowerId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "react-hook-form"
const external_react_hook_form_namespaceObject = require("react-hook-form");
;// CONCATENATED MODULE: external "@hookform/resolvers/yup"
const yup_namespaceObject = require("@hookform/resolvers/yup");
;// CONCATENATED MODULE: external "yup"
const external_yup_namespaceObject = require("yup");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./constants/colors.ts
var colors = __webpack_require__(503);
// EXTERNAL MODULE: ./constants/text.ts
var constants_text = __webpack_require__(206);
;// CONCATENATED MODULE: ./components/CustomInput/style.ts



const InputContainer = external_styled_components_default().div.withConfig({
  displayName: "style__InputContainer",
  componentId: "sc-1uhv8m0-0"
})(["display:flex;flex-direction:column;width:100%;"]);
const InputTitle = external_styled_components_default().label.withConfig({
  displayName: "style__InputTitle",
  componentId: "sc-1uhv8m0-1"
})(["", " font-size:1rem;color:white;"], constants_text/* Slabo */.i);
const Input = external_styled_components_default().input.withConfig({
  displayName: "style__Input",
  componentId: "sc-1uhv8m0-2"
})(["border:none;box-shadow:2px 3px 8px 0.2px rgba(50,50,50,0.5);border-radius:5px;height:2.3vh;margin-top:5px;"]);
const TextArea = external_styled_components_default().textarea.withConfig({
  displayName: "style__TextArea",
  componentId: "sc-1uhv8m0-3"
})(["border:none;box-shadow:2px 3px 8px 0.2px rgba(50,50,50,0.5);border-radius:5px;resize:none;margin-top:5px;"]);
const ErrorText = external_styled_components_default().p.withConfig({
  displayName: "style__ErrorText",
  componentId: "sc-1uhv8m0-4"
})(["", " font-size:.6em;color:", ";height:10px;margin:5px;margin-left:0;"], constants_text/* Slabo */.i, colors/* colorError */.bI);
;// CONCATENATED MODULE: ./components/CustomInput/CustomInput.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const CustomInput = ({
  title,
  id,
  register,
  errors,
  multiline = false
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(InputContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(InputTitle, {
      htmlFor: id,
      children: title
    }), multiline ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TextArea, _objectSpread({
        rows: "5",
        id: id
      }, register(id))), /*#__PURE__*/jsx_runtime_.jsx(ErrorText, {
        children: errors === null || errors === void 0 ? void 0 : errors.message
      })]
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Input, _objectSpread({
        type: "text",
        id: id
      }, register(id))), /*#__PURE__*/jsx_runtime_.jsx(ErrorText, {
        children: errors === null || errors === void 0 ? void 0 : errors.message
      })]
    })]
  });
};

/* harmony default export */ const CustomInput_CustomInput = (CustomInput);
;// CONCATENATED MODULE: ./components/AddComment/style.ts



const AddCommentContainer = external_styled_components_default().div.withConfig({
  displayName: "style__AddCommentContainer",
  componentId: "sc-14os50c-0"
})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:20px;margin-bottom:20px;"]);
const Form = external_styled_components_default().form.withConfig({
  displayName: "style__Form",
  componentId: "sc-14os50c-1"
})(["width:80%;"]);
const Title = external_styled_components_default().h3.withConfig({
  displayName: "style__Title",
  componentId: "sc-14os50c-2"
})(["", " font-size:1.2rem;color:white;margin-bottom:10px;"], constants_text/* Slabo */.i);
const InputRow = external_styled_components_default().div.withConfig({
  displayName: "style__InputRow",
  componentId: "sc-14os50c-3"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;margin-bottom:5px;"]);
const SubmitButton = external_styled_components_default().button.withConfig({
  displayName: "style__SubmitButton",
  componentId: "sc-14os50c-4"
})(["display:flex;align-items:center;justify-content:center;width:100%;height:40px;background-color:", ";color:white;border-radius:5px;border:none;box-shadow:2px 3px 8px 0.2px rgba(50,50,50,0.5);cursor:pointer;margin-top:5px;"], colors/* colorGrey */.dK);
const Spacer = external_styled_components_default().div.withConfig({
  displayName: "style__Spacer",
  componentId: "sc-14os50c-5"
})(["width:40px;"]);
// EXTERNAL MODULE: ./lib/commentsAPI.ts
var commentsAPI = __webpack_require__(663);
// EXTERNAL MODULE: ./context/CommentsContext.tsx
var CommentsContext = __webpack_require__(713);
;// CONCATENATED MODULE: ./components/AddComment/AddComment.tsx



function AddComment_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AddComment_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AddComment_ownKeys(Object(source), true).forEach(function (key) { AddComment_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AddComment_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AddComment_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const formDefaultValues = {
  title: "",
  name: "",
  message: ""
};
const schema = external_yup_namespaceObject.object().shape({
  title: external_yup_namespaceObject.string().required("This field is required"),
  name: external_yup_namespaceObject.string().required("This field is required"),
  message: external_yup_namespaceObject.string().required("This field is required")
});

const AddComment = ({
  flowerId
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_namespaceObject.useForm)({
    resolver: (0,yup_namespaceObject.yupResolver)(schema)
  });
  const {
    getCommentsHandler,
    commentEditMode,
    commentEditData,
    clearEditMode
  } = (0,CommentsContext/* useComments */.MD)();
  (0,external_react_.useEffect)(() => {
    if (commentEditMode) {
      reset({
        title: commentEditData.title,
        name: commentEditData.name,
        message: commentEditData.message
      });
    } else {
      reset(formDefaultValues);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [commentEditMode]);
  const onSubmit = handleSubmit(async (data, e) => {
    if (commentEditMode) {
      const response = await (0,commentsAPI/* editComment */.DF)(AddComment_objectSpread(AddComment_objectSpread({}, data), {}, {
        id: commentEditData.id,
        flowerId: commentEditData.flowerId
      }));

      if (response.status === 200) {
        reset(formDefaultValues);
        getCommentsHandler(flowerId);
        clearEditMode();
      }
    } else if (!commentEditMode) {
      const response = await (0,commentsAPI/* createComment */.Yr)(AddComment_objectSpread(AddComment_objectSpread({}, data), {}, {
        flowerId: flowerId
      }));

      if (response.status === 200) {
        reset(formDefaultValues);
        getCommentsHandler(flowerId);
      }
    }
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(AddCommentContainer, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
      children: !commentEditMode ? "Add a comment" : "Edit comment"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form, {
      onSubmit: onSubmit,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(InputRow, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(CustomInput_CustomInput, {
          title: "Title",
          id: "title",
          register: register,
          errors: errors.title
        }), /*#__PURE__*/jsx_runtime_.jsx(Spacer, {}), /*#__PURE__*/jsx_runtime_.jsx(CustomInput_CustomInput, {
          title: "Name",
          id: "name",
          register: register,
          errors: errors.name
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(CustomInput_CustomInput, {
        title: "Message",
        id: "message",
        register: register,
        errors: errors.message,
        multiline: true
      }), /*#__PURE__*/jsx_runtime_.jsx(SubmitButton, {
        type: "submit",
        children: "Send comment"
      })]
    })]
  });
};

/* harmony default export */ const AddComment_AddComment = (AddComment);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: external "react-icons"
const external_react_icons_namespaceObject = require("react-icons");
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(193);
;// CONCATENATED MODULE: ./components/CommentCard/style.ts




const CommentContainer = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "style__CommentContainer",
  componentId: "sc-112dme0-0"
})(["display:flex;flex-direction:column;position:relative;background-color:", ";border-radius:15px;padding:15px;box-shadow:2px 3px 8px 0.1px rgba(50,50,50,0.65);margin:15px;flex-grow:1;overflow:hidden;"], colors/* colorLightGrey */.Nt);
const style_Title = external_styled_components_default().p.withConfig({
  displayName: "style__Title",
  componentId: "sc-112dme0-1"
})(["", " font-size:1.2rem;margin-bottom:5px;"], constants_text/* Slabo */.i);
const Content = external_styled_components_default().p.withConfig({
  displayName: "style__Content",
  componentId: "sc-112dme0-2"
})(["max-width:230px;", " font-size:1rem;margin-bottom:5px;@media (max-width:1000px){max-width:100%;}"], constants_text/* Slabo */.i);
const CreatedDetailsContainer = external_styled_components_default().div.withConfig({
  displayName: "style__CreatedDetailsContainer",
  componentId: "sc-112dme0-3"
})(["display:flex;flex-direction:row;justify-content:space-between;"]);
const CreatedName = external_styled_components_default().p.withConfig({
  displayName: "style__CreatedName",
  componentId: "sc-112dme0-4"
})(["", " font-size:1rem;color:", ";"], constants_text/* Slabo */.i, colors/* colorGrey */.dK);
const CreatedDate = external_styled_components_default().p.withConfig({
  displayName: "style__CreatedDate",
  componentId: "sc-112dme0-5"
})(["", " font-size:1rem;color:", ";"], constants_text/* Slabo */.i, colors/* colorGrey */.dK);
const CommentOptionsContainer = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "style__CommentOptionsContainer",
  componentId: "sc-112dme0-6"
})(["display:flex;flex-direction:column;position:absolute;right:0;top:0;height:98px;"]);
const CommentOption = external_styled_components_default().div.withConfig({
  displayName: "style__CommentOption",
  componentId: "sc-112dme0-7"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;cursor:pointer;"]);
const CommentOptionEdit = external_styled_components_default()(CommentOption).withConfig({
  displayName: "style__CommentOptionEdit",
  componentId: "sc-112dme0-8"
})(["background-color:", ";"], colors/* colorBlueAccent */.f3);
const CommentOptionDelete = external_styled_components_default()(CommentOption).withConfig({
  displayName: "style__CommentOptionDelete",
  componentId: "sc-112dme0-9"
})(["background-color:", ";"], colors/* colorRedAccent */.Iq);
;// CONCATENATED MODULE: ./components/CommentCard/CommentCard.tsx









const width = {
  rest: {
    width: "0%"
  },
  hover: {
    width: "80px",
    transition: {
      duration: 0.2,
      type: "spring"
    }
  }
};

const CommentCard = ({
  comment
}) => {
  const {
    getCommentsHandler,
    populateCommentEditFields,
    clearEditMode,
    commentEditMode
  } = (0,CommentsContext/* useComments */.MD)();
  const date = new Date(comment.timeStamp);

  const formatDate = date => {
    return ("0" + date.getDate()).slice(-2) + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();
  };

  const deleteCommentHandler = async () => {
    const response = await (0,commentsAPI/* deleteComment */.YF)(comment.id);

    if (response.status === 200) {
      getCommentsHandler(comment.flowerId);
    }
  };

  const editCommentHandler = () => {
    if (commentEditMode) {
      clearEditMode();
    } else {
      populateCommentEditFields(comment);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CommentContainer, {
    initial: "rest",
    whileHover: "hover",
    animate: "rest",
    children: [/*#__PURE__*/jsx_runtime_.jsx(style_Title, {
      children: comment.title
    }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
      children: comment.message
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CreatedDetailsContainer, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(CreatedName, {
        children: comment.name
      }), /*#__PURE__*/jsx_runtime_.jsx(CreatedDate, {
        children: formatDate(date)
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(CommentOptionsContainer, {
      variants: width,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_icons_namespaceObject.IconContext.Provider, {
        value: {
          size: "25",
          color: "white"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(CommentOptionEdit, {
          onClick: editCommentHandler,
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiOutlineEdit */.$iz, {})
        }), /*#__PURE__*/jsx_runtime_.jsx(CommentOptionDelete, {
          onClick: deleteCommentHandler,
          children: /*#__PURE__*/jsx_runtime_.jsx(index_esm/* AiOutlineDelete */.VPh, {})
        })]
      })
    })]
  });
};

/* harmony default export */ const CommentCard_CommentCard = (CommentCard);
;// CONCATENATED MODULE: ./components/Comments/style.ts


const Container = external_styled_components_default().div.withConfig({
  displayName: "style__Container",
  componentId: "sc-1ssslaw-0"
})(["display:flex;flex-direction:column;align-items:center;height:100%;width:100%;"]);
const Comments_style_Title = external_styled_components_default().h3.withConfig({
  displayName: "style__Title",
  componentId: "sc-1ssslaw-1"
})(["", " font-size:1.2rem;color:white;margin:15px;margin-bottom:15px;"], constants_text/* Slabo */.i);
const CommentsContainer = external_styled_components_default().ul.withConfig({
  displayName: "style__CommentsContainer",
  componentId: "sc-1ssslaw-2"
})(["height:100%;overflow:auto;width:100%;margin-bottom:15px;margin-top:0;padding-left:0;list-style-type:none;::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-thumb{background:rgb(7,7,7);}::-webkit-scrollbar-thumb:hover{background:#009eb3;}"]);
const NoComments = external_styled_components_default().p.withConfig({
  displayName: "style__NoComments",
  componentId: "sc-1ssslaw-3"
})(["", " font-size:1rem;margin:0 auto;width:80%;color:white;"], constants_text/* Slabo */.i);
;// CONCATENATED MODULE: ./components/Comments/Comments.tsx







function Comments() {
  const {
    comments
  } = (0,CommentsContext/* useComments */.MD)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Comments_style_Title, {
      children: "Comments"
    }), /*#__PURE__*/jsx_runtime_.jsx(CommentsContainer, {
      children: comments.length !== 0 ? comments.map(comment => /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.li, {
        layout: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(CommentCard_CommentCard, {
          comment: comment
        })
      }, comment.id)) : /*#__PURE__*/jsx_runtime_.jsx(NoComments, {
        children: "There are no comments at the moment"
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/FlowerDetails/style.ts

const DetailsContainer = external_styled_components_default().div.withConfig({
  displayName: "style__DetailsContainer",
  componentId: "sc-ufboth-0"
})(["display:flex;flex-direction:column;justify-content:space-around;width:100%;height:100%;padding:30px 20px 30px 20px;"]);
const Text = external_styled_components_default().p.withConfig({
  displayName: "style__Text",
  componentId: "sc-ufboth-1"
})(["font-family:slabo-13px;font-weight:200;margin:0;color:white;"]);
const FlowerDetails_style_Title = external_styled_components_default()(Text).withConfig({
  displayName: "style__Title",
  componentId: "sc-ufboth-2"
})(["font-size:1rem;margin-bottom:5px;"]);
const style_Content = external_styled_components_default()(Text).withConfig({
  displayName: "style__Content",
  componentId: "sc-ufboth-3"
})(["font-size:1.2rem;"]);
const Divider = external_styled_components_default().div.withConfig({
  displayName: "style__Divider",
  componentId: "sc-ufboth-4"
})(["width:50%;height:1px;background-color:white;margin-top:10px;margin-bottom:10px;"]);
;// CONCATENATED MODULE: ./components/FlowerDetails/FlowerDetails.tsx





const FlowerDetails = ({
  bloomingSeason,
  soil,
  height,
  depth,
  spacing,
  sun,
  notes
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(DetailsContainer, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FlowerDetails_style_Title, {
        children: "Blooming season"
      }), /*#__PURE__*/jsx_runtime_.jsx(style_Content, {
        children: bloomingSeason
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Divider, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FlowerDetails_style_Title, {
        children: "Soil"
      }), soil.map(item => /*#__PURE__*/jsx_runtime_.jsx(style_Content, {
        children: item[0].toUpperCase() + item.slice(1)
      }, item))]
    }), /*#__PURE__*/jsx_runtime_.jsx(Divider, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FlowerDetails_style_Title, {
        children: "Height"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(style_Content, {
        children: [height.length > 1 ? height[0].numberInt + " - " + height[1].numberInt : height[0].numberInt, " ", "cm"]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Divider, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FlowerDetails_style_Title, {
        children: "Root depth"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(style_Content, {
        children: [depth.numberInt, " cm"]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Divider, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FlowerDetails_style_Title, {
        children: "Flower spacing"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(style_Content, {
        children: [spacing.numberInt, " cm"]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Divider, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FlowerDetails_style_Title, {
        children: "Requires sunny area"
      }), /*#__PURE__*/jsx_runtime_.jsx(style_Content, {
        children: sun ? "Yes" : "No"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Divider, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(FlowerDetails_style_Title, {
        children: "Notes"
      }), /*#__PURE__*/jsx_runtime_.jsx(style_Content, {
        children: notes
      })]
    })]
  });
};

/* harmony default export */ const FlowerDetails_FlowerDetails = (FlowerDetails);
// EXTERNAL MODULE: ./components/FlowerImage/FlowerImage.tsx + 1 modules
var FlowerImage = __webpack_require__(688);
;// CONCATENATED MODULE: ./components/FlowerDetailGrid/style.ts




const GridContainer = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "style__GridContainer",
  componentId: "sc-qcoymr-0"
})(["width:100vw;height:100vh;max-height:100%;max-width:100%;display:flex;justify-content:center;align-items:center;@media (max-width:1000px){padding:10px 0 10px 0;max-height:none;height:100%;}"]);
const Grid = external_styled_components_default().div.withConfig({
  displayName: "style__Grid",
  componentId: "sc-qcoymr-1"
})(["display:grid;grid-template-columns:repeat(4,260px);grid-template-rows:repeat(5,200px);grid-gap:10px;@media (max-width:1920px){grid-template-columns:repeat(4,220px);grid-template-rows:repeat(5,170px);}@media (max-width:1000px){display:flex;flex-direction:column;width:90vw;height:100%;grid-gap:0px;}"]);
const CardContainer = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "style__CardContainer",
  componentId: "sc-qcoymr-2"
})(["height:100%;width:100%;max-height:100%;border-radius:20px;display:flex;flex-direction:column;align-items:center;overflow:auto;@media (max-width:1000px){overflow:visible;margin:10px 0 10px 0;}"]);
const TitleCard = external_styled_components_default()(CardContainer).withConfig({
  displayName: "style__TitleCard",
  componentId: "sc-qcoymr-3"
})(["grid-column-start:1;grid-column-end:end;grid-row-start:1;grid-row-end:2;justify-content:center;background-color:", ";padding:20px;"], colors/* colorFadedRed */.hf);
const DetailCard = external_styled_components_default()(CardContainer).withConfig({
  displayName: "style__DetailCard",
  componentId: "sc-qcoymr-4"
})(["grid-column-start:1;grid-column-end:2;grid-row-start:2;grid-row-end:6;background-color:", ";"], colors/* colorBlue */.JZ);
const CommentsCard = external_styled_components_default()(CardContainer).withConfig({
  displayName: "style__CommentsCard",
  componentId: "sc-qcoymr-5"
})(["grid-column-start:4;grid-column-end:end;grid-row-start:2;grid-row-end:6;background-color:", ";"], colors/* colorBlueGrey */.g7);
const AddCommentCard = external_styled_components_default()(CardContainer).withConfig({
  displayName: "style__AddCommentCard",
  componentId: "sc-qcoymr-6"
})(["grid-column-start:2;grid-column-end:4;grid-row-start:4;grid-row-end:6;background-color:", ";"], colors/* colorFadedGreen */.oA);
const ImageContainer = external_styled_components_default()(CardContainer).withConfig({
  displayName: "style__ImageContainer",
  componentId: "sc-qcoymr-7"
})(["grid-column-start:2;grid-column-end:4;grid-row-start:2;grid-row-end:4;@media (max-width:1000px){height:50vh;}"]);
const FlowerName = external_styled_components_default().h1.withConfig({
  displayName: "style__FlowerName",
  componentId: "sc-qcoymr-8"
})(["", " font-size:5vh;color:white;"], constants_text/* Slabo */.i);
const FlowerNameLatin = external_styled_components_default().h2.withConfig({
  displayName: "style__FlowerNameLatin",
  componentId: "sc-qcoymr-9"
})(["", " font-size:4vh;color:white;"], constants_text/* Slabo */.i);
;// CONCATENATED MODULE: ./components/FlowerDetailGrid/FlowerDetailGrid.tsx









const FlowerDetailGrid = ({
  flower
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(GridContainer, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Grid, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TitleCard, {
        initial: {
          y: "-100vh"
        },
        animate: {
          y: 0
        },
        transition: {
          delay: 0.2,
          type: "tween"
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(FlowerName, {
          children: flower.common_name.toUpperCase()
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FlowerNameLatin, {
          children: ["(", flower.latin_name, ")"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ImageContainer, {
        children: /*#__PURE__*/jsx_runtime_.jsx(FlowerImage/* default */.Z, {
          image: flower.cover_image,
          name: flower.common_name
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(DetailCard, {
        initial: {
          x: "-100vw"
        },
        animate: {
          x: 0
        },
        transition: {
          delay: 0.2,
          type: "tween"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(FlowerDetails_FlowerDetails, {
          bloomingSeason: flower.blooming_season,
          soil: flower.soil,
          height: flower.height,
          depth: flower.depth,
          spacing: flower.spacing,
          sun: flower.sun,
          notes: flower.notes
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(AddCommentCard, {
        initial: {
          y: "200vh"
        },
        animate: {
          y: 0
        },
        transition: {
          delay: 0.2,
          type: "tween"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(AddComment_AddComment, {
          flowerId: flower.id
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(CommentsCard, {
        initial: {
          x: "100vw"
        },
        animate: {
          x: 0
        },
        transition: {
          delay: 0.2,
          type: "tween"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Comments, {})
      })]
    })
  });
};

/* harmony default export */ const FlowerDetailGrid_FlowerDetailGrid = (FlowerDetailGrid);
// EXTERNAL MODULE: ./lib/flowerAPI.ts
var flowerAPI = __webpack_require__(433);
;// CONCATENATED MODULE: ./pages/[flowerId].tsx


function _flowerId_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _flowerId_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _flowerId_ownKeys(Object(source), true).forEach(function (key) { _flowerId_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _flowerId_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _flowerId_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const FlowerDetailPage = ({
  flower,
  comments
}) => {
  const {
    setCommentsHandler
  } = (0,CommentsContext/* useComments */.MD)();
  (0,external_react_.useEffect)(() => {
    setCommentsHandler(comments); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(FlowerDetailGrid_FlowerDetailGrid, {
    flower: flower
  });
};

const getStaticPaths = async context => {
  const allFlowers = await (0,flowerAPI/* getAllFlowers */.L)();

  for (let i = 0; i < allFlowers.length; i++) {
    allFlowers[i] = _flowerId_objectSpread(_flowerId_objectSpread({}, allFlowers[i]), {}, {
      id: i.toString()
    });
  }

  const paths = allFlowers.map(flower => ({
    params: {
      flowerId: flower.id
    }
  }));
  return {
    paths,
    fallback: false
  };
};
const getStaticProps = async context => {
  const {
    params
  } = context;
  const flower = await (0,flowerAPI/* getFlower */.R)(params.flowerId);
  const comments = await (0,commentsAPI/* getComments */.li)(params.flowerId);
  return {
    props: {
      flower: _flowerId_objectSpread(_flowerId_objectSpread({}, flower), {}, {
        id: params.flowerId
      }),
      comments: comments.data
    },
    revalidate: 60
  };
};
/* harmony default export */ const _flowerId_ = (FlowerDetailPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [675,193,258,713], () => (__webpack_exec__(629)));
module.exports = __webpack_exports__;

})();