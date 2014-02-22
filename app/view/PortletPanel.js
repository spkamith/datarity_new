Ext.define('DATARITY.view.PortletPanel', {
    extend: 'DATARITY.view.portal.PortalPanel',    
    
    alias: 'widget.portletpanel',

    getTools: function(){
        return [{
            xtype: 'tool',
            type: 'gear',
            handler: function(e, target, panelHeader, tool){
                var portlet = panelHeader.ownerCt;
                portlet.setLoading('Loading...');
                Ext.defer(function() {
                    portlet.setLoading(false);
                }, 2000);
            }
        }];
    },
    
    initComponent: function() {
       var creditcard_tpl =  new Ext.XTemplate(
                        '<div><div class="dashboard-stat blue" style="background-color: #27a9e3;">',
                        '<div class="visual"><i class="fa fa-comments"></i></div>',
                        '<div class="details"><div class="number">35K +</div><div class="desc">Credit Cards</div></div>',
                        '<a class="more" href="#">View details <i class="m-icon-swapright m-icon-white"></i></a></div></div>',
                        { compiled : true }

                    );
       var ssn_tpl =  new Ext.XTemplate(
                        '<div><div class="dashboard-stat green" style="background-color: #28b779;">',
                        '<div class="visual"><i class="fa fa-shopping-cart"></i></div>',
                        '<div class="details"><div class="number">20K +</div><div class="desc">SSNs</div></div>',
                        '<a class="more" href="#">View details <i class="m-icon-swapright m-icon-white"></i></a></div></div>',
                        { compiled : true }

                    );
       var phoneno_tpl =  new Ext.XTemplate(
                        '<div><div class="dashboard-stat purple" style="background-color: #852b99;">',
                        '<div class="visual"><i class="fa fa-globe"></i></div>',
                        '<div class="details"><div class="number">950K +</div><div class="desc">Phone Numbers</div></div>',
                        '<a class="more" href="#">View details <i class="m-icon-swapright m-icon-white"></i></a></div></div>',
                        { compiled : true }

                    );
       var email_tpl =  new Ext.XTemplate(
                        '<div> <div class="dashboard-stat yellow" style="background-color: #ffb848;">',
                        '<div class="visual"><i class="fa fa-bar-chart-o"></i></div>',
                        '<div class="details"><div class="number">12M</div><div class="desc">EMail Ids</div></div>',
                        '<a class="more" href="#">View details <i class="m-icon-swapright m-icon-white"></i></a></div></div>',
                        { compiled : true }

                    );
        Ext.apply(this, {

            items: [{
                id: 'creditcard_col',
                items: [{
                    id: 'creditcard_portlet',
                    tpl:creditcard_tpl,
                    data:'',
                    listeners : {
                        afterrender : function() {
                             this.update();
                        }
                    }
                }]
            },{
                id: 'ssn_col',
                items: [{
                    id: 'ssn_portlet',
                    tpl:ssn_tpl,
                    data:'',
                    listeners : {
                        afterrender : function() {
                             this.update();
                        }
                    }
                }]
            },{
                id: 'phoneno_col',
                items: [{
                    id: 'phoneno_portlet',
                    tpl:phoneno_tpl,
                    data:'',
                    listeners : {
                        afterrender : function() {
                             this.update();
                        }
                    }
                }]
            },{
                id: 'email_col',
                tpl:email_tpl,
                data:'',
                listeners : {
                    afterrender : function() {
                         this.update();
                    }
                }
            }]
            
        });
                
        this.callParent(arguments);
    }
});
