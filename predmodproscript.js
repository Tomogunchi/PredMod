//PREDMOD v3 Script. Thanks to Va1idUser for his work on the v3 Script!

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
//FOV
if (!localStorage.getItem("FOV_SNIPER")) {localStorage.setItem("FOV_SNIPER", true);}
if (!localStorage.getItem("FOV_SCAR")) {localStorage.setItem("FOV_SCAR", true);}
if (!localStorage.getItem("FOV_SMG")) {localStorage.setItem("FOV_SMG", true);}
if (!localStorage.getItem("FOV_SHOTGUN")) {localStorage.setItem("FOV_SHOTGUN", true);}
if (!localStorage.getItem("FOV_PISTOL")) {localStorage.setItem("FOV_PISTOL", true);}
if (!localStorage.getItem("FOV_LMG")) {localStorage.setItem("FOV_LMG", true);}
if (!localStorage.getItem("FOV_M4")) {localStorage.setItem("FOV_M4", true);}
if (!localStorage.getItem("FOV_RPG")) {localStorage.setItem("FOV_RPG", true);}
if (!localStorage.getItem("FOV_KNIFE")) {localStorage.setItem("FOV_KNIFE", true);}
let gunFOVSettings = new window.settings();
gunFOVSettings.createSettings("Gun-FOV");
gunFOVSettings.addSettings({
	name: "FOV_SNIPER",
	type: "slider",
	text: "Sniper-FOV 		 		 		 					*default 30*",
	defaultValue:70,
	min:10,
	max:125,
});
gunFOVSettings.addSettings({
	name: "FOV_SCAR",
	type: "slider",
	text: "Scar-FOV 		 		 		 								*default 45*",
	defaultValue:80,
	min:10,
	max:125,
});
gunFOVSettings.addSettings({
	name: "FOV_SMG",
	type: "slider",
	text: "Smg-FOV 		 		 		 								*default 45*",
	defaultValue:80,
	min:10,
	max:125,
});
gunFOVSettings.addSettings({
	name: "FOV_SHOTGUN",
	type: "slider",
	text: "Shitgun-FOV 		 		 		 		*default 30*",
	defaultValue:80,
	min:10,
	max:125,
});
gunFOVSettings.addSettings({
	name: "FOV_PISTOL",
	type: "slider",
	text: "Pistol-FOV 		 		 		 					 *default 45*",
	defaultValue:80,
	min:10,
	max:125,
});
gunFOVSettings.addSettings({
	name: "FOV_LMG",
	type: "slider",
	text: "LMG-FOV 		 		 		 								*default 45*",
	defaultValue:80,
	min:10,
	max:125,
});
gunFOVSettings.addSettings({
	name: "FOV_M4",
	type: "slider",
	text: "M4-FOV 		 		 		 										 *default 45*",
	defaultValue:80,
	min:10,
	max:125,
});
gunFOVSettings.addSettings({
	name: "FOV_RPG",
	type: "slider",
	text: "RPG-FOV 		 		 		 								*default 45*",
	defaultValue:80,
	min:10,
	max:125,
});
gunFOVSettings.addSettings({
	name: "FOV_KNIFE",
	type: "slider",
	text: "KNIFE-FOV 		 		 		 								*default 45*",
	defaultValue:80,
	min:10,
	max:125,
});
pc.app.on("Map:Loaded", () => {
	pc.app.getEntityFromIndex("a92e3a56-d2cb-4d4a-8f97-047cd217b171").script.weapon.focusFov = localStorage.getItem('FOV_SNIPER');
	pc.app.getEntityFromIndex("00e8efa1-8e2a-4162-97a3-202b601757ca").script.weapon.focusFov = localStorage.getItem('FOV_SCAR');
	pc.app.getEntityFromIndex("952abbee-906a-45c8-b343-a33c07860148").script.weapon.focusFov = localStorage.getItem('FOV_SMG');
	pc.app.getEntityFromIndex("974afaa4-7d88-4fca-8d55-33a5527c2cf9").script.weapon.focusFov = localStorage.getItem('FOV_SHOTGUN');
	pc.app.getEntityFromIndex("6da0a919-8f04-41d5-b3c5-1d67d97a0c0c").script.weapon.focusFov = localStorage.getItem('FOV_PISTOL');
	pc.app.getEntityFromIndex("46f6693f-bbe6-48a7-b7fd-0c352d744e67").script.weapon.focusFov = localStorage.getItem('FOV_LMG');
	pc.app.getEntityFromIndex("b2510852-d387-4cfd-b568-81a01af8852f").script.weapon.focusFov = localStorage.getItem('FOV_M4');
	pc.app.getEntityFromIndex("3f8fab6a-6ec5-4a5a-94ca-27ee920a3c2d").script.weapon.focusFov = localStorage.getItem('FOV_KNIFE');
});

