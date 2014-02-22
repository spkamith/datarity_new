Ext.define('DATARITY.controller.dashboard', {
    extend: 'Ext.app.Controller',

    stores: [
        
    ],

    views: [
        //'master.dashboard'
    ],

    refs: [{
        ref: 'panel',
        selector: '',
        xtype: 'dashboardPanel',
        autoCreate: true
    }],

    init: function(application) {
        if (this.inited) {
            return;
        }
        this.inited = true;
        
    },

    /*loadView: function() {
        this.application.setMainView(this.getPanel());
    }
    
});