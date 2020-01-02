webpackJsonp(["main"], {

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function (module, exports) {

            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncatched exception popping up in devtools
                return Promise.resolve().then(function () {
                    throw new Error("Cannot find module '" + req + "'.");
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

            /***/
        }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function (module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
            // imports


            // module
            exports.push([module.i, "", ""]);

            // exports


            /*** EXPORTS FROM exports-loader ***/
            module.exports = module.exports.toString();

            /***/
        }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function (module, exports) {

            module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<todo-list-manager></todo-list-manager>"

            /***/
        }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };

            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
                        selector: 'todo-root',
                        template: __webpack_require__("../../../../../src/app/app.component.html"),
                        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
                    })
                ], AppComponent);
                return AppComponent;
            }());



            /***/
        }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_input_component__ = __webpack_require__("../../../../../src/app/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_item_component__ = __webpack_require__("../../../../../src/app/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_manager_list_manager_component__ = __webpack_require__("../../../../../src/app/list-manager/list-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_list_service__ = __webpack_require__("../../../../../src/app/todo-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__todo_list_storage_service__ = __webpack_require__("../../../../../src/app/todo-list-storage.service.ts");
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };








            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
                        declarations: [
                            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                            __WEBPACK_IMPORTED_MODULE_3__input_input_component__["a" /* InputComponent */],
                            __WEBPACK_IMPORTED_MODULE_4__item_item_component__["a" /* ItemComponent */],
                            __WEBPACK_IMPORTED_MODULE_5__list_manager_list_manager_component__["a" /* ListManagerComponent */]
                        ],
                        imports: [
                            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
                        ],
                        providers: [__WEBPACK_IMPORTED_MODULE_6__todo_list_service__["a" /* ToDoListService */], __WEBPACK_IMPORTED_MODULE_7__todo_list_storage_service__["a" /* ToDoListStorageService */]],
                        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
                    })
                ], AppModule);
                return AppModule;
            }());



            /***/
        }),

/***/ "../../../../../src/app/input/input.component.css":
/***/ (function (module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
            // imports


            // module
            exports.push([module.i, ".todo-input {\r\n  padding: 8px 10px 8px 30px;\r\n  line-height: 20px;\r\n  border: 0;\r\n  background-color: #ffffff;\r\n  border-bottom: solid 1px #46c1a4;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  font-family: 'Lato', sans-serif;\r\n}\r\n\r\n:host(:not([hidden])) {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n}\r\n\r\n.fa-plus {\r\n  position: absolute;\r\n  padding: 11px 10px;\r\n  color: #46c1a4;\r\n}", ""]);

            // exports


            /*** EXPORTS FROM exports-loader ***/
            module.exports = module.exports.toString();

            /***/
        }),

/***/ "../../../../../src/app/input/input.component.ts":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return InputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            var InputComponent = /** @class */ (function () {
                function InputComponent() {
                    this.submit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
                    this.title = '';
                }
                InputComponent.prototype.ngOnInit = function () {
                };
                InputComponent.prototype.changeTitle = function (newTitle) {
                    this.submit.emit(newTitle);
                };
                __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
                    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
                ], InputComponent.prototype, "submit", void 0);
                InputComponent = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
                        selector: 'todo-input',
                        template: "\n  <i class=\"fas fa-plus\"></i>\n  <input class=\"todo-input\" [value]=\"title\" (keyup.enter)=\"changeTitle($event.target.value)\" placeholder=\"O que precisa ser feito?\" #inputElement>\n  ",
                        styles: [__webpack_require__("../../../../../src/app/input/input.component.css")]
                    }),
                    __metadata("design:paramtypes", [])
                ], InputComponent);
                return InputComponent;
            }());



            /***/
        }),

