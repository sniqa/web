/*! Buefy v0.8.15 | MIT License | github.com/buefy/buefy */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Field = {}));
}(this, function (exports) { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var config = {
    defaultContainerElement: null,
    defaultIconPack: 'mdi',
    defaultIconComponent: null,
    defaultIconPrev: 'chevron-left',
    defaultIconNext: 'chevron-right',
    defaultDialogConfirmText: null,
    defaultDialogCancelText: null,
    defaultSnackbarDuration: 3500,
    defaultSnackbarPosition: null,
    defaultToastDuration: 2000,
    defaultToastPosition: null,
    defaultNotificationDuration: 2000,
    defaultNotificationPosition: null,
    defaultTooltipType: 'is-primary',
    defaultTooltipAnimated: false,
    defaultTooltipDelay: 0,
    defaultInputAutocomplete: 'on',
    defaultDateFormatter: null,
    defaultDateParser: null,
    defaultDateCreator: null,
    defaultTimeCreator: null,
    defaultDayNames: null,
    defaultMonthNames: null,
    defaultFirstDayOfWeek: null,
    defaultUnselectableDaysOfWeek: null,
    defaultTimeFormatter: null,
    defaultTimeParser: null,
    defaultModalCanCancel: ['escape', 'x', 'outside', 'button'],
    defaultModalScroll: null,
    defaultDatepickerMobileNative: true,
    defaultTimepickerMobileNative: true,
    defaultNoticeQueue: true,
    defaultInputHasCounter: true,
    defaultTaginputHasCounter: true,
    defaultUseHtml5Validation: true,
    defaultDropdownMobileModal: true,
    defaultFieldLabelPosition: null,
    defaultDatepickerYearsRange: [-100, 3],
    defaultDatepickerNearbyMonthDays: true,
    defaultDatepickerNearbySelectableMonthDays: false,
    defaultDatepickerShowWeekNumber: false,
    defaultDatepickerMobileModal: true,
    defaultTrapFocus: false,
    defaultButtonRounded: false,
    defaultCarouselInterval: 3500,
    defaultLinkTags: ['a', 'button', 'input', 'router-link', 'nuxt-link', 'n-link', 'RouterLink', 'NuxtLink', 'NLink'],
    customIconPacks: null
  }; // TODO defaultTrapFocus to true in the next breaking change

  var script = {
    name: 'BFieldBody',
    props: {
      message: {
        type: String
      },
      type: {
        type: [String, Object]
      }
    },
    render: function render(createElement) {
      var _this = this;

      return createElement('div', {
        attrs: {
          'class': 'field-body'
        }
      }, this.$slots.default.map(function (element) {
        // skip returns and comments
        if (!element.tag) {
          return element;
        }

        if (_this.message) {
          return createElement('b-field', {
            attrs: {
              message: _this.message,
              'type': _this.type
            }
          }, [element]);
        }

        return createElement('b-field', {
          attrs: {
            'type': _this.type
          }
        }, [element]);
      }));
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  const __vue_script__ = script;

  /* template */

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = undefined;
    /* style inject */
    
    /* style inject SSR */
    

    
    var FieldBody = normalizeComponent_1(
      {},
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  var script$1 = {
    name: 'BField',
    components: _defineProperty({}, FieldBody.name, FieldBody),
    props: {
      type: [String, Object],
      label: String,
      labelFor: String,
      message: [String, Array, Object],
      grouped: Boolean,
      groupMultiline: Boolean,
      position: String,
      expanded: Boolean,
      horizontal: Boolean,
      addons: {
        type: Boolean,
        default: true
      },
      customClass: String,
      labelPosition: {
        type: String,
        default: function _default() {
          return config.defaultFieldLabelPosition;
        }
      }
    },
    data: function data() {
      return {
        newType: this.type,
        newMessage: this.message,
        fieldLabelSize: null,
        _isField: true // Used internally by Input and Select

      };
    },
    computed: {
      rootClasses: function rootClasses() {
        return [this.newPosition, {
          'is-expanded': this.expanded,
          'is-grouped-multiline': this.groupMultiline,
          'is-horizontal': this.horizontal,
          'is-floating-in-label': this.hasLabel && !this.horizontal && this.labelPosition === 'inside',
          'is-floating-label': this.hasLabel && !this.horizontal && this.labelPosition === 'on-border'
        }, this.numberInputClasses];
      },

      /**
      * Correct Bulma class for the side of the addon or group.
      *
      * This is not kept like the others (is-small, etc.),
      * because since 'has-addons' is set automatically it
      * doesn't make sense to teach users what addons are exactly.
      */
      newPosition: function newPosition() {
        if (this.position === undefined) return;
        var position = this.position.split('-');
        if (position.length < 1) return;
        var prefix = this.grouped ? 'is-grouped-' : 'has-addons-';
        if (this.position) return prefix + position[1];
      },

      /**
      * Formatted message in case it's an array
      * (each element is separated by <br> tag)
      */
      formattedMessage: function formattedMessage() {
        if (typeof this.newMessage === 'string') {
          return this.newMessage;
        } else {
          var messages = [];

          if (Array.isArray(this.newMessage)) {
            this.newMessage.forEach(function (message) {
              if (typeof message === 'string') {
                messages.push(message);
              } else {
                for (var key in message) {
                  if (message[key]) {
                    messages.push(key);
                  }
                }
              }
            });
          } else {
            for (var key in this.newMessage) {
              if (this.newMessage[key]) {
                messages.push(key);
              }
            }
          }

          return messages.filter(function (m) {
            if (m) return m;
          }).join(' <br> ');
        }
      },
      hasLabel: function hasLabel() {
        return this.label || this.$slots.label;
      },
      numberInputClasses: function numberInputClasses() {
        if (this.$slots.default) {
          var numberinput = this.$slots.default.filter(function (node) {
            return node.tag && node.tag.toLowerCase().indexOf('numberinput') >= 0;
          })[0];

          if (numberinput) {
            var classes = ['has-numberinput'];
            var controlsPosition = numberinput.componentOptions.propsData.controlsPosition;
            var size = numberinput.componentOptions.propsData.size;

            if (controlsPosition) {
              classes.push("has-numberinput-".concat(controlsPosition));
            }

            if (size) {
              classes.push("has-numberinput-".concat(size));
            }

            return classes;
          }
        }

        return null;
      }
    },
    watch: {
      /**
      * Set internal type when prop change.
      */
      type: function type(value) {
        this.newType = value;
      },

      /**
      * Set internal message when prop change.
      */
      message: function message(value) {
        this.newMessage = value;
      }
    },
    methods: {
      /**
      * Field has addons if there are more than one slot
      * (element / component) in the Field.
      * Or is grouped when prop is set.
      * Is a method to be called when component re-render.
      */
      fieldType: function fieldType() {
        if (this.grouped) return 'is-grouped';
        var renderedNode = 0;

        if (this.$slots.default) {
          renderedNode = this.$slots.default.reduce(function (i, node) {
            return node.tag ? i + 1 : i;
          }, 0);
        }

        if (renderedNode > 1 && this.addons && !this.horizontal) {
          return 'has-addons';
        }
      }
    },
    mounted: function mounted() {
      if (this.horizontal) {
        // Bulma docs: .is-normal for any .input or .button
        var elements = this.$el.querySelectorAll('.input, .select, .button, .textarea, .b-slider');

        if (elements.length > 0) {
          this.fieldLabelSize = 'is-normal';
        }
      }
    }
  };

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"field",class:[_vm.rootClasses, _vm.fieldType()]},[(_vm.horizontal)?_c('div',{staticClass:"field-label",class:[_vm.customClass, _vm.fieldLabelSize]},[(_vm.hasLabel)?_c('label',{staticClass:"label",class:_vm.customClass,attrs:{"for":_vm.labelFor}},[(_vm.$slots.label)?_vm._t("label"):[_vm._v(_vm._s(_vm.label))]],2):_vm._e()]):[(_vm.hasLabel)?_c('label',{staticClass:"label",class:_vm.customClass,attrs:{"for":_vm.labelFor}},[(_vm.$slots.label)?_vm._t("label"):[_vm._v(_vm._s(_vm.label))]],2):_vm._e()],_vm._v(" "),(_vm.horizontal)?_c('b-field-body',{attrs:{"message":_vm.newMessage ? _vm.formattedMessage : '',"type":_vm.newType}},[_vm._t("default")],2):[_vm._t("default")],_vm._v(" "),(_vm.newMessage && !_vm.horizontal)?_c('p',{staticClass:"help",class:_vm.newType,domProps:{"innerHTML":_vm._s(_vm.formattedMessage)}}):_vm._e()],2)};
  var __vue_staticRenderFns__ = [];

    /* style */
    const __vue_inject_styles__$1 = undefined;
    /* scoped */
    const __vue_scope_id__$1 = undefined;
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Field = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      undefined,
      undefined
    );

  var use = function use(plugin) {
    if (typeof window !== 'undefined' && window.Vue) {
      window.Vue.use(plugin);
    }
  };
  var registerComponent = function registerComponent(Vue, component) {
    Vue.component(component.name, component);
  };

  var Plugin = {
    install: function install(Vue) {
      registerComponent(Vue, Field);
    }
  };
  use(Plugin);

  exports.BField = Field;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
