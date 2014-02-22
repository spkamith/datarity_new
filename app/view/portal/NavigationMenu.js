Ext.define('DATARITY.view.portal.NavigationMenu', {
    extend: 'Ext.panel.Panel',    
    
    alias: 'widget.navigation',
    
    initComponent: function() {
        
        Ext.apply(this, {

            html: DATARITY.util.Constants.shortBogusMarkup,
            title:'Navigation',
            autoScroll: true,
            border: false,
            iconCls: 'nav'
            
        });
                
        this.callParent(arguments);
    }
});
