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
    var core_1, http_1;
    var ResourceService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ResourceService = (function () {
                function ResourceService(_http) {
                    this._http = _http;
                    this._resourceUrl = "http://localhost/TaskProgressTracker.Services/ResourceService.svc/GetResources";
                    this._resourcedataUrl = "http://localhost/TaskProgressTracker.Services/ResourceService.svc/GetReportsByResourceId";
                }
                ResourceService.prototype.getResources = function () {
                    if (this._http != null) {
                        return this._http.get(this._resourceUrl)
                            .map(function (res) { return JSON.parse(res.json()); });
                    }
                };
                ResourceService.prototype.getReportsByResourceId = function (resourceId) {
                    if (this._http != null) {
                        return this._http.get(this._resourcedataUrl + "/" + resourceId)
                            .map(function (res) { return JSON.parse(res.json()); });
                    }
                };
                ResourceService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ResourceService);
                return ResourceService;
            }());
            exports_1("ResourceService", ResourceService);
        }
    }
});
//# sourceMappingURL=resource.service.js.map