/***/ "../../../../../src/app/item/item.component.css":
/***/ (function (module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
            // imports


            // module
            exports.push([module.i, ".todo-item {\r\n  padding: 10px 0;\r\n  border-top: solid 1px #ddd;\r\n  min-height: 30px;\r\n  line-height: 30px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n.todo-checkbox {\r\n  -ms-flex-negative: 0;\r\n      flex-shrink: 0;\r\n  margin: 9px auto;\r\n}\r\n\r\n.todo-title {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  word-wrap: break-word;\r\n  padding: 0px 10px;\r\n  max-width: 323px;\r\n}\r\n\r\n.btn-red {\r\n  background: #fe2260;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.btn-red:hover {\r\n  background: #d81e52;\r\n}\r\n\r\n.todo-complete {\r\n  text-decoration: line-through;\r\n}", ""]);

            // exports


            /*** EXPORTS FROM exports-loader ***/
            module.exports = module.exports.toString();

            /***/
        }),

/***/ "../../../../../src/app/item/item.component.ts":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return ItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            var ItemComponent = /** @class */ (function () {
                function ItemComponent() {
                    this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
                    this.isComplete = false;
                }
                ItemComponent.prototype.ngOnInit = function () {
                };
                ItemComponent.prototype.removeItem = function () {
                    this.remove.emit(this.todoItem);
                };
                ItemComponent.prototype.completeItem = function () {
                    this.isComplete = !this.isComplete;
                };
                __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
                    __metadata("design:type", Object)
                ], ItemComponent.prototype, "todoItem", void 0);
                __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
                    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
                ], ItemComponent.prototype, "remove", void 0);
                ItemComponent = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
                        selector: 'todo-item',
                        template: "\n    <div class=\"todo-item\">\n      <input class=\"todo-checkbox\" type=\"checkbox\" (click)=\"completeItem()\"/>\n      <p class=\"todo-title\" [ngClass]=\"{'todo-complete': isComplete}\"> {{ todoItem.title }} </p>      \n      <button class=\"btn btn-red\" (click)=\"removeItem()\"> <i class=\"fas fa-trash\"></i> </button>\n    </div>\n  ",
                        styles: [__webpack_require__("../../../../../src/app/item/item.component.css")]
                    }),
                    __metadata("design:paramtypes", [])
                ], ItemComponent);
                return ItemComponent;
            }());



            /***/
        }),

/***/ "../../../../../src/app/list-manager/list-manager.component.css":
/***/ (function (module, exports, __webpack_require__) {

            exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
            // imports


            // module
            exports.push([module.i, ".todo-app {\r\n  width: 400px;\r\n  position: absolute;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  margin: 0 auto;\r\n  right: 0;\r\n  left: 0;\r\n}\r\n\r\n.todo-app h1 {\r\n  color: #F7B633;\r\n  font-size: 60px;\r\n  line-height: 52px;\r\n  margin-bottom: 30px;\r\n  text-align: center;\r\n  font-family: 'Sail', cursive;\r\n}\r\n\r\n.todo-add {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.fa-pencil-alt {\r\n  color: #565a5c;\r\n  font-size: 20px;\r\n}", ""]);

            // exports


            /*** EXPORTS FROM exports-loader ***/
            module.exports = module.exports.toString();

            /***/
        }),

