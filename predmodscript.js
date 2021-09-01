
window.menu = pc.app.root.findByName('Menu')

//menu.children[0].element.color = {r: 1, g: 1, b: 1, a: 1}
menu.children[0].element.margin = { x: -240, y: -150, z: -240, w: -150 };

window.findmatch = pc.app.root.findByName('FindMatch')

findmatch.element.color = {
  r: 1,
  g: 0,
  b: 0,
  a: 1,
};
findmatch.button.data.hoverTint = { r: 1, g: 0, b: 0, a: 1 };

window.matchfield = pc.app.root.findByName('Side').children[1]
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
matchfield.children[1].children[7].element.text = "PredMod v4";
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

pc.app.on('Map:Loaded', () => {
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
})
