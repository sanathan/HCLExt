Ext.define('HclExtLib.view.SimpleEditableGrid', {
    extend: 'Ext.grid.Panel',
	requires:['HclExtLib.view.ux.ComponentColumn','Ext.grid.plugin.CellEditing'],
    xtype: 'simple-editable-grid',
    
    columnLines: true,
    height: 350,
    title: 'Simple Grid With Editable Cells',
    viewConfig: {
        stripeRows: true
    },
	selType: 'cellmodel',
    plugins: [
        Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        })
    ],
    buildColumnsConfig: function (columnsdef){
    	var columns=[];
    	Ext.each(columnsdef,function(coldef){
    		var col={};
    		Ext.apply(col,coldef.columnconfig);
    		switch(coldef.xtype)
    		{
    		case 'textfield': 
    			Ext.apply(col,{
                    xtype: 'componentcolumn',
                    renderer: function(val, meta, record) {
                        return {
                            value: val,
                            xtype: 'textfield',
							disabled:coldef.disabled,
                            listeners: {
                                inputEl: {
                                    keydown: function(ev) {
                                        // Prevent the event propagating as far as the grid, otherwise
                                        // navigation keys won't function correctly in the textfield
                                        ev.stopPropagation();
                                    }
                                }
                            },
                            editor: {
								xtype: 'textfield',
								allowBlank: coldef.allowBlank
							}
                        };
                    },
    			});
    		 break;
    		case 'datefield':
    			Ext.apply(col,{
                    xtype: 'componentcolumn',
                    renderer: function(date) {
                        return {
                            value: date,
                            xtype: 'datefield'
                        };
                    },
					editor: {
							xtype: 'datefield',
							format: 'm/d/Y',
							allowBlank: coldef.allowBlank
						}
                    });
    		  break;
    		case 'checkbox':
    			Ext.apply(col,{
                    xtype: 'componentcolumn',
                    renderer: function(enabled) {
	                        return {
	                        	checked: enabled,
		                        disabled:coldef.disabled,
		                        xtype: 'checkbox'
	                        };
                    	   },
					editor: {
								xtype: 'checkbox',
								allowBlank: coldef.allowBlank
							}
	                 });
      		  break;
    		case 'combobox':
    			Ext.apply(col,{
                    xtype: 'componentcolumn',
                    renderer: function(value) {
                        return {
                        	 store: coldef.store,
                             value: value,
                             xtype: 'combobox',
                             hideTrigger: true,
							 disabled:coldef.disabled
                        };
                    },
                    editor: {
						xtype: 'combobox',
						store: coldef.store,
						forceSelection:coldef.forceSelection,
						allowBlank: coldef.allowBlank
					}
    			});
    			break;
    		case 'image': 
    			Ext.apply(col,{
                    xtype: 'actioncolumn',
                    items: [{
                        icon: coldef.imagesrc,  // Use a URL in the icon config
                        tooltip: coldef.tooltip
                    }]
    			});
    		 break;
    		default:
    		}
    		columns.push(col);
    	});
    	return columns;
    },
    getModifiedRecords: function (){
    	return this.getStore().getModifiedRecords();
    },
    initComponent: function () {
        this.width = 675;
        Ext.apply(this,{ 
			store   : this.config.store,
			columns : this.buildColumnsConfig(this.config.columnsconfig)
        });

        this.callParent();
    }
});