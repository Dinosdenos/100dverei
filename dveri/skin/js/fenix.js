
//FenixCustomer js
var FenixCheckout = {
    processCoupon: function(o) { return $.post("checkout/coupon", { coupon: o }, function(o) { $("#orderTable").html(o) }), !1 },
    buyOneclickDialog: function(o) { return $("#buyOneclickDialog").dialog({ width: 420, modal: !0, open: function() { $("#buyOneclickDialog").find(".buy a").click(function() { var t = $("#buyOneclickDialog").find("input").val(); return "" == t ? alert("Введите номер телефона") : $.post("/checkout/process/oneclick", { pid: o, phone: t }, function(o) { $("#buyOneclickContainer").html(o) }), !1 }) } }), !1 },
    addProduct: function(o) {
        return $.post(o, {} /* function() { t.openDialog() }*/ ),
            $.ajax({ url: "/checkout/process", type: "POST", data: {} }), $.post("/checkout/process/sidebar", {}, function(o) { $("#updatecart").html(o) }), this.updateCheckoutTotalBlock(), this.addprodopen(), !1
    },
    removeProduct: function(o) { return $(".li_product_" + o).remove(), $(".tr_product_" + o).remove(), $.post("checkout/process/remove", { id: o }, function() { $.post("/checkout/process/sidebar", {}, function(o) { $("#updatecart").html(o) }) }), this.updateCheckoutTotalBlockRemove(), /*this.updateCheckoutTotalQtyCart(),*/ !1 },
    removeProductCart: function(e) { return $(".tr_product_" + e).remove(), $.post("checkout/process/remove", { id: e }, (function() { $.post("/checkout/process/sidebar", {}, (function(e) { $("#updatecart").html(e) })) })), this.updateCheckoutTotalQtyCart(), !1 },
    plusQty: function(o, t, d) {
        var e = parseInt(o.val()),
            a = parseFloat(o.data("unitprice")),
            c = (e * a);;
        return e++, o.val(e), t.html(parseFloat(e * a)), this.updateCheckoutTotalQty(d, (e * a)), /* this.updateCartamount(d),*/ !1
    },
    minusQty: function(o, t, d) {
        var e = parseInt(o.val()),
            a = parseFloat(o.data("unitprice")),
            c = (e * a);
        return 1 == e ? !1 : (e--, o.val(e), t.html(parseFloat(e * a)), this.updateCheckoutTotalQty(d, (e * a)), /*this.updateCartamount(d), */ !1)
    },
    plusQtyCart: function(e, t, a) {
        var o = parseInt(e.val()),
            i = parseFloat(e.data("unitprice"));
        return a = parseFloat(e.data("unitid")), o++, e.val(o), t.html(parseFloat(o * i)), this.updateCheckoutTotalQtyCart(i, a), !1
    },
    minusQtyCart: function(e, t, a) {
        var o = parseInt(e.val()),
            i = parseFloat(e.data("unitprice"));
        return a = parseFloat(e.data("unitid")), 1 == o || (o--, e.val(o), t.html(parseFloat(o * i)), this.updateCheckoutTotalQtyCart(i, a)), !1
    },
    updateCheckoutItemTotal: function(o, t, d) {
        var e = parseInt(o.data("unitprice")),
            a = parseFloat(o.val());
        t.html(parseFloat(a * e)), this.updateCartamount(d)
    },
    updateCheckoutItemTotalCart: function(e, t) {
        var a = parseInt(e.data("unitprice")),
            d = parseFloat(e.data("unitid"))
            o = parseFloat(e.val());
        t.html(parseFloat(o * a));
        $(".product_subtotal_" + d).html(parseFloat(o * a).toFixed(2));
    },
    updateCheckoutTotalQty: function(j, p) {
        var o = 0,
            t = 0,
            e = {};
        $(".homev7-shopping-basket").find(".checkout-item-qty").each(function(a) {
                var i = $(this),
                    n = parseFloat(i.data("unitprice"));
                c = 0;
                c = parseFloat(n * parseInt(i.val())), o += parseFloat(n * parseInt(i.val())), t += parseInt(i.val()), e[a] = { order_unit_id: parseInt(i.data("unitid")), qty: parseInt(i.val()) }
            }),
            //$("#product_subtotal_" + c).html(c + " UAH"),
            $(".total-sum").html(o.toFixed(2) + " UAH"),
            //$("#checkoutSidebarTotal").html(o + " UAH"),
            //$("#checkoutSidebarTotalCart").html(o + " UAH"),
            $(".cart-count").html(t),
            //$(".product_subtotal_" + j).html(p.toFixed(2)),
            $.post("checkout/process/update", { data: e });


        /*,
                    this.updateCartamount(j);*/
    },
    updateCheckoutTotalQtyCart: function(e, t) {
        var a = 0,
            o = 0,
            i = {};
        $("#FenixCart").find(".checkout-item-qty").each((function(e) {
            var t, n = $(this),
                s = 0;
            c = 0, 1 == parseFloat(n.data("sale")) ? parseInt(n.val()) <= 9 ? s = parseFloat(n.data("unitprice")) : parseInt(n.val()) >= 10 && parseInt(n.val()) <= 29 ? s = parseFloat(n.data("unitprice10")) : parseInt(n.val()) >= 30 && (s = parseFloat(n.data("unitprice30"))) : s = parseFloat(n.data("unitprice")), t = parseFloat(n.data("unitid")), $(".amountcart_" + t).html(s), c = parseFloat(s * parseInt(n.val())), a += parseFloat(s * parseInt(n.val())), o += parseInt(n.val()), i[e] = { order_unit_id: parseInt(n.data("unitid")), qty: parseInt(n.val()), price: s }
        })), $("#product_subtotal_" + c).html(c + " UAH"), $(".total-sum").html(a.toFixed(2) + " UAH"), $("#checkoutSidebarTotal").html(a + " UAH"), $("#checkoutSidebarTotalCart").html(a + " UAH"), $("#checkoutSidebarQty").html(o), $.post("checkout/process/update", { data: i });
        var n = parseInt($(".tr_product_" + t).find(".amountcart_" + t).html()) * parseInt($(".product-quantity").find("#qty_" + t).val());
        $(".product_subtotal_" + t).html(n.toFixed(2));
        var s = window.location.origin;
        a <= 0 && $(location).attr("href", s)
    },

    updateCartamount: function(i) {
        var price = parseInt($("#checkinfotb").find(".amountcart_" + i).html());
        var qty = parseInt($(".product-quantity").find(".fenixqty_" + i).val());
        var res = price * qty;
        $(".product_subtotal_" + i).html(res.toFixed(2))
    },

    updateCheckoutTotalBlock: function(o) {
        var urlo = window.location.href;
        if (urlo.indexOf('/ru') > -1) {
            var lang = '/ru';
        } else {
            var lang = '';
        }
        return $.ajax({ url: lang + "/checkout/process", type: "POST", data: {} }), $.post(lang + "/checkout/process", {}, function(o) { $("#offcanvas-cart").html(o) }), this.open(), !1
    },
    updateCheckoutTotalBlockRemove: function(o) {
        var urlo = window.location.href;
        if (urlo.indexOf('/ru') > -1) {
            var lang = '/ru';
        } else {
            var lang = '';
        }
        return $.ajax({ url: lang + "/checkout/process", type: "POST", data: {} }), $.post(lang + "/checkout/process", {}, function(o) { $("#offcanvas-cart").html(o) }), !1
    },
    updateCheckoutTotalBlockCart: function(o) {
        var urlo = window.location.href;
        if (urlo.indexOf('/ru') > -1) {
            var lang = '/ru';
        } else {
            var lang = '';
        }
        return $.ajax({ url: lang + "/checkout/process", type: "POST", data: {} }), $.post(lang + "/checkout/process/table", {}, function(o) { $(".offcanvas-cart").html(o) }), !1
    },
    quickview: function(o) {
        var urlo = window.location.href;
        if (urlo.indexOf('/ru') > -1) {
            var lang = '/ru';
        } else {
            var lang = '';
        }
        return $.post(o + "?quick=ok", function() {
            $.post(lang + "/" + o + "?quick=ok", {}, function(o) { $("#updateproductmodal").html(o) })
        })
    },
    close: function() {
        var $body = $("body"),

            $offCanvas = $(".offcanvas-cart"),
            $offCanvasOverlay = $(".offcanvas-overlay");
        return $body.removeClass("offcanvas-open"), $offCanvas.removeClass("offcanvas-open"), $offCanvasOverlay.fadeOut();

    },
    /*open: function() {
        var $body = $("body"),

            $offCanvas = $(".offcanvas-cart"),
            $offCanvasOverlay = $(".offcanvas-overlay");
        return $body.addClass("offcanvas-open"), $offCanvas.addClass("offcanvas-open"), $offCanvasOverlay.fadeIn();

    },*/
    open: function() {
        //$body = $("body"),
        /*let el = document.getElementById('offcanvas');
        el.ariaExpanded = "true";
        const ell = document.getElementById('offcanvas-cart');
        ell.dataset.bsPopper = "none";*/

        var $offCanvas = $("#offcanvas"),
            $offCanvasCart = $("#offcanvas-cart"),
            $offCanvasOverlay = $(".offcanvas-overlay");
        if ($offCanvasCart.hasClass('show')) {
            return $offCanvas.removeClass("show"), $offCanvasCart.removeClass("show"), $offCanvasOverlay.fadeOut();
        } else {
            return $offCanvas.addClass("show"), $offCanvasCart.addClass("show"), $offCanvasOverlay.fadeIn();
        }
    },
    addprodopen: function() {
        //$body = $("body"),
        /*let el = document.getElementById('offcanvas');
        el.ariaExpanded = "true";
        const ell = document.getElementById('offcanvas-cart');
        ell.dataset.bsPopper = "none";*/

        var $offCanvas = $("#offcanvas"),
            $offCanvasCart = $("#offcanvas-cart"),
            $offCanvasOverlay = $(".offcanvas-overlay");
        return $offCanvas.addClass("show"), $offCanvasCart.addClass("show"), $offCanvasOverlay.fadeIn();
    },
    notifyStockProduct: function(o) {
        return $("#stockNotifyDialog").dialog({
            width: 420,
            modal: !0,
            open: function() {
                $("#stockNotifyDialog").find("input[name=cellphone]").inputmask({ mask: "+38 (099) 999 99 99", clearMaskOnLostFocus: !1 }), jQuery.validator.addMethod("phone", function(o, t) { return o = o.replace(/\s+/g, ""), this.optional(t) || o.length > 9 && o.match(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/) }, "Введите номер телефона"), $("#stockNotifyDialog form").validate({
                    rules: { cellphone: { required: !0, phone: !0 }, email: { required: !0, email: !0 } },
                    ignore: "div:hidden input, div:hidden select",
                    messages: { cellphone: { required: "Введите номер телефона" }, email: "Введите корректный email" },
                    submitHandler: function(t) {
                        var e = ($(t), $("#stockNotifyDialog").find("input[name=email]").val()),
                            a = $("#stockNotifyDialog").find("input[name=cellphone]").val();
                        $.post("/catalog/notify/process", { pid: o, cellphone: a, email: e }, function(o) { $("#stockNotifyContainer").html(o), setTimeout(function() { $("#stockNotifyDialog").dialog("close") }, 2e3) })
                    }
                })
            }
        }), !1
    },
    error: function() { return !1 }
};