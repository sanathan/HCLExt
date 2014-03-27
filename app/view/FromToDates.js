Ext.define('HclExtLib.view.FromToDates',{
	xtype:'fromtodates',
	extend: 'Ext.form.FieldSet',
	requires: 'Ext.form.FieldSet',
    cls:'HCLExtLib-fromtodate',
    layout: 'hbox',
    border:false,
    collapsible:false,
    initComponent:function (){
    	var me=this;
    	Ext.apply(me,me.config);
    	
    	Ext.apply(Ext.form.field.VTypes, {
            daterange: function(val, field) {
                var date = field.parseDate(val);

                if (!date) {
                    return false;
                }
                if (field.startDateField && (!this.dateRangeMax || (date.getTime() != this.dateRangeMax.getTime()))) {
                    var start = field.up('fieldset').down('#' + field.startDateField);
                    start.setMaxValue(date);
                    start.validate();
                    this.dateRangeMax = date;
                }
                else if (field.endDateField && (!this.dateRangeMin || (date.getTime() != this.dateRangeMin.getTime()))) {
                    var end = field.up('fieldset').down('#' + field.endDateField);
                    end.setMinValue(date);
                    end.validate();
                    this.dateRangeMin = date;
                }
                /*
                 * Always return true since we're only using this vtype to set the
                 * min/max allowed values (these are tested for after the vtype test)
                 */
                return true;
            },

            daterangeText: 'From date must be less than To date'
    	});
    	
    	me.items=[
    	          {
    	        	  xtype:'container',
    	        	  flex:1,
    	        	  items:[
			    	          {
			    	        	 xtype:'datefield',
			    	        	 labelWidth :me.config.labelWidth,
								 fieldLabel: me.config.fromtitle,
								 name: 'fromdate',
								 id:'fromdate',
								 vtype: 'daterange',
					             endDateField: 'todate' // id of the end date field
							  }
			    	         ]
    	          }, 
    	          {
    	        	  xtype:'container',
    	        	  flex:1,
    	        	  items:[
			    	          {
			    	        	 xtype:'datefield',
			    	        	 labelWidth :me.config.labelWidth,
								 fieldLabel: me.config.totitle,
								 name: 'todate',
								 id:'todate',
								 vtype: 'daterange',
					             startDateField: 'fromdate' // id of the start date field
							  }
			    	         ]
    	          }
				];
    	me.callParent(arguments);
    }
	
});