//       MAG_FIX              HIDE_RELOAD            SCOPE_BORDERS
if (!localStorage.getItem("MAG_FIX")) {localStorage.setItem("MAG_FIX", true);}
if (!localStorage.getItem("HIDE_RELOADS")) {localStorage.setItem("HIDE_RELOADS", true);}
if (!localStorage.getItem("UI_SCOPE_BORDER")) {localStorage.setItem("UI_SCOPE_BORDER", true);}

if (!localStorage.getItem("TRACER_LINES")) {localStorage.setItem("TRACER_LINES", true);}
if (!localStorage.getItem("SHOOT_LINES")) {localStorage.setItem("SHOOT_LINES", true);}
if (!localStorage.getItem("IMPACT_MARKS")) {localStorage.setItem("IMPACT_MARKS", true);}
if (!localStorage.getItem("BULLET_ENTITY")) {localStorage.setItem("BULLET_ENTITY", true);}
if (!localStorage.getItem("HIT_ENTITY")) {localStorage.setItem("HIT_ENTITY", true);}

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
gunConfigSettings.addSettings({
  name: "HIT_ENTITY",
  type: "checkbox",
  text: "Enable Damage Numbers.",
});
pc.app.on("Map:Loaded", () => {
  const sniperLens = pc.app.getEntityFromIndex("b655ed04-9844-4957-a03c-1756b25bda05");
  const ingameOverlay = pc.app.getEntityFromIndex("9fcdea8c-ee29-403e-8e5b-0eddd1e548f6");
  // MAG-FIX
  if (localStorage.getItem('MAG_FIX') === "true"){
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
  pc.app.getEntityFromIndex("a92e3a56-d2cb-4d4a-8f97-047cd217b171").script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  pc.app.getEntityFromIndex("00e8efa1-8e2a-4162-97a3-202b601757ca").script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  pc.app.getEntityFromIndex("952abbee-906a-45c8-b343-a33c07860148").script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  pc.app.getEntityFromIndex("974afaa4-7d88-4fca-8d55-33a5527c2cf9").script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  pc.app.getEntityFromIndex("b2510852-d387-4cfd-b568-81a01af8852f").script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  pc.app.getEntityFromIndex("46f6693f-bbe6-48a7-b7fd-0c352d744e67").script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  pc.app.getEntityFromIndex("6da0a919-8f04-41d5-b3c5-1d67d97a0c0c").script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  pc.app.getEntityFromIndex("3f8fab6a-6ec5-4a5a-94ca-27ee920a3c2d").script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  pc.app.getEntityFromIndex("bf215832-8da1-4910-9ee4-fe68fcda2224").script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  pc.app.getEntityFromIndex("f81d9c88-5c32-42a8-85fd-25cf2ad9b35f").script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));
  pc.app.getEntityFromIndex("7ce9e164-c3d2-4741-a842-d9c00a8ad7fa").script.weapon.hiddenReload = JSON.parse(localStorage.getItem('HIDE_RELOADS'));


  pc.app.getEntityFromIndex("00105180-4235-4666-b8d6-e29e0e763fdd").enabled = JSON.parse(localStorage.getItem('HIDE_FLASH'));
  pc.app.getEntityFromIndex("02348c57-ffbe-4784-911b-12d6795f67a1").enabled = JSON.parse(localStorage.getItem('TRACER_LINES'));
  pc.app.getEntityFromIndex("66f38a4a-5dcc-4343-aa6a-8fe701f4dd22").enabled = JSON.parse(localStorage.getItem('IMPACT_MARKS'));
  pc.app.getEntityFromIndex('015578c4-23eb-4ddb-91b6-f8e424a29e6a').enabled = JSON.parse(localStorage.getItem('BULLET_ENTITY'));



  if (localStorage.getItem("UI_SCOPE_BORDER") === "false") return;
  if (ingameOverlay) {

  		//Remove Scope Border
      const scopeBorder1 = pc.app.getEntityFromIndex("78c01491-2565-417a-987b-6c95af4cc8eb");
      const scopeBorder2 = pc.app.getEntityFromIndex("03a21dce-6227-4aff-a9a5-3e1e4492ec75");
      scopeBorder1.enabled = false;
      scopeBorder2.enabled = false;

    }
});
pc.app.on('Hit:Point', () => {
	pc.app.getEntityFromIndex("5b168db3-3eff-4b4d-acdf-50b4ff403524").enabled = JSON.parse(localStorage.getItem('HIT_ENTITY'));
});

