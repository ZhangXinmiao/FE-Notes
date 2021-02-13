function Emitter() {

    /* your code ... */
        this.eventMap = {};
        this.commonEvent = [];
    }
    
    Emitter.prototype.on = function (eventName, cb) {
      if (eventName === '*') this.commonEvent.push(cb);
      if (!this.eventMap[eventName]) {
          this.eventMap[eventName] = [];	
      }
      this.eventMap[eventName].push(cb);
    };
    
    Emitter.prototype.trigger = function (eventName) {
      var eventList = (this.eventMap[eventName] || []).concat(this.commonEvent);
      var $this = this;
      for (var i = 0; i < eventList.length; i++) {
        eventList[i].apply($this);
      }
    };
    
    Emitter.prototype.off = function (eventName) {
      var $this = this;
      if (this.eventMap.hasOwnProperty(eventName)) {
          this.eventMap[eventName] = [];
      }
      // var $this = this;
      // for (var i = 0; i < this.commonEvent.length; i++) {
      //   this.commonEvent[i].apply($this);
      // }
    }
    
    var emitter = new Emitter();
    emitter.on('foo', function(e){
        console.log('listening foo event', e);
    });
    emitter.on('*', function(e){
        console.log('listening all events');
    });
    emitter.trigger('foo', {name : 'John'});
    // emitter.off('foo');
    emitter.trigger('foo', {name : 'John'});
    emitter.on('test', function(e){
        console.log('listening 123 events'); });
    emitter.on('test', {name: 'hah'});