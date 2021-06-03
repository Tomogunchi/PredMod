window.menu = pc.app.getEntityFromIndex("f476d893-1c86-419b-a3f6-7062a0928b7c");

//menu.children[0].element.color = {r: 1, g: 1, b: 1, a: 1}
menu.children[0].element.margin = { x: -240, y: -150, z: -240, w: -150 };

window.findmatch = pc.app.getEntityFromIndex(
  "ed3526e2-16ff-4fa9-a9a5-2dd5908e842e"
);
findmatch.element.color = {
  r: 1,
  g: 0,
  b: 0,
  a: 1,
};
findmatch.button.data.hoverTint = { r: 1, g: 0, b: 0, a: 1 };

window.matchfield = pc.app.getEntityFromIndex(
  "c837c197-5cc0-419f-b207-f5b043a562b0"
);
matchfield.children[0].element.opacity = 0.5;
matchfield.children[0].element.color = { r: 0.25, g: 0, b: 0, a: 0.5 };
matchfield.children[1].children[0].element.color = {
  r: 0.25,
  g: 0,
  b: 0,
  a: 0.5,
};
matchfield.children[1].children[0].element.opacity = 0.5;
matchfield.children[1].children[0].children[1].children[0].element.color = {
  r: 1,
  g: 0,
  b: 0,
  a: 1,
};
matchfield.children[1].children[4].element.color = {
  r: 1,
  g: 0,
  b: 0,
  a: 1,
};
matchfield.children[1].children[5].element.color = {
  r: 1,
  g: 0,
  b: 0,
  a: 1,
};
matchfield.children[1].children[6].element.color = {
  r: 1,
  g: 0,
  b: 0,
  a: 1,
};
matchfield.children[1].children[7].element.text = "PredMod v3.1";
matchfield.children[1].children[7].element.color = {
  r: 1,
  g: 1,
  b: 1,
  a: 1,
};
matchfield.children[2].children[9].setLocalPosition(124.5, 214.786, 0);
matchfield.parent.children[0].children[0].element.color = {
  r: 0.25,
  g: 0,
  b: 0,
  a: 0.5,
};
matchfield.parent.children[0].children[0].element.opacity = 0.5;
matchfield.parent.children[0].children[1].element.color = {
  r: 0.25,
  g: 0,
  b: 0,
  a: 0.5,
};
matchfield.parent.children[0].children[1].element.opacity = 0.5;
matchfield.parent.children[0].children[1].children[2].element.color = {
  r: 0,
  g: 0,
  b: 0,
  a: 1,
};
matchfield.parent.children[0].children[1].children[2].children[0].element.color = {
  r: 1,
  g: 0,
  b: 0,
  a: 1,
};
matchfield.parent.parent.children[1].setLocalPosition(-10, 75, 0);
matchfield.parent.parent.children[3].element.color = {
  r: 0.25,
  g: 0,
  b: 0,
  a: 0.5,
};
matchfield.parent.parent.children[3].button.data.hoverTint = {
  r: 1,
  g: 0,
  b: 0,
  a: 1,
};
matchfield.parent.parent.children[4].element.color = {
  r: 0.25,
  g: 0,
  b: 0,
  a: 0.5,
};
matchfield.parent.parent.children[4].button.data.hoverTint = {
  r: 1,
  g: 0,
  b: 0,
  a: 1,
};
matchfield.parent.parent.children[4].element.opacity = 0.4;
matchfield.parent.parent.parent.children[2].setLocalPosition(-1, -150, 0);
matchfield.parent.parent.parent.children[4].setLocalPosition(0, -130, 0);
matchfield.parent.parent.parent.children[5].children[0].element.color = {
  r: 0.25,
  g: 0,
  b: 0,
  a: 0.5,
};
matchfield.parent.parent.parent.children[5].children[0].element.opacity = 0.5;
matchfield.parent.parent.parent.children[6].enabled = false;
matchfield.parent.parent.parent.parent.children[9].setLocalPosition(-2.3, 0, 0);

window.menuUIDFind = pc.app.getEntityFromIndex(
  "06c5ec69-e469-4a9c-8d86-1f10ab8e0412"
);

window.resolution = pc.app.getEntityFromIndex(
  "f942f896-c221-4b62-99e3-76a57b0dfeca"
);
resolution.script.slider.max = 110;

notificationOn();

function notificationOn() {
  window.notification = pc.app.getEntityFromIndex(
    "a5cb5711-a2e9-4329-8fed-ef9f0739e017"
  );
  notification.element.color = { r: 0.25, g: 0, b: 0, a: 0.5 };
  notification.children[0].element.enableMarkup = true;
  notification.children[0].element.text =
    '[color="#ffffff"]PredMod Loaded![/color]';
  notification.setLocalScale(2, 2, 2);
  notification.element.opacity = 0.5;
  notification.setLocalPosition(-768, -140, 0);
  notification.enabled = true;
  setTimeout(notificationOff, 3000);
}

function notificationOff() {
  window.notification = pc.app.getEntityFromIndex(
    "a5cb5711-a2e9-4329-8fed-ef9f0739e017"
  );
  notification.element.color = { r: 1, g: 0, b: 0, a: 1 };
  notification.setLocalScale(1.0, 1.0, 1.0);
  notification.enabled = false;
}

// Character Skin Fix
Player.prototype.onCharacterSkinSet = function(t) {
  var e = this.characterName + "-" + t + ".jpg";
  if (t && this.characterEntity) {
      for (var i = this.characterEntity.model.material.clone(), a = this.app.assets.find(e), s = this.characterEntity.model.meshInstances, o = 0; o < s.length; ++o) {
          s[o].material = i
      }
      this.app.assets.load(a),
      a.ready((function(t) {
          i.diffuseMap = a.resource,
          i.update()
      }
      ))
  }
}

// PredMod Pro Script
Enemy.prototype.setCharacterSkin = function(t, i, e) {
  if (this.isActivated)
      return this.entity.collision.height = 4,
      this.modelHolder.enabled = !1,
      this.bodyEntity.enabled = !1,
      !1;
  this.entity.addComponent("rigidbody"),
  this.entity.rigidbody.type = pc.BODYTYPE_KINEMATIC,
  this.entity.rigidbody.enabled = !0,
  void 0 !== t && (this.skin = t);
  var s = this;
  for (var n in this.skins) {
      var a = this.skins[n];
      this.skin == a.name ? (a.enabled = !0,
      this.characterEntity = a) : a.enabled = !1
  }
  "Lilium" == this.skin ? (this.hammerEntity.enabled = !0,
  this.katanaEntity.enabled = !1) : "Shin" == this.skin && (this.hammerEntity.enabled = !1,
  this.katanaEntity.enabled = !0),
  e && this.setDanceAnimation(this.skin, e),
  i && (this.heroSkin = i,
  this.setHeroSkin()),
  this.app.assets.find(this.skin + "-Character").ready((function() {
      s.loadCharacterParts()
  }
  ))
}

function addWeaponsToMainMenuScene() {

    const m4Entity = new pc.Entity();
    m4Entity.setName('M4');
    m4Entity.setLocalPosition(-0.1, 0, 0.02);
    m4Entity.setLocalScale(21, 21, 21);
    m4Entity.addComponent('model', {
        enabled: true,
        type: 'asset',
        asset: 36716849,
        materialAsset: null,
        castShadows: true,
        castShadowsLightmap: true,
        receiveShadows: true,
        lightmapped: false,
        lightmapSizeMultiplier: 1,
        castShadowsLightMap: true,
        lightMapped: false,
        lightMapSizeMultiplier: 1,
        isStatic: false,
        layers: [0],
        batchGroupId: null,
    });
    m4Entity.tags.add('Weapon');

    // LMG
    const lmgEntity = new pc.Entity();
    lmgEntity.setName('LMG');
    lmgEntity.setLocalPosition(-0.1, 0, 0.02);
    lmgEntity.setLocalScale(21, 21, 21);
    lmgEntity.addComponent('model', {
        enabled: true,
        type: 'asset',
        asset: 36716852,
        materialAsset: null,
        castShadows: true,
        castShadowsLightmap: true,
        receiveShadows: true,
        lightmapped: false,
        lightmapSizeMultiplier: 1,
        castShadowsLightMap: true,
        lightMapped: false,
        lightMapSizeMultiplier: 1,
        isStatic: false,
        layers: [0],
        batchGroupId: null,
    });
    lmgEntity.tags.add('Weapon');

    // Desert-Eagle
    const desertEntity = new pc.Entity();
    desertEntity.setName('Desert-Eagle');
    desertEntity.setLocalPosition(-0.1, 0, 0.02);
    desertEntity.setLocalScale(21, 21, 21);
    desertEntity.addComponent('model', {
        enabled: true,
        type: 'asset',
        asset: 36716855,
        materialAsset: null,
        castShadows: true,
        castShadowsLightmap: true,
        receiveShadows: true,
        lightmapped: false,
        lightmapSizeMultiplier: 1,
        castShadowsLightMap: true,
        lightMapped: false,
        lightMapSizeMultiplier: 1,
        isStatic: false,
        layers: [0],
        batchGroupId: null,
    });
    desertEntity.tags.add('Weapon');
}
addWeaponsToMainMenuScene();

