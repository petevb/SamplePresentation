define(["knockout", "sample"], function(ko, Sample) {

    return new Sample("Why knockout?", "one", [
        new Sample.State("No Knockout, jQuery", "noKo"),
        new Sample.State("Knockout view data-binding", "koBinding"),
        new Sample.State("Knockout observables", "koObservable"),
        new Sample.State("Knockout view model", "koViewModel"),
        new Sample.State("Knockout observableArray", "koObservableArray"),
    ], true);  //this last true tells it to load each sample immediately when moving to it

});