/***/ "../../../../../src/app/list-manager/list-manager.component.ts":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return ListManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_list_service__ = __webpack_require__("../../../../../src/app/todo-list.service.ts");
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            var ListManagerComponent = /** @class */ (function () {
                function ListManagerComponent(ToDoListService) {
                    this.ToDoListService = ToDoListService;
                    this.title = 'Todolist';
                }
                ListManagerComponent.prototype.ngOnInit = function () {
                    this.ToDoList = this.ToDoListService.getToDoList();
                };
                ListManagerComponent.prototype.addItem = function (title) {
                    this.ToDoList = this.ToDoListService.addItem({ title: title });
                };
                ListManagerComponent.prototype.removeItem = function (item) {
                    this.ToDoList = this.ToDoListService.removeItem(item);
                };
                ListManagerComponent = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
                        selector: 'todo-list-manager',
                        template: "\n    <div class=\"todo-app\">\n      <h1>\n        Todolist\n        <i class=\"fas fa-pencil-alt\"></i>\n      </h1>\n\n      <todo-input class=\"todo-add\" (submit)=\"addItem($event)\"></todo-input>\n\n      <ul>\n        <li *ngFor=\"let item of ToDoList\">\n          <todo-item [todoItem]=\"item\" (remove)=\"removeItem($event)\"></todo-item>\n        </li>\n      </ul>\n    </div>\n  ",
                        styles: [__webpack_require__("../../../../../src/app/list-manager/list-manager.component.css")]
                    }),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_list_service__["a" /* ToDoListService */]])
                ], ListManagerComponent);
                return ListManagerComponent;
            }());



            /***/
        }),

/***/ "../../../../../src/app/todo-list-storage.service.ts":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return ToDoListStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };

            var storageName = 'todo_list';
            var defaultList = [];
            var ToDoListStorageService = /** @class */ (function () {
                function ToDoListStorageService() {
                    this.ToDoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
                }
                ToDoListStorageService.prototype.get = function () {
                    return this.ToDoList.slice();
                };
                ToDoListStorageService.prototype.post = function (item) {
                    this.ToDoList.push(item);
                    localStorage.setItem(storageName, JSON.stringify(this.ToDoList));
                    return this.get();
                };
                ToDoListStorageService.prototype.update = function () {
                    localStorage.setItem(storageName, JSON.stringify(this.ToDoList));
                    return this.get();
                };
                ToDoListStorageService.prototype.findItemIndex = function (item) {
                    return this.ToDoList.indexOf(item);
                };
                ToDoListStorageService.prototype.put = function (item, changes) {
                    Object.assign(this.ToDoList[this.findItemIndex(item)], changes);
                    return this.update();
                };
                ToDoListStorageService.prototype.destroy = function (item) {
                    this.ToDoList.splice(this.ToDoList.indexOf(item), 1);
                    return this.update();
                };
                ToDoListStorageService = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
                    __metadata("design:paramtypes", [])
                ], ToDoListStorageService);
                return ToDoListStorageService;
            }());



            /***/
        }),

/***/ "../../../../../src/app/todo-list.service.ts":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return ToDoListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_list_storage_service__ = __webpack_require__("../../../../../src/app/todo-list-storage.service.ts");
            var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            };
            var __metadata = (this && this.__metadata) || function (k, v) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
            };


            var ToDoListService = /** @class */ (function () {
                function ToDoListService(storage) {
                    this.storage = storage;
                }
                ToDoListService.prototype.getToDoList = function () {
                    return this.storage.get();
                };
                ToDoListService.prototype.addItem = function (item) {
                    return this.storage.post(item);
                };
                ToDoListService.prototype.removeItem = function (item) {
                    return this.storage.destroy(item);
                };
                ToDoListService = __decorate([
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
                    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__todo_list_storage_service__["a" /* ToDoListStorageService */]])
                ], ToDoListService);
                return ToDoListService;
            }());



            /***/
        }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function () { return environment; });
            // The file contents for the current environment will overwrite these during build.
            // The build system defaults to the dev environment which uses `environment.ts`, but if you do
            // `ng build --env=prod` then `environment.prod.ts` will be used instead.
            // The list of which env maps to which file can be found in `.angular-cli.json`.
            var environment = {
                production: false
            };


            /***/
        }),

/***/ "../../../../../src/main.ts":
/***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




            if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
            }
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
                .catch(function (err) { return console.log(err); });


            /***/
        }),

/***/ 0:
/***/ (function (module, exports, __webpack_require__) {

            module.exports = __webpack_require__("../../../../../src/main.ts");


            /***/
        })

}, [0]);
//# sourceMappingURL=main.bundle.js.map