//             FPS-MENU                     MAP-TWEAKING
if (!localStorage.getItem("FPS_TEMPLE")) { localStorage.setItem("FPS_TEMPLE", true); }
if (!localStorage.getItem("FPS_TUNDRA")) { localStorage.setItem("FPS_TUNDRA", true); }
if (!localStorage.getItem("FPS_MISTLE")) { localStorage.setItem("FPS_MISTLE", true); }
if (!localStorage.getItem("FPS_SIERRA")) { localStorage.setItem("FPS_SIERRA", true); }
if (!localStorage.getItem("FPS_XIBALBA")) { localStorage.setItem("FPS_XIBALBA", true); }
if (!localStorage.getItem("KILL_SKULL")) { localStorage.setItem("KILL_SKULL", true); }
if (!localStorage.getItem("GARBAGE_ENTITY")) { localStorage.setItem("GARBAGE_ENTITY", true); }
if (!localStorage.getItem("ENGINE_BLOOM")) { localStorage.setItem("ENGINE_BLOOM", true); }
//       MAG_FIX              HIDE_RELOAD            SCOPE_BORDERS
if (!localStorage.getItem("MAG_FIX")) { localStorage.setItem("MAG_FIX", true); }
if (!localStorage.getItem("HIDE_RELOADS")) { localStorage.setItem("HIDE_RELOADS", true); }
if (!localStorage.getItem("UI_SCOPE_BORDER")) { localStorage.setItem("UI_SCOPE_BORDER", true); }
if (!localStorage.getItem("HIDE_FLASH")) { localStorage.setItem("HIDE_FLASH", true); }
if (!localStorage.getItem("TRACER_LINES")) { localStorage.setItem("TRACER_LINES", true); }
if (!localStorage.getItem("SHOOT_LINES")) { localStorage.setItem("SHOOT_LINES", true); }
if (!localStorage.getItem("IMPACT_MARKS")) { localStorage.setItem("IMPACT_MARKS", true); }
if (!localStorage.getItem("BULLET_ENTITY")) { localStorage.setItem("BULLET_ENTITY", true); }
//FOV
if (!localStorage.getItem("FOV_SNIPER")) { localStorage.setItem("FOV_SNIPER", true); }
if (!localStorage.getItem("FOV_SCAR")) { localStorage.setItem("FOV_SCAR", true); }
if (!localStorage.getItem("FOV_SMG")) { localStorage.setItem("FOV_SMG", true); }
if (!localStorage.getItem("FOV_SHOTGUN")) { localStorage.setItem("FOV_SHOTGUN", true); }
if (!localStorage.getItem("FOV_PISTOL")) { localStorage.setItem("FOV_PISTOL", true); }
if (!localStorage.getItem("FOV_LMG")) { localStorage.setItem("FOV_LMG", true); }
if (!localStorage.getItem("FOV_M4")) { localStorage.setItem("FOV_M4", true); }
if (!localStorage.getItem("FOV_RPG")) { localStorage.setItem("FOV_RPG", true); }
if (!localStorage.getItem("FOV_KNIFE")) { localStorage.setItem("FOV_KNIFE", true); }
let gunFOVSettings = new window.settings();
gunFOVSettings.createSettings("Gun-FOV");
gunFOVSettings.addSettings({
    name: "FOV_SNIPER",
    type: "slider",
    text: "Sniper-FOV 		 		 		 					*default 30*",
    defaultValue: 30,
    min: 10,
    max: 125,
});
gunFOVSettings.addSettings({
    name: "FOV_SCAR",
    type: "slider",
    text: "Scar-FOV 		 		 		 								*default 45*",
    defaultValue: 45,
    min: 10,
    max: 125,
});
gunFOVSettings.addSettings({
    name: "FOV_SMG",
    type: "slider",
    text: "Smg-FOV 		 		 		 								*default 45*",
    defaultValue: 45,
    min: 10,
    max: 125,
});
gunFOVSettings.addSettings({
    name: "FOV_SHOTGUN",
    type: "slider",
    text: "Shitgun-FOV 		 		 		 		*default 30*",
    defaultValue: 30,
    min: 10,
    max: 125,
});
gunFOVSettings.addSettings({
    name: "FOV_PISTOL",
    type: "slider",
    text: "Pistol-FOV 		 		 		 					 *default 45*",
    defaultValue: 45,
    min: 10,
    max: 125,
});
gunFOVSettings.addSettings({
    name: "FOV_LMG",
    type: "slider",
    text: "LMG-FOV 		 		 		 								*default 45*",
    defaultValue: 45,
    min: 10,
    max: 125,
});
gunFOVSettings.addSettings({
    name: "FOV_M4",
    type: "slider",
    text: "M4-FOV 		 		 		 										 *default 45*",
    defaultValue: 45,
    min: 10,
    max: 125,
});
gunFOVSettings.addSettings({
    name: "FOV_RPG",
    type: "slider",
    text: "RPG-FOV 		 		 		 								*default 45*",
    defaultValue: 45,
    min: 10,
    max: 125,
});
gunFOVSettings.addSettings({
    name: "FOV_KNIFE",
    type: "slider",
    text: "KNIFE-FOV 		 		 		 								*default 45*",
    defaultValue: 45,
    min: 10,
    max: 125,
});
let gunConfigSettings = new window.settings();
gunConfigSettings.createSettings("Guns Config");
gunConfigSettings.addSettings({
    name: "MAG_FIX",
    type: "checkbox",
    text: "Enable Mag-Fix																																													*Only for Custom Model Mods*",
});
gunConfigSettings.addSettings({
    name: "HIDE_RELOADS",
    type: "checkbox",
    text: "Hide Gun Reloading",
});
gunConfigSettings.addSettings({
    name: "HIDE_FLASH",
    type: "checkbox",
    text: "Hide Flash",
});
gunConfigSettings.addSettings({
    name: "UI_SCOPE_BORDER",
    type: "checkbox",
    text: "Disable Scope Borders",
});
gunConfigSettings.addSettings({
    name: "TRACER_LINES",
    type: "checkbox",
    text: "Enable Tracer Lines.",
});
gunConfigSettings.addSettings({
    name: "SHOOT_LINES",
    type: "checkbox",
    text: "Enable Shoot Rays.",
});
gunConfigSettings.addSettings({
    name: "IMPACT_MARKS",
    type: "checkbox",
    text: "Enable Bullet Impact Marks.",
});
gunConfigSettings.addSettings({
    name: "BULLET_ENTITY",
    type: "checkbox",
    text: "Enable Bullets Visually.",
});
let fpsSettings = new window.settings();
fpsSettings.createSettings("FPS Tweaks");
fpsSettings.addSettings({
    name: "FPS_TEMPLE",
    type: "checkbox",
    text: "DISABLE-TEMPLE                                              *Candles, Trees, Flags, Birds, Grass, Rain*",
});
fpsSettings.addSettings({
    name: "FPS_TUNDRA",
    type: "checkbox",
    text: "DISABLE-TUNDRA                                                             *Snow, Trees, Flags, Grass, Rain*",
});
fpsSettings.addSettings({
    name: "FPS_MISTLE",
    type: "checkbox",
    text: "DISABLE-MISTLE                                                                                     *Trees, Birds, Grass*",
});
fpsSettings.addSettings({
    name: "FPS_SIERRA",
    type: "checkbox",
    text: "DISABLE-SIERRA                                                                         *Trees, Flags, Birds, Grass*",
});
fpsSettings.addSettings({
    name: "FPS_XIBALBA",
    type: "checkbox",
    text: "DISABLE-XIBALBA                                                                         *Trees, Rain, Grass, Misc*",
});
fpsSettings.addSettings({
    name: "KILL_SKULL",
    type: "checkbox",
    text: "Enable Floating skull animation.",
});
fpsSettings.addSettings({
    name: "GARBAGE_ENTITY",
    type: "checkbox",
    text: "Enable garbage entities.",
});
fpsSettings.addSettings({
    name: "ENGINE_BLOOM",
    type: "checkbox",
    text: "Enable Bloom (Reduces FPS)",
});

