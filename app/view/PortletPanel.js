    Ext.define('scanReportData', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'name', mapping: 'name', type: 'string'},
            {name: 'data',  type: 'int'}
        ]
    });

    // create the Data Store
    var scanReportDataStore = Ext.create('Ext.data.JsonStore', {
        id: 'scanReportDataStore',
        model: 'scanReportData',
        autoLoad:true,
        proxy: {
            type: 'ajax',
            actionMethods: {
                read: 'POST'
            },
            url: './server/scanreport_piedata.json',
            extraParams: {
                todo : 'Get_ScanResults'
            },
            reader: {
                type: 'json',
                root: 'SCANRESULTS',
                totalProperty: 'totalCount'
            },
            simpleSortMode: true
        }
    });

    var donut = false;
    
    var scanReportPieChart = Ext.create('Ext.chart.Chart', {
        xtype: 'chart',
        animate: true,
        store: scanReportDataStore,
        shadow: true,
        legend: {
            position: 'right'
        },
        insetPadding: 60,
        width:550,
        height:400,
        theme: 'Base:gradients',
        series: [{
            type: 'pie',
            field: 'data',
            showInLegend: true,
            donut: 35,
            tips: {
                trackMouse: true,
                renderer: function(storeItem, item) {
                    //calculate percentage.
                    var total = 0;
                    scanReportDataStore.each(function(rec) {
                        total += rec.get('data');
                    });
                    this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('data') / total * 100) + '%');
                }
            },
            highlight: {
                segment: {
                    margin: 20
                }
            },
            label: {
                field: 'name',
                display: 'rotate',
                contrast: true,
                font: '18px Arial'
            }
        }]
    });

Ext.define('scanReportColumnData', {
        extend: 'Ext.data.Model',
        fields: [
            {name: 'name', mapping: 'name', type: 'string'},
            {name: 'data1',  type: 'int'},
            {name: 'data2',  type: 'int'},
            {name: 'data3',  type: 'int'},
            {name: 'data4',  type: 'int'},
            {name: 'data5',  type: 'int'},
            {name: 'data6',  type: 'int'},
            {name: 'data7',  type: 'int'},
            {name: 'data8',  type: 'int'}
        ]
    });

    // create the Data Store
    var scanReportColumnDataStore = Ext.create('Ext.data.JsonStore', {
        id: 'scanReportColumnDataStore',
        model: 'scanReportColumnData',
        autoLoad:true,
        proxy: {
            type: 'ajax',
            actionMethods: {
                read: 'POST'
            },
            url: './server/scanreport_columndata.json',
            extraParams: {
                todo : 'Get_ScanResults'
            },
            reader: {
                type: 'json',
                root: 'SCANCOLUMNRESULTS',
                totalProperty: 'totalCount'
            },
            simpleSortMode: true
        }
    });
 var scanReportColumnChart = Ext.create('Ext.chart.Chart', {
        style: 'background:#fff',
        animate: true,
        shadow: true,
         width:550,
        height:400,
        store: scanReportColumnDataStore,
        axes: [{
            type: 'Numeric',
            position: 'left',
            fields: ['data1'],
            label: {
                renderer: Ext.util.Format.numberRenderer('0,0')
            },
            title: 'Number of Hits',
            grid: true,
            minimum: 0
        }, {
            type: 'Category',
            position: 'bottom',
            fields: ['name'],
            title: 'Scan Report'
        }],
        series: [{
            type: 'column',
            axis: 'left',
            highlight: true,
            tips: {
                trackMouse: true,
                renderer: function(storeItem, item) {
                    this.setTitle(storeItem.get('name') + ': ' + storeItem.get('data1') + ' $');
                }
            },
            label: {
                display: 'insideEnd',
                'text-anchor': 'middle',
                field: 'data1',
                renderer: Ext.util.Format.numberRenderer('0'),
                orientation: 'vertical',
                color: '#333'
            },
            xField: 'name',
            yField: 'data1'
        }]
    });
Ext.define('DATARITY.view.PortletPanel', {
    extend: 'DATARITY.view.portal.PortalPanel',    
    
    alias: 'widget.portletpanel',
     border:false,
     
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
                columnWidth: 0.25,
                width:250,
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
                columnWidth: 0.25,
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
                 columnWidth: 0.25,
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
                columnWidth: 0.25,
                tpl:email_tpl,
                data:'',
                listeners : {
                    afterrender : function() {
                         this.update();
                    }
                }
            },{
                xtype : 'panel',
                columnWidth: 1,
               // align : 'center',
                border:false,
                layout: {
                    type: 'hbox',
                    align: 'stretch'
                },
                style : 'padding:10px;',
                items: [{
                    xtype : 'spacer',
                    border:false,
                    flex:1
                },{
                   // flex : 1,
                    xtype : 'button',
                    width : 150,
                    frame : true,
                    border:true,
                    scale   : 'large',
                    text : 'Scan'
                },{
                    xtype : 'spacer',
                    border:false,
                    flex:1
                },{
                    //flex : 1,
                    xtype : 'button',
                    width : 150,
                    frame : true,
                    border:true,
                    scale   : 'large',
                    text : 'Mask'
                },{
                    xtype : 'spacer',
                    border:false,
                    flex:1
                }]
            },{
                xtype:'panel',
                columnWidth: 0.45,
                //  width: 800,
               // height: 400,
                title: 'Scan Results',
                items: scanReportPieChart//,
               /* tbar: [{
                        enableToggle: true,
                        pressed: false,
                        text: 'Donut',
                        toggleHandler: function(btn, pressed) {
                            scanReportPieChart.series.first().donut = pressed ? 35 : false;
                            scanReportPieChart.refresh();
                        }
                }]*/
            },{
                xtype : 'spacer',
                border:false,
                columnWidth:0.07,
            },{
                xtype:'panel',
                columnWidth: 0.45,
                //  width: 800,
               // height: 400,
                title: 'Scan Results 2',
                items: scanReportColumnChart
            }]
            
        });
                
        this.callParent(arguments);
    }
});
