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