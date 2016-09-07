System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_2;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(http) {
                    this.http = http;
                    this.m = '';
                    this.str = '';
                }
                HomeComponent.prototype.giveExpToServer = function (m) {
                    var body = JSON.stringify({ "value": m });
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post('http://localhost:3000/return', body, options)
                        .map(function (res) { return res.json(); });
                };
                HomeComponent.prototype.postDataToServer = function () {
                    var _this = this;
                    this.giveExpToServer(this.m)
                        .subscribe(function (data) { return _this.message = data.some; }, function (err) { return console.log("Error HTTP Post Service"); });
                };
                HomeComponent.prototype.takeExp = function (value) {
                    this.m = value;
                };
                HomeComponent.prototype.appendInput = function () {
                    this.str = "> " + this.message + "<br><br>";
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home',
                        templateUrl: "/app/home.component.html",
                        styleUrls: ['app/home.component.css']
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map