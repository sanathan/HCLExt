Ext.define('HclExtLib.view.HButtonBar',{
	xtype:'HButtonBar',
	extend: 'Ext.toolbar.Toolbar',
	requires:'Ext.toolbar.Toolbar',
	style: {
        background: 'white'
      },
    cls:'HCLExtLib-toolbar',
    dock: 'top',
    initComponent:function (){
    	Ext.apply(this,this.config);
    	this.callParent(arguments);
    }
	
});