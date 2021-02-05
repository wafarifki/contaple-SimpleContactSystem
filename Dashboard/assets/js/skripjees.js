"use strict";
! function(NioApp, $) {
    "use strict";

    NioApp.Package.name = "Simple Contact System";
    NioApp.Package.version = "1.0";
    var $win = $(window),
        $body = $('body'),
        $doc = $(document),
        //class names
        _body_theme = 'nio-theme',
        _menu = 'nk-menu',
        _mobile_nav = 'mobile-menu',
        _header = 'nk-header',
        _header_menu = 'nk-header-menu',
        _sidebar = 'nk-sidebar',
        _sidebar_mob = 'nk-sidebar-mobile',
        //breakpoints
        _break = NioApp.Break;

    function extend(obj, ext) {
        Object.keys(ext).forEach(function(key) {
            obj[key] = ext[key];
        });
        return obj;
    } // ClassInit @v1.0


    NioApp.ClassBody = function() {
        NioApp.AddInBody(_sidebar);
    }; // ClassInit @v1.0


    NioApp.ClassNavMenu = function() {
        NioApp.BreakClass('.' + _header_menu, _break.lg, {
            timeOut: 0
        });
        NioApp.BreakClass('.' + _sidebar, _break.lg, {
            timeOut: 0,
            classAdd: _sidebar_mob
        });
        $win.on('resize', function() {
            NioApp.BreakClass('.' + _header_menu, _break.lg);
            NioApp.BreakClass('.' + _sidebar, _break.lg, {
                classAdd: _sidebar_mob
            });
        });
    }; // Code Prettify @v1.0


    NioApp.Prettify = function() {
        window.prettyPrint && prettyPrint();
    }; // Copied @v1.0


    NioApp.Copied = function() {
        var clip = '.clipboard-init',
            target = '.clipboard-text',
            sclass = 'clipboard-success',
            eclass = 'clipboard-error'; // Feedback

        function feedback(el, state) {
            var $elm = $(el),
                $elp = $elm.parent(),
                copy = {
                    text: 'Copy',
                    done: 'Copied',
                    fail: 'Failed'
                },
                data = {
                    text: $elm.data('clip-text'),
                    done: $elm.data('clip-success'),
                    fail: $elm.data('clip-error')
                };
            copy.text = data.text ? data.text : copy.text;
            copy.done = data.done ? data.done : copy.done;
            copy.fail = data.fail ? data.fail : copy.fail;
            var copytext = state === 'success' ? copy.done : copy.fail,
                addclass = state === 'success' ? sclass : eclass;
            $elp.addClass(addclass).find(target).html(copytext);
            setTimeout(function() {
                $elp.removeClass(sclass + ' ' + eclass).find(target).html(copy.text).blur();
                $elp.find('input').blur();
            }, 2000);
        } // Init ClipboardJS


        if (ClipboardJS.isSupported()) {
            var clipboard = new ClipboardJS(clip);
            clipboard.on('success', function(e) {
                feedback(e.trigger, 'success');
                e.clearSelection();
            }).on('error', function(e) {
                feedback(e.trigger, 'error');
            });
        } else {
            $(clip).css('display', 'none');
        }

        ;
    }; // CurrentLink Detect @v1.0


    NioApp.CurrentLink = function() {
        var _link = '.nk-menu-link, .menu-link, .nav-link',
            _currentURL = window.location.href,
            fileName = _currentURL.substring(0, _currentURL.indexOf("#") == -1 ? _currentURL.length : _currentURL.indexOf("#")),
            fileName = fileName.substring(0, fileName.indexOf("?") == -1 ? fileName.length : fileName.indexOf("?"));

        $(_link).each(function() {
            var self = $(this),
                _self_link = self.attr('href');

            if (fileName.match(_self_link)) {
                self.closest("li").addClass('active current-page').parents().closest("li").addClass("active current-page");
                self.closest("li").children('.nk-menu-sub').css('display', 'block');
                self.parents().closest("li").children('.nk-menu-sub').css('display', 'block');
            } else {
                self.closest("li").removeClass('active current-page').parents().closest("li:not(.current-page)").removeClass("active");
            }
        });
    }; // PasswordSwitch @v1.0


    NioApp.PassSwitch = function() {
        NioApp.Passcode('.passcode-switch');
    }; // Toastr Message @v1.0 


    NioApp.Toast = function(msg, ttype, opt) {
        var ttype = ttype ? ttype : 'info',
            msi = '',
            ticon = ttype === 'info' ? 'ni ni-info-fill' : ttype === 'success' ? 'ni ni-check-circle-fill' : ttype === 'error' ? 'ni ni-cross-circle-fill' : ttype === 'warning' ? 'ni ni-alert-fill' : '',
            def = {
                position: 'bottom-right',
                ui: '',
                icon: 'auto',
                clear: false
            },
            attr = opt ? extend(def, opt) : def;
        attr.position = attr.position ? 'toast-' + attr.position : 'toast-bottom-right';
        attr.icon = attr.icon === 'auto' ? ticon : attr.icon ? attr.icon : '';
        attr.ui = attr.ui ? ' ' + attr.ui : '';
        msi = attr.icon !== '' ? '<span class="toastr-icon"><em class="icon ' + attr.icon + '"></em></span>' : '', msg = msg !== '' ? msi + '<div class="toastr-text">' + msg + '</div>' : '';

        if (msg !== "") {
            if (attr.clear === true) {
                toastr.clear();
            }

            var option = {
                "closeButton": true,
                "debug": false,
                "newestOnTop": false,
                "progressBar": false,
                "positionClass": attr.position + attr.ui,
                "closeHtml": '<span class="btn-trigger">Close</span>',
                "preventDuplicates": true,
                "showDuration": "1500",
                "hideDuration": "1500",
                "timeOut": "2000",
                "toastClass": "toastr",
                "extendedTimeOut": "3000"
            };
            toastr.options = extend(option, attr);
            toastr[ttype](msg);
        }
    }; // Toggle Screen @v1.0


    NioApp.TGL.screen = function(elm) {
        if ($(elm).exists()) {
            $(elm).each(function() {
                var ssize = $(this).data('toggle-screen');

                if (ssize) {
                    $(this).addClass('toggle-screen-' + ssize);
                }
            });
        }
    }; // Toggle Content @v1.0


    NioApp.TGL.content = function(elm, opt) {
        var toggle = elm ? elm : '.toggle',
            $toggle = $(toggle),
            $contentD = $('[data-content]'),
            toggleBreak = true,
            toggleCurrent = false,
            def = {
                active: 'active',
                content: 'content-active',
                "break": toggleBreak
            },
            attr = opt ? extend(def, opt) : def;
        NioApp.TGL.screen($contentD);
        $toggle.on('click', function(e) {
            toggleCurrent = this;
            NioApp.Toggle.trigger($(this).data('target'), attr);
            e.preventDefault();
        });
        $doc.on('mouseup', function(e) {
            if (toggleCurrent) {
                var $toggleCurrent = $(toggleCurrent);

                if (!$toggleCurrent.is(e.target) && $toggleCurrent.has(e.target).length === 0 && !$contentD.is(e.target) && $contentD.has(e.target).length === 0) {
                    NioApp.Toggle.removed($toggleCurrent.data('target'), attr);
                    toggleCurrent = false;
                }
            }
        });
        $win.on('resize', function() {
            $contentD.each(function() {
                var content = $(this).data('content'),
                    ssize = $(this).data('toggle-screen'),
                    toggleBreak = _break[ssize];

                if (NioApp.Win.width > toggleBreak) {
                    NioApp.Toggle.removed(content, attr);
                }
            });
        });
    }; // ToggleExpand @v1.0


    NioApp.TGL.expand = function(elm, opt) {
        var toggle = elm ? elm : '.expand',
            def = {
                toggle: true
            },
            attr = opt ? extend(def, opt) : def;
        $(toggle).on('click', function(e) {
            NioApp.Toggle.trigger($(this).data('target'), attr);
            e.preventDefault();
        });
    }; // Dropdown Menu @v1.0


    NioApp.TGL.ddmenu = function(elm, opt) {
        var imenu = elm ? elm : '.nk-menu-toggle',
            def = {
                active: 'active',
                self: 'nk-menu-toggle',
                child: 'nk-menu-sub'
            },
            attr = opt ? extend(def, opt) : def;
        $(imenu).on('click', function(e) {
            if (NioApp.Win.width < _break.lg || $(this).parents().hasClass(_sidebar)) {
                NioApp.Toggle.dropMenu($(this), attr);
            }

            e.preventDefault();
        });
    }; // Show Menu @v1.0


    NioApp.TGL.showmenu = function(elm, opt) {
        var toggle = elm ? elm : '.nk-nav-toggle',
            $toggle = $(toggle),
            $contentD = $('[data-content]'),
            toggleBreak = $contentD.hasClass(_header_menu) ? _break.lg : _break.xl,
            toggleOlay = _sidebar + '-overlay',
            toggleClose = {
                profile: true,
                menu: false
            },
            def = {
                active: 'toggle-active',
                content: _sidebar + '-active',
                body: 'nav-shown',
                overlay: toggleOlay,
                "break": toggleBreak,
                close: toggleClose
            },
            attr = opt ? extend(def, opt) : def;
        $toggle.on('click', function(e) {
            NioApp.Toggle.trigger($(this).data('target'), attr);
            e.preventDefault();
        });
        $doc.on('mouseup', function(e) {
            if (!$toggle.is(e.target) && $toggle.has(e.target).length === 0 && !$contentD.is(e.target) && $contentD.has(e.target).length === 0 && NioApp.Win.width < toggleBreak) {
                NioApp.Toggle.removed($toggle.data('target'), attr);
            }
        });
        $win.on('resize', function() {
            if (NioApp.Win.width < _break.xl || NioApp.Win.width < toggleBreak) {
                NioApp.Toggle.removed($toggle.data('target'), attr);
            }
        });
    }; // Animate FormSearch @v1.0


    NioApp.Ani.formSearch = function(elm, opt) {
        var def = {
                active: 'active',
                timeout: 400,
                target: '[data-search]'
            },
            attr = opt ? extend(def, opt) : def;
        var $elem = $(elm),
            $target = $(attr.target);

        if ($elem.exists()) {
            $elem.on('click', function(e) {
                e.preventDefault();
                var $self = $(this),
                    the_target = $self.data('target'),
                    $self_st = $('[data-search=' + the_target + ']'),
                    $self_tg = $('[data-target=' + the_target + ']');

                if (!$self_st.hasClass(attr.active)) {
                    $self_tg.add($self_st).addClass(attr.active);
                    $self_st.find('input').focus();
                } else {
                    $self_tg.add($self_st).removeClass(attr.active);
                    setTimeout(function() {
                        $self_st.find('input').val('');
                    }, attr.timeout);
                }
            });
            $doc.on({
                keyup: function keyup(e) {
                    if (e.key === "Escape") {
                        $elem.add($target).removeClass(attr.active);
                    }
                },
                mouseup: function mouseup(e) {
                    if (!$target.find('input').val() && !$target.is(e.target) && $target.has(e.target).length === 0 && !$elem.is(e.target) && $elem.has(e.target).length === 0) {
                        $elem.add($target).removeClass(attr.active);
                    }
                }
            });
        }
    }; // Animate FormElement @v1.0


    NioApp.Ani.formElm = function(elm, opt) {
        var def = {
                focus: 'focused'
            },
            attr = opt ? extend(def, opt) : def;

        if ($(elm).exists()) {
            $(elm).each(function() {
                var $self = $(this);

                if ($self.val()) {
                    $self.parent().addClass(attr.focus);
                }

                $self.on({
                    focus: function focus() {
                        $self.parent().addClass(attr.focus);
                    },
                    blur: function blur() {
                        if (!$self.val()) {
                            $self.parent().removeClass(attr.focus);
                        }
                    }
                });
            });
        }
    }; // Form Validate @v1.0


    NioApp.Validate = function(elm, opt) {
        if ($(elm).exists()) {
            $(elm).each(function() {
                var def = {
                        errorElement: "span"
                    },
                    attr = opt ? extend(def, opt) : def;
                $(this).validate(attr);
            });
        }
    };

    NioApp.Validate.init = function() {
        NioApp.Validate('.form-validate', {
            errorElement: "span",
            errorClass: "invalid",
            errorPlacement: function errorPlacement(error, element) {
                error.appendTo(element.parent());
            }
        });
    }; // Dropzone @v1.0


    NioApp.Dropzone = function(elm, opt) {
        if ($(elm).exists()) {
            $(elm).each(function() {
                var def = {
                        autoDiscover: false
                    },
                    attr = opt ? extend(def, opt) : def;
                $(this).addClass('dropzone').dropzone(attr);
            });
        }
    }; // Wizard @v1.0


    NioApp.Wizard = function() {
        var $wizard = $(".nk-wizard").show();
        $wizard.steps({
            headerTag: ".nk-wizard-head",
            bodyTag: ".nk-wizard-content",
            labels: {
                finish: "Submit",
                next: "Next",
                previous: "Prev",
                loading: "Loading ..."
            },
            onStepChanging: function onStepChanging(event, currentIndex, newIndex) {
                // Allways allow previous action even if the current form is not valid!
                if (currentIndex > newIndex) {
                    return true;
                } // Needed in some cases if the user went back (clean up)


                if (currentIndex < newIndex) {
                    // To remove error styles
                    $wizard.find(".body:eq(" + newIndex + ") label.error").remove();
                    $wizard.find(".body:eq(" + newIndex + ") .error").removeClass("error");
                }

                $wizard.validate().settings.ignore = ":disabled,:hidden";
                return $wizard.valid();
            },
            onFinishing: function onFinishing(event, currentIndex) {
                $wizard.validate().settings.ignore = ":disabled";
                return $wizard.valid();
            },
            onFinished: function onFinished(event, currentIndex) {
                window.location.href = "#";
            }
        }).validate({
            errorElement: "span",
            errorClass: "invalid",
            errorPlacement: function errorPlacement(error, element) {
                error.appendTo(element.parent());
            }
        });
    }; // DataTable @1.1


    NioApp.DataTable = function(elm, opt) {
        if ($(elm).exists()) {
            $(elm).each(function() {
                var auto_responsive = $(this).data('auto-responsive');
                var dom_normal = '<"row justify-between g-2"<"col-7 col-sm-6 text-left"f><"col-5 col-sm-6 text-right"<"datatable-filter"l>>><"datatable-wrap my-3"t><"row align-items-center"<"col-7 col-sm-12 col-md-9"p><"col-5 col-sm-12 col-md-3 text-left text-md-right"i>>';
                var dom_separate = '<"row justify-between g-2"<"col-7 col-sm-6 text-left"f><"col-5 col-sm-6 text-right"<"datatable-filter"l>>><"my-3"t><"row align-items-center"<"col-7 col-sm-12 col-md-9"p><"col-5 col-sm-12 col-md-3 text-left text-md-right"i>>';
                var dom = $(this).hasClass('is-separate') ? dom_separate : dom_normal;
                var def = {
                        responsive: true,
                        autoWidth: false,
                        dom: dom,
                        language: {
                            search: "",
                            searchPlaceholder: "Type in to Search",
                            lengthMenu: "<span class='d-none d-sm-inline-block'>Show</span><div class='form-control-select'> _MENU_ </div>",
                            info: "_START_ -_END_ of _TOTAL_",
                            infoEmpty: "No records found",
                            infoFiltered: "( Total _MAX_  )",
                            paginate: {
                                "first": "First",
                                "last": "Last",
                                "next": "Next",
                                "previous": "Prev"
                            }
                        }
                    },
                    attr = opt ? extend(def, opt) : def;
                attr = auto_responsive === false ? extend(attr, {
                    responsive: false
                }) : attr;
                $(this).DataTable(attr);
            });
        }
    }; // BootStrap Extended


    NioApp.BS.ddfix = function(elm, exc) {
        var dd = elm ? elm : '.dropdown-menu',
            ex = exc ? exc : 'a:not(.clickable), button:not(.clickable), a:not(.clickable) *, button:not(.clickable) *';
        $(dd).on('click', function(e) {
            if (!$(e.target).is(ex)) {
                e.stopPropagation();
                return;
            }
        });

        if (NioApp.State.isRTL) {
            var $dMenu = $('.dropdown-menu');
            $dMenu.each(function() {
                var $self = $(this);

                if ($self.hasClass('dropdown-menu-right') && !$self.hasClass('dropdown-menu-center')) {
                    $self.prev('[data-toggle="dropdown"]').dropdown({
                        popperConfig: {
                            placement: 'bottom-start'
                        }
                    });
                } else if (!$self.hasClass('dropdown-menu-right') && !$self.hasClass('dropdown-menu-center')) {
                    $self.prev('[data-toggle="dropdown"]').dropdown({
                        popperConfig: {
                            placement: 'bottom-end'
                        }
                    });
                }
            });
        }
    }; // BootStrap Specific Tab Open


    NioApp.BS.tabfix = function(elm) {
        var tab = elm ? elm : '[data-toggle="modal"]';
        $(tab).on('click', function() {
            var _this = $(this),
                target = _this.data('target'),
                target_href = _this.attr('href'),
                tg_tab = _this.data('tab-target');

            var modal = target ? $body.find(target) : $body.find(target_href);

            if (tg_tab && tg_tab !== '#' && modal) {
                modal.find('[href="' + tg_tab + '"]').tab('show');
            } else if (modal) {
                var tabdef = modal.find('.nk-nav.nav-tabs');
                var link = $(tabdef[0]).find('[data-toggle="tab"]');
                $(link[0]).tab('show');
            }
        });
    }; // Dark Mode Switch @since v2.0


    NioApp.ModeSwitch = function() {
        var toggle = $('.dark-switch');

        if ($body.hasClass('dark-mode')) {
            toggle.addClass('active');
        } else {
            toggle.removeClass('active');
        }

        toggle.on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $body.toggleClass('dark-mode');
        });
    }; // Knob @v1.0


    NioApp.Knob.init = function() {
        var knob = {
            "default": {
                readOnly: true,
                lineCap: "round"
            },
            half: {
                angleOffset: -90,
                angleArc: 180,
                readOnly: true,
                lineCap: "round"
            }
        };
        NioApp.Knob('.knob', knob["default"]);
        NioApp.Knob('.knob-half', knob.half);
    }; // Range @v1.0


    NioApp.Range.init = function() {
        NioApp.Range('.form-range-slider');
    };

    NioApp.Select2.init = function() {
        // NioApp.Select2('.select');
        NioApp.Select2('.form-select');
    }; // Slick Init @v1.0


    NioApp.Slider.init = function() {
        NioApp.Slick('.slider-init');
    }; // Dropzone Init @v1.0


    NioApp.Dropzone.init = function() {
        NioApp.Dropzone('.upload-zone', {
            url: "/images"
        });
    }; // DataTable Init @v1.0


    NioApp.DataTable.init = function() {
        NioApp.DataTable('.datatable-init', {
            responsive: {
                details: true
            }
        });
        $.fn.DataTable.ext.pager.numbers_length = 7;
    }; // Extra @v1.1


    NioApp.OtherInit = function() {
        NioApp.ClassBody();
        NioApp.PassSwitch();
        NioApp.CurrentLink();
        NioApp.LinkOff('.is-disable');
        NioApp.ClassNavMenu(); //v1.5

        NioApp.SetHW('[data-height]', 'height');
        NioApp.SetHW('[data-width]', 'width');
    }; // Animate Init @v1.0


    NioApp.Ani.init = function() {
        NioApp.Ani.formElm('.form-control-outlined');
        NioApp.Ani.formSearch('.toggle-search');
    }; // BootstrapExtend Init @v1.0


    NioApp.BS.init = function() {
        NioApp.BS.menutip('a.nk-menu-link');
        NioApp.BS.tooltip('.nk-tooltip');
        NioApp.BS.tooltip('.btn-tooltip', {
            placement: 'top'
        });
        NioApp.BS.tooltip('[data-toggle="tooltip"]');
        NioApp.BS.tooltip('.tipinfo,.nk-menu-tooltip', {
            placement: 'right'
        });
        NioApp.BS.popover('[data-toggle="popover"]');
        NioApp.BS.progress('[data-progress]');
        NioApp.BS.fileinput('.custom-file-input');
        NioApp.BS.modalfix();
        NioApp.BS.ddfix();
        NioApp.BS.tabfix();
    }; // Picker Init @v1.0


    NioApp.Picker.init = function() {
        NioApp.Picker.date('.date-picker');
        NioApp.Picker.dob('.date-picker-alt');
        NioApp.Picker.time('.time-picker');
    }; // Addons @v1


    NioApp.Addons.Init = function() {
        NioApp.Knob.init();
        NioApp.Range.init();
        NioApp.Select2.init();
        NioApp.Dropzone.init();
        NioApp.Slider.init();
        NioApp.DataTable.init();
    }; // Toggler @v1


    NioApp.TGL.init = function() {
        NioApp.TGL.content('.toggle');
        NioApp.TGL.expand('.toggle-expand');
        NioApp.TGL.expand('.toggle-opt', {
            toggle: false
        });
        NioApp.TGL.showmenu('.nk-nav-toggle');
        NioApp.TGL.ddmenu('.' + _menu + '-toggle', {
            self: _menu + '-toggle',
            child: _menu + '-sub'
        });
    };

    NioApp.BS.modalOnInit = function() {
        $('.modal').on('shown.bs.modal', function() {
            NioApp.Select2.init();
            NioApp.Validate.init();
        });
    }; // Initial by default
    /////////////////////////////


    NioApp.init = function() {
        NioApp.coms.docReady.push(NioApp.OtherInit);
        NioApp.coms.docReady.push(NioApp.Prettify);
        NioApp.coms.docReady.push(NioApp.ColorBG);
        NioApp.coms.docReady.push(NioApp.ColorTXT);
        NioApp.coms.docReady.push(NioApp.Copied);
        NioApp.coms.docReady.push(NioApp.Ani.init);
        NioApp.coms.docReady.push(NioApp.TGL.init);
        NioApp.coms.docReady.push(NioApp.BS.init);
        NioApp.coms.docReady.push(NioApp.Validate.init);
        NioApp.coms.docReady.push(NioApp.Picker.init);
        NioApp.coms.docReady.push(NioApp.Addons.Init);
        NioApp.coms.docReady.push(NioApp.Wizard);
        NioApp.coms.winLoad.push(NioApp.ModeSwitch);
    };

    NioApp.init();
    return NioApp;
}(NioApp, jQuery);