pc.app.on("Map:Loaded", () => {
    const sniperLens = pc.app.getEntityFromIndex("b655ed04-9844-4957-a03c-1756b25bda05");
    const ingameOverlay = pc.app.getEntityFromIndex("9fcdea8c-ee29-403e-8e5b-0eddd1e548f6");
    pc.app.getEntityFromIndex("436591b0-26aa-4678-ad3f-645a76a01c9c").enabled = JSON.parse(localStorage.getItem('KILL_SKULL'));
    pc.app.getEntityFromIndex("fcf27bc6-8c98-4b74-ac38-36482fad0dbb").enabled = JSON.parse(localStorage.getItem('GARBAGE_ENTITY'));
    if (pc.currentMap == "Temple") {
        const grassParent = pc.app.getEntityFromIndex("1d2215e5-3d6c-45ea-8eb8-d1e8ec21f41b");
        const flagParent = pc.app.getEntityFromIndex("9a96e696-d957-4702-9375-ad9ae8eeadf3");
        const rainDrops1 = pc.app.getEntityFromIndex("66e64a89-b36e-49c6-8776-60188fef8f68");
        const rainDrops2 = pc.app.getEntityFromIndex("8d570275-34d7-4114-8b08-c8d5617fea33");
        const rainDrops3 = pc.app.getEntityFromIndex("746c1608-6697-43b6-82e1-95d29fa060df");
        const rainPlanes1 = pc.app.getEntityFromIndex("37596fa4-6326-4779-9391-4dfa9ae308eb");
        const rainPlanes2 = pc.app.getEntityFromIndex("59adeb0a-c832-4fd4-9a9a-534aecec402c");
        const mapMain = pc.app.getEntityFromIndex("a2020fc4-b2fa-477f-8de4-7ac49d54e059");
        const prayerMain = pc.app.getEntityFromIndex("d5a61d2b-755d-419c-b50b-f2f8ef02bf72");
        const propsMain = pc.app.getEntityFromIndex("dd99151a-6086-4756-80ad-d50f61f85901");
        const rocks1 = pc.app.getEntityFromIndex("c101808d-7590-4182-bbc2-19cbcbce608c");
        const rocks2 = pc.app.getEntityFromIndex("55bc7433-cf29-4a9e-9a48-8b24291da1c7");
        const rocks3 = pc.app.getEntityFromIndex("5700096d-4777-4b10-98ee-08b2586252f4");
        const rocks4 = pc.app.getEntityFromIndex("5c2bfb69-b748-4da5-95d0-faa9e9fae4d9");
        const rocks5 = pc.app.getEntityFromIndex("c4437530-8e4f-4e1b-8938-6dac678755c7");
        const rocks6 = pc.app.getEntityFromIndex("b48076ec-6c68-415d-9a16-381a33519f26");
        const rocks7 = pc.app.getEntityFromIndex("d505ae68-7735-4a2e-b120-0df9277fe13c");
        const rocks8 = pc.app.getEntityFromIndex("69464b51-f8cd-4b84-9aa1-4d86544eda77");
        const rocks9 = pc.app.getEntityFromIndex("7dbfd9b7-56c2-4b7e-98ac-aee557ef379a");
        const rocks10 = pc.app.getEntityFromIndex("3d7abb97-8fe7-40e6-915e-1a5b01ad4be5");
        const rocks11 = pc.app.getEntityFromIndex("a641338a-5486-4595-99e5-3d85534eb2d4");
        const rocks12 = pc.app.getEntityFromIndex("5906d832-922d-4827-9cad-65f21da76780");
        const rocks13 = pc.app.getEntityFromIndex("6658ed34-89f2-44a7-b332-e33c2fb05acc");
        const rocks14 = pc.app.getEntityFromIndex("2502dceb-4a32-43e7-85a2-e32fb32a8f8a");
        const tree1 = pc.app.getEntityFromIndex("f23230b3-2d87-4361-bc7c-98e3f9342ae2");
        const tree2 = pc.app.getEntityFromIndex("d255ac9c-8927-41e0-95ef-82552e4ea2f4");
        const tree3 = pc.app.getEntityFromIndex("aab86eee-53cb-4a25-b42c-ad7f58f5245a");
        const tree4 = pc.app.getEntityFromIndex("6047c902-5d5e-4bb5-845b-4275e58c0e0c");
        const tree5 = pc.app.getEntityFromIndex("a8dc4d30-a007-4594-b179-3af935918ffa");
        const tree6 = pc.app.getEntityFromIndex("c538d834-42dd-489d-a9f9-3c93545509d4");
        const tree7 = pc.app.getEntityFromIndex("55aaf325-2013-462f-8fae-0775f02f860f");
        const tree8 = pc.app.getEntityFromIndex("28f4c525-d8d2-438c-a761-360772c3d27b");
        const candle1 = pc.app.getEntityFromIndex("882f3df8-b47f-46d6-9acb-1e8932f72c0a");
        const candle2 = pc.app.getEntityFromIndex("f14c9e5f-0151-4e28-b2d0-01b4320e7050");
        const candle3 = pc.app.getEntityFromIndex("5a7dcb72-33ec-4b4b-bce8-7828177fb2fb");
        const candle4 = pc.app.getEntityFromIndex("e23ae785-be6f-4444-89ac-9fe6c697de07");
        const candle5 = pc.app.getEntityFromIndex("00887111-7dbe-4788-8965-77f7ebd5b56e");
        const jar1 = pc.app.getEntityFromIndex("5d4d4e4c-a49c-434e-a7c5-a1a6e71b2b1d");
        const jar2 = pc.app.getEntityFromIndex("d2cecbde-0d61-43d4-9256-d5055cf8cdf8");
        const jar3 = pc.app.getEntityFromIndex("808a0397-d239-454d-ac91-d3259ffbed5d");
        const jar4 = pc.app.getEntityFromIndex("ba4ecf87-144e-4fb4-ba8a-4f96cd93b8e2");
        const jar5 = pc.app.getEntityFromIndex("03a8829b-dabb-4afd-915e-613844068a7e");
        const jar6 = pc.app.getEntityFromIndex("9e776037-809b-4e1e-8229-1c544dc08654");
        const jar7 = pc.app.getEntityFromIndex("03ee5a75-93ec-415b-bc43-d05a0c47a591");
        const jar8 = pc.app.getEntityFromIndex("bd863d88-edf9-44ac-8b22-5c8942e23bb4");
        const jar9 = pc.app.getEntityFromIndex("6c2eb931-0566-4bd1-a04e-32e15aa7b643");
        const jar10 = pc.app.getEntityFromIndex("d34b9bef-59ce-4bbf-aee0-f3e4a99dfcde");
        const jar11 = pc.app.getEntityFromIndex("33b6790d-a06c-49f6-b0c0-e82730cf45e4");
        const jar12 = pc.app.getEntityFromIndex("fe43f2d2-ae1b-4376-8787-9dd63255dfe0");
        const jar13 = pc.app.getEntityFromIndex("df715d58-69a7-495d-87bf-ce6d93a6e381");
        const jar14 = pc.app.getEntityFromIndex("aba1711d-4075-4feb-bd37-ec966f13da6a");
        const jar15 = pc.app.getEntityFromIndex("3f089056-391f-4cff-aeb4-de5cb32fd333");
        const jar16 = pc.app.getEntityFromIndex("afcf19a4-d097-4492-810c-6ce9081e0184");
        const jar17 = pc.app.getEntityFromIndex("4e4043b6-1d8e-40be-812d-cf2a64892c91");
        const jar18 = pc.app.getEntityFromIndex("20c516b4-dc21-4abe-8e92-3493fa45b183");
        const jar19 = pc.app.getEntityFromIndex("99d8886b-36ab-49d7-9add-401a83214fa6");
        const jar20 = pc.app.getEntityFromIndex("79fd3261-1d29-460f-ab8d-b5f74031eb70");
        const bird1 = pc.app.getEntityFromIndex("db6dcfdd-1161-433c-aa73-1b24207054df");
        const bird2 = pc.app.getEntityFromIndex("3a89b894-b1af-4c25-9775-74f493ff7636");
        const bird3 = pc.app.getEntityFromIndex("ce5f4646-f177-419a-9696-5cb6d8439071");
        const light1 = pc.app.getEntityFromIndex("6b0cfd2c-a247-4c3d-a42b-ee8e33a56277");
        const lightX1_1 = pc.app.getEntityFromIndex("83562bc4-be48-490f-819e-e2005e91d4cc");
        const lightX1_2 = pc.app.getEntityFromIndex("8f2a2454-b51b-4638-abca-6bc0f8dee7b1");
        const lightX1_3 = pc.app.getEntityFromIndex("de8d8064-e636-4a3d-b3dc-e27379ac4836");
        const lightX1_4 = pc.app.getEntityFromIndex("76a1a182-5656-41e6-a1e4-8820c3e61ea5");
        const lightX1_5 = pc.app.getEntityFromIndex("10b73fa1-5298-4951-a123-81336ccb4942");
        const lightX2_1 = pc.app.getEntityFromIndex("41617483-56c8-4f71-b86b-75ecf5c27086");
        const lightX2_2 = pc.app.getEntityFromIndex("5f0f7190-a82b-4b9b-90e3-561310f8dcfa");
        const lightX2_3 = pc.app.getEntityFromIndex("19dfbfb5-41e9-4b6b-aa89-398f482d2bd4");
        const lightX2_4 = pc.app.getEntityFromIndex("ce3294f5-1cf3-49f7-b46a-8d7aa9ed7e74");
        const lightX2_5 = pc.app.getEntityFromIndex("943b0b15-c603-4a79-acce-4fcf9ecb600e");
        const mapHolder = pc.app.getEntityFromIndex("a2020fc4-b2fa-477f-8de4-7ac49d54e059");
        mapHolder.sound.slots = {
            1: {
                name: "Ambient",
                loop: true,
                autoPlay: true,
                overlap: false,
                asset: 40416580,
                startTime: 0,
                duration: null,
                volume: 0.5,
                pitch: 1,
            },
        };
        if (localStorage.getItem('FPS_TEMPLE') === "true") {
            grassParent.enabled = false;
            flagParent.enabled = false;
            rainDrops1.enabled = false;
            rainDrops2.enabled = false;
            rainDrops3.enabled = false;
            rainPlanes1.enabled = false;
            rainPlanes2.enabled = false;
            rocks1.enabled = false;
            rocks2.enabled = false;
            rocks3.enabled = false;
            rocks4.enabled = false;
            rocks5.enabled = false;
            rocks6.enabled = false;
            rocks7.enabled = false;
            rocks8.enabled = false;
            rocks9.enabled = false;
            rocks10.enabled = false;
            rocks11.enabled = false;
            rocks12.enabled = false;
            rocks13.enabled = false;
            rocks14.enabled = false;
            tree1.enabled = false;
            tree2.enabled = false;
            tree3.enabled = false;
            tree4.enabled = false;
            tree5.enabled = false;
            tree6.enabled = false;
            tree7.enabled = false;
            tree8.enabled = false;
            candle1.enabled = false;
            candle2.enabled = false;
            candle3.enabled = false;
            candle4.enabled = false;
            candle5.enabled = false;
            jar1.enabled = false;
            jar2.enabled = false;
            jar3.enabled = false;
            jar4.enabled = false;
            jar5.enabled = false;
            jar6.enabled = false;
            jar7.enabled = false;
            jar8.enabled = false;
            jar9.enabled = false;
            jar10.enabled = false;
            jar11.enabled = false;
            jar12.enabled = false;
            jar13.enabled = false;
            jar14.enabled = false;
            jar15.enabled = false;
            jar16.enabled = false;
            jar17.enabled = false;
            jar18.enabled = false;
            jar19.enabled = false;
            jar20.enabled = false;
            bird1.enabled = false;
            bird2.enabled = false;
            bird3.enabled = false;
            light1.enabled = false;
            lightX1_1.enabled = false;
            lightX1_2.enabled = false;
            lightX1_3.enabled = false;
            lightX1_4.enabled = false;
            lightX1_5.enabled = false;
            lightX2_1.enabled = false;
            lightX2_2.enabled = false;
            lightX2_3.enabled = false;
            lightX2_4.enabled = false;
            lightX2_5.enabled = false;
            mapHolder.sound.slots["Ambient"].stop();
        }
        if (localStorage.getItem('FPS_TEMPLE') === "false") {}
    } else if (pc.currentMap == "Sierra") {
        // |----------------------------------------------------------------------------------------------------|
        // |-                                              SIERRA                                              -|
        // |----------------------------------------------------------------------------------------------------|
        const jar1 = pc.app.getEntityFromIndex("56424897-92c9-4f2f-bdb8-2875fd831966");
        const jar2 = pc.app.getEntityFromIndex("f0322249-8be2-4f6e-ac8e-8a9f234bddd2");
        const jar3 = pc.app.getEntityFromIndex("25b62a9a-290e-43a4-9404-ef536b8a4659");
        const jar4 = pc.app.getEntityFromIndex("fb8eb503-1811-4668-9ac2-3e45c380d0bb");
        const jar5 = pc.app.getEntityFromIndex("45e0db15-1f40-492b-8222-94866a017420");
        const jar6 = pc.app.getEntityFromIndex("2c09abfd-bf9e-423c-be5a-e5963a86c373");
        const jar7 = pc.app.getEntityFromIndex("29960be9-a3c2-4a1a-bafe-401646fc3cd2");
        const jar8 = pc.app.getEntityFromIndex("3c625a80-c05e-472b-8328-d4f164ad1d76");
        const jar9 = pc.app.getEntityFromIndex("eaee032a-46b5-4275-ae0f-c57e6e9c3b87");
        const jar10 = pc.app.getEntityFromIndex("d9588562-fd35-40f1-a0c5-0d8b8d987278");
        const jar11 = pc.app.getEntityFromIndex("b31c6368-67b6-4fc2-a777-27cb6b33b511");
        const jar12 = pc.app.getEntityFromIndex("9b220a7d-8232-4ccf-904e-ff6bfe79ab99");
        const jar13 = pc.app.getEntityFromIndex("694b362f-1a3c-41b1-82fe-cc8a0745effd");
        const jar14 = pc.app.getEntityFromIndex("0330a2a8-60bd-4a5e-bccc-66281949aa4e");
        const jar15 = pc.app.getEntityFromIndex("70d621d3-52b1-4f86-9b08-89c47286c5c7");
        const jar16 = pc.app.getEntityFromIndex("c300bf02-31e0-47dc-9ac0-251267ec4c80");
        const jar17 = pc.app.getEntityFromIndex("eb88d6d9-9c19-4e6c-86ff-d113a733989c");
        const jar18 = pc.app.getEntityFromIndex("1f2007e4-7e1e-468f-b098-e962e7e2b16b");
        const jar19 = pc.app.getEntityFromIndex("45239483-4de0-4025-af0b-90e489cd6d71");
        const jar20 = pc.app.getEntityFromIndex("ce25eb90-a42b-482a-b641-967182ad8c71");
        const jar21 = pc.app.getEntityFromIndex("ec8be7c9-174e-4fd2-a10e-73aaf76a08f3");
        const jar22 = pc.app.getEntityFromIndex("7ea543b4-5ca9-4101-a23f-06f5209af73d");
        const bird1 = pc.app.getEntityFromIndex("7adce04a-61e2-4c0e-85a0-af4b5aff1975");
        const bird2 = pc.app.getEntityFromIndex("661fcea5-3a07-415b-afa3-7aa0537760d7");
        const bird3 = pc.app.getEntityFromIndex("8094436f-a8be-448b-bd8e-c80f6e2a8049");
        const bird4 = pc.app.getEntityFromIndex("0f0d1220-d5dc-457a-a4e4-0d219a367655");
        const bird5 = pc.app.getEntityFromIndex("a11c279a-6a36-4e11-873d-b232b27e34b4");
        const bird6 = pc.app.getEntityFromIndex("9f95e22e-7054-4330-913a-d3c133314404");
        const bird7 = pc.app.getEntityFromIndex("122475df-cb27-405e-93cc-afec41d78e85");
        const light = pc.app.getEntityFromIndex("3cdefb40-ae0d-439e-920f-a3fdef926ba3");
        const tree1 = pc.app.getEntityFromIndex("5a77e6f5-896f-4443-aa00-f8ee2a3b6fa7");
        const tree2 = pc.app.getEntityFromIndex("5bcdb738-f879-4908-8b0c-9dcd119a56cf");
        const tree3 = pc.app.getEntityFromIndex("36ed60d7-3194-47f8-96b1-04b56b3caebb");
        const tree4 = pc.app.getEntityFromIndex("31a76d6a-d103-4dd6-a602-33bbce1e64b3");
        const tree5 = pc.app.getEntityFromIndex("884a755a-6e68-46b9-82ce-c986ea8eb84a");
        const tree6 = pc.app.getEntityFromIndex("9bdfb760-59b3-488c-bf52-da0b3b57c810");
        const tree7 = pc.app.getEntityFromIndex("583bc00c-fd7d-42be-b678-e34d5abb4d54");
        const tree8 = pc.app.getEntityFromIndex("52d01dce-d79b-4d03-8343-d18fcf345d80");
        const tree9 = pc.app.getEntityFromIndex("293f259d-f747-45d5-be18-9b02091556a3");
        const tree10 = pc.app.getEntityFromIndex("ebecc294-af9d-4a6a-a23a-73f0debba533");
        const tree11 = pc.app.getEntityFromIndex("1d2103db-94f3-499a-9dfb-07f95c3164aa");
        const tree12 = pc.app.getEntityFromIndex("7dea613c-d76b-4565-8631-e58a800b3ed3");
        const tree13 = pc.app.getEntityFromIndex("e9188f94-1b07-4baa-b5bb-3b6daea6c2ce");
        const tree14 = pc.app.getEntityFromIndex("91d12d9f-11b4-4604-a912-33fd1df216df");
        const tree15 = pc.app.getEntityFromIndex("7f46e8f8-f0e1-4111-b45b-bb13dd7049a2");
        const tree16 = pc.app.getEntityFromIndex("4a4d46e3-8600-4ebc-a439-b0b1c8dbf995");
        const tree17 = pc.app.getEntityFromIndex("0b537f77-8d9a-4e31-b5f2-1732c89b57b4");
        const grass1 = pc.app.getEntityFromIndex("e117986f-1e1f-4a99-8875-369a88b75945");
        const grass2 = pc.app.getEntityFromIndex("5265ac3d-7333-4357-ae26-f584ee654d7a");
        const grass3 = pc.app.getEntityFromIndex("9c2ec419-d725-4e9d-bf13-7d5183d317de");
        const grass4 = pc.app.getEntityFromIndex("90e847e3-50a6-487d-90d7-c892e5497431");
        const grass5 = pc.app.getEntityFromIndex("2b88e644-56f1-4c66-9e6c-ba0ce5ba2f62");
        const grass6 = pc.app.getEntityFromIndex("c965baa9-d274-4178-a799-41e07385198d");
        const grass7 = pc.app.getEntityFromIndex("f01ea112-79b6-4b89-a9db-ce528ac85b50");
        const grass8 = pc.app.getEntityFromIndex("49bd3625-ceb4-44ac-9d3c-00bd018bf43b");
        const grass9 = pc.app.getEntityFromIndex("1aafdd00-2dd6-4479-8366-1379908263bf");
        const grass10 = pc.app.getEntityFromIndex("80b7dfbb-72e1-4df1-b8b4-524320eae4d2");
        const grass11 = pc.app.getEntityFromIndex("a2213ece-463f-4858-869e-ce40567bb2c7");
        const grass12 = pc.app.getEntityFromIndex("d620891a-203a-462b-b05c-209dc128bc7f");
        const grass13 = pc.app.getEntityFromIndex("d9207dd3-69cf-4576-953d-0e9851a6e087");
        const grass14 = pc.app.getEntityFromIndex("1d16d98c-ba1d-491a-89b9-7935c0caad01");
        const flagEntity = pc.app.getEntityFromIndex("64f90b3d-dfec-4278-aad0-97f4d76a195e");
        const mapHolder = pc.app.getEntityFromIndex("0674fec7-e022-4eca-b570-7993f769cbdc");
        mapHolder.sound.slots = {
            1: {
                name: "Ambient",
                loop: true,
                autoPlay: true,
                overlap: false,
                asset: 30975135,
                startTime: 0,
                duration: null,
                volume: 0.85,
                pitch: 1,
            },
        };
        if (localStorage.getItem('FPS_SIERRA') === "true") {
            flagEntity.enabled = false;
            light.enabled = false;
            tree1.enabled = false;
            tree2.enabled = false;
            tree3.enabled = false;
            tree4.enabled = false;
            tree5.enabled = false;
            tree6.enabled = false;
            tree7.enabled = false;
            tree8.enabled = false;
            tree9.enabled = false;
            tree10.enabled = false;
            tree11.enabled = false;
            tree12.enabled = false;
            tree13.enabled = false;
            tree14.enabled = false;
            tree15.enabled = false;
            tree16.enabled = false;
            tree17.enabled = false;
            grass1.enabled = false;
            grass2.enabled = false;
            grass3.enabled = false;
            grass4.enabled = false;
            grass5.enabled = false;
            grass6.enabled = false;
            grass7.enabled = false;
            grass8.enabled = false;
            grass9.enabled = false;
            grass10.enabled = false;
            grass11.enabled = false;
            grass12.enabled = false;
            grass13.enabled = false;
            grass14.enabled = false;
            bird1.enabled = false;
            bird2.enabled = false;
            bird3.enabled = false;
            bird4.enabled = false;
            bird5.enabled = false;
            bird6.enabled = false;
            bird7.enabled = false;
            jar1.enabled = false;
            jar2.enabled = false;
            jar3.enabled = false;
            jar4.enabled = false;
            jar5.enabled = false;
            jar6.enabled = false;
            jar7.enabled = false;
            jar8.enabled = false;
            jar9.enabled = false;
            jar10.enabled = false;
            jar11.enabled = false;
            jar12.enabled = false;
            jar13.enabled = false;
            jar14.enabled = false;
            jar15.enabled = false;
            jar16.enabled = false;
            jar17.enabled = false;
            jar18.enabled = false;
            jar19.enabled = false;
            jar20.enabled = false;
            jar21.enabled = false;
            jar22.enabled = false;
            mapHolder.sound.slots["Ambient"].stop();
        } else if (localStorage.getItem('FPS_SIERRA') === "false") {}
    } else if (pc.currentMap == "Xibalba") {
        // |----------------------------------------------------------------------------------------------------|
        // |-                                           XIBALBA                                                -|
        // |----------------------------------------------------------------------------------------------------|
        const jar1 = pc.app.getEntityFromIndex("be247298-246f-4976-92f5-be8956508279");
        const jar3 = pc.app.getEntityFromIndex("e866abd7-cdf8-4f69-bb2f-588343835feb");
        const jar4 = pc.app.getEntityFromIndex("71e8428e-330d-495e-91cd-af5a7a34d786");
        const jar5 = pc.app.getEntityFromIndex("c868ad52-1f22-4741-966c-39bb378fbf69");
        const jar6 = pc.app.getEntityFromIndex("7fb47d8f-5838-4c5d-b032-7d5c5750d00a");
        const jar7 = pc.app.getEntityFromIndex("462dc4e6-d25a-45c3-9bc6-34ae36f1d64d");
        const jar8 = pc.app.getEntityFromIndex("8936abf6-c473-4612-8ca2-4662de85e828");
        const jar9 = pc.app.getEntityFromIndex("a85a88bc-30a6-49e5-b4f9-61ed172a259a");
        const jar10 = pc.app.getEntityFromIndex("22e70db5-172f-4815-8c18-53ad90be654d");
        const jar11 = pc.app.getEntityFromIndex("b3d8a598-e9d0-4cd7-b0d0-35edcd7ee79e");
        const jar12 = pc.app.getEntityFromIndex("5838e655-b9da-4d9b-bbcb-70e168c1d183");
        const light = pc.app.getEntityFromIndex("1b772018-ede7-4d75-9010-0cbc9156b225");
        const rain1 = pc.app.getEntityFromIndex("a3f7d44f-df28-43b1-83cc-46afe7081aba");
        const rain2 = pc.app.getEntityFromIndex("3c07fe20-097c-4e73-b950-27b7d0263d68");
        const rain3 = pc.app.getEntityFromIndex("71f46e21-abb3-4b6f-acea-83e23695deb0");
        const tree1 = pc.app.getEntityFromIndex("6c35e58e-6738-455e-ae48-6b526d8d4fcd");
        const tree2 = pc.app.getEntityFromIndex("f9e10ae2-afdc-4d36-a99f-dfc6b873e90c");
        const tree3 = pc.app.getEntityFromIndex("30647254-6784-47c5-85e6-5c524957d0c0");
        const tree4 = pc.app.getEntityFromIndex("2a026b3d-1e9f-460e-9004-e3250d5d7ba3");
        const grass1 = pc.app.getEntityFromIndex("f9679147-5d09-4ae2-b5ca-527a3315d25e");
        const grass2 = pc.app.getEntityFromIndex("90570341-e9b9-4895-b5e2-60476ff182e6");
        const grass3 = pc.app.getEntityFromIndex("ced8b191-f4bd-447b-a2a3-8c0171186899");
        const grass4 = pc.app.getEntityFromIndex("65cc2db7-5690-4594-a724-7cbfee86bd62");
        const grass5 = pc.app.getEntityFromIndex("18821100-595f-434c-bfbf-fae9c8805a30");
        const grass6 = pc.app.getEntityFromIndex("05cc2948-e8ee-47d0-9fa8-6557bc0c3bdc");
        const grass7 = pc.app.getEntityFromIndex("9d4f299f-4b5e-4a1f-835f-e681521c9479");
        const grass8 = pc.app.getEntityFromIndex("ff1d946c-cdec-46d6-b80d-675e6258d42a");
        const grass9 = pc.app.getEntityFromIndex("dfdc4185-fc27-47ba-a8df-e6a0364fa0c7");
        const grass10 = pc.app.getEntityFromIndex("6f91ad7c-1dc4-45d8-ac41-d55733b7e9e4");
        const grass11 = pc.app.getEntityFromIndex("4868924f-ecc1-4429-aefa-d4924aff0845");
        const grass12 = pc.app.getEntityFromIndex("09f051ca-f474-41ec-9d87-458eb582f787");
        const grass13 = pc.app.getEntityFromIndex("b628875d-078a-4aef-b73e-b647fb0f4c68");
        const grass14 = pc.app.getEntityFromIndex("0f1a530c-0d57-4f20-b755-c6dc2fffa4bf");
        const grass15 = pc.app.getEntityFromIndex("f78e22af-9abd-4d4a-aea3-534dab8743e8");
        const grass16 = pc.app.getEntityFromIndex("9c2ff3ac-1762-4e33-a245-19f3edc2f537");
        const grass17 = pc.app.getEntityFromIndex("e136761e-fc5f-4bb2-a80b-f530c63abaea");
        const grass18 = pc.app.getEntityFromIndex("136df5de-7d54-4564-990a-ce9e68e25d4d");
        const grass19 = pc.app.getEntityFromIndex("81bf872b-3dec-43fa-934b-9c2738ba5461");
        const mapHolder = pc.app.getEntityFromIndex("97000aad-f0e6-4c25-957a-0c86e0380745");
        mapHolder.sound.slots = {
            1: {
                name: "Ambient",
                loop: true,
                autoPlay: true,
                overlap: false,
                asset: 30975135,
                startTime: 0,
                duration: null,
                volume: 0.65,
                pitch: 1,
            },
            2: {
                name: "Rain",
                loop: true,
                autoPlay: true,
                overlap: false,
                asset: 31454229,
                startTime: 0,
                duration: null,
                volume: 1,
                pitch: 1,
            },
        };
        if (localStorage.getItem('FPS_XIBALBA') === "true") {
            jar1.enabled = false;
            jar3.enabled = false;
            jar4.enabled = false;
            jar5.enabled = false;
            jar6.enabled = false;
            jar7.enabled = false;
            jar8.enabled = false;
            jar9.enabled = false;
            jar10.enabled = false;
            jar11.enabled = false;
            jar12.enabled = false;
            light.enabled = false;
            rain1.enabled = false;
            rain2.enabled = false;
            rain3.enabled = false;
            tree1.enabled = false;
            tree2.enabled = false;
            tree3.enabled = false;
            tree4.enabled = false;
            grass1.enabled = false;
            grass2.enabled = false;
            grass3.enabled = false;
            grass4.enabled = false;
            grass5.enabled = false;
            grass6.enabled = false;
            grass7.enabled = false;
            grass8.enabled = false;
            grass9.enabled = false;
            grass10.enabled = false;
            grass11.enabled = false;
            grass12.enabled = false;
            grass13.enabled = false;
            grass14.enabled = false;
            grass15.enabled = false;
            grass16.enabled = false;
            grass17.enabled = false;
            grass18.enabled = false;
            grass19.enabled = false;
            mapHolder.sound.slots["Rain"].stop();
            mapHolder.sound.slots["Ambient"].stop();
        } else if (localStorage.getItem('FPS_XIBALBA') === "false") {}
    } else if (pc.currentMap == "Mistle") {
        // |----------------------------------------------------------------------------------------------------|
        // |-                                              MISTLE                                              -|
        // |----------------------------------------------------------------------------------------------------|
        const jar1 = pc.app.getEntityFromIndex("137b1c9d-b283-47b7-8c50-62e57f6bd67d");
        const jar2 = pc.app.getEntityFromIndex("5bab564e-421f-445a-ad41-a22cda41375d");
        const jar3 = pc.app.getEntityFromIndex("5a137818-27e6-4385-a3ed-8b3bcc5ea168");
        const jar4 = pc.app.getEntityFromIndex("53d33428-fe13-456b-909c-e973229418d0");
        const jar5 = pc.app.getEntityFromIndex("30588d4d-46cd-487d-b100-e194ca5ab0c1");
        const jar6 = pc.app.getEntityFromIndex("d49109b7-0131-42dd-bc91-027284378469");
        const jar7 = pc.app.getEntityFromIndex("74dbab05-091f-43bb-a301-f1b00f956061");
        const jar8 = pc.app.getEntityFromIndex("8b2a9d70-de85-41ba-b2ec-dd4cf2a15cfd");
        const jar9 = pc.app.getEntityFromIndex("979afb0c-2b58-49c5-8927-07bed64db70e");
        const jar10 = pc.app.getEntityFromIndex("30f5fba1-8a1e-40d3-9306-5781f51e4536");
        const jar11 = pc.app.getEntityFromIndex("5f0822f8-fd87-4c81-bda7-d845b616c46c");
        const jar12 = pc.app.getEntityFromIndex("1b32a359-87f6-404d-9cf5-f4e64f8856c6");
        const jar13 = pc.app.getEntityFromIndex("08299385-96e9-4606-a8f4-0e93ab8a279a");
        const jar14 = pc.app.getEntityFromIndex("d3b40133-0097-4119-8dfe-e91c7039fed2");
        const jar15 = pc.app.getEntityFromIndex("75b90534-5010-48f9-a5c0-792a620f8f6d");
        const light = pc.app.getEntityFromIndex("587f9c05-6d90-4294-a7d4-be719635296b");
        const tree1 = pc.app.getEntityFromIndex("8ac366d8-ca5c-402d-a669-378baf800cdb");
        const tree2 = pc.app.getEntityFromIndex("e8f90ba5-f6d4-446f-8b0a-f4ff0d915b1e");
        const tree3 = pc.app.getEntityFromIndex("86797380-6f58-402b-bb85-92a1c59ab9b6");
        const tree4 = pc.app.getEntityFromIndex("4fb3e800-999d-4715-8ec5-e017dca1d51c");
        const tree5 = pc.app.getEntityFromIndex("808982e6-257b-48bb-8bef-88855372b99b");
        const tree6 = pc.app.getEntityFromIndex("06f87311-d84e-4307-80e3-6470d5218f2d");
        const tree7 = pc.app.getEntityFromIndex("74ef910e-dc55-4c88-b348-6aa4f10027a2");
        const tree8 = pc.app.getEntityFromIndex("e32387f8-9362-4aaa-a485-4029e4b420ec");
        const tree9 = pc.app.getEntityFromIndex("ded08ed6-67c8-4eb5-92c0-6e64780138d7");
        const bird1 = pc.app.getEntityFromIndex("5f50fd12-48dc-4b7c-8650-2adf21fb7397");
        const bird2 = pc.app.getEntityFromIndex("654494e6-ca7b-4b21-8597-785e05825483");
        const bird3 = pc.app.getEntityFromIndex("fddb87cf-6830-44c7-b941-2b209abc4d85");
        const bird4 = pc.app.getEntityFromIndex("bc4cd00e-c24b-4df5-a290-91a8969535d1");
        const grass1 = pc.app.getEntityFromIndex("d75db907-c5e0-4b83-be3b-3fe2a9914ca0");
        const grass2 = pc.app.getEntityFromIndex("25364cce-baa5-4f70-abca-6246e310d249");
        const grass3 = pc.app.getEntityFromIndex("d44484d7-0525-4688-9ace-a8c990ff9d03");
        const grass4 = pc.app.getEntityFromIndex("cf922cfc-d025-4fee-a661-cc7c8e3e9800");
        const grass5 = pc.app.getEntityFromIndex("f5d076f0-7b89-4a6c-a831-bf6e8f0181a7");
        const grass6 = pc.app.getEntityFromIndex("df3424ef-72c1-44f1-bb9b-749569aac24c");
        const grass7 = pc.app.getEntityFromIndex("ce0b621b-f54c-4fd2-893a-367a346ed251");
        const grass8 = pc.app.getEntityFromIndex("2952094b-b611-4f0b-9cfe-7a21209fbd79");
        const grass9 = pc.app.getEntityFromIndex("ae4f07ef-8151-4e9a-bce3-787bdb8dcf26");
        const grass10 = pc.app.getEntityFromIndex("ebf29f0a-aa32-4319-a3a6-c7ce64a3aa07");
        const grass11 = pc.app.getEntityFromIndex("302bfa17-9c4d-453c-ac67-40ae47fbfb8e");
        const grass12 = pc.app.getEntityFromIndex("7aa1e1a1-9dd1-4eb3-85b8-ea04f258de26");
        const grass13 = pc.app.getEntityFromIndex("eba60669-a49e-418f-8dcb-57c3be69a457");
        const grass14 = pc.app.getEntityFromIndex("941e0d3f-0e05-4ca9-b0fc-28aab269d517");
        const grass15 = pc.app.getEntityFromIndex("053fd213-d78d-4c8c-b9f4-b5007d5cec8d");
        const grass16 = pc.app.getEntityFromIndex("4f67e763-aabb-447d-bc8a-50d9c12d60b1");
        const grass17 = pc.app.getEntityFromIndex("ef00b41c-3bad-4293-9b45-e82c1c89ec7f");
        const grass18 = pc.app.getEntityFromIndex("5bfe76b7-8755-4d66-a5e8-5d8ded391636");
        const grass19 = pc.app.getEntityFromIndex("d29f36eb-db7b-45da-a75a-8b286964ad8d");
        const grass20 = pc.app.getEntityFromIndex("9a346c58-3a54-4425-9472-864c6e245bb0");
        const grass21 = pc.app.getEntityFromIndex("efec242c-3b17-4d9a-9493-51017c2f9ceb");
        const grass22 = pc.app.getEntityFromIndex("c39af277-96d6-497a-92e1-66d61e112237");
        const grass23 = pc.app.getEntityFromIndex("10802c9f-ee7e-496e-9bb5-906f9ad0b61a");
        const grass24 = pc.app.getEntityFromIndex("c9ffa66a-b3cf-46de-8af5-39cb59cb01b1");
        const grass25 = pc.app.getEntityFromIndex("d803d721-d717-4bcb-ad45-5ed72c784343");
        const grass26 = pc.app.getEntityFromIndex("f57fd45c-d0a3-47a8-a686-8421330257ef");
        const grass27 = pc.app.getEntityFromIndex("46612ad0-a4ce-42f1-85e7-5e03475c39a5");
        const grass28 = pc.app.getEntityFromIndex("9d648004-5491-41dd-955a-7d4f5b177640");
        const grass29 = pc.app.getEntityFromIndex("c605180c-21bd-41a4-ad34-642d1a5c87eb");
        const grass30 = pc.app.getEntityFromIndex("6b1a9aef-d79d-4699-a057-9db0d39d9d17");
        const grass31 = pc.app.getEntityFromIndex("9ab95048-cc01-4d42-951f-e86bf814c777");
        const grass32 = pc.app.getEntityFromIndex("3b8009e1-2936-40b6-823a-8a356669e1d8");
        const grass33 = pc.app.getEntityFromIndex("666e2641-8b19-4562-9f05-3cbcec70b074");
        const animatedBirds = pc.app.getEntityFromIndex("fad27b22-2549-4965-b243-266dc8e56bfd");
        const mapHolder = pc.app.getEntityFromIndex("47bccbe8-bbd6-43b7-821d-8d001cf3dde8");
        mapHolder.sound.slots = {
            1: {
                name: "Ambient",
                loop: true,
                autoPlay: true,
                overlap: false,
                asset: 34076897,
                startTime: 0,
                duration: null,
                volume: 0.1,
                pitch: 1,
            },
            2: {
                name: "Loop",
                loop: true,
                autoPlay: true,
                overlap: false,
                asset: 30975135,
                startTime: 0,
                duration: null,
                volume: 0.8,
                pitch: 1,
            },
            3: {
                name: "Seagull",
                loop: false,
                autoPlay: false,
                overlap: false,
                asset: 34079104,
                startTime: 0,
                duration: 30,
                volume: 1,
                pitch: 1,
            },
        };
        if (localStorage.getItem('FPS_MISTLE') === "true") {
            animatedBirds.enabled = false;
            jar1.enabled = false;
            jar2.enabled = false;
            jar3.enabled = false;
            jar4.enabled = false;
            jar5.enabled = false;
            jar6.enabled = false;
            jar7.enabled = false;
            jar8.enabled = false;
            jar9.enabled = false;
            jar10.enabled = false;
            jar11.enabled = false;
            jar12.enabled = false;
            jar13.enabled = false;
            jar14.enabled = false;
            jar15.enabled = false;
            light.enabled = false;
            tree1.enabled = false;
            tree2.enabled = false;
            tree3.enabled = false;
            tree4.enabled = false;
            tree5.enabled = false;
            tree6.enabled = false;
            tree7.enabled = false;
            tree8.enabled = false;
            tree9.enabled = false;
            bird1.enabled = false;
            bird2.enabled = false;
            bird3.enabled = false;
            bird4.enabled = false;
            grass1.enabled = false;
            grass2.enabled = false;
            grass3.enabled = false;
            grass4.enabled = false;
            grass5.enabled = false;
            grass6.enabled = false;
            grass7.enabled = false;
            grass8.enabled = false;
            grass9.enabled = false;
            grass10.enabled = false;
            grass11.enabled = false;
            grass12.enabled = false;
            grass13.enabled = false;
            grass14.enabled = false;
            grass15.enabled = false;
            grass16.enabled = false;
            grass17.enabled = false;
            grass18.enabled = false;
            grass19.enabled = false;
            grass20.enabled = false;
            grass21.enabled = false;
            grass22.enabled = false;
            grass23.enabled = false;
            grass24.enabled = false;
            grass25.enabled = false;
            grass26.enabled = false;
            grass27.enabled = false;
            grass28.enabled = false;
            grass29.enabled = false;
            grass30.enabled = false;
            grass31.enabled = false;
            grass32.enabled = false;
            grass33.enabled = false;
            mapHolder.sound.slots["Loop"].stop();
            mapHolder.sound.slots["Ambient"].stop();
            mapHolder.sound.slots["Seagull"].stop();
        } else if (localStorage.getItem('FPS_MISTLE') === "false") {}
    } else if (pc.currentMap == "Tundra") {
        // |----------------------------------------------------------------------------------------------------|
        // |-                                              TUNDRA                                              -|
        // |----------------------------------------------------------------------------------------------------|

        const birdAnimated = pc.app.getEntityFromIndex("e7e71ff4-a0e1-4263-942c-3cb66999735d");
        const birdSprite = pc.app.getEntityFromIndex("199283c8-6d15-4272-8c61-b8d63f91ea3a");
        const bird1 = pc.app.getEntityFromIndex("f918c422-e790-46c2-8cc7-97cf5280afae");
        const bird2 = pc.app.getEntityFromIndex("7e9a2611-09ad-4381-89b2-ef2e80a5431a");
        const bird3 = pc.app.getEntityFromIndex("f20e3a85-0f0b-4457-90b2-01417aaab3cf");
        const bird4 = pc.app.getEntityFromIndex("c4a57ccf-ae2c-4528-96df-ee12bcf16804");
        const bird5 = pc.app.getEntityFromIndex("db2ba40f-b8cc-4ecb-aad4-41bf2b491163");


        const berg1 = pc.app.getEntityFromIndex("c834062c-58a7-4392-9d32-9c0876fb49ba");
        const berg2 = pc.app.getEntityFromIndex("a46d1a61-5171-42f3-b680-18eccd454a38");
        const berg3 = pc.app.getEntityFromIndex("4612364f-22d3-4464-8554-16db9fa7019f");
        const berg4 = pc.app.getEntityFromIndex("f700115b-54ef-4e0c-b1fc-ed5883252354");
        const berg5 = pc.app.getEntityFromIndex("6fd4b1b2-98c9-4dff-bd88-f53b369ff562");
        const jar1 = pc.app.getEntityFromIndex("f1004a32-2280-4205-a1b5-ab31f4d8d4cb");
        const jar2 = pc.app.getEntityFromIndex("55f27804-7263-4121-8cc1-a1aae64aad42");
        const jar3 = pc.app.getEntityFromIndex("57536504-0f20-4023-82fa-7d4637187d78");
        const jar4 = pc.app.getEntityFromIndex("b4faeac7-db10-417a-bbf5-63e83bd58edd");
        const jar5 = pc.app.getEntityFromIndex("6ef7a927-9666-4373-aa39-f820c8f0f97f");
        const jar6 = pc.app.getEntityFromIndex("50554b6d-d788-4d41-8fc6-da4a3bd273d3");
        const jar7 = pc.app.getEntityFromIndex("707af4f8-3dac-455b-b8a5-bf87b6eb6216");
        const jar8 = pc.app.getEntityFromIndex("f2775c52-6b6b-40f1-938a-807bc270537c");
        const jar9 = pc.app.getEntityFromIndex("ef76a708-20df-4033-84b4-95786d7e4aec");
        const jar10 = pc.app.getEntityFromIndex("d746ec19-52c5-43af-a226-ef089387bab7");
        const jar11 = pc.app.getEntityFromIndex("24b75347-bafc-4d34-b9de-4157049eced9");
        const ice1 = pc.app.getEntityFromIndex("f9bcaba8-7998-48f5-b363-25b93c4bd6b1");
        const ice2 = pc.app.getEntityFromIndex("febe083c-0d5b-468c-9f3a-32f52f22ec19");
        const ice3 = pc.app.getEntityFromIndex("f7973aa6-893d-4c63-960b-378acea842ef");
        const ice4 = pc.app.getEntityFromIndex("6e3329db-c58f-4762-9a13-e3b017d7c05b");
        const ice5 = pc.app.getEntityFromIndex("09619659-107a-48d7-82ad-d9ee07356ffe");
        const ice6 = pc.app.getEntityFromIndex("0ab98832-e948-46c3-b916-a36cc1c406c6");
        const ice7 = pc.app.getEntityFromIndex("90ae6761-2628-49ba-bfd8-60a6b8dd8968");
        const ice8 = pc.app.getEntityFromIndex("7198d065-59c0-46fb-b221-18685e3b9a76");
        const ice9 = pc.app.getEntityFromIndex("bc5e60c9-8c8d-4e17-bc5e-5b5d0b4aab89");
        const ice10 = pc.app.getEntityFromIndex("df60166e-7a31-4ae6-afac-a43ffea9112e");
        const ice11 = pc.app.getEntityFromIndex("2e1df557-6260-407f-a665-d11299c778ed");
        const scaffolding = pc.app.getEntityFromIndex("82dd6820-99fc-4047-b6ec-1b8cfd757618");

        const icebergManager = pc.app.getEntityFromIndex("728799e4-16da-419f-a4de-7f365421bb51");
        const light = pc.app.getEntityFromIndex("dc2e6c75-0bd5-4f98-a7e2-9cc4e68869f6");
        const flag1 = pc.app.getEntityFromIndex("6cae76bc-627b-42a0-9c86-1e219f9bce55");
        const flag2 = pc.app.getEntityFromIndex("17591819-b6bc-4920-afdb-6eb595176f14");
        const flagPole1 = pc.app.getEntityFromIndex("b2634814-b44f-47bb-a361-cc88da7c10a7");
        const flagPole2 = pc.app.getEntityFromIndex("1f1cb8a8-6d33-4722-9100-76b8909f1b6a");
        const flagAnimEntity1 = pc.app.getEntityFromIndex("2c252c78-e331-4fa4-8cd6-9e8337386845");
        const flagAnimEntity2 = pc.app.getEntityFromIndex("e080e939-9e08-4a9b-8f3d-506900092d27");
        const snow1 = pc.app.getEntityFromIndex("94566c68-86d4-4169-b305-0760b65eabb9");
        const snow2 = pc.app.getEntityFromIndex("38aa97bf-3a49-4eb9-912a-f761e977eff1");
        const grass1 = pc.app.getEntityFromIndex("7f4fd3b7-c341-4f35-a4d0-ad68a305454a");
        const grass2 = pc.app.getEntityFromIndex("6973bd1b-1bc5-4afd-8e44-8f718af0a31c");
        const grass3 = pc.app.getEntityFromIndex("b11858d0-9223-4cfe-bda2-a9a152a65fd7");
        const grass4 = pc.app.getEntityFromIndex("905e125f-89db-4dfd-a2f4-7fe7b146df8b");
        const grass5 = pc.app.getEntityFromIndex("9c468563-4452-407a-baf1-8fd8e6e23410");
        const grass6 = pc.app.getEntityFromIndex("dfd379a2-ad51-422c-87b0-55ec7a253f8e");
        const grass7 = pc.app.getEntityFromIndex("d0f3ad87-19ed-44fb-b0f7-19bcc9055491");
        const grass8 = pc.app.getEntityFromIndex("9435cc8a-d262-4fcc-b890-b34a7e2f7041");
        const grass9 = pc.app.getEntityFromIndex("b7ca7c50-30d6-428a-91fb-6caa9b62116e");
        const grass10 = pc.app.getEntityFromIndex("0244e15c-0e13-42e3-b723-226ce47b10d0");
        const grass11 = pc.app.getEntityFromIndex("a7e9baf1-3e7b-4e1b-981d-5c30e69feef3");
        const grass12 = pc.app.getEntityFromIndex("ffd496a8-bdf9-4c4d-803d-3ef33dd0af85");
        const grass13 = pc.app.getEntityFromIndex("34650c9d-65f4-494d-b666-900b39efd1f6");
        const grass14 = pc.app.getEntityFromIndex("0056dfba-0d19-44f3-88b7-d4da411582c3");
        const grass15 = pc.app.getEntityFromIndex("6c1288e6-6543-4e14-8bb1-eb9bc88e5f32");
        const grass16 = pc.app.getEntityFromIndex("a81c48f9-b022-44fe-94b7-0500e8b3f8c6");
        const grass17 = pc.app.getEntityFromIndex("79e584f4-f59d-488f-80db-5090635c9500");
        const grass18 = pc.app.getEntityFromIndex("1d962f05-9aee-4ba6-9d20-5c6b4ff371cf");
        const snowpile1 = pc.app.getEntityFromIndex("9b5042a5-b3f5-4131-ba4a-6253b68fd7ef");
        const snowpile2 = pc.app.getEntityFromIndex("bfc24e35-49d4-4b76-b154-ecd138a12271");
        const snowpile3 = pc.app.getEntityFromIndex("e816e118-19d2-4e0f-bf3d-261ea71ccbeb");
        const snowpile4 = pc.app.getEntityFromIndex("78797c7d-6c2e-43f1-aeca-6c6b89ee4bcd");


        const track1 = pc.app.getEntityFromIndex("8928629e-d053-46d8-95a2-839f1dffb3af");
        const track2 = pc.app.getEntityFromIndex("0c4abe4b-0a08-4197-bc82-648d041fa012");
        const track3 = pc.app.getEntityFromIndex("2b1687b0-1bea-44fe-aafb-d6d0a992f382");
        const track4 = pc.app.getEntityFromIndex("50368925-5ae4-4d52-bf58-7d55828204c3");
        const track5 = pc.app.getEntityFromIndex("2425ea22-5ed0-4e34-b442-05c92c454a32");
        const track6 = pc.app.getEntityFromIndex("689b2082-cdf2-4f5e-b35f-658a7c0722a8");
        const track7 = pc.app.getEntityFromIndex("e1f1ef3f-3cf3-4d98-a675-9c1f0a00978c");
        const track8 = pc.app.getEntityFromIndex("e980c4b3-494a-4d72-92b0-6e7cd25aabf0");
        const track9 = pc.app.getEntityFromIndex("d26687a9-33da-401e-8021-f7c2a42b8381");
        const track10 = pc.app.getEntityFromIndex("3d912b66-0698-40ce-aba1-a878763607ad");
        const track11 = pc.app.getEntityFromIndex("2cc73791-9633-414a-a026-23b7af21356d");
        const track12 = pc.app.getEntityFromIndex("729e351f-da0f-49f1-9652-64235c289b50");
        const track13 = pc.app.getEntityFromIndex("d5517be9-da1b-4358-936c-08b01641968f");
        const track14 = pc.app.getEntityFromIndex("adad837f-5ca9-4568-a91f-b4a22e70cf27");
        const track15 = pc.app.getEntityFromIndex("876276cc-0b78-4cf3-a090-f1e6812c8a71");
        const track16 = pc.app.getEntityFromIndex("80a36c18-accb-49e8-bd4a-9e922e70131e");
        const track17 = pc.app.getEntityFromIndex("abb4c07d-776a-4dc4-8d7a-aaeeb67b154f");
        const track18 = pc.app.getEntityFromIndex("6b93f187-9659-444c-a0d7-22fa865ed921");
        const track19 = pc.app.getEntityFromIndex("4790d875-befb-480d-a47b-d1020dff10b6");
        const track20 = pc.app.getEntityFromIndex("2ae8f6aa-e4af-4a3c-9b75-0d6f57690276");
        const track21 = pc.app.getEntityFromIndex("f409c5df-33f8-4dd3-8dc1-4f2bc6d7f286");
        const track22 = pc.app.getEntityFromIndex("e52517f9-607d-41d8-b55f-7f320246bc41");
        const track23 = pc.app.getEntityFromIndex("a2386847-af7b-4fb5-9b6c-4c10627f42e8");



        const tree1 = pc.app.getEntityFromIndex("8de068bc-911b-460b-90f1-b3258845d65a");
        const tree2 = pc.app.getEntityFromIndex("b1ecec06-93c5-4038-a282-3b5c7eefa295");
        const tree3 = pc.app.getEntityFromIndex("79b27405-65e3-4d9e-aca2-106dfbb0d71a");
        const tree4 = pc.app.getEntityFromIndex("8bd6ec4e-e019-4288-b3ac-f3b779eef615");
        const tree5 = pc.app.getEntityFromIndex("01eef8b7-4a79-4476-b1ae-861e1de28d2b");
        const tree6 = pc.app.getEntityFromIndex("996b2dfb-7e0b-4e73-b564-cd2b379b20d9");
        const tree7 = pc.app.getEntityFromIndex("95eadbbf-bca2-4864-87ce-a96e2435354f");
        const tree8 = pc.app.getEntityFromIndex("39a84351-4ca9-4e59-bf00-491de8067bfe");
        const tree9 = pc.app.getEntityFromIndex("c304b149-93f3-4b7e-b788-89c1581f76cc");
        if (localStorage.getItem('FPS_TUNDRA') === "true") {
            scaffolding.enabled = false;
            light.enabled = false;
            berg1.enabled = false;
            berg2.enabled = false;
            berg3.enabled = false;
            berg4.enabled = false;
            berg5.enabled = false;
            jar1.enabled = false;
            jar2.enabled = false;
            jar3.enabled = false;
            jar4.enabled = false;
            jar5.enabled = false;
            jar6.enabled = false;
            jar7.enabled = false;
            jar8.enabled = false;
            jar9.enabled = false;
            jar10.enabled = false;
            jar11.enabled = false;
            ice1.enabled = false;
            ice2.enabled = false;
            ice3.enabled = false;
            ice4.enabled = false;
            ice5.enabled = false;
            ice6.enabled = false;
            ice7.enabled = false;
            ice8.enabled = false;
            ice9.enabled = false;
            ice10.enabled = false;
            ice11.enabled = false;
            flag1.enabled = false;
            flag2.enabled = false;
            flagPole1.enabled = false;
            flagPole2.enabled = false;
            flagAnimEntity1.enabled = false;
            flagAnimEntity2.enabled = false;
            icebergManager.enabled = false;
            bird1.enabled = false;
            bird2.enabled = false;
            bird3.enabled = false;
            bird4.enabled = false;
            bird5.enabled = false;
            birdAnimated.enabled = false;
            birdSprite.enabled = false;
            snow1.enabled = false;
            snow2.enabled = false;
            snowpile1.enabled = false;
            snowpile2.enabled = false;
            snowpile3.enabled = false;
            snowpile4.enabled = false;
            grass1.enabled = false;
            grass2.enabled = false;
            grass3.enabled = false;
            grass4.enabled = false;
            grass5.enabled = false;
            grass6.enabled = false;
            grass7.enabled = false;
            grass8.enabled = false;
            grass9.enabled = false;
            grass10.enabled = false;
            grass11.enabled = false;
            grass12.enabled = false;
            grass13.enabled = false;
            grass14.enabled = false;
            grass15.enabled = false;
            grass16.enabled = false;
            grass17.enabled = false;
            grass18.enabled = false;
            tree1.enabled = false;
            tree2.enabled = false;
            tree3.enabled = false;
            tree4.enabled = false;
            tree5.enabled = false;
            tree6.enabled = false;
            tree7.enabled = false;
            tree8.enabled = false;
            tree9.enabled = false;
            track1.enabled = false;
            track2.enabled = false;
            track3.enabled = false;
            track4.enabled = false;
            track5.enabled = false;
            track6.enabled = false;
            track7.enabled = false;
            track8.enabled = false;
            track9.enabled = false;
            track10.enabled = false;
            track11.enabled = false;
            track12.enabled = false;
            track13.enabled = false;
            track14.enabled = false;
            track15.enabled = false;
            track16.enabled = false;
            track17.enabled = false;
            track18.enabled = false;
            track19.enabled = false;
            track20.enabled = false;
            track21.enabled = false;
            track22.enabled = false;
            track23.enabled = false;

        } else if (localStorage.getItem('FPS_TUNDRA') === "false") {}
    }

    //FOV
    pc.app.getEntityFromIndex("a92e3a56-d2cb-4d4a-8f97-047cd217b171").script.weapon.focusFov = localStorage.getItem('FOV_SNIPER');
    pc.app.getEntityFromIndex("00e8efa1-8e2a-4162-97a3-202b601757ca").script.weapon.focusFov = localStorage.getItem('FOV_SCAR');
    pc.app.getEntityFromIndex("952abbee-906a-45c8-b343-a33c07860148").script.weapon.focusFov = localStorage.getItem('FOV_SMG');
    pc.app.getEntityFromIndex("974afaa4-7d88-4fca-8d55-33a5527c2cf9").script.weapon.focusFov = localStorage.getItem('FOV_SHOTGUN');
    pc.app.getEntityFromIndex("6da0a919-8f04-41d5-b3c5-1d67d97a0c0c").script.weapon.focusFov = localStorage.getItem('FOV_PISTOL');
    pc.app.getEntityFromIndex("46f6693f-bbe6-48a7-b7fd-0c352d744e67").script.weapon.focusFov = localStorage.getItem('FOV_LMG');
    pc.app.getEntityFromIndex("b2510852-d387-4cfd-b568-81a01af8852f").script.weapon.focusFov = localStorage.getItem('FOV_M4');
    pc.app.getEntityFromIndex("3f8fab6a-6ec5-4a5a-94ca-27ee920a3c2d").script.weapon.focusFov = localStorage.getItem('FOV_KNIFE');

    // MAG-FIX
    if (localStorage.getItem('MAG_FIX') === "true") {
        pc.app.getEntityFromIndex("ebc4d65a-5096-454b-bb11-fcabf4880bd3").setLocalScale(1, 1, 1);
        pc.app.getEntityFromIndex("f0dfd598-7a2f-4c0b-864c-9c16866a50a2").setLocalScale(1, 1, 1);
        pc.app.getEntityFromIndex("4bf1812a-21c3-4ad6-a949-000a459214f5").setLocalScale(1, 1, 1);
        pc.app.getEntityFromIndex("2ed8fcf8-0ffc-4cf5-a030-43afea45c461").setLocalScale(1, 1, 1);
        pc.app.getEntityFromIndex("b3ae337d-6bb2-46f4-9000-b83e4d220f0c").setLocalScale(1, 1, 1);
        pc.app.getEntityFromIndex("d433aae6-4ac9-4cdf-aaf0-094eb4f190b0").setLocalScale(1, 1, 1);
        pc.app.getEntityFromIndex("0f6b1c59-0b64-4daf-b2e5-5965f8490e62").setLocalScale(1, 1, 1);
        pc.app.getEntityFromIndex("04ff3692-828f-462c-8936-4e67343fbc5d").setLocalScale(1, 1, 1);
        pc.app.getEntityFromIndex("8462528e-dab7-4b3f-b675-7441668cbbc3").setLocalScale(1, 1, 1);
        pc.app.getEntityFromIndex("2c0ce095-bfca-4d22-8a24-825cfadfc3d4").setLocalScale(1, 1, 1);
        pc.app.getEntityFromIndex("756554ea-0357-46c4-99a6-ac913a78e4b6").setLocalScale(1, 1, 1);
    }
    // HIDE-RELOAD
    if (localStorage.getItem('HIDE_RELOADS') === "true") {
        pc.app.getEntityFromIndex("a92e3a56-d2cb-4d4a-8f97-047cd217b171").script.weapon.hiddenReload = true
        pc.app.getEntityFromIndex("00e8efa1-8e2a-4162-97a3-202b601757ca").script.weapon.hiddenReload = true
        pc.app.getEntityFromIndex("952abbee-906a-45c8-b343-a33c07860148").script.weapon.hiddenReload = true
        pc.app.getEntityFromIndex("974afaa4-7d88-4fca-8d55-33a5527c2cf9").script.weapon.hiddenReload = true
        pc.app.getEntityFromIndex("b2510852-d387-4cfd-b568-81a01af8852f").script.weapon.hiddenReload = true
        pc.app.getEntityFromIndex("46f6693f-bbe6-48a7-b7fd-0c352d744e67").script.weapon.hiddenReload = true
        pc.app.getEntityFromIndex("6da0a919-8f04-41d5-b3c5-1d67d97a0c0c").script.weapon.hiddenReload = true
        pc.app.getEntityFromIndex("3f8fab6a-6ec5-4a5a-94ca-27ee920a3c2d").script.weapon.hiddenReload = true
        pc.app.getEntityFromIndex("bf215832-8da1-4910-9ee4-fe68fcda2224").script.weapon.hiddenReload = true
        pc.app.getEntityFromIndex("f81d9c88-5c32-42a8-85fd-25cf2ad9b35f").script.weapon.hiddenReload = true
        pc.app.getEntityFromIndex("7ce9e164-c3d2-4741-a842-d9c00a8ad7fa").script.weapon.hiddenReload = true
    }

    pc.app.getEntityFromIndex("00105180-4235-4666-b8d6-e29e0e763fdd").enabled = JSON.parse(localStorage.getItem('HIDE_FLASH'));
    pc.app.getEntityFromIndex("02348c57-ffbe-4784-911b-12d6795f67a1").enabled = JSON.parse(localStorage.getItem('TRACER_LINES'));
    pc.app.getEntityFromIndex("66f38a4a-5dcc-4343-aa6a-8fe701f4dd22").enabled = JSON.parse(localStorage.getItem('IMPACT_MARKS'));
    pc.app.getEntityFromIndex('015578c4-23eb-4ddb-91b6-f8e424a29e6a').enabled = JSON.parse(localStorage.getItem('BULLET_ENTITY'));
    if (localStorage.getItem("UI_SCOPE_BORDER") === "false") return;
    if (ingameOverlay) {
        const scopeBorder1 = pc.app.getEntityFromIndex("78c01491-2565-417a-987b-6c95af4cc8eb");
        const scopeBorder2 = pc.app.getEntityFromIndex("03a21dce-6227-4aff-a9a5-3e1e4492ec75");
        scopeBorder1.enabled = false;
        scopeBorder2.enabled = false;
    }
});

