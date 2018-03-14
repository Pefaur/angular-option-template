export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/opt-template.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.opt-template',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/animations': 'ng.animations',
    '@angular/forms': 'ng.forms',
    '@angular/http': 'ng.http',
    '@angular/platform-browser': 'ng.platform-browser',
    '@angular/platform-browser-dynamic': 'ng.platform-browser-dynamic',
    '@angular/router': 'ng.router',
    '@option/core': 'opt.core',
    'rxjs/Observable': 'Rx',
    'rxjs/ReplaySubject': 'Rx',
    'rxjs/add/operator/map': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype',
    'rxjs/add/observable/fromEvent': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable'
  }
}