//             FPS-MENU                     MAP-TWEAKING
if (!localStorage.getItem("FPS_TEMPLE")) {localStorage.setItem("FPS_TEMPLE", true);}
if (!localStorage.getItem("FPS_TUNDRA")) {localStorage.setItem("FPS_TUNDRA", true);}
if (!localStorage.getItem("FPS_MISTLE")) {localStorage.setItem("FPS_MISTLE", true);}
if (!localStorage.getItem("FPS_SIERRA")) {localStorage.setItem("FPS_SIERRA", true);}
if (!localStorage.getItem("FPS_XIBALBA")) {localStorage.setItem("FPS_XIBALBA", true);}
if (!localStorage.getItem("KILL_SPHERE")) {localStorage.setItem("KILL_SPHERE", true);}
if (!localStorage.getItem("KILL_SKULL")) {localStorage.setItem("KILL_SKULL", true);}
if (!localStorage.getItem("GARBAGE_ENTITY")) {localStorage.setItem("GARBAGE_ENTITY", true);}
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
  name: "KILL_SPHERE",
  type: "checkbox",
  text: "Enable strange death sphere thing.",
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
pc.app.on("Map:Loaded", () => {
  pc.app.getEntityFromIndex("436591b0-26aa-4678-ad3f-645a76a01c9c").enabled = JSON.parse(localStorage.getItem('KILL_SKULL'));
  pc.app.getEntityFromIndex("fcf27bc6-8c98-4b74-ac38-36482fad0dbb").enabled = JSON.parse(localStorage.getItem('GARBAGE_ENTITY'));
  if (pc.currentMap == "Temple") {
	const rain1 = pc.app.getEntityFromIndex("37596fa4-6326-4779-9391-4dfa9ae308eb");
	const rain2 = pc.app.getEntityFromIndex("59adeb0a-c832-4fd4-9a9a-534aecec402c");
	const raindrops1 = pc.app.getEntityFromIndex("66e64a89-b36e-49c6-8776-60188fef8f68");
	const raindrops2 = pc.app.getEntityFromIndex("8d570275-34d7-4114-8b08-c8d5617fea33");
	const raindrops3 = pc.app.getEntityFromIndex("746c1608-6697-43b6-82e1-95d29fa060df");

	const light2_1 = pc.app.getEntityFromIndex("41617483-56c8-4f71-b86b-75ecf5c27086");
	const light2_2 = pc.app.getEntityFromIndex("5f0f7190-a82b-4b9b-90e3-561310f8dcfa");
	const light2_3 = pc.app.getEntityFromIndex("19dfbfb5-41e9-4b6b-aa89-398f482d2bd4");
	const light2_4 = pc.app.getEntityFromIndex("ce3294f5-1cf3-49f7-b46a-8d7aa9ed7e74");
	const light2_5 = pc.app.getEntityFromIndex("943b0b15-c603-4a79-acce-4fcf9ecb600e");
	const light1_1 = pc.app.getEntityFromIndex("8f2a2454-b51b-4638-abca-6bc0f8dee7b1");
	const light1_2 = pc.app.getEntityFromIndex("de8d8064-e636-4a3d-b3dc-e27379ac4836");
	const light1_3 = pc.app.getEntityFromIndex("76a1a182-5656-41e6-a1e4-8820c3e61ea5");
	const light1_4 = pc.app.getEntityFromIndex("10b73fa1-5298-4951-a123-81336ccb4942");
	const planeEntity = pc.app.getEntityFromIndex("4501d8a5-2f6f-4dbd-b4cc-d477df147c0b");

    const flag1 = pc.app.getEntityFromIndex("9a96e696-d957-4702-9375-ad9ae8eeadf3");
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
    const bird1 = pc.app.getEntityFromIndex("3a89b894-b1af-4c25-9775-74f493ff7636");
    const bird2 = pc.app.getEntityFromIndex("ce5f4646-f177-419a-9696-5cb6d8439071");
	const grass1 = pc.app.getEntityFromIndex("3fee52c3-4c08-4ea9-abd1-e258edaabe3c");
	const grass2 = pc.app.getEntityFromIndex("edc67001-de0e-4598-b901-27e3f0657467");
	const grass3 = pc.app.getEntityFromIndex("fd7d6277-69f4-46d4-9ca1-5c45fff3d976");
	const grass4 = pc.app.getEntityFromIndex("0b320671-59c3-4e8d-a51d-ffed65be7aa6");
	const grass5 = pc.app.getEntityFromIndex("b7b12a92-c15d-4590-a924-7fc3cc7cf702");
	const grass6 = pc.app.getEntityFromIndex("4c2d7d73-0c89-4cb9-8019-742962396852");
	const grass7 = pc.app.getEntityFromIndex("7021247f-ed08-4c4f-a475-5071a8a6838d");
	const grass8 = pc.app.getEntityFromIndex("43e9eae4-e43c-4ae6-a4c7-b34d7091a435");
	const grass9 = pc.app.getEntityFromIndex("e7ad50fa-f0b4-4096-9ba9-c2857a6a360d");
	const grass10 = pc.app.getEntityFromIndex("61944789-e953-4045-8e71-a9a0bca8d228");
	const grass11 = pc.app.getEntityFromIndex("2aa1f3fc-39f3-4aa0-a2df-dd46e4c409ea");
	const grass12 = pc.app.getEntityFromIndex("52cc6051-0d50-4578-a72b-4bd1d0aea939");
	const grass13 = pc.app.getEntityFromIndex("d9657bf2-00a1-425e-a845-adc72aba0b9f");
	const grass14 = pc.app.getEntityFromIndex("5e9fab41-2cf5-4fa2-988f-34a73442a5bc");
	const grass15 = pc.app.getEntityFromIndex("d8d3548d-ef2e-466c-b6ae-b014ecac1d1a");
	const grass16 = pc.app.getEntityFromIndex("db69e65e-4589-45cb-87a4-b31530e8dda7");
	const grass17 = pc.app.getEntityFromIndex("21400038-f27d-469c-ab29-0106e244013c");
	const grass18 = pc.app.getEntityFromIndex("bdadfa0a-29c1-42ae-b231-5fea5df44009");
	const grass19 = pc.app.getEntityFromIndex("009210a8-2292-45d7-bb40-5823c9f1c748");
	const grass20 = pc.app.getEntityFromIndex("866ec20d-1a38-4e2b-9cd3-a380f0ce49f2");
	const grass21 = pc.app.getEntityFromIndex("50a21fdc-e552-414b-9354-af12d49d48fb");
	const grass22 = pc.app.getEntityFromIndex("7944478c-a477-4274-974f-e5b4eff5345e");
	const grass23 = pc.app.getEntityFromIndex("5ced6eec-f70a-416d-9a1c-111147a597ec");
	const grass24 = pc.app.getEntityFromIndex("a34c3295-f0d0-475e-9ea7-fe439f92488a");
    if (localStorage.getItem('FPS_TEMPLE') === "true"){
	  rain1.enabled = false;
	  rain2.enabled = false;
	  raindrops1.enabled = false;
	  raindrops2.enabled = false;
	  light2_1.enabled = false;
	  light2_2.enabled = false;
	  light2_3.enabled = false;
	  light2_4.enabled = false;
	  light2_5.enabled = false;
	  light1_1.enabled = false;
	  light1_2.enabled = false;
	  light1_3.enabled = false;
	  light1_4.enabled = false;
	  planeEntity.enabled = false;
      flag1.enabled = false;
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
	  bird1.enabled = false;
	  bird2.enabled = false;
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
    } else if (localStorage.getItem('FPS_TEMPLE') === "false"){
	  rain1.enabled = true;
	  rain2.enabled = true;
	  raindrops1.enabled = true;
	  raindrops2.enabled = true;
	  light2_1.enabled = true;
	  light2_2.enabled = true;
	  light2_3.enabled = true;
	  light2_4.enabled = true;
	  light2_5.enabled = true;
	  light1_1.enabled = true;
	  light1_2.enabled = true;
	  light1_3.enabled = true;
	  light1_4.enabled = true;
	  planeEntity.enabled = true;
      flag1.enabled = true;
	  tree1.enabled = true;
	  tree2.enabled = true;
	  tree3.enabled = true;
	  tree4.enabled = true;
	  tree5.enabled = true;
	  tree6.enabled = true;
	  tree7.enabled = true;
	  tree8.enabled = true;
	  candle1.enabled = true;
	  candle2.enabled = true;
	  candle3.enabled = true;
	  candle4.enabled = true;
	  candle5.enabled = true;
	  bird1.enabled = true;
	  bird2.enabled = true;
	  grass1.enabled = true;
	  grass2.enabled = true;
	  grass3.enabled = true;
	  grass4.enabled = true;
	  grass5.enabled = true;
	  grass6.enabled = true;
	  grass7.enabled = true;
	  grass8.enabled = true;
	  grass9.enabled = true;
	  grass10.enabled = true;
	  grass11.enabled = true;
	  grass12.enabled = true;
	  grass13.enabled = true;
	  grass14.enabled = true;
	  grass15.enabled = true;
	  grass16.enabled = true;
	  grass17.enabled = true;
	  grass18.enabled = true;
	  grass19.enabled = true;
	  grass20.enabled = true;
	  grass21.enabled = true;
	  grass22.enabled = true;
	  grass23.enabled = true;
	  grass24.enabled = true;
    }
  } else if (pc.currentMap == "Sierra") {

	const flagAnimEntity = pc.app.getEntityFromIndex("1a8817e0-5d66-427f-aef8-9603372c5651");
	const flagEntity = pc.app.getEntityFromIndex("64f90b3d-dfec-4278-aad0-97f4d76a195e");
	const flagPole = pc.app.getEntityFromIndex("ffd6d13a-ce78-45a3-9dbc-83bd2434b70b");
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
	const bird1 = pc.app.getEntityFromIndex("7adce04a-61e2-4c0e-85a0-af4b5aff1975");
	const bird2 = pc.app.getEntityFromIndex("661fcea5-3a07-415b-afa3-7aa0537760d7");
	const bird3 = pc.app.getEntityFromIndex("8094436f-a8be-448b-bd8e-c80f6e2a8049");
	const bird4 = pc.app.getEntityFromIndex("0f0d1220-d5dc-457a-a4e4-0d219a367655");
	const bird5 = pc.app.getEntityFromIndex("a11c279a-6a36-4e11-873d-b232b27e34b4");
	const bird6 = pc.app.getEntityFromIndex("9f95e22e-7054-4330-913a-d3c133314404");
	const bird7 = pc.app.getEntityFromIndex("122475df-cb27-405e-93cc-afec41d78e85");

	if (localStorage.getItem('FPS_SIERRA') === "true"){
      flagAnimEntity.enabled = false;
      flagEntity.enabled = false;
      flagPole.enabled = false;
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
    }else if (localStorage.getItem('FPS_SIERRA') === "false"){
	  flagAnimEntity.enabled = true;
	  flagEntity.enabled = true;
	  flagPole.enabled = true;
	  tree1.enabled = true;
	  tree2.enabled = true;
	  tree3.enabled = true;
	  tree4.enabled = true;
	  tree5.enabled = true;
	  tree6.enabled = true;
	  tree7.enabled = true;
	  tree8.enabled = true;
	  tree9.enabled = true;
	  tree10.enabled = true;
	  tree11.enabled = true;
	  tree12.enabled = true;
	  tree13.enabled = true;
	  tree14.enabled = true;
	  tree15.enabled = true;
	  tree16.enabled = true;
	  tree17.enabled = true;
	  grass1.enabled = true;
	  grass2.enabled = true;
	  grass3.enabled = true;
	  grass4.enabled = true;
	  grass5.enabled = true;
	  grass6.enabled = true;
	  grass7.enabled = true;
	  grass8.enabled = true;
	  grass9.enabled = true;
	  grass10.enabled = true;
	  grass11.enabled = true;
	  grass12.enabled = true;
	  grass13.enabled = true;
	  grass14.enabled = true;
	  bird1.enabled = true;
	  bird2.enabled = true;
	  bird3.enabled = true;
	  bird4.enabled = true;
	  bird5.enabled = true;
	  bird6.enabled = true;
	  bird7.enabled = true;
    }
  } else if (pc.currentMap == "Xibalba") {
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

	if (localStorage.getItem('FPS_XIBALBA') === "true"){
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

    }else if (localStorage.getItem('FPS_XIBALBA') === "false"){
	  rain1.enabled = true;
	  rain2.enabled = true;
	  rain3.enabled = true;
	  tree1.enabled = true;
	  tree2.enabled = true;
	  tree3.enabled = true;
	  tree4.enabled = true;
	  grass1.enabled = true;
	  grass2.enabled = true;
	  grass3.enabled = true;
	  grass4.enabled = true;
	  grass5.enabled = true;
	  grass6.enabled = true;
	  grass7.enabled = true;
	  grass8.enabled = true;
	  grass9.enabled = true;
	  grass10.enabled = true;
	  grass11.enabled = true;
	  grass12.enabled = true;
	  grass13.enabled = true;
	  grass14.enabled = true;
	  grass15.enabled = true;
	  grass16.enabled = true;
	  grass17.enabled = true;
	  grass18.enabled = true;
	  grass19.enabled = true;
    }
  } else if (pc.currentMap == "Mistle") {
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



  if (localStorage.getItem('FPS_MISTLE') === "true"){
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
  }else if (localStorage.getItem('FPS_MISTLE') === "false"){
	tree1.enabled = true;
	tree2.enabled = true;
	tree3.enabled = true;
	tree4.enabled = true;
	tree5.enabled = true;
	tree6.enabled = true;
	tree7.enabled = true;
	tree8.enabled = true;
	tree9.enabled = true;
	bird1.enabled = true;
	bird2.enabled = true;
	bird3.enabled = true;
	bird4.enabled = true;
	grass1.enabled = true;
	grass2.enabled = true;
	grass3.enabled = true;
	grass4.enabled = true;
	grass5.enabled = true;
	grass6.enabled = true;
	grass7.enabled = true;
	grass8.enabled = true;
	grass9.enabled = true;
	grass10.enabled = true;
	grass11.enabled = true;
	grass12.enabled = true;
	grass13.enabled = true;
	grass14.enabled = true;
	grass15.enabled = true;
	grass16.enabled = true;
	grass17.enabled = true;
	grass18.enabled = true;
	grass19.enabled = true;
	grass20.enabled = true;
	grass21.enabled = true;
	grass22.enabled = true;
	grass23.enabled = true;
	grass24.enabled = true;
	grass25.enabled = true;
	grass26.enabled = true;
	grass27.enabled = true;
	grass28.enabled = true;
	grass29.enabled = true;
	grass30.enabled = true;
	grass31.enabled = true;
	grass32.enabled = true;
	grass33.enabled = true;
  }
  } else if (pc.currentMap == "Tundra") {
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
	const tree1 = pc.app.getEntityFromIndex("8de068bc-911b-460b-90f1-b3258845d65a");
	const tree2 = pc.app.getEntityFromIndex("b1ecec06-93c5-4038-a282-3b5c7eefa295");
	const tree3 = pc.app.getEntityFromIndex("79b27405-65e3-4d9e-aca2-106dfbb0d71a");
	const tree4 = pc.app.getEntityFromIndex("8bd6ec4e-e019-4288-b3ac-f3b779eef615");
	const tree5 = pc.app.getEntityFromIndex("01eef8b7-4a79-4476-b1ae-861e1de28d2b");
	const tree6 = pc.app.getEntityFromIndex("996b2dfb-7e0b-4e73-b564-cd2b379b20d9");
	const tree7 = pc.app.getEntityFromIndex("95eadbbf-bca2-4864-87ce-a96e2435354f");
	const tree8 = pc.app.getEntityFromIndex("39a84351-4ca9-4e59-bf00-491de8067bfe");
	const tree9 = pc.app.getEntityFromIndex("c304b149-93f3-4b7e-b788-89c1581f76cc");

    if (localStorage.getItem('FPS_TUNDRA') === "true"){
	  snow1.enabled = false;
	  snow2.enabled = false;
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

    }else if (localStorage.getItem('FPS_TUNDRA') === "false"){
	  snow1.enabled = true;
	  snow2.enabled = true;
	  grass1.enabled = true;
	  grass2.enabled = true;
	  grass3.enabled = true;
	  grass4.enabled = true;
	  grass5.enabled = true;
	  grass6.enabled = true;
	  grass7.enabled = true;
	  grass8.enabled = true;
	  grass9.enabled = true;
	  grass10.enabled = true;
	  grass11.enabled = true;
	  grass12.enabled = true;
	  grass13.enabled = true;
	  grass14.enabled = true;
	  grass15.enabled = true;
	  grass16.enabled = true;
	  grass17.enabled = true;
	  grass18.enabled = true;
	  tree1.enabled = true;
	  tree2.enabled = true;
	  tree3.enabled = true;
	  tree4.enabled = true;
	  tree5.enabled = true;
	  tree6.enabled = true;
	  tree7.enabled = true;
	  tree8.enabled = true;
	  tree9.enabled = true;
    }
  }
});