pc.app.on("Map:Loaded", () => {
    if (localStorage.getItem("ENGINE_BLOOM") === "false") return;
    //--------------- POST EFFECT DEFINITION------------------------//
    /* global pc */
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
                    scope.resolve("uBloomTexture").setValue(this.targets[0].colorBuffer);
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
                    scope.resolve("uBloomTexture").setValue(this.targets[1].colorBuffer);
                    pc.drawFullscreenQuad(
                        device,
                        this.targets[0],
                        this.vertexBuffer,
                        this.blurShader
                    );

                    // Pass 4: draw both rendertarget 1 and the original scene
                    // image back into the main backbuffer, using a shader that
                    // combines them to produce the final bloomed result.
                    scope.resolve("uBloomEffectIntensity").setValue(this.bloomIntensity);
                    scope.resolve("uBloomTexture").setValue(this.targets[0].colorBuffer);
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
    window.bloom = new pc.BloomEffect(pc.app.graphicsDevice);
    window.fpsCamera = pc.app.getEntityFromIndex(
        "68d4e7a4-7063-11ea-97ae-026349a27a7c"
    );

    if (pc.currentMap == "Sierra") {
        bloom.bloomIntensity = 2.0;
        bloom.blurAmount = 25;
        bloom.bloomThreshold = 0.7;
        console.log("Bloom Config: " + pc.currentMap);
    } else if (pc.currentMap == "Xibalba") {
        bloom.bloomIntensity = 1.5;
        bloom.blurAmount = 4;
        bloom.bloomThreshold = 0.3;
        console.log("Bloom Config: " + pc.currentMap);
    } else if (pc.currentMap == "Mistle") {
        bloom.bloomIntensity = 2;
        bloom.blurAmount = 4;
        bloom.bloomThreshold = 0.6;
        console.log("Bloom Config: " + pc.currentMap);
    } else if (pc.currentMap == "Tundra") {
        bloom.bloomIntensity = 2;
        bloom.blurAmount = 4;
        bloom.bloomThreshold = 0.8;
        console.log("Bloom Config: " + pc.currentMap);
    } else if (pc.currentMap == "Temple") {
        bloom.bloomIntensity = 1.3;
        bloom.blurAmount = 4;
        bloom.bloomThreshold = 0.2;
        console.log("Bloom Config: " + pc.currentMap);
    } else if (pc.currentMap == "Runes") {
        bloom.bloomIntensity = 2.5;
        bloom.blurAmount = 4;
        bloom.bloomThreshold = 0.35;
        fpsCamera.camera.postEffects.addEffect(bloom);
        console.log("Bloom Config: " + pc.currentMap);
    } else if (pc.currentMap == "SandstormBlitz") {
        bloom.bloomIntensity = 1.5;
        bloom.blurAmount = 4;
        bloom.bloomThreshold = 0.45;
        fpsCamera.camera.postEffects.addEffect(bloom);
        console.log("Bloom Config: " + pc.currentMap);
    }

    function loop() {
        window.requestAnimationFrame(() => {
            try {
                window.fpsCamera.camera.postEffects.removeEffect(window.bloom);
            } catch {
                console.log("error");
            }
            window.fpsCamera.camera.postEffects.addEffect(window.bloom);
            loop();
        });
    }
    loop();
});

