window.onload = (function () {
    var WIDTH = 800,
        HEIGHT = 640;

    // Initialize Crafty
    Crafty.init(WIDTH, HEIGHT);

    /* Create an entity with Crafty.e(..) that can be
    drawn in (2D) on a HTML canvas (Canvas), has a background color (color)
    and can be moved with WASD or arrow keys (Fourway)
    */

    var p1 = Crafty.e("2D, Canvas, Color, Fourway")
        .attr({ x: 160, y: 40, w: 32, h: 32 }) // for Component 2D
        .color("#FF0000") // for Component Color
        .fourway(10); // for Component Fourway

    Crafty.e("2D, Canvas, Color")
            .attr({ x: 70, y: 400, w: 1000, h: 32 })
            .color("#00FF00")

    Crafty.c("Box", {
        ready: true,

        init: function () {
            this.addComponent("2D, Canvas, Mouse, Tween");
            this.w = 32; // width
            this.h = 32; // height


            this.bind("Draw", function (obj) {
                // Pass the Canvas context and the drawing region.
                this._draw(obj.ctx, obj.pos);
            });
            this.bind("EnterFrame", function (e) {
                if (this._alpha < 0.1) {
                    history.destroy();
                }
            });
            this.bind("Click", function (e) {
                console.log(arguments);
                this.tween({ alpha: 0.0 }, 50)
            });

        },

        _draw: function (ctx, po) {
            var pos = { _x: po._x + 1, _y: po._y + 1, _w: po._w - 2, _h: po._h - 2 };

            ctx.fillStyle = this._color;
            ctx.fillRect(pos._x, pos._y, pos._w, pos._h);

            ctx.lineWidth = 1;
            ctx.strokeStyle = "rgb(0,0,0)";
            ctx.beginPath();
            ctx.moveTo(pos._x, pos._y);
            ctx.lineTo(pos._x + pos._w, pos._y);
            ctx.lineTo(pos._x + pos._w, pos._y + pos._h);
            ctx.lineTo(pos._x, pos._y + pos._h);
            ctx.closePath();
            ctx.stroke();
            ctx.moveTo(pos._x, pos._y);
            ctx.lineTo(pos._x + pos._w, pos._y + pos._h);
            ctx.stroke();
            ctx.moveTo(pos._x + pos._w, pos._y);
            ctx.lineTo(pos._x, pos._y + pos._h);
            ctx.stroke();
        },
        makeBox: function (x, y, color) {
            this.attr({ x: x, y: y });
            this._color = color;
        }
    });
  

    Crafty.e("Box").makeBox(160, 96, "#F00");
    Crafty.e("Box").makeBox(240, 96, "#0F0");
    Crafty.e("Box").makeBox(320, 96, "#FF0");
    Crafty.e("Box").makeBox(400, 96, "#F0F");
    Crafty.e("Box").makeBox(480, 96, "#0FF");
    // Log the created entity to the 35 console
    console.log(p1);

});

