class emitter {
    constructor(){
        this.events={};
    }
}
emitter.prototype.on = function(type, listener){
    if (this.events[type] == undefined){
        this.events[type] = [];
    }
    this.events[type].push(listener);
};

emitter.prototype.emit= function(type){
    if (this.events[type] != undefined){
        this.events[type].forEach(listener => {
            listener();
        });
    }
}

module.exports = emitter;