pc.app.on('Hit:Point', () => {
    pc.app.getEntityFromIndex("66f38a4a-5dcc-4343-aa6a-8fe701f4dd22").enabled = JSON.parse(localStorage.getItem('IMPACT_MARKS'));
});

console.log("FunctionChanges.js loaded");

window.BackgroundMenu = pc.app.getEntityFromIndex("af0b095d-2ad7-42ee-8c10-6cd4f1f25602");
const backGroundSettingsHolder = BackgroundMenu.parent.children[0];
const sidebarSettingsHolder = BackgroundMenu.parent.children[1];
const generalSettingsHolder = BackgroundMenu.parent.children[2];
const keyboardSettingsHolder = BackgroundMenu.parent.children[3];
const audioSettingsHolder = BackgroundMenu.parent.children[4];
const miscSettingsHolder = BackgroundMenu.parent.children[5];
const customsSettingsHolder = BackgroundMenu.parent.children[6];
const gameSettingsHolder = BackgroundMenu.parent.children[7];
const clientSettingsHolder = BackgroundMenu.parent.children[8];
const fovSettingsHolder = BackgroundMenu.parent.children[9];
const gunSettingsHolder = BackgroundMenu.parent.children[10];
const visualSettingsHolder = BackgroundMenu.parent.children[11];

