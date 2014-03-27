Ext.define('HclExtLib.view.VButtonBar',{
	xtype:'VButtonBar',
	extend: 'Ext.toolbar.Toolbar',
	requires:'Ext.toolbar.Toolbar',
	style: {
        background: 'white'
      },
    cls:'HCLExtLib-toolbar',
    dock: 'right',
    initComponent:function (){
    	Ext.apply(this,this.config);
    	this.callParent(arguments);
    }
	
});