webpackJsonp([1,4],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, ".list-main {\r\n  border: 1px solid #ddd;\r\n  float: none;\r\n  margin-top: 30px;\r\n  padding: 0px;\r\n  border-radius: 4px;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\nh2 {\r\n  color: white;\r\n  margin: 0px;\r\n  padding: 10px 15px;\r\n  text-align: left;\r\n  font-size: 24px;\r\n}\r\n\r\n.panel-heading {\r\n  padding: 0px;\r\n  background-color: steelblue;\r\n}\r\n\r\n.input-holder {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.form-group input {\r\n  height: 40px;\r\n  font-weight: bold;\r\n  border: 1px solid #ddd;\r\n  max-width: none;\r\n}\r\n\r\n.todo-input {\r\n  font-size: 24px;\r\n  padding: 4px 15px;\r\n  border: none;\r\n  border-radius: 0px;\r\n  width: 100%;\r\n}\r\n\r\n.list-group-item {\r\n  padding-top: 0px;\r\n  padding-bottom: 0px;\r\n  font-size: 18px;\r\n}\r\n\r\n.list-group {\r\n  margin-bottom: 0px\r\n}\r\n\r\n.row li {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n.text-holder {\r\n  top: 0;\r\n  bottom: 0px;\r\n  left: 0;\r\n  padding-top: 8px;\r\n  padding-bottom: 8px;\r\n  display: inline-block;\r\n}\r\n\r\nli {\r\n  margin-bottom: -2px;\r\n}\r\n\r\nli:nth-child(even) {\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.delete-holder {\r\n  /*text-align: center;\r\n  top: 0;\r\n  bottom: 0px;\r\n  right: 0;\r\n  display: inline-block;\r\n  position: absolute;*/\r\n  line-height: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top: 35%;\r\n  right: 0;\r\n  text-align: right;\r\n}\r\n\r\n.delete-btn {\r\n  /*position: relative;\r\n  top: 33%;\r\n  height: 50%;\r\n  line-height: 20px;\r\n  -webkit-position: relative;\r\n  -webkit-top: 33%;\r\n  -webkit-height: 50%;\r\n  -webkit-line-height: 20px;\r\n  display: none;*/\r\n  display: none;\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\nli:hover>.row>.delete-holder>.delete-btn {\r\n  display: block;\r\n}\r\n\r\n.item-text {\r\n  cursor: pointer;\r\n  color: grey;\r\n}\r\n\r\n.checkmark {\r\n  color: #29AF6A;\r\n}\r\n\r\ninput::-webkit-input-placeholder {\r\n  color: #ddd;\r\n}\r\n\r\n#bottom-info {\r\n  padding: 15px 0px;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-weight: bold;\r\n}\r\n\r\n#bottom-info button {\r\n  float: right;\r\n  font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 134:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-xs-12\">\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-heading\">\r\n      <h2>Create a List</h2>\r\n    </div>\r\n\r\n    <div class=\"panel-body\">\r\n      <div class=\"form-group input-holder\">\r\n        <input placeholder=\"Type here and press enter\" [(ngModel)]=\"newItem.title\" type=\"text\" (keydown)=\"addNewItem($event)\" class=\"form-control todo-input\"\r\n          value=\"{{newItem.title}}\">\r\n      </div>\r\n\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item object-item\" *ngFor=\"let item of allItems\">\r\n          <div class=\"row inline-block\">\r\n            <div class=\"col-xs-10 text-holder\">\r\n              <span id=\"checkmark-{{item.id}}\" class=\"checkmark\" *ngIf=\"item.done === true\">&#10003;</span>\r\n              <span class=\"item-text\" [id]=item.id (click)=\"toggleStatus(item.id)\">\r\n              {{item.title}}\r\n              </span>\r\n            </div>\r\n            <div class=\"col-xs-2 delete-holder\"><span class=\"delete-btn\" (click)=\"deleteItem(item.id)\">X</span></div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n      <div id=\"bottom-info\" class=\"clearfix\" *ngIf=\"notDoneCount !== NaN\">\r\n  <span *ngIf=\"notDoneCount\" class=\"btn btn-sm btn-default\"> {{notDoneCount}} left</span>\r\n  <button *ngIf=\"notDoneCount < allItems.length\" class=\"btn btn-sm btn-default\" (click)=\"clearDone()\"> Clear <span class=\"checkmark\">&#10003;</span> </button>\r\n</div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(70);


/***/ }),

/***/ 69:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 69;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(78);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* unused harmony export listItem */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = "To-do List";
        this.allItems = [];
        this.newItem = new listItem;
    }
    AppComponent.prototype.addNewItem = function (event) {
        if (event.key === "Enter" || event.keyCode === 13) {
            console.log(event);
            this.newItem.id = ++idCounter;
            var newTemp = this.newItem;
            this.allItems.push(newTemp);
            this.newItem = new listItem;
            this.notDoneCount = getNotDone(this.allItems);
        }
        ;
    };
    ;
    AppComponent.prototype.deleteItem = function (id) {
        var location = this.allItems.findIndex(function (item) { return item.id == id; });
        this.allItems.splice(location, 1);
        this.notDoneCount = getNotDone(this.allItems);
    };
    ;
    AppComponent.prototype.clearDone = function () {
        var newList = [];
        this.allItems.forEach(function (element) {
            if (element.done === false) {
                newList.push(element);
            }
        });
        this.allItems = newList;
        this.notDoneCount = getNotDone(this.allItems);
    };
    AppComponent.prototype.toggleStatus = function (id) {
        var temp = this.allItems.find(function (item) { return item.id == id; });
        temp.done = (temp.done === false) ? true : false;
        makeChange(id, temp.done);
        this.notDoneCount = getNotDone(this.allItems);
    };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(134),
        styles: [__webpack_require__(132)]
    })
], AppComponent);

var idCounter = 0;
var listItem = (function () {
    function listItem() {
        this.done = false;
    }
    return listItem;
}());

function makeChange(id, status) {
    var clicked = document.getElementById(id);
    clicked.style.textDecoration = (status === true) ? "line-through" : "none";
}
;
function getNotDone(list) {
    var notDone = 0;
    list.forEach(function (element) {
        if (element.done === false) {
            notDone++;
        }
    });
    return notDone;
}
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */] // <-- import the FormsModule before binding with [(ngModel)]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[159]);
//# sourceMappingURL=main.bundle.js.map