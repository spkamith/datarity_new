Ext.define('DATARITY.controller.PortletPanel', {
    extend: 'Ext.app.Controller',

    stores: [
       
    ],

    views: [
        'PortletPanel'
    ],

    refs: [{
        ref: 'panel',
        selector: '',
        xtype: 'portletpanel',
        autoCreate: true
    }],

    init: function(application) {
        if (this.inited) {
            return;
        }
        this.inited = true;
        //console.log(this.control);
        this.control({
            
           
        });
    },

    loadView: function() {
        this.application.setMainView(this.getPortletPanelView());
    }
});