gameSettingsHolder.children[0].children[1].children[1].element.text = "Game"
gameSettingsHolder.children[1].children[0].element.text = "Game Options"
gameSettingsHolder.children[1].children[0].setLocalPosition(285, 14, 0);
gameSettingsHolder.children[2].setLocalPosition(20, -60, 0);
gameSettingsHolder.children[3].setLocalPosition(20, -110, 0);
gameSettingsHolder.children[4].setLocalPosition(20, -160, 0);
gameSettingsHolder.children[5].setLocalPosition(20, -210, 0);
gameSettingsHolder.children[6].setLocalPosition(20, -260, 0);

clientSettingsHolder.children[0].children[1].children[1].element.text = "Client";
clientSettingsHolder.children[1].children[0].element.text = "Client Options"
clientSettingsHolder.children[1].children[0].setLocalPosition(285, 14, 0);
clientSettingsHolder.children[2].setLocalPosition(20, -60, 0);
clientSettingsHolder.children[3].setLocalPosition(20, -110, 0);
clientSettingsHolder.children[4].setLocalPosition(20, -160, 0);
clientSettingsHolder.children[5].setLocalPosition(20, -210, 0);
clientSettingsHolder.children[6].setLocalPosition(20, -260, 0);
clientSettingsHolder.children[7].setLocalPosition(20, -310, 0);
clientSettingsHolder.children[8].setLocalPosition(20, -360, 0);

