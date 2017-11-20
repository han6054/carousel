```
  var Carousel = function (config) {
                        this.config = {
                            ele: null,
                            width: 0,
                            height: 0,
                            top: 0,
                            left: 0,
                            img: [],
                            border: null,
                        };
                        if (config && $.isPlainObject(config)) {

                            $.extend(this.config, config)

                        } else {
                            this.isConfig = true;
                        }
                        // 创建DOM
                        if (this.config.img.length == 0) {
                            alert("请配置图片")
                        } else {
                            var content = '', content_li = "";
                            for (var i = 0; i < this.config.img.length; i++) {
                                var cur = this.config.img[i];
                                content_li += '<li><img src=' + cur + '></li>'
                            }
                            content += "<a href='javascript:;' class='pre'><img src='http://img2.cheshi-img.com/misc/gaojiacheng/201708/5996ad4e81ac9.png'></a><a href='javascript:;' class='next'><img src='http://img2.cheshi-img.com/misc/gaojiacheng/201708/5996ad4e81b8a.png'></a><ul class='carousel-ul'>" + content_li + "</ul>";
                            this.config.ele.html(content);
                            //设置css
                            this.config.ele.css({
                                "position": "absolute",
                                "width": this.config.width,
                                "height": this.config.height,
                                "top": this.config.top,
                                "left": this.config.left,
                                "overflow": "hidden",
                                "border": this.config.border,
                            })
                            this.config.ele.find('ul').css({
                                "position": 'absolute',
                                "overflow": "hidden",
                                "top":'0',
                                "width":parseInt(this.config.width) * this.config.img.length,
                                "height": this.config.height,
                            })
                            this.config.ele.find('ul').find('li').css({
                                "width":this.config.width,
                                "height": this.config.height,
                                "float": "left",
                            })
                            this.config.ele.find('ul').find('li').find('img').css("width", "100%");
                            //获取按钮   
                            this.preBtn = this.config.ele.find(".pre");
                            this.nextBtn = this.config.ele.find(".next");
                            this.click();
                        }
                    }
                    Carousel.prototype = {
                        click: function () {
                            var _this = this, liw = parseInt(_this.config.width),ele= _this.config.ele.find("ul");
                            _this.preBtn.click(function(){       
                                ele.prepend(ele.children().last());
                                      ele.css('left', 0 - liw );
                                      ele.animate({ 'left': 0 },800);
                        
                            });
                            _this.nextBtn.click(function(){

                                ele.animate({ 'left': 0 -liw },800, function () {
                                ele.append(ele.children().first());
                                ele.css('left', 0);

                                });
                            })
                           
                        }
                    }
