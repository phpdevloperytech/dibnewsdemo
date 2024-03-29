/**
 * Autocomplete wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;
(function ($) {
    'use strict';
    $.widget('custom.localcatcomplete', $.ui.autocomplete, {
        _create: function () {
            this._super();
            this.widget().menu('option', 'items', '> :not(.ui-autocomplete-category)');
        },
        _renderItem: function (ul, item) {
            if (item.url) {
                return $('<li><a href="' + window.location.protocol + '//' + window.location.host + '/' + window.location.pathname.split('/')[1] + '/' + item.url + '">' + item.label + '<span class="g-opacity-0_3 g-ml-5">· ' + item.category + '</span></a></li>')
                    .appendTo(ul);
            }
            else {
                return $('<li>' + item.label + '</li>')
                    .appendTo(ul);
            }
        }
        /*_renderMenu: function (ul, items) {
          var that = this,
            currentCategory = '';
    
          $.each(items, function (index, item) {
            var li;
    
            if (item.category != currentCategory) {
              ul.append('<li class="ui-autocomplete-category">' + item.category + '2</li>');
              currentCategory = item.category;
            }
    
            li = that._renderItemData(ul, item);
    
            if (item.category) {
              li.attr('aria-label', item.category + ' : ' + item.label);
            }
          });
        }*/
    });
    $.HSCore.components.HSLocalSearchAutocomplete = {
        /**
         *
         *
         * @var Object _baseConfig
         */
        _baseConfig: {
            minLength: 2
        },
        /**
         *
         *
         * @var jQuery pageCollection
         */
        pageCollection: $(),
        /**
         * Initialization of Autocomplete wrapper.
         *
         * @param String selector (optional)
         * @param Object config (optional)
         *
         * @return jQuery pageCollection - collection of initialized items.
         */
        init: function (selector, config) {
            this.collection = selector && $(selector).length ? $(selector) : $();
            if (!$(selector).length)
                return;
            this.config = config && $.isPlainObject(config) ?
                $.extend({}, this._baseConfig, config) : this._baseConfig;
            this.config.itemSelector = selector;
            this.initAutocomplete();
            return this.pageCollection;
        },
        initAutocomplete: function () {
            //Variables
            var $self = this, config = $self.config, collection = $self.pageCollection;
            //Actions
            this.collection.each(function (i, el) {
                var $this = $(el), dataUrl = $this.data('url');
                $.getJSON(dataUrl, function (data) {
                    $this.localcatcomplete({
                        delay: 0,
                        source: data,
                        select: function (event, ui) {
                            window.location = window.location.protocol + '//' + window.location.host + '/' + window.location.pathname.split('/')[1] + '/' + ui.item.url;
                        }
                    });
                });
                //Actions
                collection = collection.add($this);
            });
        }
    };
})(jQuery);
