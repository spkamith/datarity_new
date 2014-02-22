Ext.application({
    autoCreateViewport: true,
    name: 'DATARITY',

    launch: function() {

        this.viewport = Ext.ComponentQuery.query('viewport')[0];
        this.centerPanel = Ext.ComponentQuery.query('#centerPanel')[0]
        var c = this.getController('Viewport');
        c.init();
    },
    
    addController:function(controllerName, actionName){
        var controller = this.getController(controllerName);
        controller.init(this);
        //controller.loadView();
    },

    removeController:function(controllerName){
        //console.log(this.controllers);
        var controller  = this.getController(controllerName),
            controllers = this.controllers,
            className   = Ext.ClassManager.getName(controller);

        
        //remove controller listeners
        Ext.app.EventBus.unlisten(controller.id);
        
        //remove controller from app
        Ext.destroy(controllers.remove(controller));

        //clean up the class name
        Ext.ClassManager.setNamespace(className, null);
        
        //console.log(this.controllers);


    },
   /* setMainView: function(view){
        var center = this.centerPanel;
        if(!center.contains(view)) {
            center.add(view);
        }
       // center.setActiveTab(view);
    }*/

});