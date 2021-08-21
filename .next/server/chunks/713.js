"use strict";
exports.id = 713;
exports.ids = [713];
exports.modules = {

/***/ 713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MD": () => (/* binding */ useComments),
/* harmony export */   "Cr": () => (/* binding */ CommentsProvider)
/* harmony export */ });
/* unused harmony export CommentContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_commentsAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(663);



const commentContextInitialState = {
  comments: [],
  commentEditMode: false,
  commentEditData: null,
  setCommentsHandler: () => null,
  getCommentsHandler: () => null,
  populateCommentEditFields: () => null,
  clearEditMode: () => null
};
const CommentContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(commentContextInitialState);
const useComments = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CommentContext);
};
const CommentsProvider = ({
  children
}) => {
  const {
    0: comments,
    1: setComments
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: commentEditMode,
    1: setCommentEditMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: commentEditData,
    1: setCommentEditData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  const setCommentsHandler = comments => {
    setComments(comments);
  };

  const getCommentsHandler = async flowerId => {
    const response = await (0,_lib_commentsAPI__WEBPACK_IMPORTED_MODULE_2__/* .getComments */ .li)(flowerId);

    if (response.status === 200) {
      setComments(response.data);
    }
  };

  const populateCommentEditFields = comment => {
    setCommentEditData(comment);
    setCommentEditMode(true);
  };

  const clearEditMode = () => {
    setCommentEditData(null);
    setCommentEditMode(false);
  };

  const value = {
    comments,
    commentEditMode,
    commentEditData,
    setCommentsHandler,
    getCommentsHandler,
    populateCommentEditFields,
    clearEditMode
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CommentContext.Provider, {
    value: value,
    children: children
  });
};

/***/ }),

/***/ 663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "li": () => (/* binding */ getComments),
/* harmony export */   "Yr": () => (/* binding */ createComment),
/* harmony export */   "DF": () => (/* binding */ editComment),
/* harmony export */   "YF": () => (/* binding */ deleteComment)
/* harmony export */ });
/* unused harmony export commentApi */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const commentApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://127.0.0.1:8000/api"
});
const getComments = async flowerId => {
  const response = await commentApi.get(`/comment-list/${flowerId}`);
  return response;
};
const createComment = async comment => {
  const response = await commentApi.post(`/comment-create/`, comment);
  return response;
};
const editComment = async comment => {
  const response = await commentApi.post(`/comment-update/${comment.id}/`, comment);
  return response;
};
const deleteComment = async commentId => {
  const response = await commentApi.delete(`/comment-delete/${commentId}/`);
  return response;
};

/***/ })

};
;