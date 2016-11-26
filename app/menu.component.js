/**
 * Created by Alain on 5/29/2016.
 */
System.register(['@angular/core', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var MenuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MenuComponent = class MenuComponent {
                constructor(_router) {
                    this._router = _router;
                }
                editProfile() {
                    this._router.navigate([{ outlets: { popupOutlet: 'profile' } }]);
                }
            };
            MenuComponent = __decorate([
                core_1.Component({
                    selector: 'menu',
                    template: `
   <div>
    <div >
        <paper-listbox>
            <paper-item id="editProfile" on-click="editProfile()" >Edit Profile</paper-item>
            <paper-item>Search</paper-item>
            <paper-item>My Jobines</paper-item>
            <paper-item>My Messages</paper-item>
            <paper-item>My bookmark</paper-item>
            <paper-item>Post Jobine</paper-item>
            <paper-item>About</paper-item>
        </paper-listbox>
      </div>
   </div>
  `
                }), 
                __metadata('design:paramtypes', [router_1.Router])
            ], MenuComponent);
            exports_1("MenuComponent", MenuComponent);
        }
    }
});
//# sourceMappingURL=menu.component.js.map