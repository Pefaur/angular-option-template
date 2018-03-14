// @Component({
//   selector: 'opt-cover',
//   templateUrl: './cover.component.html',
//   styleUrls: ['./cover.component.scss']
// })
var OptCoverComponent = /** @class */ (function () {
    function OptCoverComponent() {
        this.BACKGROUND_IMAGES = [
            'assets/img/bg-1.jpeg',
            'assets/img/bg-2.jpeg',
            'assets/img/bg-3.jpeg',
            'assets/img/bg-4.jpeg',
            'assets/img/bg-5.jpeg',
            'assets/img/bg-6.jpeg',
            'assets/img/bg-7.jpeg',
            'assets/img/bg-8.jpeg'
        ];
    }
    OptCoverComponent.prototype.ngOnInit = function () {
        var indexImage = Math.floor(Math.random() * this.BACKGROUND_IMAGES.length);
        this.backgroundImage = this.BACKGROUND_IMAGES[indexImage];
    };
    return OptCoverComponent;
}());
export { OptCoverComponent };
//# sourceMappingURL=cover.component.js.map