fovSettingsHolder.children[0].children[1].children[1].element.text = "Field of View";
fovSettingsHolder.children[1].children[0].element.text = "Here you can change the Field of View when Zooming.";
fovSettingsHolder.children[1].children[0].setLocalPosition(170, 14, 0);
fovSettingsHolder.children[2].setLocalPosition(20, -60, 0);
fovSettingsHolder.children[3].setLocalPosition(20, -105, 0);
fovSettingsHolder.children[4].setLocalPosition(20, -150, 0);
fovSettingsHolder.children[5].setLocalPosition(20, -195, 0);
fovSettingsHolder.children[6].setLocalPosition(20, -240, 0);
fovSettingsHolder.children[7].setLocalPosition(20, -285, 0);
fovSettingsHolder.children[8].setLocalPosition(20, -330, 0);
fovSettingsHolder.children[9].setLocalPosition(20, -375, 0);
fovSettingsHolder.children[10].setLocalPosition(20, -420, 0);

gunSettingsHolder.children[0].children[1].children[1].element.text = "GUN CONFIG";
gunSettingsHolder.children[1].children[0].element.text = "Here you can change various weapon visuals.";
gunSettingsHolder.children[1].children[0].setLocalPosition(200, 14, 0);
gunSettingsHolder.children[2].setLocalPosition(20, -60, 0);
gunSettingsHolder.children[3].setLocalPosition(20, -105, 0);
gunSettingsHolder.children[4].setLocalPosition(20, -150, 0);
gunSettingsHolder.children[5].setLocalPosition(20, -195, 0);
gunSettingsHolder.children[6].setLocalPosition(20, -240, 0);
gunSettingsHolder.children[7].setLocalPosition(20, -285, 0);
gunSettingsHolder.children[8].setLocalPosition(20, -330, 0);
gunSettingsHolder.children[9].setLocalPosition(20, -375, 0);

visualSettingsHolder.children[0].children[1].children[1].element.text = "Visual Tweaks";
visualSettingsHolder.children[1].children[0].element.text = "Here you can tweak visual effects for FPS gains.";
visualSettingsHolder.children[1].children[0].setLocalPosition(200, 14, 0);
visualSettingsHolder.children[2].setLocalPosition(20, -60, 0);
visualSettingsHolder.children[3].setLocalPosition(20, -105, 0);
visualSettingsHolder.children[4].setLocalPosition(20, -150, 0);
visualSettingsHolder.children[5].setLocalPosition(20, -195, 0);
visualSettingsHolder.children[6].setLocalPosition(20, -240, 0);
visualSettingsHolder.children[7].setLocalPosition(20, -285, 0);
visualSettingsHolder.children[8].setLocalPosition(20, -330, 0);
visualSettingsHolder.children[9].setLocalPosition(20, -375, 0);