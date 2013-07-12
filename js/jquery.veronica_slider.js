jQuery.fn.veronica_slider = function(options)
{
    var that = jQuery(this);
    var options = jQuery.extend({
        upButton: jQuery('#' + jQuery(this).attr('id') + '_up'),
        downButton: jQuery('#' + jQuery(this).attr('id') + '_down'),
        cycle : false,
        fixed: false,
        down : function(el)
        {
            var d = new Date();  
            if (d.getTime() >= options.megastart + options.megaclick)
            { 
                options.megastart = d.getTime(); 
            } 
            else 
            { 
                return true;
            }
            
            
            
            if (options.active)
                {
                    options.changeActive(false);
                }
            
            
            if (options.cycle)
            {
                var bl = options.block_height();


                if (options.fixed)
                {
                    var i = options.list().find('li.active');
                    if (i.index() < 3)
                    {
                        return true;
                    }
                }

                switch(options.mode)
                {
                    
                    case 'horizontal':
                        options.list().animate({'left' : parseInt(options.list().css('left'),10) - bl},'slow','', function() 
                        { 
                                var n = options.list().children().eq(0).detach(); 
                                n.appendTo(options.list());
                                options.list().css({'left' : parseInt(options.list().css('left'),10) + bl});
                                
                        });
                        break;
                    default:
                        options.list().animate({'top' : parseInt(options.list().css('top'),10) - bl},'slow','', function() 
                        {  
                                var n = options.list().children().eq(0).detach(); 
                                n.appendTo(options.list());
                                options.list().css({'top' : parseInt(options.list().css('top'),10) + bl});
                                
                        });
                    
                }
                return true;
            }
            
            
            if (options.fixed)
            {
                var d = options.deline(),
                    b = options.block_height()
                ;
                var i = options.list().find('li.active');
                if (i.index() - (d / b) < 3)
                {
                    return true;
                }
            }
            
                var a = options.all_height(),
                    d = options.deline(),
                    b = options.body_height(),
                    bl = options.block_height(),
                    l = 0,
                    g = 0;
                var can = a - b;
                var last = false;
                if (d < can)
                {
                    l = a - d - b;
                    g = bl;
                    
                    if (options.doubleside)
                    {
                        options.upButton.removeClass(options.disable);
                    }
                    
                    if (l <= bl)
                    {
                        g = l;
                        last = true;
                        options.downButton.addClass(options.disable);
                    }
                    switch(options.mode)
                    {
                        case 'horizontal':
                            options.list().animate({'left' : parseInt(options.list().css('left'),10) - g},'slow','',function(){
                                if ((last || options.current().index() == options.list().children().length - 1 ) && !options.doubleside)
                                {
                                    options.downButton.hide();
                                    options.upButton.show();
                                    if (options.autoplay)
                                    {
                                        options.replay();
                                    }
                                }
                            });
                            break;
                        default:
                            options.list().animate({'top' : parseInt(options.list().css('top'),10) - g},'slow','',function(){
                                if ((last || options.current().index() == options.list().children().length - 1 ) && !options.doubleside)
                                {
                                    options.downButton.hide();
                                    options.upButton.show();
                                    if (options.autoplay)
                                    {
                                        options.replay();
                                    }
                                }
                            });
                    }
                }

        },
        up : function(el)
        {
            var d = new Date();  
            if (d.getTime() >= options.megastart + options.megaclick)
            { 
                options.megastart = d.getTime(); 
            } 
            else 
            { 
                return true;
            }
           
            if (options.active)
            {
                options.changeActive(true);
            }
           
            if (options.cycle)
            {
                var bl = options.block_height();
                
                
                
                if (options.fixed)
                {
                    var d = options.deline();
                    var i = options.list().find('li.active');
                    if (i.index() != options.list().children().length - 1)
                    {
                        return true;
                    }
                }
                
                
                switch(options.mode)
                {
                    case 'horizontal':
                        options.list().css({'left' : parseInt(options.list().css('left'),10) - bl});
                        var n = options.list().children().eq(options.list().children().length - 1).detach(); 
                        $(n).insertBefore(options.list().children().eq(0));
                        options.list().animate({'left' : parseInt(options.list().css('left'),10) + bl},'slow');
                        break;
                    default:
                        options.list().css({'top' : parseInt(options.list().css('top'),10) - bl});
                        var n = options.list().children().eq(options.list().children().length - 1).detach(); 
                        $(n).insertBefore(options.list().children().eq(0));
                        options.list().animate({'top' : parseInt(options.list().css('top'),10) + bl},'slow');
                }
                return true;
            }
            

            if (options.fixed)
            {
                var d = options.deline(),
                    b = options.block_height()
                ;
                var i = options.list().find('li.active');
                if (i.index() - (d / b) >= 0)
                {
                    return true;
                }
            }

                var a = options.all_height(),
                    d = options.deline(),
                    b = options.body_height(),
                    bl = options.block_height(),
                    l = 0,
                    g = 0;
                if (d >= 0)
                {
                    
                    if (options.doubleside)
                    {
                        options.downButton.removeClass(options.disable);
                    }
                    
                    
                    l = d - bl;
                    g = bl;
                    if (l <= 0)
                    {
                        options.upButton.addClass(options.disable);
                        g = l;
                        switch(options.mode)
                        {
                            case 'horizontal':
                                options.list().animate({'left' : 0},'slow','',function(){
                                    if (!options.doubleside)
                                    {
                                        options.upButton.hide();
                                        options.downButton.show();
                                    }
                                });
                                break;
                            default:
                                options.list().animate({'top' : 0},'slow','',function(){
                                    if (!options.doubleside)
                                    {
                                        options.upButton.hide();
                                        options.downButton.show();
                                    }
                                });
                        }
                    }
                    else
                    {
                        switch(options.mode)
                        {
                            case 'horizontal':
                                options.list().animate({'left' : parseInt(options.list().css('left'),10) + g});
                                break;
                            default:
                                options.list().animate({'top' : parseInt(options.list().css('top'),10) + g},'slow');
                        }
                    }
            }
        },
        height : false,
        click : false,
        timer : false,
        delay : false,
        active : false,
        mode : 'vertical',
        doubleside : false,
        callback : false,
        disable : '',
        list : function()
        {
            return that.find('ul');
        },
        block_height : function(){
            if (options.height)
            {
                return options.height;
            }
            else
            {
                return options.all_height() / options.list().children().length;
            }
        },
        all_height : function()
        {
            var h = 0;
            options.list().find('li').each(function(i,e)
            {
                
                if (options.height)
                {
                    h += options.height;
                }
                else
                {
                    switch(options.mode)
                    {
                        case 'horizontal':
                            h +=  parseInt($(e).css('width'),10);
                            break;
                        default:
                            h +=  parseInt($(e).css('height'),10);
                    }
                }
            });
            return h;
        },
        deline: function()
        {
            var deline = 0;
            switch(options.mode)
            {
                case 'horizontal':
                    deline =  parseInt(options.list().css('left'),10) * -1;
                    break;
                default:
                    deline = parseInt(options.list().css('top'),10) * -1;
            }
            if (isNaN(deline))
            {
                deline = 0;
            }
            return deline;
        },
        body_height: function()
        {
            switch(options.mode)
            {
                case 'horizontal':
                    return parseInt(options.list().parent().css('width'),10);
                    break;
                default:
                    return parseInt(options.list().parent().css('height'),10);
            }
        },
        current : function() 
        {
            return options.list().find('li.active');
        },
        changeActive: function(mode)
        {
            var a = options.list().find('li.active'),
                i = a.index();
                a.removeClass('active');
                if (i > options.list().children().length - 1)
                {
                    i = 0;
                }
                var n = options.list().children().eq((!mode) ? ++i : --i);
                n.addClass('active');
                if (options.callback)
                {
                    options.callback(jQuery(this));
                }
        },
        autoplay: false,
        interval : false,
        step : 1000,
        stop: false,
        pause: false,
        megaclick : 700,
        megastart : 0,
        replay: function()
        {
            if (options.autoplay)
            {
                clearInterval(options.interval);
                        options.interval = setInterval(function(){
                            if (!options.pause)
                            {
                                options.intervalFunction();
                            }
                        },options.step);

            }
        },
        intervalFunction: function()
        {
            if (options.downButton.css('display') != 'none')
            {
                options.down();
            }
            else if(options.upButton.css('display') != 'none')
            {
                options.up();
            }
        },
        click : false,
        noselect : false,
        disableSelection : function(target){
            if (typeof target.onselectstart!="undefined") 
               target.onselectstart=function(){return false} 
            else if (typeof target.style.MozUserSelect!="undefined")  
               target.style.MozUserSelect="none" 
            else target.onmousedown=function(){return false} 
            target.style.cursor = "default" 
        }
    },options);
    
    return this.each(function() 
    {
        options.list().css({'position' : 'absolute'});
        switch(options.mode)
        {
            case 'horizontal':
                options.list().css({'left' : 0, 'width' : options.list().children().length * options.block_height()});
                
                break;
            default:
                options.list().css({'top' : 0});
        }

        options.downButton.click(function(){  options.down($(this));  });
        options.upButton.click(function(){options.up($(this));});
        if (options.noselect)
        {
            for(i in options.noselect)
            {
                options.disableSelection(document.getElementById(options.noselect[i]));
            }
        }
        
        
        if (options.autoplay)
        {
            setTimeout(function()
                {
                    options.interval = setInterval(function(){
                        if (!options.pause)
                        {
                            options.intervalFunction();
                        }
                    },options.step);
                },options.step);
        }
        
        
        if (options.stop)
        {
            for(i in options.stop)
            {
                jQuery(options.stop[i]).mouseover(function(){
                    options.pause = true;
                });

                jQuery(options.stop[i]).mouseout(function(){
                    options.pause = false;
                });
            }
        }
        
        if (options.click)
        {
            options.list().find('li').each(function(i,e){
                $(e).click(function(){ options.click(jQuery(this)); }); 
            });
        }

    });
};