pc.app.on('Hit:Point', () => {
    pc.app.getEntityFromIndex('fbc1de9e-7379-455b-a473-c7195fd7ae25').model.enabled = JSON.parse(localStorage.getItem('KILL_SPHERE'));
});

window.EnableMusicButton = pc.app.getEntityFromIndex("c719a624-3eb0-4761-9c3d-a18c7963b776");
// Remove 'Enable Menu Music' since there is no menu music anymore and func breaks game.
EnableMusicButton.enabled = false;
// MENU-6
const menu6 = EnableMusicButton.parent.parent.parent.children[7];
menu6.children[0].children[1].children[1].element.text = "Field of View"
menu6.children[1].children[0].element.text = "Here you can change the Field of View when Zooming."
menu6.children[1].children[0].setLocalPosition(150, 7.5, 0)
menu6.children[2].setLocalPosition(20, -70, 0);
menu6.children[3].setLocalPosition(20, -115, 0);
menu6.children[4].setLocalPosition(20, -160, 0);
menu6.children[5].setLocalPosition(20, -205, 0);
menu6.children[6].setLocalPosition(20, -250, 0);
menu6.children[7].setLocalPosition(20, -295, 0);
menu6.children[8].setLocalPosition(20, -340, 0);
menu6.children[9].setLocalPosition(20, -385, 0);
menu6.children[10].setLocalPosition(20, -430, 0);
menu6.children[2].children[2].enabled = false
menu6.children[2].children[2].enabled = true
// MENU-7
const menu7 = EnableMusicButton.parent.parent.parent.children[8];
menu7.children[0].children[1].children[1].element.text = "GUN CONFIG"
menu7.children[1].children[0].element.text = "Here you can change various weapon visuals."
menu7.children[1].children[0].setLocalPosition(150, 7.5, 0)
menu7.children[2].setLocalPosition(20, -70, 0);
menu7.children[3].setLocalPosition(20, -115, 0);
menu7.children[4].setLocalPosition(20, -160, 0);
menu7.children[5].setLocalPosition(20, -205, 0);
menu7.children[6].setLocalPosition(20, -250, 0);
menu7.children[7].setLocalPosition(20, -295, 0);
menu7.children[8].setLocalPosition(20, -340, 0);
menu7.children[9].setLocalPosition(20, -385, 0);
menu7.children[2].children[2].enabled = false
menu7.children[2].children[2].enabled = true
// MENU-8
const menu8 = EnableMusicButton.parent.parent.parent.children[9];
menu8.children[0].children[1].children[1].element.text = "Visual Tweaks"
menu8.children[1].children[0].element.text = "Here you can tweak visual effects for FPS gains."
menu8.children[1].children[0].setLocalPosition(150, 7.5, 0)
menu8.children[2].setLocalPosition(20, -70, 0);
menu8.children[3].setLocalPosition(20, -115, 0);
menu8.children[4].setLocalPosition(20, -160, 0);
menu8.children[5].setLocalPosition(20, -205, 0);
menu8.children[6].setLocalPosition(20, -250, 0);
menu8.children[7].setLocalPosition(20, -295, 0);
menu8.children[8].setLocalPosition(20, -340, 0);
menu8.children[9].setLocalPosition(20, -385, 0);
menu8.children[2].children[2].enabled = false
menu8.children[2].children[2].enabled = true

// BUTTON-COLOR
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

// Game Resolution Slider
window.resolution = pc.app.getEntityFromIndex(
  "f942f896-c221-4b62-99e3-76a57b0dfeca"
);
resolution.script.slider.max = 110;


// PredMod Loaded Notification
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

