Ext.define('HclExtLib.view.RangeSelector',{
	xtype:'rangeselector',
	extend: 'Ext.form.FieldSet',
	requires: ['Ext.form.FieldSet','Ext.slider.Multi'],
	border:false,
    collapsible:false,
    initComponent: function (){
    	var me=this;
    	Ext.apply(me,me.config);
    	
    	Ext.apply(me,{
				      items: [
				              {
				            	xtype:'container',
				            	layout:'hbox',
				            	items:[
				            	       {
				            	    	   xtype:'container',
				            	    	   flex:1,
				            	    	   items:[
													{
														   xtype:'textfield',
														   fieldLabel:'from',
														   labelWidth:this.config.labelWidth,
														   itemId:'lbound',
														   value:this.config.minVal
													}
				            	    	          ]
				            	       }
				            	       ,
				            	       {
				            	    	   xtype:'container',
				            	    	   flex:1,
				            	    	   padding : 5,
				            	    	   items:[
				            	    	          {
					            	    	        	  xtype:'textfield',
					            	    	        	  fieldLabel:' to',
					            	    	        	  labelWidth:this.config.labelWidth,
								            	    	  itemId:'ubound',
								            	    	  value:this.config.maxVal
				            	    	          }
				            	    	          ]
				            	    	  
				            	       },
				            	       {
				            	    	   xtype:'container',
				            	    	   flex:1,
				            	    	   padding : 5,
				            	    	   items:[
				            	    	          {  	   xtype:'textfield',
								            	    	   fieldLabel:' of',
								            	    	   labelWidth:this.config.labelWidth,
								            	    	   itemId:'maxval',
								            	    	   value:this.config.maxVal
				            	    	          }
				            	    	          ]
				            	       }]},
				            	       {
				       		    	  	xtype:'multislider',
				       		    	  	width:me.config.width,
				       		    	  	values: me.config.values,
				       		    	    increment: me.config.increment,
				       		    	    minValue: me.config.minValue,
				       		    	    maxValue: me.config.maxValue
				            	       }
				             ]
    	});
    	
    	me.callParent(arguments);
    }

});