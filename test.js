const _0x49591c = (function () {
    let _0x2253d9 = true
    return function (_0x59b2a6, _0x2d7f3e) {
      const _0x2e0ccc = _0x2253d9
        ? function () {
            if (_0x2d7f3e) {
              const _0x38710c = _0x2d7f3e.apply(_0x59b2a6, arguments)
              return (_0x2d7f3e = null), _0x38710c
            }
          }
        : function () {}
      return (_0x2253d9 = false), _0x2e0ccc
    }
  })(),
  _0x4483d9 = _0x49591c(this, function () {
    return _0x4483d9
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x4483d9)
      .search('(((.+)+)+)+$')
  })
_0x4483d9()
const _0x15f11c = (function () {
    let _0x3ed9a8 = true
    return function (_0x4d9aff, _0x468ab6) {
      const _0x255289 = _0x3ed9a8
        ? function () {
            if (_0x468ab6) {
              const _0x74bf70 = _0x468ab6.apply(_0x4d9aff, arguments)
              return (_0x468ab6 = null), _0x74bf70
            }
          }
        : function () {}
      return (_0x3ed9a8 = false), _0x255289
    }
  })(),
  _0x20a5d5 = _0x15f11c(this, function () {
    let _0x1abbb0
    try {
      const _0x2dc087 = Function(
        'return (function() {}.constructor("return this")( ));'
      )
      _0x1abbb0 = _0x2dc087()
    } catch (_0x209eaf) {
      _0x1abbb0 = window
    }
    const _0x10bd17 = (_0x1abbb0.console = _0x1abbb0.console || {}),
      _0x1f10f1 = [
        'log',
        'warn',
        'info',
        'error',
        'exception',
        'table',
        'trace',
      ]
    for (let _0x31c382 = 0; _0x31c382 < _0x1f10f1.length; _0x31c382++) {
      const _0x478100 = _0x15f11c.constructor.prototype.bind(_0x15f11c),
        _0x244afd = _0x1f10f1[_0x31c382],
        _0x3d286a = _0x10bd17[_0x244afd] || _0x478100
      _0x478100['__proto__'] = _0x15f11c.bind(_0x15f11c)
      _0x478100.toString = _0x3d286a.toString.bind(_0x3d286a)
      _0x10bd17[_0x244afd] = _0x478100
    }
  })
_0x20a5d5()
const _0x1e8207 = document.querySelector('.inventory_menu_button'),
  _0x2449ba = document.querySelector('.inventory_overlay'),
  _0x546992 = document.querySelector('.close_inventory'),
  _0x64fec8 = document.querySelector('.sum'),
  _0x2dd2c2 = document.querySelector('.alco'),
  _0x21cb4f = document.querySelector('.resent'),
  _0x199b1e = document.querySelector('.arou'),
  _0x2aa5f3 = document.querySelectorAll('.state_label_alco'),
  _0x57c393 = document.querySelectorAll('.state_label_resent'),
  _0x32a3cc = document.querySelectorAll('.state_label_arou'),
  _0x275cc8 = document.querySelector('.speech_bubble'),
  _0xb321f = document.querySelector('.costume-inv'),
  _0x2dfba0 = document.querySelector('.hands_inv'),
  _0x2a3ad4 = document.querySelector('.char_sprite'),
  _0x2089fe = document.querySelector('.char_emotion'),
  _0x49c139 = document.querySelector('.lina'),
  _0x48f1a6 = document.querySelector('.rylai'),
  _0x5246cc = document.querySelector('.show_rate'),
  _0x285e0a = document.querySelector('.lanaya_label'),
  _0x57b347 = document.querySelector('.luna_label'),
  _0xed88e = document.querySelector('.alco_label')
_0x1e8207.onclick = function () {
  _0x2449ba.classList.add('active')
  _0x48e290()
}
_0x546992.onclick = function () {
  _0x2449ba.classList.remove('active')
  document.querySelector('.char_state').classList.remove('active')
  document.querySelector('.lina_arc_state').classList.remove('active')
  document.querySelector('.lanaya_arc_state').classList.remove('active')
}
let _0x5a0c50 = false
function _0x35bb3b() {
  if (_0x480b68.dialogID >= 200000 && _0x480b68.dialogID <= 317000) {
    document.querySelector('.char_state').classList.remove('active')
    document.querySelector('.lanaya_arc_state').classList.remove('active')
    document.querySelector('.lina_arc_state').classList.add('active')
  } else {
    _0x480b68.dialogID >= 400000
      ? (document.querySelector('.char_state').classList.remove('active'),
        document.querySelector('.lina_arc_state').classList.remove('active'),
        document.querySelector('.lanaya_arc_state').classList.add('active'))
      : (document.querySelector('.char_state').classList.add('active'),
        document.querySelector('.lanaya_arc_state').classList.remove('active'),
        document.querySelector('.lina_arc_state').classList.remove('active'))
  }
}
function _0x265cfb() {
  _0x49c139.innerHTML = _0x5d3311
  _0x48f1a6.innerHTML = _0x5d3798
  _0x5246cc.innerHTML = _0x2115ec
}
function _0x3ca80a() {
  _0x285e0a.innerHTML = _0x1f2612
  _0x57b347.innerHTML = _0x44669c
  _0xed88e.innerHTML = _0xbac735
}
function _0x40f459() {
  for (i = 0; i < _0x2aa5f3.length; i++) {
    _0x2aa5f3[i].classList.remove('red_label')
    _0x2aa5f3[i].classList.remove('yellow_label')
    _0x2aa5f3[i].classList.remove('green_label')
    if (_0xbac735 < 2) {
      _0x2aa5f3[i].classList.add('green_label')
    } else {
      if (_0xbac735 == 2) {
        _0x2aa5f3[i].classList.add('yellow_label')
      } else {
        _0xbac735 > 2 && _0x2aa5f3[i].classList.add('red_label')
      }
    }
  }
  for (i = 0; i < _0x57c393.length; i++) {
    _0x57c393[i].classList.remove('red_label')
    _0x57c393[i].classList.remove('yellow_label')
    _0x57c393[i].classList.remove('green_label')
    if (_0x1d62dd < 2) {
      _0x57c393[i].classList.add('green_label')
    } else {
      if (_0x1d62dd == 2) {
        _0x57c393[i].classList.add('yellow_label')
      } else {
        _0x1d62dd > 2 && _0x57c393[i].classList.add('red_label')
      }
    }
  }
  for (i = 0; i < _0x32a3cc.length; i++) {
    _0x32a3cc[i].classList.remove('red_label')
    _0x32a3cc[i].classList.remove('yellow_label')
    _0x32a3cc[i].classList.remove('green_label')
    if (_0x3bc544 < 2) {
      _0x32a3cc[i].classList.add('green_label')
    } else {
      if (_0x3bc544 == 2) {
        _0x32a3cc[i].classList.add('yellow_label')
      } else {
        _0x3bc544 > 2 && _0x32a3cc[i].classList.add('red_label')
      }
    }
  }
}
function _0x48e290() {
  _0x4b3918()
  _0x35bb3b()
  _0x64fec8.innerHTML = _0x393a8c.money
  _0x2dd2c2.innerHTML = _0xbac735
  _0x21cb4f.innerHTML = _0x1d62dd
  _0x199b1e.innerHTML = _0x3bc544
  _0x265cfb()
  _0x40f459()
  _0x3ca80a()
  var _0x53840f = document.querySelectorAll('.div-table-col')
  const _0x584697 = { method: 'get' }
  fetch('static/json/inventory_config.json', _0x584697).then(function (
    _0x1a0ce5
  ) {
    _0x1a0ce5.json().then(function (_0x3efbd1) {
      let _0x15449b = 0
      for (var _0x11ae64 = 0; _0x11ae64 < _0x53840f.length; _0x11ae64++) {
        _0x53840f[_0x11ae64].innerHTML = ''
      }
      Object.entries(_0x3efbd1.inventoryConfig).forEach(
        ([_0x1ccbdc, _0x18d9b0]) => {
          let _0x50c76c, _0x264aad
          _0x393a8c[_0x18d9b0.type].includes('_')
            ? ((_0x50c76c = Number(_0x393a8c[_0x18d9b0.type].replace('_', ''))),
              (_0x264aad = true))
            : ((_0x50c76c = Number(_0x393a8c[_0x18d9b0.type])),
              (_0x264aad = false))
          if (_0x50c76c === 0) {
            return
          }
          _0x53840f[_0x15449b].innerHTML = ''
          let _0x1ba133 = document.createElement('img')
          _0x53840f[_0x15449b].appendChild(_0x1ba133)
          _0x1ba133.classList.add('thing')
          _0x1ba133.setAttribute('src', _0x18d9b0.image)
          _0x1ba133.setAttribute('title', _0x18d9b0.title)
          _0x1ba133.setAttribute('state', _0x18d9b0.state)
          _0x1ba133.setAttribute('hands', _0x18d9b0.hands)
          _0x1ba133.setAttribute('notification', _0x18d9b0.notification)
          _0x1ba133.setAttribute('openable', _0x18d9b0.openable)
          _0x1ba133.setAttribute('pickable', _0x18d9b0.pickable)
          _0x1ba133.setAttribute('putable', _0x18d9b0.putable)
          _0x1ba133.setAttribute('description', _0x18d9b0.description)
          if (_0x50c76c > 1) {
            let _0x1ddf96 = document.createElement('div')
            _0x53840f[_0x15449b].appendChild(_0x1ddf96)
            _0x1ddf96.classList.add('thing_counter')
            _0x1ddf96.innerHTML = _0x50c76c
          }
          _0x30ffbe(_0x1ba133, _0x53840f[_0x15449b], _0x18d9b0.type, _0x264aad)
          _0x15449b++
        }
      )
    })
  })
}
function _0x30ffbe(_0x248be2, _0x1b1b09, _0xb8df3f, _0x355400) {
  _0x248be2.addEventListener('click', function () {
    _0x32a2b7(_0x248be2, _0x1b1b09, _0xb8df3f, _0x355400)
  })
}
function _0x32a2b7(_0xb0a0f1, _0x3717c7, _0x4a988c, _0x4fed5f) {
  let _0x513d67 = document.createElement('div')
  _0x48b6cb(_0x513d67, _0x3717c7)
  _0x3717c7.appendChild(_0x513d67)
  _0x513d67.classList.add('thing_menu')
  let _0x30476f = document.createElement('div')
  _0x30476f.classList.add('arrow_up')
  let _0x2ddeb0 = document.createElement('div')
  _0x2ddeb0.classList.add('thing_title')
  _0x2ddeb0.innerHTML = _0xb0a0f1.getAttribute('title')
  let _0x433d70 = document.createElement('div')
  _0x433d70.classList.add('thing_line')
  let _0x1780a9 = document.createElement('div')
  _0x1780a9.classList.add('thing_description')
  _0x1780a9.innerHTML = _0xb0a0f1.getAttribute('description')
  _0x513d67.appendChild(_0x30476f)
  _0x513d67.appendChild(_0x2ddeb0)
  _0x513d67.appendChild(_0x1780a9)
  _0x513d67.appendChild(_0x433d70)
  let _0x584c9b = document.createElement('div')
  _0x513d67.appendChild(_0x584c9b)
  _0x584c9b.classList.add('thing_button')
  if (_0xb0a0f1.getAttribute('openable') == 'true') {
    _0x584c9b.innerHTML = 'Open'
    if (_0x4fed5f) {
      _0x584c9b.addEventListener('click', function () {
        _0x2a4a8d(_0xb0a0f1, _0x4a988c, _0x513d67)
      })
    } else {
    }
  }
  if (
    _0xb0a0f1.getAttribute('pickable') == 'true' ||
    _0xb0a0f1.getAttribute('putable') == 'true'
  ) {
    if (_0xb0a0f1.getAttribute('pickable') == 'true') {
      _0x584c9b.innerHTML = 'Pick up'
    } else {
      _0xb0a0f1.getAttribute('putable') == 'true' &&
        (_0x584c9b.innerHTML = 'Put on')
    }
    _0x584c9b.addEventListener('click', function () {
      _0x3394da(_0xb0a0f1.getAttribute('notification'), _0x513d67)
      _0x2aec2a(_0x513d67)
    })
  }
}
function _0x2a4a8d(_0x1b1986, _0x1a886a, _0x279dd4) {
  let _0x14ae04, _0x45a0c0
  if (_0x393a8c[_0x1a886a].includes('_')) {
    _0x45a0c0 = Number(_0x393a8c[_0x1a886a].replace('_', ''))
    _0x14ae04 = (_0x45a0c0 -= 1).toString() + '_'
    _0x393a8c[_0x1a886a] = _0x14ae04
  } else {
    _0x45a0c0 = Number(_0x393a8c[_0x1a886a])
    _0x14ae04 = (_0x45a0c0 -= 1).toString()
    _0x393a8c[_0x1a886a] = _0x14ae04
  }
  _0x48e290()
  _0x3394da(_0x1b1986.getAttribute('notification'), _0x279dd4)
  _0x2aec2a(_0x279dd4)
  _0x38113a(_0x1a886a)
}
function _0x38113a(_0x215a61) {
  _0x215a61 == 'big_money_bag' && (_0x393a8c.money += 100)
  _0x215a61 == 'money_bag' && (_0x393a8c.money += 50)
  if (_0x215a61 == 'zlaty_money_bag') {
    _0x393a8c.money += 2000
  }
  _0x64fec8.innerHTML = _0x393a8c.money
  _0x130928()
}
function _0x48b6cb(_0x2adc48, _0x2cea45) {
  let _0x3c9ae5 = document.createElement('div')
  _0x2cea45.appendChild(_0x3c9ae5)
  _0x3c9ae5.classList.add('clickable_overlay')
  _0x3c9ae5.classList.add('full-window')
  _0x3c9ae5.addEventListener('click', function () {
    _0x2aec2a(_0x2adc48)
  })
}
function _0x2aec2a(_0x4324e5) {
  document.querySelector('.clickable_overlay').remove()
  _0x4324e5.remove()
}
function _0x130928() {
  _0x64fec8.setAttribute('style', 'color: #ff9800;transition:0.5s;')
  setTimeout(
    () => _0x64fec8.setAttribute('style', 'color:black;transition:0.5s;'),
    1000
  )
}
function _0x528871(_0x509c3b, _0x4390fe, _0x341b6c, _0xb684fa) {
  let _0x2e2387, _0x3cd34a
  _0x393a8c[_0x509c3b].includes('_')
    ? ((_0x3cd34a = Number(_0x393a8c[_0x509c3b].replace('_', ''))),
      _0xb684fa && _0x3cd34a == _0x4390fe
        ? (_0x2e2387 = _0x3cd34a.toString())
        : (_0x2e2387 = (_0x3cd34a += _0x4390fe).toString() + '_'),
      (_0x393a8c[_0x509c3b] = _0x2e2387))
    : ((_0x3cd34a = Number(_0x393a8c[_0x509c3b])),
      _0xb684fa && _0x3cd34a == _0x4390fe
        ? (_0x2e2387 = _0x3cd34a.toString())
        : (_0x2e2387 = (_0x3cd34a += _0x4390fe).toString()),
      (_0x393a8c[_0x509c3b] = _0x2e2387))
  _0x341b6c != '' && _0x1558fc(_0x341b6c, 3000, 'left')
}
function _0x3394da(_0x3b741b, _0x136997) {
  _0xb31e96(_0x3b741b, 3000)
}
function _0xb31e96(_0x9d906b, _0x523cde) {
  _0x24bbf6()
  _0x275cc8.classList.add('active_opacity')
  _0x275cc8.innerHTML = _0x9d906b
  setTimeout(function () {
    _0x275cc8.classList.remove('active_opacity')
  }, _0x523cde)
}
function _0x4b3918() {
  const _0x2787ee = { method: 'get' }
  fetch('/static/json/inventory_luna.js', _0x2787ee).then(function (_0x7c704e) {
    _0x7c704e.json().then(function (_0x2d2487) {
      let _0xb3015b = _0x2d2487.inventoryConfig[_0x393a8c.luna_state]
      _0x2a3ad4.setAttribute('src', _0xb3015b.doll)
      _0x2089fe.setAttribute('src', _0xb3015b.mouth)
      _0xb321f.innerHTML = ''
      let _0x5de8b8 = document.createElement('img')
      _0x5de8b8.classList.add('thing')
      _0x5de8b8.setAttribute('src', _0xb3015b.suit)
      _0xb321f.appendChild(_0x5de8b8)
    })
  })
}
function _0x4a9eef(_0x56fcd4) {
  _0x393a8c.luna_state = Number(_0x56fcd4)
}
function _0x24bbf6() {
  _0x2089fe.classList.add('active_opacity')
  setTimeout(function () {
    _0x2089fe.classList.remove('active_opacity')
  }, 3500)
}
const _0x460bea = {}
_0x460bea.money = 446
_0x460bea.money_bag = '2_'
_0x460bea.condom = '4'
_0x460bea.luna_state = 0
_0x460bea.helmet = '0'
_0x460bea.big_money_bag = '0_'
_0x460bea.weapon = '1'
_0x460bea.comb = '1'
_0x460bea.phone = '1'
_0x460bea.scepter = '0'
_0x460bea.ring = '0'
_0x460bea.shard = '0_'
_0x460bea.booster = '0'
_0x460bea.key = '0'
_0x460bea.zlaty_money_bag = '0_'
let _0x393a8c = _0x460bea
;('use strict')
let _0x386d65 = document.querySelector('.background'),
  _0xed784a = document.querySelector('.scene_effects')
const _0x3d1d8a = document.querySelector('.interactive'),
  _0x43259c = document.querySelector('.sprites'),
  _0x33c036 = document.querySelector('.choices'),
  _0x45a1a8 = document.querySelector('.name'),
  _0x36b850 = document.querySelector('.text'),
  _0x1ecc86 = document.querySelector('.dialog'),
  _0x372af9 = document.querySelector('.blackout'),
  _0x2d0a3e = document.querySelector('.lightning'),
  _0x13907c = document.querySelector('.pink'),
  _0x30aed8 = document.querySelector('.notification'),
  _0x1ce21f = document.querySelector('.mood_effect'),
  _0x40b1b3 = document.querySelector('.button_container'),
  _0x361483 = document.querySelector('.offer_edit'),
  _0x4849ea =
    /constructor/i.test(window.HTMLElement) ||
    (function (_0x1ef3ae) {
      return _0x1ef3ae.toString() === '[object SafariRemoteNotification]'
    })(
      !window.safari ||
        (typeof safari !== 'undefined' && safari.pushNotification)
    ),
  _0x16c9d0 =
    (/iPad|iPhone|iPod/.test(navigator.platform) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
    !window.MSStream,
  _0x5d48e5 = {}
_0x5d48e5.sceneID = 0
_0x5d48e5.dialogID = 0
_0x5d48e5.dialogEndID = 0
_0x5d48e5.choice = false
let _0x480b68 = _0x5d48e5,
  _0x5bcc3f = 0,
  _0x360607 = 0
const _0x3805b6 = {}
_0x3805b6.drink_order = 0
_0x3805b6.drink_whore = 0
_0x3805b6.took_coins = 0
_0x3805b6.jerked = _0x5bcc3f
_0x3805b6.talk_lina = 0
_0x3805b6.talk_rylai = 0
_0x3805b6.talk_lana_a = 0
_0x3805b6.talk_lana_b = 0
_0x3805b6.shards = 0
let _0x26668d = _0x3805b6
const _0x5c8349 = {}
_0x5c8349.owner_talk = 0
_0x5c8349.lina_talk = 0
_0x5c8349.rylai_talk = 0
_0x5c8349.quiz_interview = 0
_0x5c8349.peace_interview = 0
_0x5c8349.street_interview = 0
_0x5c8349.toilet_action = 0
_0x5c8349.lana_a = 0
_0x5c8349.lana_b = 0
_0x5c8349.lana_c = 0
_0x5c8349.lana_d = 0
_0x5c8349.lana_e = 0
_0x5c8349.lana_f = 0
_0x5c8349.lana_g = 0
_0x5c8349.lana_h = 0
_0x5c8349.lana_i = 0
_0x5c8349.lana_j = 0
_0x5c8349.mimihr = 0
_0x5c8349.lana_k = 0
_0x5c8349.lana_l = 0
_0x5c8349.lana_m = 0
_0x5c8349.lana_n = 0
let _0x4a4347 = _0x5c8349
const _0x48dd7f = {}
_0x48dd7f.fan_left = 0
_0x48dd7f.fan_right = 0
_0x48dd7f.waist = 0
_0x48dd7f.neck = 0
_0x48dd7f.tits = 0
_0x48dd7f.finger = 0
_0x48dd7f.lewdity = 0
_0x48dd7f.underwear = 0
_0x48dd7f.pussy = 0
_0x48dd7f.oswin_questions = 0
_0x48dd7f.oswin_questions_second = 0
_0x48dd7f.oswin_questions_third = 0
_0x48dd7f.amethyst = 0
_0x48dd7f.aldred_questions = 0
_0x48dd7f.winfrid_questions = 0
_0x48dd7f.berenwald_questions = 0
_0x48dd7f.berenwald_questions_second = 0
_0x48dd7f.cocktail = 0
_0x48dd7f.luna_additional = 0
let _0x4a507e = _0x48dd7f,
  _0x5427cd = null,
  _0xbac735 = 0,
  _0x3bc544 = 0,
  _0x1d62dd = 0,
  _0x290f07 = 8,
  _0x321546 = 0,
  _0x25d818 = 0,
  _0x20dff7 = 0,
  _0x399ec0 = 0,
  _0x288b3a = 0,
  _0x161342 = 0,
  _0x7cbf00 = 0,
  _0x569b2e = false,
  _0x5278ee = false,
  _0x5b423d = false,
  _0x3ff0b3 = false,
  _0x72017d = false,
  _0x3adb0b = false,
  _0x3e0b48 = false,
  _0xcfb526 = false
const _0x3841bb = {}
_0x3841bb.waterfall_hide = _0x569b2e
_0x3841bb.handjob_hide = _0x5278ee
_0x3841bb.boobs_hide = _0x5b423d
_0x3841bb.dildo_hide = _0x3ff0b3
_0x3841bb.arguments_hide = _0x72017d
_0x3841bb.kiss_hide = _0x3adb0b
_0x3841bb.mouths_hide = _0x3e0b48
_0x3841bb.touch_hide = _0xcfb526
let _0x369808 = _0x3841bb,
  _0x3cb888 = 0,
  _0x3c5edd = {},
  _0x3ca457,
  _0x35c5b8 = false,
  _0x4539fa = false,
  _0x4aedf9,
  _0x121ebb,
  _0x595d19,
  _0x5d3311 = 4,
  _0x5d3798 = 4,
  _0x2115ec = 0,
  _0x4bc917 = 0,
  _0x1f2612 = 0,
  _0x44669c = 0,
  _0x40e6b4 = 0
const _0x446eb4 = new Map(),
  _0x3a8c61 = new Map(),
  _0x480d28 = new Map(),
  _0x8ca19b = new Map(),
  _0x479c2a = new Map(),
  _0x16a159 = new Set(),
  _0x856375 = new Map()
_0x1ecc86.addEventListener('click', _0x39c7a0)
_0x2e17b0()
  .then(() => _0x4f2a77(0))
  .then(() => _0x3a0cc5(0, 1))
function _0x5d089f() {
  const _0x416ea3 = {
    sceneID: 0,
    dialogID: 0,
    dialogEndID: 0,
    choice: false,
  }
  _0x480b68 = _0x416ea3
}
let _0x436692 = false
const _0x43d194 = document.querySelectorAll('.hideable_interface'),
  _0x22c23b = document.querySelector('.hide_menu_button'),
  _0x173f0b = document.querySelector('.skip_button'),
  _0x1e1683 = document.querySelector('.hidden_menu'),
  _0x34f4df = document.querySelector('.loop_button'),
  _0x2c5872 = document.querySelector('.loop_image'),
  _0x5f16ec = document.querySelector('.next_button'),
  _0x2aed9e = document.querySelector('.repeat_button'),
  _0x589512 = document.querySelector('.game_menu'),
  _0x432191 = document.querySelector('.game_menu_button'),
  _0x37904b = document.querySelector('.close_game_menu'),
  _0x1d04f7 = document.querySelector('.overlay'),
  _0x44a338 = document.querySelector('.gallery_open'),
  _0x343b18 = document.querySelector('.save_menu_open'),
  _0x192d12 = document.querySelector('.walkthrough'),
  _0x5b385f = document.querySelector('.gallery_menu'),
  _0x1b58aa = document.querySelector('.close_gallery'),
  _0x5bcc26 = document.querySelector('.save_menu'),
  _0x280bb1 = document.querySelector('.walkthrough_menu'),
  _0x4000ef = document.querySelector('.close_walkthrough'),
  _0x47c7c6 = document.querySelector('.close_save'),
  _0x1ede18 = document.querySelector('.quit_menu'),
  _0x46cfad = document.querySelector('.menu'),
  _0x3f2b35 = document.querySelector('.game'),
  _0x75f19b = document.querySelector('.new_game'),
  _0x4ba5cf = document.querySelector('.gallery'),
  _0x14865d = document.querySelector('.credits'),
  _0x13311d = document.querySelector('.load_game'),
  _0x13f46a = document.querySelector('.credits_menu'),
  _0x323538 = document.querySelector('.special_thanks'),
  _0x2d1b1b = document.querySelector('.close_credits'),
  _0x4959a5 = document.querySelector('.roadmap'),
  _0x5acec6 = document.querySelector('.faq'),
  _0x2a54ee = document.querySelector('.roadmap_menu'),
  _0x1f96ae = document.querySelector('.faq_menu'),
  _0x5c08d6 = document.querySelector('.close_roadmap'),
  _0x326738 = document.querySelector('.close_faq'),
  _0x36f190 = document.querySelector('.edit'),
  _0x1452f7 = document.querySelector('.close_edit'),
  _0x13e5cd = document.querySelector('#close_hidden_scene'),
  _0x371678 = document.querySelector('#close_hidden_scene_pre'),
  _0x171aeb = document.querySelector('#close_hidden_scene_pre_2')
let _0x2ef324 = document.querySelector('#hidden_scene_image'),
  _0x5b5ba9 = document.querySelector('.hidden_scene'),
  _0x38c4a8 = document.querySelector('.hidden_scene_pre'),
  _0x123d65 = document.querySelector('.hidden_scene_pre_2'),
  _0x2e3d4a = document.querySelector('.overlay_hidden'),
  _0x20df60 = document.querySelector('.blackout_all_game'),
  _0x1b16c1 = document.querySelector('.profile_button'),
  _0x34c8a5 = document.querySelector('.profile_menu'),
  _0x22fea0 = document.querySelector('.profile_button_game'),
  _0x1c8f41 = document.querySelector('.profile_menu_game'),
  _0x1f6880 = document.querySelector('#log_in_button_game'),
  _0x54b924 = document.querySelector('#log_in_button_hidden_scene'),
  _0x4d9e66 = document.querySelector('#log_in_saves'),
  _0x5ebd27 = document.querySelector('#log_in_walkthrough'),
  _0x27b632 = document.querySelector('#log_in_gallery'),
  _0x39d1e1 = document.querySelector('#log_in_skip'),
  _0x1a47e4 = document.querySelector('.scene_selector'),
  _0x7d61b2 = document.querySelector('.skiptov5'),
  _0x3eefb9 = document.querySelector('.skiptov5_2'),
  _0xc50a98 = document.querySelector('.skiptov11'),
  _0x140888 = document.querySelector('.skiptov11_2'),
  _0x19c282 = document.querySelector('.skiptov23'),
  _0x55fce4 = document.querySelector('#skiptov4'),
  _0x21aa82 = document.querySelector('#skiptov1'),
  _0xe73917 = document.querySelector('#spinner'),
  _0x303a62 = document.querySelector('.gallery_items'),
  _0x336537 = document.querySelector('#switch_gallery'),
  _0x39fb0b = document.querySelector('.gallery_overlay'),
  _0x57cbbe = document.querySelector('.gallery_overlay_walkthrough'),
  _0x13c0b6 = document.querySelector('.walkthrough_gal_text'),
  _0x3bc6ed = document.querySelector('.close_scene_walkthrough')
_0x3bc6ed.onclick = function () {
  _0x57cbbe.classList.remove('active')
}
async function _0x191d76(_0x302dfb) {
  await _0x2e17b0()
  _0x5d089f()
  _0x302dfb &&
    ((_0x480b68.dialogID = parseInt(_0x302dfb)),
    (_0x480b68.sceneID = _0x3ca457[_0x480b68.dialogID]))
  _0x1afb2f(_0x33c036)
  await _0x20d92b()
}
async function _0x2e17b0() {
  if (_0x3ca457) {
    return
  }
  const _0xbb8bed = { credentials: 'include' }
  let _0x32925d = await fetch('/particles/map', _0xbb8bed)
  _0x3ca457 = await _0x32925d.json()
}
async function _0x20d92b() {
  await _0x4f2a77(_0x480b68.sceneID)
  await _0x3a0cc5(_0x480b68.sceneID)
  await _0x3a0cc5(_0x480b68.sceneID, 3, false)
  _0xa90908(_0x480b68.sceneID, _0x480b68.dialogID)
}
function _0x2e702c(_0x11dc98) {
  _0x11dc98.deltaY > 0 && _0x39c7a0()
}
function _0x251e42(_0x35cfe0) {
  'alcohol' in _0x35cfe0 &&
    ((_0x1ce21f.innerHTML += '+1 alcohol<br>'),
    (_0xbac735 += 1),
    (_0x4539fa = true))
  'resentment' in _0x35cfe0 &&
    ((_0x1d62dd += _0x35cfe0.resentment),
    (_0x1d62dd = _0x1d62dd < 0 ? 0 : _0x1d62dd),
    (_0x4539fa = false),
    _0x35cfe0.resentment >= 1 &&
      ((_0x1ce21f.innerHTML += '+1 resentment<br>'), (_0x4539fa = true)))
  'arousal' in _0x35cfe0 &&
    ((_0x1ce21f.innerHTML += '+1 excitement<br>'),
    (_0x3bc544 += _0x35cfe0.arousal),
    (_0x4539fa = true))
  if ('took_coins' in _0x35cfe0) {
    _0x26668d.took_coins += 1
  }
  'drink_order' in _0x35cfe0 && (_0x26668d.drink_order += 1)
  'drink_whore' in _0x35cfe0 && (_0x26668d.drink_whore += 1)
  if ('jerked' in _0x35cfe0) {
    _0x5bcc3f += 1
    _0x26668d.jerked = _0x5bcc3f
  }
  'bukakked' in _0x35cfe0 && (_0x360607 += 1)
  'jackie_relationship' in _0x35cfe0 && (_0x3cb888 += 1)
  'lina_rel' in _0x35cfe0 &&
    ((_0x1ce21f.innerHTML +=
      Number(_0x35cfe0.lina_rel) > 0
        ? "+1 Lina's favor<br>"
        : "-1 Lina's favor<br>"),
    (_0x5d3311 += Number(_0x35cfe0.lina_rel)),
    (_0x4539fa = true))
  'rylai_rel' in _0x35cfe0 &&
    ((_0x1ce21f.innerHTML +=
      Number(_0x35cfe0.rylai_rel) > 0
        ? "+1 Rylai's favor<br>"
        : "-1 Rylai's favor<br>"),
    (_0x5d3798 += Number(_0x35cfe0.rylai_rel)),
    (_0x4539fa = true))
  'show_rate' in _0x35cfe0 &&
    ((_0x1ce21f.innerHTML += '+1 Show popularity<br>'),
    (_0x2115ec += Number(_0x35cfe0.show_rate)),
    (_0x4539fa = true))
  'luna_arou' in _0x35cfe0 &&
    ((_0x1ce21f.innerHTML += "+1 Luna's arousal"),
    (_0x44669c += Number(_0x35cfe0.luna_arou)),
    (_0x4539fa = true))
  'lanaya_arou' in _0x35cfe0 &&
    ((_0x1ce21f.innerHTML += "+1 Lanaya's arousal"),
    (_0x1f2612 += Number(_0x35cfe0.lanaya_arou)),
    (_0x4539fa = true))
  _0x4539fa == true && _0x556a76()
}
function _0x524db6(_0x5261d9) {
  let _0x4cc9c9
  if (_0x5261d9.move_to_jerked && _0x5bcc3f > 0) {
    _0x4cc9c9 = parseInt(_0x5261d9.move_to_jerked)
  } else {
    if (_0x5261d9.move_to_bukakked && _0x360607 > 0) {
      _0x4cc9c9 = parseInt(_0x5261d9.move_to_bukakked)
    } else {
      if (_0xbac735 >= 4 && _0x5261d9.move_to_alco) {
        _0x4cc9c9 = parseInt(_0x5261d9.move_to_alco)
      } else {
        _0x4cc9c9 = parseInt(_0x5261d9.move_to)
      }
    }
  }
  return _0x4cc9c9
}
function _0x5b26dc(_0x573610, _0x213e6e) {
  for (let [_0x51bf07, _0x1a252c] of Object.entries(_0x369808)) {
    if (_0x573610.hideable == _0x51bf07) {
      _0x1a252c == true || _0x1a252c == 'true'
        ? _0x213e6e.classList.add('hidden_choice')
        : _0x213e6e.classList.remove('hidden_choice')
    }
  }
}
function _0x4d46d3(_0x49e8ad) {
  'books_count' in _0x49e8ad &&
    ((_0x290f07 += Number(_0x49e8ad.books_count)),
    (_0xed784a.src =
      'static/images/books/LyraleiArcSceneBooksLeft' + _0x290f07 + '.webp'))
  'watched_scenes' in _0x49e8ad &&
    (_0x25d818 += Number(_0x49e8ad.watched_scenes))
  'required_alco' in _0x49e8ad && (_0x321546 += Number(_0x49e8ad.required_alco))
  'required_attempts_dildo' in _0x49e8ad &&
    (_0x20dff7 += Number(_0x49e8ad.required_attempts_dildo))
  'required_attempts_handjob' in _0x49e8ad &&
    (_0x399ec0 += Number(_0x49e8ad.required_attempts_handjob))
  'required_attempts_arguments' in _0x49e8ad &&
    (_0x161342 += Number(_0x49e8ad.required_attempts_arguments))
  if ('required_attempts_mouths' in _0x49e8ad) {
    _0x288b3a += Number(_0x49e8ad.required_attempts_mouths)
  }
  'cur_lyr_resent' in _0x49e8ad &&
    (_0x7cbf00 += Number(_0x49e8ad.cur_lyr_resent))
  'stones_counter' in _0x49e8ad &&
    (_0x40e6b4 += Number(_0x49e8ad.stones_counter))
  if ('add_to_inventory' in _0x49e8ad) {
    if (_0x49e8ad.add_to_inventory.luna_state != null) {
      _0x4a9eef(_0x49e8ad.add_to_inventory.luna_state)
    }
    let _0x38df46, _0x5078ff
    if (_0x49e8ad.add_to_inventory.count.includes('*')) {
      _0x38df46 = Number(_0x49e8ad.add_to_inventory.count.replace('*', ''))
      _0x5078ff = true
    } else {
      _0x38df46 = Number(_0x49e8ad.add_to_inventory.count)
      _0x5078ff = false
    }
    _0x528871(
      _0x49e8ad.add_to_inventory.type,
      _0x38df46,
      _0x49e8ad.add_to_inventory.notify || '',
      _0x5078ff
    )
  }
  'reset_variables' in _0x49e8ad &&
    ((_0x1d62dd = Number(_0x49e8ad.reset_variables)),
    (_0x3bc544 = Number(_0x49e8ad.reset_variables)),
    (_0xbac735 = Number(_0x49e8ad.reset_variables)))
  'current_competition' in _0x49e8ad &&
    (_0x4bc917 += Number(_0x49e8ad.current_competition))
}
function _0xa28754(_0x525df5) {
  let _0x38922e
  if (_0x525df5.move_to_arousal != null && _0x3bc544 >= 4) {
    _0x38922e = parseInt(_0x525df5.move_to_arousal)
  } else {
    if (
      _0x525df5.move_to_resentment_win != null &&
      _0xbac735 < 3 &&
      _0x1d62dd >= 4
    ) {
      _0x38922e = parseInt(_0x525df5.move_to_resentment_win)
    } else {
      if (
        _0x525df5.move_to_resentment_lose != null &&
        _0xbac735 >= 3 &&
        _0x1d62dd >= 4
      ) {
        _0x38922e = parseInt(_0x525df5.move_to_resentment_lose)
      } else {
        if (_0x525df5.move_to_win_win != null && _0xbac735 < 3) {
          _0x38922e = parseInt(_0x525df5.move_to_win_win)
        } else {
          if (_0x525df5.move_to_win_lose != null && _0xbac735 >= 3) {
            _0x38922e = parseInt(_0x525df5.move_to_win_lose)
          } else {
            if (_0x525df5.move_to_lyralei_lesbian != null && _0x25d818 == 4) {
              _0x38922e = parseInt(_0x525df5.move_to_lyralei_lesbian)
            } else {
              if (_0x525df5.move_to_drunk_lyralei != null && _0x290f07 == 0) {
                _0x38922e = parseInt(_0x525df5.move_to_drunk_lyralei)
              } else {
                if (
                  _0x525df5.move_to_lyralei_resent != null &&
                  _0x290f07 == 0 &&
                  _0x7cbf00 == 8
                ) {
                  _0x38922e = parseInt(_0x525df5.move_to_lyralei_resent)
                } else {
                  if (_0x525df5.move_to_jackie != null && _0x3cb888 >= 3) {
                    _0x38922e = parseInt(_0x525df5.move_to_jackie)
                  } else {
                    if (_0x525df5.move_to_higgs != null && _0x4bc917 == 1) {
                      _0x38922e = parseInt(_0x525df5.move_to_higgs)
                    } else {
                      if (_0x525df5.move_to_guards != null && _0x4bc917 == 3) {
                        _0x38922e = parseInt(_0x525df5.move_to_guards)
                      } else {
                        if (
                          _0x525df5.move_to_sisters != null &&
                          _0x4bc917 == 6
                        ) {
                          _0x38922e = parseInt(_0x525df5.move_to_sisters)
                        } else {
                          if (
                            _0x525df5.move_to_low_rate != null &&
                            _0x2115ec < 5
                          ) {
                            _0x38922e = parseInt(_0x525df5.move_to_low_rate)
                          } else {
                            if (
                              _0x525df5.move_to_big_rate != null &&
                              _0x2115ec >= 5
                            ) {
                              _0x38922e = parseInt(_0x525df5.move_to_big_rate)
                            } else {
                              if (
                                _0x525df5.move_to_rylai_hate != null &&
                                _0x5d3798 <= 0
                              ) {
                                _0x38922e = parseInt(
                                  _0x525df5.move_to_rylai_hate
                                )
                              } else {
                                if (
                                  _0x525df5.move_to_lina_hate != null &&
                                  _0x5d3311 <= 0
                                ) {
                                  _0x38922e = parseInt(
                                    _0x525df5.move_to_lina_hate
                                  )
                                } else {
                                  if (
                                    _0x525df5.move_to_second_lanaya != null &&
                                    _0x40e6b4 >= 3
                                  ) {
                                    _0x38922e = parseInt(
                                      _0x525df5.move_to_second_lanaya
                                    )
                                  } else {
                                    'move_to' in _0x525df5
                                      ? (_0x38922e = parseInt(
                                          _0x525df5.move_to
                                        ))
                                      : (_0x38922e = null)
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return _0x38922e
}
function _0x4a5c37() {
  _0x39c7a0()
}
function _0x39c7a0() {
  if (_0x35c5b8) {
    return
  }
  if (_0x5427cd == null || _0x480b68.dialogID < _0x5427cd) {
    if (!('stop' in _0x446eb4.get(_0x480b68.dialogID))) {
      if ('light_effect' in _0x446eb4.get(_0x480b68.dialogID)) {
        _0x76fa79(_0x446eb4.get(_0x480b68.dialogID).light_effect)
      }
      if ('gallery_item' in _0x446eb4.get(_0x480b68.dialogID)) {
        _0x1ecc86.setAttribute('gallery_item', true)
      } else {
        if (
          _0x1ecc86.hasAttribute('gallery_item') &&
          !('gallery_item' in _0x446eb4.get(_0x480b68.dialogID))
        ) {
          _0x1ecc86.removeAttribute('gallery_item')
        }
      }
      _0x34bc3e()
      !_0x35c5b8 && _0x3ffabe()
    } else {
      'stop' in _0x446eb4.get(_0x480b68.dialogID) &&
        _0x446eb4.get(_0x480b68.dialogID).stop == 'menu' &&
          (_0x3f292d(), _0x3fc2c1(), _0x16491f(), _0x4c649c())
    }
  } else {
    _0x480b68.dialogID >= _0x5427cd && _0x4a6793()
  }
}
const _0x229129 = document.querySelector('.luna_counter')
function _0x1e7c9c(_0x5cc7d3, _0x47ed95) {
  var _0x257f88 = 100 / (_0x5cc7d3 / _0x47ed95)
  document
    .getElementById('first_fragment_counter')
    .setAttribute('style', 'width:' + _0x257f88 + '%')
}
function _0x3ffabe() {
  let _0x4b8647 = _0x3c5edd[_0x480b68.sceneID],
    _0x1f41be = _0x446eb4.get(_0x480b68.dialogID)
  if ('character_state' in _0x1f41be) {
    const _0x455980 = (_0x1f41be.character_state || []).find((_0xa2b88a) =>
      Object.entries(_0xa2b88a.state).every(
        ([_0x248e43, _0x1d8f14]) => parseInt(_0x1d8f14) === _0x26668d[_0x248e43]
      )
    )
    if (_0x455980) {
      const _0xaa952a = parseInt(_0x455980.move_to),
        _0xca33fa = _0x3ca457[_0xaa952a]
      _0xa90908(_0xca33fa, _0xaa952a)
      return
    }
  }
  if (_0xa28754(_0x1f41be) != null) {
    let _0x158460 = _0xa28754(_0x1f41be),
      _0x38d11e = _0x3ca457[_0x158460]
    _0xa90908(_0x38d11e, _0x158460)
  } else {
    _0x480b68.dialogID++
    if (_0x480b68.dialogID === _0x480b68.dialogEndID && _0x480b68.choice) {
      _0x243ecd(_0x4b8647.choice)
      _0x192bbd(nextDialog)
    } else {
      if (_0x480b68.dialogID > _0x480b68.dialogEndID) {
        let _0x39cf95 = _0x3ca457[_0x480b68.dialogID]
        _0xa90908(_0x39cf95, _0x480b68.dialogID)
      } else {
        let _0x3be903 = _0x446eb4.get(_0x480b68.dialogID)
        _0x192bbd(_0x3be903)
      }
    }
  }
}
function _0x5b8f82(_0x2ed134, _0x496e6a) {
  let _0x100cb7 = _0x496e6a
  return (
    Object.entries(_0x2ed134).forEach(([_0x2de1ff, _0x158358]) => {
      _0x100cb7 = _0x100cb7.filter(
        (_0x4e7ab1) =>
          !_0x4e7ab1[_0x2de1ff] || _0x158358 >= _0x4e7ab1[_0x2de1ff]
      )
    }),
    _0x100cb7[_0x100cb7.length - 1]
  )
}
function _0x5808bb(_0x162421) {
  console.log(_0x162421)
  _0x251e42(_0x162421)
  if ('locked_choice' in _0x162421) {
    _0x1558fc(_0x162421.locked_choice, 3000, '')
    return
  }
  if ('fork' in _0x162421) {
    _0x5289a5()
    const _0x505247 = {
      required_alco: _0x321546,
      required_attempts_handjob: _0x399ec0,
      required_attempts_dildo: _0x20dff7,
      required_attempts_mouths: _0x288b3a,
      required_attempts_arguments: _0x161342,
    }
    const _0x117470 = _0x5b8f82(_0x505247, _0x162421.fork),
      _0x3942f4 = parseInt(_0x117470.move_to),
      _0x1fe71f = _0x3ca457[_0x3942f4]
    _0x58ee7c(_0x1fe71f)
    _0xa90908(_0x1fe71f, _0x3942f4)
    return
  }
  if ('move_to' in _0x162421) {
    _0x5289a5()
    let _0x5e9eb4 = _0x524db6(_0x162421),
      _0x535df4 = _0x3ca457[_0x5e9eb4]
    _0x58ee7c(_0x535df4)
    _0xa90908(_0x535df4, _0x5e9eb4)
  }
}
function _0x1558fc(_0x268b68, _0xedab23, _0x363865) {
  _0x363865 == 'left' && _0x30aed8.classList.add('left_notify')
  _0x30aed8.classList.add('active_opacity')
  _0x30aed8.innerHTML = _0x268b68
  setTimeout(function () {
    _0x30aed8.classList.remove('active_opacity')
    setTimeout(function () {
      _0x30aed8.innerHTML = ''
      _0x30aed8.classList.remove('left_notify')
    }, 500)
  }, _0xedab23)
}
function _0x1558fc(_0x57ed63, _0x14c4f2) {
  _0x30aed8.classList.add('active_opacity')
  _0x30aed8.innerHTML = _0x57ed63
  setTimeout(function () {
    _0x30aed8.classList.remove('active_opacity')
    setTimeout(function () {
      _0x30aed8.innerHTML = ''
    }, 500)
  }, _0x14c4f2)
}
function _0xa90908(_0x324979, _0x47dab2) {
  _0x480b68.sceneID = _0x324979
  _0x480b68.dialogID = _0x47dab2
  _0x4d516e(_0x875f56(_0x324979), _0x4b7d23)
  _0x2e2a35(_0x324979)
}
async function _0x2e2a35(_0x46cfa1) {
  await _0x4f2a77(_0x46cfa1)
  const _0x488e45 = _0x3c5edd[_0x46cfa1]
  if (_0x480b68.sceneID === _0x46cfa1) {
    _0x480b68.dialogEndID = parseInt(
      _0x488e45.dialog[_0x488e45.dialog.length - 1].id
    )
    _0x480b68.choice = 'choice' in _0x488e45
    _0x3a0cc5(_0x46cfa1, 2)
    _0x45297d(_0x46cfa1)
    _0x192bbd(_0x446eb4.get(_0x480b68.dialogID))
    'choice' in _0x488e45 &&
      _0x480b68.dialogID === _0x480b68.dialogEndID &&
      _0x243ecd(_0x488e45.choice)
    if ('effect' in _0x488e45) {
      _0xed784a.style = 'display: block;'
      _0x488e45.effect === 'book'
        ? (_0xed784a.src =
            'static/images/books/LyraleiArcSceneBooksLeft' +
            _0x290f07 +
            '.webp')
        : (_0xed784a.src = _0x488e45.effect)
    } else {
      if (!('effect' in _0x488e45) && _0xed784a.src !== '') {
        _0xed784a.src = ''
        _0xed784a.style = 'display: none;'
      }
    }
  }
}
function _0x45297d(_0x59eb97) {
  const _0x2565bd = _0x3c5edd[_0x59eb97]
  if (!_0x2565bd) {
    return
  }
  const _0x5c06a6 = _0x2565bd.background
  if (
    _0x386d65.src === _0x5c06a6 ||
    _0x386d65.src === _0x3a8c61.get(_0x5c06a6)
  ) {
    return
  }
  _0x386d65.src = _0x3a8c61.get(_0x5c06a6) || _0x5c06a6
  !_0x3a8c61.has(_0x5c06a6) && _0x40c9fd(_0x5c06a6)
}
function _0x192bbd(_0x2159ca) {
  _0x1afb2f(_0x3d1d8a)
  _0x36b850.innerText = _0x2159ca.text
  if (_0x2159ca.text == '') {
    _0x1ecc86.classList.add('hidden_dialog')
    _0x40b1b3.classList.add('hidden_dialog')
    _0x361483.classList.add('hidden_dialog')
  } else {
    _0x2159ca.text != '' &&
      _0x1ecc86.classList.contains('hidden_dialog') &&
      (_0x1ecc86.classList.remove('hidden_dialog'),
      _0x40b1b3.classList.remove('hidden_dialog'),
      _0x361483.classList.remove('hidden_dialog'))
  }
  'name' in _0x2159ca && (_0x45a1a8.innerText = _0x2159ca.name)
  _0x1ecc86.classList.contains('dialog_transparent') &&
    _0x2159ca.transparent == null &&
    (_0x1ecc86.classList.remove('dialog_transparent'),
    _0x36b850.classList.remove('text_transparent'),
    _0x40b1b3.classList.remove('transparent_button'),
    _0x361483.classList.remove('transparent_button'))
  _0x36b850.classList.contains('text_small') &&
    _0x2159ca.small_text == null &&
    _0x36b850.classList.remove('text_small')
  const _0x47bba1 = (_0x26cade) =>
      _0x26cade.replace(/(full-window|new_sprite|talking| )/gi, ''),
    _0x3abade = (_0xc8c91f) => _0xc8c91f.type === 0,
    _0x44a91b = Array.from(_0x43259c.children).map(
      (_0x15985e) => _0x15985e.className
    ),
    _0x514307 = Object.keys(_0x2159ca.sprites || {}),
    _0x5b5346 = diff(_0x44a91b, _0x514307, _0x47bba1).moves
  _0x5b5346.forEach((_0x10c93e) => {
    if (_0x3abade(_0x10c93e)) {
      const _0x484424 = _0x43259c.children[_0x10c93e.index]
      _0x43259c.removeChild(_0x484424)
      _0x856375.set(_0x47bba1(_0x484424.className), _0x484424)
    } else {
      const _0x56880f = _0x856375.get(_0x47bba1(_0x10c93e.item)) || _0xfdaf33(),
        _0x533a14 = _0x43259c.children[_0x10c93e.index + 1]
      _0x856375.delete(_0x47bba1(_0x10c93e.item))
      _0x43259c.insertBefore(_0x56880f, _0x533a14)
    }
  })
  Object.entries(_0x2159ca.sprites || {}).forEach(
    ([_0x4ef6c7, _0x4a53bd], _0x214eec) => {
      const _0xd925ec = _0x43259c.children[_0x214eec] || _0xfdaf33(),
        _0x11bda0 = 'full-window'
      _0xd925ec.src = _0x3a8c61.get(_0x4a53bd) || _0x4a53bd
      !_0x3a8c61.has(_0x4a53bd) && _0x40c9fd(_0x4a53bd)
      _0xd925ec.classList.contains('new_sprite') &&
        _0x4ef6c7.includes('new_sprite') &&
        (_0xd925ec.classList.remove('new_sprite'), void _0xd925ec.offsetWidth)
      _0xd925ec.className = _0x11bda0 + ' ' + _0x4ef6c7
      _0xd925ec.style = 'display: block;'
    }
  )
  _0x856375.forEach((_0x720a29) => {
    _0x856375.delete(_0x720a29)
    _0x3188e8(_0x720a29)
  })
  if ('transparent' in _0x2159ca) {
    _0x504796(_0x2159ca)
  }
  'text_small' in _0x2159ca && _0x2d11cb(_0x2159ca)
  if ('hide' in _0x2159ca) {
    if (_0x2159ca.hide == 'handjob_hide') {
      _0x5278ee = true
    } else {
      if (_0x2159ca.hide == 'waterfall_hide') {
        _0x569b2e = true
      } else {
        if (_0x2159ca.hide == 'boobs_hide') {
          _0x5b423d = true
        } else {
          if (_0x2159ca.hide == 'dildo_hide') {
            _0x3ff0b3 = true
          } else {
            if (_0x2159ca.hide == 'arguments_hide') {
              _0x72017d = true
            } else {
              if (_0x2159ca.hide == 'kiss_hide') {
                _0x3adb0b = true
              } else {
                if (_0x2159ca.hide == 'mouths_hide') {
                  _0x3e0b48 = true
                } else {
                  _0x2159ca.hide == 'touch_hide' && (_0xcfb526 = true)
                }
              }
            }
          }
        }
      }
    }
    const _0x1cfa84 = {
      waterfall_hide: _0x569b2e,
      handjob_hide: _0x5278ee,
      boobs_hide: _0x5b423d,
      dildo_hide: _0x3ff0b3,
      arguments_hide: _0x72017d,
      kiss_hide: _0x3adb0b,
      mouths_hide: _0x3e0b48,
      touch_hide: _0xcfb526,
    }
    _0x369808 = _0x1cfa84
  }
  'game_location' in _0x2159ca && _0xdca4df(_0x2159ca)
  'repeat' in _0x2159ca && (_0x121ebb = _0x2159ca.repeat)
  'next' in _0x2159ca && (_0x595d19 = _0x446eb4.get(_0x480b68.dialogID).next)
  if ('loop_end' in _0x2159ca) {
    _0x4aedf9 = _0x2159ca.loop_end
    _0x55a198()
  } else {
    _0x480b68.dialogID > _0x4aedf9 && (_0x320cf1(), _0x502d39(), _0x207c18())
  }
  _0x4d46d3(_0x2159ca)
  if (document.getElementsByClassName('shaking').length > 0) {
    Array.from(document.getElementsByClassName('shaking')).forEach(
      (_0xe5c886) => {
        let _0xfb6b02 = 0
        _0x340321(_0xfb6b02, _0xe5c886)
      }
    )
  }
  document.getElementsByClassName('shaking_vert').length > 0 &&
    Array.from(document.getElementsByClassName('shaking_vert')).forEach(
      (_0x20429c) => {
        _0x352146(0, _0x20429c)
      }
    )
  'skip_intro' in _0x2159ca && _0x4a2100(_0x2159ca.skip_intro, 'intro')
  'skip_dialog' in _0x2159ca && _0x4a2100(_0x2159ca.skip_dialog, 'dialog')
  'interactive_state_update' in _0x2159ca &&
    (console.log('updated'),
    Object.assign(_0x4a4347, _0x2159ca.interactive_state_update))
  'character_state_update' in _0x2159ca &&
    Object.assign(_0x26668d, _0x2159ca.character_state_update)
  if ('character_state_change' in _0x2159ca) {
    console.log(_0x26668d, _0x2159ca.character_state_change)
    _0x3d99a3(_0x26668d, _0x2159ca.character_state_change)
    console.log(_0x26668d)
  }
  'interactive_state_change' in _0x2159ca &&
    (console.log(_0x4a4347, _0x2159ca.interactive_state_change),
    _0x3d99a3(_0x4a4347, _0x2159ca.interactive_state_change),
    console.log(_0x4a4347))
  'choices_state_update' in _0x2159ca &&
    _0x3d99a3(_0x4a507e, _0x2159ca.choices_state_update)
  if ('progressbar' in _0x2159ca) {
    for (var _0x30dce5 = 0; _0x30dce5 < _0x43d194.length; ++_0x30dce5) {
      _0x43d194[_0x30dce5].classList.add('hide_interface')
    }
    _0x229129.setAttribute('style', 'display: block;')
    _0x1e7c9c(Number(_0x2159ca.progressbar), _0x4a507e.lewdity)
  } else {
    if (_0x229129.getAttribute('style') == 'display: block;') {
      for (var _0x30dce5 = 0; _0x30dce5 < _0x43d194.length; ++_0x30dce5) {
        _0x43d194[_0x30dce5].classList.remove('hide_interface')
      }
      _0x229129.setAttribute('style', 'display: none;')
    }
  }
}
function _0x3d99a3(_0x1efe69, _0x4f50e8) {
  _0x4f50e8.forEach(
    ({ type: _0x13ce39, field: _0x476748, value: _0x2fb41e }) => {
      if (_0x13ce39 === 'add') {
        _0x1efe69[_0x476748] =
          parseInt(_0x1efe69[_0x476748]) + parseInt(_0x2fb41e)
      } else {
        if (_0x13ce39 === 'set') {
          const _0x24b6e7 = { _0x476748: _0x2fb41e }
          Object.assign(_0x1efe69, _0x24b6e7)
        }
      }
    }
  )
}
function _0x340321(_0x39e559, _0x3a4cbd) {
  _0x3a4cbd.classList.add('fast')
  _0x3a4cbd.classList.add('right_position')
  setTimeout(function () {
    _0x3a4cbd.classList.add('left_position')
    setTimeout(function () {
      _0x3a4cbd.classList.remove('right_position')
      _0x3a4cbd.classList.remove('left_position')
      _0x39e559++
      if (_0x39e559 <= 2) {
        _0x340321(_0x39e559, _0x3a4cbd)
      }
    }, 100)
  }, 100)
}
function _0x352146(_0x467345, _0x274705) {
  _0x274705.classList.add('fast')
  _0x274705.classList.add('top_position')
  setTimeout(function () {
    _0x274705.classList.add('bottom_position')
    setTimeout(function () {
      _0x274705.classList.remove('top_position')
      _0x274705.classList.remove('bottom_position')
      _0x467345++
      if (_0x467345 <= 2) {
        _0x352146(_0x467345, _0x274705)
      }
    }, 100)
  }, 100)
}
function _0xdca4df(_0x328a1e) {
  const _0x43f419 = _0x15d44f(_0x328a1e.game_location, _0x4a4347)
  _0x43f419.forEach((_0x3a72d4) => {
    const _0x5567e1 = _0x3a72d4.height,
      _0x593b7e = _0x3a72d4.left,
      _0xd9f431 = _0x3a72d4.bottom,
      _0x5bb149 = _0x3a72d4.move_to,
      _0x4fab78 = _0x3a72d4.image,
      _0x751d37 = _0x3a72d4.light_effect,
      _0x532126 = _0x3a72d4.unscalable,
      _0x52ce52 = _0x3a72d4.locked,
      _0x30cb67 = document.createElement('img')
    if (_0x532126) {
      _0x30cb67.classList.add('unscalable_object')
    } else {
      _0x30cb67.classList.add('interactive_object')
    }
    _0x30cb67.setAttribute(
      'style',
      'height: ' +
        _0x5567e1 +
        '; left:' +
        _0x593b7e +
        '; bottom: ' +
        _0xd9f431 +
        ';'
    )
    _0x30cb67.setAttribute('move_to', _0x5bb149)
    _0x30cb67.setAttribute('src', _0x4fab78)
    _0x30cb67.setAttribute('light_effect', _0x751d37)
    _0x30cb67.addEventListener('click', (_0x17ad13) => {
      if (typeof _0x52ce52 == 'undefined') {
        _0x17ad13.stopPropagation()
        _0x17ad13.stopImmediatePropagation()
        _0x5bb149 &&
          (_0x30cb67.classList.add('hide_interactive'),
          setTimeout(() => {
            if (_0x751d37) {
              _0x22d243()
              setTimeout(function () {
                let _0x1ffe2f = parseInt(_0x30cb67.getAttribute('move_to')),
                  _0x5c16d7 = _0x3ca457[_0x1ffe2f]
                _0xa90908(_0x5c16d7, _0x1ffe2f)
                _0x3d1d8a.innerHTML = ''
              }, 500)
            } else {
              let _0x5c3c39 = parseInt(_0x30cb67.getAttribute('move_to')),
                _0x4f2f73 = _0x3ca457[_0x5c3c39]
              _0xa90908(_0x4f2f73, _0x5c3c39)
              _0x3d1d8a.innerHTML = ''
            }
          }, 500))
      } else {
        _0x1558fc(_0x52ce52, 3000)
      }
    })
    _0x3d1d8a.append(_0x30cb67)
  })
}
function _0x15d44f(_0x3f9c19, _0x1ab1cb) {
  return (_0x3f9c19 || []).filter((_0x406d83) =>
    Object.entries(_0x406d83.state || {}).every(
      ([_0x1a9997, _0x359933]) => parseInt(_0x359933) === _0x1ab1cb[_0x1a9997]
    )
  )
}
function _0x76fa79(_0x254deb) {
  if (_0x35c5b8) {
    return
  }
  _0x35c5b8 = true
  _0x1ecc86.removeEventListener('click', _0x39c7a0)
  if (_0x254deb == 'true') {
    _0x372af9.classList.add('full-window')
    _0x372af9.classList.add('active_effect')
  } else {
    if (_0x254deb == 'false') {
      _0x2d0a3e.classList.add('full-window')
      _0x2d0a3e.classList.add('active_effect')
    } else {
      _0x254deb == 'pink' &&
        (_0x13907c.classList.add('full-window'),
        _0x13907c.classList.add('active_effect'))
    }
  }
  setTimeout(_0x3ffabe, 500)
  setTimeout(_0x1e771e, 1000)
}
function _0x1e771e() {
  if (!_0x35c5b8) {
    return
  }
  _0x35c5b8 = false
  _0x372af9.classList.remove('active_effect')
  _0x2d0a3e.classList.remove('active_effect')
  _0x13907c.classList.remove('active_effect')
  setTimeout(function () {
    _0x372af9.classList.remove('full-window')
    _0x2d0a3e.classList.remove('full-window')
    _0x13907c.classList.remove('full-window')
  }, 300)
  _0x1ecc86.addEventListener('click', _0x39c7a0)
}
function _0x556a76() {
  _0x1ce21f.classList.add('active_opacity')
  _0x1ce21f.classList.add('active_mood')
  _0x4539fa = false
  setTimeout(function () {
    _0x1ce21f.classList.remove('active_opacity')
    setTimeout(function () {
      _0x1ce21f.classList.remove('active_mood')
      _0x1ce21f.innerHTML = ''
    }, 1000)
  }, 1000)
}
function _0x504796(_0x4cffba) {
  'transparent' in _0x4cffba &&
    (_0x1ecc86.classList.add('dialog_transparent'),
    _0x36b850.classList.add('text_transparent'),
    _0x40b1b3.classList.add('transparent_button'),
    _0x361483.classList.add('transparent_button'))
}
function _0x2d11cb(_0x240189) {
  'text_small' in _0x240189 && _0x36b850.classList.add('text_small')
}
function _0x243ecd(_0x3d0ec4) {
  const _0x5726e3 = _0x15d44f(_0x3d0ec4, _0x4a507e)
  console.log(_0x5726e3)
  for (let _0x1e59c2 = 0; _0x1e59c2 < _0x5726e3.length; _0x1e59c2++) {
    let _0x5a7732 = document.createElement('div')
    _0x5a7732.innerText = _0x5726e3[_0x1e59c2].content
    'locked_choice' in _0x5726e3[_0x1e59c2] &&
      _0x5a7732.classList.add('locked_choice')
    if ('patreon' in _0x5726e3[_0x1e59c2]) {
      _0x5a7732.classList.add('patreon_choice')
    }
    if ('design' in _0x5726e3[_0x1e59c2]) {
      let _0x50eec6 = _0x5726e3[_0x1e59c2].design
      _0x5a7732.classList.add(_0x50eec6)
    }
    'patreon_denied' in _0x5726e3[_0x1e59c2] &&
      _0x5a7732.addEventListener('click', function () {
        _0x2e3d4a.classList.add('active')
        _0x2ef324.setAttribute('src', _0x5726e3[_0x1e59c2].patreon_denied_image)
        _0x5b5ba9.classList.add('active')
      })
    if ('eight_choices' in _0x3c5edd[_0x480b68.sceneID]) {
      _0x33c036.classList.add('eight_choices')
      _0x5a7732.classList.add('eight_choice_button')
    } else {
      if (
        _0x33c036.classList.contains('eight_choices') &&
        !('eight_choices' in _0x3c5edd[_0x480b68.sceneID])
      ) {
        _0x33c036.classList.remove('eight_choices')
      }
    }
    'hideable' in _0x5726e3[_0x1e59c2] &&
      _0x5b26dc(_0x5726e3[_0x1e59c2], _0x5a7732)
    _0x5a7732.classList.add('choice-button')
    _0x5a7732.setAttribute('position', _0x1e59c2.toString())
    _0x5a7732.addEventListener('click', () => _0x5808bb(_0x5726e3[_0x1e59c2]))
    _0x33c036.append(_0x5a7732)
  }
}
function _0x5289a5() {
  _0x1afb2f(_0x33c036)
}
async function _0x40c9fd(_0x236361) {
  if (_0x480d28.has(_0x236361)) {
    return
  }
  if (_0x3a8c61.has(_0x236361)) {
    return
  }
  const _0x1f0881 = new AbortController(),
    _0x4051bf = !_0x4849ea && !_0x16c9d0,
    _0x31e221 = { Accept: _0x4051bf ? 'image/webp' : 'image/png' }
  _0x31e221['Content-Type'] = 'image/*'
  const _0xd55b53 = {
    signal: _0x1f0881.signal,
    headers: _0x31e221,
  }
  const _0x1a5909 = _0xd55b53
  return (
    _0x480d28.set(_0x236361, _0x1f0881),
    await fetch(_0x236361, _0x1a5909)
      .then((_0x4f5081) => {
        return _0x4f5081
      })
      .then((_0x7bc337) => _0x7bc337.blob())
      .then((_0x4d75a4) => {
        _0x3a8c61.set(_0x236361, URL.createObjectURL(_0x4d75a4))
      })
      .finally(() => {
        _0x480d28.delete(_0x236361)
      })
  )
}
async function _0x4f2a77(_0x2cb181, _0x1daf05 = -1) {
  const _0x3acc4e = await _0x32e59c(_0x2cb181)
  if (!_0x3acc4e) {
    return
  }
  if (!_0x3acc4e.dialog) {
    return
  }
  const _0x230d24 =
      _0x1daf05 === -1
        ? _0x3acc4e.dialog
        : _0x3acc4e.dialog.filter((_0x4c6c34) => _0x4c6c34.id >= _0x1daf05),
    _0x5af824 = Array.from(
      new Set(
        (_0x230d24 || []).reduce(
          (_0x12a2b1, _0x46ec73) =>
            _0x12a2b1.concat(Object.values(_0x46ec73.sprites || {})),
          []
        )
      )
    )
  return (
    _0x5af824.concat([_0x3acc4e.background]).forEach((_0x44cbd4) => {
      _0x479c2a.has(_0x44cbd4)
        ? _0x479c2a.get(_0x44cbd4).add(_0x2cb181)
        : _0x479c2a.set(_0x44cbd4, new Set([_0x2cb181]))
    }),
    await _0x40c9fd(_0x3acc4e.background).then(() =>
      Promise.all(_0x5af824.map((_0x378510) => _0x40c9fd(_0x378510)))
    )
  )
}
async function _0x32e59c(_0x45e328) {
  if (_0x3c5edd[_0x45e328]) {
    return _0x3c5edd[_0x45e328]
  }
  return (
    !_0x8ca19b.has(_0x45e328) && _0x8ca19b.set(_0x45e328, _0x1b7aa2(_0x45e328)),
    _0x8ca19b.get(_0x45e328)
  )
}
function _0x5dfd18(_0x266418) {
  let _0x50d9b5 = _0x518d5f()
  _0x50d9b5 = aesjs.utils.utf8.toBytes(_0x50d9b5)
  let [_0x3afc34, _0x1c32af] = _0x266418.split('::')
  _0x3afc34 = aesjs.utils.hex.toBytes(_0x3afc34)
  _0x1c32af = aesjs.utils.hex.toBytes(_0x1c32af)
  const _0x4ab6be = new aesjs.ModeOfOperation.cbc(_0x50d9b5, _0x3afc34)
  let _0x192d08 = _0x4ab6be.decrypt(_0x1c32af)
  _0x192d08 = aesjs.padding.pkcs7.strip(_0x192d08)
  const _0x139413 = aesjs.utils.utf8.fromBytes(_0x192d08)
  return _0x139413
}
function _0x518d5f() {
  const _0x18165b = 'yIEIJ53ATZ1GWtz',
    _0x37102b = document.querySelector('meta[name="user_id"]').content.trim(),
    _0x1db4d3 = Math.floor(Date.now() / 1000 / 3600),
    _0x19926f = sha256([_0x37102b, _0x18165b, _0x1db4d3].join(''))
  return _0x19926f.slice(0, 32)
}
async function _0x1b7aa2(_0x3c026a) {
  const _0x27340f = await fetch('/particles/scene/' + _0x3c026a)
  if (!_0x27340f.ok) {
    return null
  }
  const _0xf87911 = await _0x27340f.text(),
    _0x25baf7 = _0x5dfd18(_0xf87911),
    _0x1dce71 = JSON.parse(_0x25baf7)
  return (_0x3c5edd[_0x3c026a] = _0x1dce71), _0x83b6b3(_0x1dce71), _0x1dce71
}
async function _0x3a0cc5(_0x2fde9b, _0x4ebea5 = 1, _0x518de5 = true) {
  const _0x18252d = await _0x32e59c(_0x2fde9b)
  if (!_0x18252d) {
    return
  }
  _0x13e75e(_0x2fde9b)
  if (_0x18252d.choice) {
    await Promise.all(
      _0x18252d.choice.map(async (_0x5550cb) => {
        return await _0x1cc015(_0x5550cb, _0x4ebea5, _0x518de5)
      })
    )
    return
  }
  if (_0x18252d.dialog) {
    await Promise.all(
      _0x18252d.dialog.map(async (_0x49f4e2) => {
        return await _0x1cc015(_0x49f4e2, _0x4ebea5, _0x518de5)
      })
    )
    const _0x4419c6 = parseInt(
        _0x18252d.dialog[_0x18252d.dialog.length - 1].id
      ),
      _0x3799f4 = _0x4419c6 + 1
    if (_0x3799f4 in _0x3ca457) {
      let _0xd1f387 = _0x3ca457[_0x3799f4]
      await _0x32e59c(_0xd1f387)
      _0x518de5 && (await _0x4f2a77(_0xd1f387))
      _0x4ebea5 > 0 && (await _0x3a0cc5(_0xd1f387, _0x4ebea5 - 1, _0x518de5))
    }
  }
}
async function _0x1cc015(
  _0x4a731f,
  _0x284910,
  _0x5a60cb = true,
  _0x513141 = ['move_to', 'next', 'repeat', 'loop_end', 'skip_dialog']
) {
  await Promise.all(
    Object.entries(_0x4a731f).map(async ([_0x44883e, _0x3b8dd8]) => {
      Array.isArray(_0x3b8dd8) &&
        (await Promise.all(
          _0x3b8dd8.map(
            async (_0x50c3d2) =>
              await _0x1cc015(_0x50c3d2, _0x284910, _0x5a60cb)
          )
        ))
      if (_0x513141.some((_0x5afa2e) => _0x44883e.startsWith(_0x5afa2e))) {
        const _0x3263d3 = parseInt(_0x3b8dd8),
          _0x46f0a9 = _0x3ca457[_0x3263d3]
        await _0x32e59c(_0x46f0a9)
        _0x5a60cb && (await _0x4f2a77(_0x46f0a9, _0x3263d3))
        if (_0x284910 > 0) {
          await _0x3a0cc5(_0x46f0a9, _0x284910 - 1, _0x5a60cb)
        }
      }
    })
  )
}
function _0xfdaf33() {
  let _0x201179 = new Image()
  return (
    _0x201179.setAttribute('draggable', 'false'),
    _0x201179.setAttribute('ondragstart', 'return false;'),
    _0x201179.classList.add('full-window'),
    (_0x201179.style = 'display: none;'),
    _0x43259c.appendChild(_0x201179),
    _0x201179
  )
}
function _0x3188e8(_0x32c329) {
  _0x32c329.className = 'full-window'
  _0x32c329.style = 'display: none;'
  _0x16a159.add(_0x32c329)
}
function _0x83b6b3(_0x320562) {
  for (const _0x3fa639 of _0x320562.dialog) {
    _0x446eb4.set(parseInt(_0x3fa639.id), _0x3fa639)
  }
}
function _0x1afb2f(_0xc37827) {
  while (_0xc37827.lastChild != null) {
    _0xc37827.removeChild(_0xc37827.lastChild)
  }
}
function _0x58ee7c(_0x56e42c) {
  Array.from(_0x479c2a.entries())
    .filter(
      ([_0x76ba29, _0x1952b3]) =>
        !_0x1952b3.has(_0x56e42c) && _0x480d28.has(_0x76ba29)
    )
    .forEach(([_0x244721]) => {
      const _0x187d66 = _0x480d28.get(_0x244721)
      _0x187d66 && _0x187d66.abort()
      _0x480d28.delete(_0x244721)
    })
  _0x479c2a.clear()
}
async function _0x3454fb(_0x28033d, _0x4ed43c) {
  for (let _0x1140cc = 0; _0x1140cc < _0x28033d.length; _0x1140cc++) {
    await _0x4ed43c(_0x28033d[_0x1140cc], _0x1140cc, _0x28033d)
  }
}
_0x22c23b.onclick = function () {
  if (!_0x436692) {
    for (var _0x12713b = 0; _0x12713b < _0x43d194.length; ++_0x12713b) {
      _0x43d194[_0x12713b].classList.add('hide_interface')
    }
    _0x1ecc86.classList.add('switched')
    _0x173f0b.classList.add('switched_skip')
    _0x361483.classList.add('switched_offer')
    _0x22c23b.classList.add('hide_menu_button_active')
    setTimeout(function _0x48c422() {
      _0x1e1683.classList.add('hidden_menu_active')
    }, 600)
    _0x436692 = true
  } else {
    _0x320cf1()
    for (var _0x12713b = 0; _0x12713b < _0x43d194.length; ++_0x12713b) {
      _0x43d194[_0x12713b].classList.remove('hide_interface')
    }
  }
}
let _0x507587 = false
function _0x320cf1() {
  _0x436692 = false
  _0x207c18()
  _0x1e1683.classList.remove('hidden_menu_active')
  setTimeout(function _0x1d6f13() {
    _0x1ecc86.classList.remove('switched')
    _0x173f0b.classList.remove('switched_skip')
    _0x361483.classList.remove('switched_offer')
    _0x22c23b.classList.remove('hide_menu_button_active')
  }, 600)
}
function _0x502d39() {
  _0x22c23b.classList.remove('features_button_active')
  _0x207c18()
}
function _0x55a198() {
  _0x22c23b.classList.add('features_button_active')
}
function _0x207c18() {
  _0x507587 = false
  _0x34f4df.classList.remove('clicked_loop')
  _0x2c5872.classList.remove('loop_image_clicked')
}
_0x34f4df.onclick = function () {
  !_0x507587
    ? ((_0x507587 = true),
      _0x34f4df.classList.add('clicked_loop'),
      _0x2c5872.classList.add('loop_image_clicked'))
    : _0x207c18()
}
_0x5f16ec.onclick = function () {
  _0x11dc57()
}
_0x2aed9e.onclick = function () {
  _0x55ea68()
  setTimeout(function () {
    _0x31ee23()
  }, 500)
}
function _0x521e40() {
  if (_0x507587 && _0x480b68.dialogID >= _0x4aedf9) {
    _0x31ee23()
  }
}
function _0x31ee23() {
  _0x5289a5()
  _0xa90908(_0x3ca457[parseInt(_0x121ebb)], parseInt(_0x121ebb))
}
function _0x55ea68() {
  _0x372af9.classList.add('full-window')
  _0x372af9.classList.add('active_effect')
  setTimeout(function () {
    _0x372af9.classList.remove('active_effect')
    _0x2d0a3e.classList.remove('active_effect')
    setTimeout(function () {
      _0x372af9.classList.remove('full-window')
      _0x2d0a3e.classList.remove('full-window')
    }, 300)
  }, 1000)
}
function _0x11dc57() {
  if (_0x507587 && _0x480b68.dialogID >= _0x4aedf9) {
    _0x55ea68()
    setTimeout(function () {
      _0x31ee23()
    }, 500)
  } else {
    if (_0x480b68.dialogID < _0x4aedf9) {
      let _0x5030e4 = parseInt(_0x595d19),
        _0x245867 = _0x3ca457[_0x5030e4]
      _0x5289a5()
      _0xa90908(_0x245867, _0x5030e4)
    } else {
      !_0x507587 &&
        _0x1558fc(
          'End of the scene! Open the text bar or repeat the scene.',
          3000,
          ''
        )
    }
  }
}
_0x4c649c()
_0x161c2a()
_0x432191.onclick = function () {
  _0x1d04f7.classList.add('active')
  _0x589512.classList.add('active')
}
_0x13e5cd.onclick = function () {
  _0x2e3d4a.classList.remove('active')
  _0x5b5ba9.classList.remove('active')
}
_0x371678.onclick = function () {
  _0x2e3d4a.classList.remove('active')
  _0x38c4a8.classList.remove('active')
}
_0x171aeb.onclick = function () {
  _0x2e3d4a.classList.remove('active')
  _0x123d65.classList.remove('active')
}
_0x4959a5.onclick = function () {
  _0x1d04f7.classList.add('active')
  _0x2a54ee.classList.add('active')
}
_0x5acec6.onclick = function () {
  _0x1d04f7.classList.add('active')
  _0x1f96ae.classList.add('active')
}
_0x361483.onclick = function () {
  _0x361483.getAttribute('not-auth') != 'true'
    ? (_0x1d04f7.classList.add('active'),
      _0x112ae8(),
      _0x36f190.classList.add('active'))
    : _0x1558fc('Wanna send us a note? Please, log in!', 4000)
}
_0x1452f7.onclick = function () {
  _0x3f292d()
  _0x3fc2c1()
}
_0x5c08d6.onclick = function () {
  _0x3f292d()
  _0x3fc2c1()
}
_0x326738.onclick = function () {
  _0x3f292d()
  _0x3fc2c1()
}
_0x75f19b.onclick = function () {
  _0x22d243()
  _0x5d089f()
  _0x5427cd = null
  _0xbac735 = 0
  _0x3bc544 = 0
  _0x1d62dd = 0
  _0x290f07 = 8
  _0x321546 = 0
  _0x25d818 = 0
  _0x20dff7 = 0
  _0x399ec0 = 0
  _0x288b3a = 0
  _0x161342 = 0
  _0x7cbf00 = 0
  _0x3cb888 = 0
  _0x569b2e = false
  _0x5278ee = false
  _0x5b423d = false
  _0x3ff0b3 = false
  _0x72017d = false
  _0x3adb0b = false
  _0x3e0b48 = false
  _0xcfb526 = false
  const _0x372b9f = {
    waterfall_hide: _0x569b2e,
    handjob_hide: _0x5278ee,
    boobs_hide: _0x5b423d,
    dildo_hide: _0x3ff0b3,
    arguments_hide: _0x72017d,
    kiss_hide: _0x3adb0b,
    mouths_hide: _0x3e0b48,
    touch_hide: _0xcfb526,
  }
  _0x369808 = _0x372b9f
  _0x5bcc3f = 0
  _0x360607 = 0
  const _0x42a118 = {
    drink_order: 0,
    drink_whore: 0,
    took_coins: 0,
    jerked: _0x5bcc3f,
    talk_lina: 0,
    talk_rylai: 0,
    talk_lana_a: 0,
    talk_lana_b: 0,
    shards: 0,
  }
  _0x26668d = _0x42a118
  _0x3cb888 = 0
  const _0x2cacea = {
    money: 446,
    money_bag: '2_',
    condom: '4',
    luna_state: 0,
    helmet: '0',
    big_money_bag: '0_',
    weapon: '1',
    comb: '1',
    phone: '1',
    scepter: '0',
    ring: '0',
    shard: '0_',
    booster: '0',
    key: '0',
    zlaty_money_bag: '0_',
  }
  _0x393a8c = _0x2cacea
  const _0x5d9831 = {
    owner_talk: 0,
    lina_talk: 0,
    rylai_talk: 0,
    quiz_interview: 0,
    peace_interview: 0,
    street_interview: 0,
    toilet_action: 0,
    lana_a: 0,
    lana_b: 0,
    lana_c: 0,
    lana_d: 0,
    lana_e: 0,
    lana_f: 0,
    lana_g: 0,
    lana_h: 0,
    lana_i: 0,
    lana_j: 0,
    mimihr: 0,
    lana_k: 0,
    lana_l: 0,
    lana_m: 0,
    lana_n: 0,
  }
  _0x4a4347 = _0x5d9831
  _0x5d3311 = 4
  _0x5d3798 = 4
  _0x2115ec = 0
  _0x4bc917 = 0
  const _0x1cb6e3 = {
    fan_left: 0,
    fan_right: 0,
    waist: 0,
    neck: 0,
    tits: 0,
    finger: 0,
    lewdity: 0,
    underwear: 0,
    pussy: 0,
    oswin_questions: 0,
    oswin_questions_second: 0,
    oswin_questions_third: 0,
    amethyst: 0,
    aldred_questions: 0,
    winfrid_questions: 0,
    berenwald_questions: 0,
    berenwald_questions_second: 0,
    cocktail: 0,
    luna_additional: 0,
  }
  _0x4a507e = _0x1cb6e3
  _0x44669c = 0
  _0x1f2612 = 0
  _0x40e6b4 = 0
  _0x320cf1()
  _0x502d39()
  _0x207c18()
  setTimeout(function () {
    _0x10d4cf()
    _0x2ad619()
  }, 500)
}
function _0x2ad619() {
  _0x1a47e4.classList.add('active')
}
function _0x35354e() {
  _0x1a47e4.classList.remove('active')
}
_0x21aa82.onclick = function () {
  _0x2b0dbe()
  _0x2a00e0()
  setTimeout(function () {
    _0x35354e()
    _0x191d76()
      .then(() => _0x155863())
      .then(() => _0x3c50db())
      .then(() => _0x5e7593())
  }, 500)
}
_0x55fce4.onclick = function () {
  _0x2b0dbe()
  _0x2a00e0()
  setTimeout(function () {
    _0x35354e()
    _0x191d76(20001)
      .then(() => _0x155863())
      .then(() => _0x3c50db())
      .then(() => _0x5e7593())
  }, 500)
}
function _0x2a00e0() {
  _0xe73917.classList.remove('hide_spinner')
}
function _0x3c50db() {
  _0xe73917.classList.add('hide_spinner')
}
if (_0x3eefb9) {
  _0x3eefb9.onclick = function () {
    _0x2b0dbe()
    _0x2a00e0()
    setTimeout(function () {
      _0x35354e()
      _0x191d76(105000)
        .then(() => _0x155863())
        .then(() => _0x3c50db())
        .then(() => _0x5e7593())
    }, 500)
  }
}
if (_0xc50a98) {
  _0xc50a98.onclick = function () {
    _0x2b0dbe()
    _0x2a00e0()
    setTimeout(function () {
      _0x35354e()
      _0x191d76(309058)
        .then(() => _0x155863())
        .then(() => _0x3c50db())
        .then(() => _0x5e7593())
    }, 500)
  }
}
if (_0x19c282) {
  _0x19c282.onclick = function () {
    _0x2b0dbe()
    _0x2a00e0()
    setTimeout(function () {
      _0x35354e()
      _0x191d76(309058)
        .then(() => _0x155863())
        .then(() => _0x3c50db())
        .then(() => _0x5e7593())
    }, 500)
  }
}
if (_0x140888) {
  _0x140888.onclick = function () {
    _0x2b0dbe()
    _0x2a00e0()
    setTimeout(function () {
      _0x35354e()
      _0x191d76(200000)
        .then(() => _0x155863())
        .then(() => _0x3c50db())
        .then(() => _0x5e7593())
    }, 500)
  }
}
_0x4ba5cf.onclick = function () {
  _0x3fc2c1()
  _0x4a6793()
}
_0x13311d.onclick = function () {
  _0x3fc2c1()
  _0x1d04f7.classList.add('active')
  _0x5bcc26.getAttribute('not-auth') != 'true' && getSaves(false)
  _0x5bcc26.classList.add('active')
}
_0x14865d.onclick = function () {
  _0x1d04f7.classList.add('active')
  _0x272d80()
}
_0x2d1b1b.onclick = function () {
  _0x3fc2c1()
  _0x3f292d()
}
function _0x272d80() {
  _0x13f46a.classList.add('active')
  _0x323538.classList.add('active')
}
_0x37904b.onclick = function () {
  _0x3f292d()
  _0x3fc2c1()
}
_0x1b58aa.onclick = function () {
  _0x3f292d()
  _0x39fb0b.classList.remove('active')
  _0x3fc2c1()
}
_0x4000ef.onclick = function () {
  _0x3f292d()
  _0x3fc2c1()
}
_0x44a338.onclick = function () {
  _0x3fc2c1()
  _0x4a6793()
}
_0x1ede18.onclick = function () {
  _0x3f292d()
  _0x3fc2c1()
  _0x16491f()
  _0x4c649c()
}
function _0x16491f() {
  _0x3f2b35.classList.remove('active')
}
function _0x155863() {
  _0x3f2b35.classList.add('active')
}
function _0x10d4cf() {
  _0x46cfad.classList.remove('active')
}
function _0x4c649c() {
  _0x46cfad.classList.add('active')
}
function _0x4a6793() {
  _0x3fc2c1()
  _0x1d04f7.classList.add('active')
  _0x5b385f.classList.add('active')
  _0x25142d()
  _0x33338b()
}
_0x47c7c6.onclick = function () {
  _0x3f292d()
  _0x3fc2c1()
}
_0x343b18.onclick = function () {
  _0x3fc2c1()
  if (_0x5bcc26.getAttribute('not-auth') != 'true') {
    getSaves(true)
  }
  _0x5bcc26.classList.add('active')
}
_0x192d12.onclick = function () {
  _0x3fc2c1()
  _0x280bb1.classList.add('active')
}
function _0x3f292d() {
  _0x1d04f7.classList.remove('active')
}
function _0x3fc2c1() {
  _0x36f190.classList.remove('active')
  _0x1f96ae.classList.remove('active')
  _0x2a54ee.classList.remove('active')
  _0x589512.classList.remove('active')
  _0x5bcc26.classList.remove('active')
  _0x13f46a.classList.remove('active')
  _0x323538.classList.remove('active')
  _0x5b385f.classList.remove('active')
  _0x280bb1.classList.remove('active')
}
function _0x2b0dbe() {
  _0x20df60.classList.add('full-window')
  _0x20df60.classList.add('active')
}
function _0x22d243() {
  _0x2b0dbe()
  setTimeout(_0x5e7593, 500)
}
function _0x5e7593() {
  _0x20df60.classList.remove('active')
  setTimeout(function () {
    _0x20df60.classList.remove('full-window')
  }, 300)
}
_0x1f6880.onclick = function () {
  _0x32a76f()
}
_0x54b924.onclick = function () {
  _0x32a76f()
}
_0x4d9e66.onclick = function () {
  _0x4d9e66.getAttribute('saving') == 'true'
    ? _0x32a76f()
    : (window.location.href = '/login')
}
_0x39d1e1.onclick = function () {
  _0x32a76f()
}
_0x27b632.onclick = function () {
  _0x27b632.getAttribute('game') == 'true'
    ? _0x32a76f()
    : (window.location.href = '/login')
}
_0x5ebd27.onclick = function () {
  _0x32a76f()
}
function _0x14c8b6() {
  const _0x189b9f = {
    watch_sce: _0x25d818,
    cur_l_res: _0x7cbf00,
    arguments: _0x72017d,
    kiss: _0x3adb0b,
    touch: _0xcfb526,
    mouths: _0x3e0b48,
    waterfall: _0x569b2e,
    boobs: _0x5b423d,
    handjob: _0x5278ee,
    dildo: _0x3ff0b3,
    req_mou: _0x288b3a,
    req_arg: _0x161342,
    req_hand: _0x399ec0,
    req_dildo: _0x20dff7,
    req_alco: _0x321546,
    books: _0x290f07,
    dialog: _0x480b68.dialogID,
    scene: _0x480b68.sceneID,
    scene_name: _0x3c5edd[_0x480b68.sceneID].scene_name,
    alco: _0xbac735,
    arou: _0x3bc544,
    resent: _0x1d62dd,
    ord: _0x26668d.drink_order,
    who: _0x26668d.drink_whore,
    coi: _0x26668d.took_coins,
    jer: _0x5bcc3f,
    buk: _0x360607,
    jac: _0x3cb888,
    mo: _0x393a8c.money,
    mo_b: _0x393a8c.money_bag,
    lu: _0x393a8c.luna_state,
    he: _0x393a8c.helmet,
    bmb: _0x393a8c.big_money_bag,
    owt: _0x4a4347.owner_talk,
    lit: _0x4a4347.lina_talk,
    ryt: _0x4a4347.rylai_talk,
    qui: _0x4a4347.quiz_interview,
    pea: _0x4a4347.peace_interview,
    ste: _0x4a4347.street_interview,
    clr: _0x5d3311,
    crr: _0x5d3798,
    csr: _0x2115ec,
    cco: _0x4bc917,
    flf: _0x4a507e.fan_left,
    frg: _0x4a507e.fan_right,
    wst: _0x4a507e.waist,
    nck: _0x4a507e.neck,
    tts: _0x4a507e.tits,
    fgr: _0x4a507e.finger,
    lwd: _0x4a507e.lewdity,
    und: _0x4a507e.underwear,
    pss: _0x4a507e.pussy,
    toi: _0x4a4347.toilet_action,
    tli: _0x26668d.talk_lina,
    try: _0x26668d.talk_rylai,
    laa: _0x4a4347.lana_a,
    lab: _0x4a4347.lana_b,
    lac: _0x4a4347.lana_c,
    lad: _0x4a4347.lana_d,
    lae: _0x4a4347.lana_e,
    laf: _0x4a4347.lana_f,
    lag: _0x4a4347.lana_g,
    lah: _0x4a4347.lana_h,
    lai: _0x4a4347.lana_i,
    laj: _0x4a4347.lana_j,
    mim: _0x4a4347.mimihr,
    tla: _0x26668d.talk_lana_a,
    tlb: _0x26668d.talk_lana_b,
    sc: _0x393a8c.scepter,
    ri: _0x393a8c.ring,
    sh: _0x393a8c.shard,
    cla: _0x44669c,
    lan: _0x1f2612,
    bo: _0x393a8c.booster,
    ke: _0x393a8c.key,
    zl: _0x393a8c.zlaty_money_bag,
    sha: _0x26668d.shards,
    lak: _0x4a4347.lana_k,
    lal: _0x4a4347.lana_l,
    lam: _0x4a4347.lana_m,
    lna: _0x4a4347.lana_n,
    osq: _0x4a507e.oswin_questions,
    oqs: _0x4a507e.oswin_questions_second,
    oqt: _0x4a507e.oswin_questions_third,
    ame: _0x4a507e.amethyst,
    alq: _0x4a507e.aldred_questions,
    wiq: _0x4a507e.winfrid_questions,
    beq: _0x4a507e.berenwald_questions,
    bsq: _0x4a507e.berenwald_questions_second,
    coc: _0x4a507e.cocktail,
    lua: _0x4a507e.luna_additional,
    sto: _0x40e6b4,
  }
  Cookies.set('temporary-save', _0x189b9f)
}
function _0x163d76() {
  Cookies.remove('temporary-save')
}
function _0x32a76f() {
  _0x14c8b6()
  window.location.href = '/login'
}
function _0x35f6cd() {
  _0x14c8b6()
  window.location.href = '/logout'
}
function _0x161c2a() {
  if (Cookies.get('temporary-save') != null) {
    let _0x536a72 = Cookies.getJSON('temporary-save')
    _0x480b68.dialogID = _0x536a72.dialog
    _0x480b68.sceneID = _0x536a72.scene
    _0xbac735 = _0x536a72.alco
    _0x3bc544 = _0x536a72.arou
    _0x1d62dd = _0x536a72.resent
    _0x321546 = _0x536a72.req_alco
    _0x25d818 = _0x536a72.watch_sce
    _0x399ec0 = _0x536a72.req_hand
    _0x20dff7 = _0x536a72.req_dildo
    _0x161342 = _0x536a72.req_arg
    _0x288b3a = _0x536a72.req_mou
    _0x7cbf00 = _0x536a72.cur_l_res
    _0x290f07 = _0x536a72.books
    _0x3ff0b3 = _0x536a72.dildo
    _0x5b423d = _0x536a72.boobs
    _0x569b2e = _0x536a72.waterfall
    _0x5278ee = _0x536a72.handjob
    _0x72017d = _0x536a72.arguments
    _0x3adb0b = _0x536a72.kiss
    _0x3e0b48 = _0x536a72.mouths
    _0xcfb526 = _0x536a72.touch
    const _0x7d8920 = {
      waterfall_hide: _0x569b2e,
      handjob_hide: _0x5278ee,
      boobs_hide: _0x5b423d,
      dildo_hide: _0x3ff0b3,
      arguments_hide: _0x72017d,
      kiss_hide: _0x3adb0b,
      mouths_hide: _0x3e0b48,
      touch_hide: _0xcfb526,
    }
    _0x369808 = _0x7d8920
    _0xed784a.src =
      'static/images/books/LyraleiArcSceneBooksLeft' + _0x290f07 + '.webp'
    _0x360607 = _0x536a72.buk
    _0x5bcc3f = _0x536a72.jer
    _0x26668d.drink_order = _0x536a72.ord
    _0x26668d.drink_whore = _0x536a72.who
    _0x26668d.took_coins = _0x536a72.coi
    _0x26668d.jerked = _0x5bcc3f
    _0x3cb888 = _0x536a72.jac
    _0x393a8c.money = _0x536a72.mo
    _0x393a8c.money_bag = _0x536a72.mo_b
    _0x393a8c.luna_state = _0x536a72.lu
    _0x393a8c.helmet = _0x536a72.he
    _0x393a8c.big_money_bag = _0x536a72.bmb
    _0x393a8c.scepter = _0x536a72.sc
    _0x393a8c.ring = _0x536a72.ri
    _0x393a8c.shard = _0x536a72.sh
    _0x393a8c.booster = _0x536a72.bo
    _0x393a8c.key = _0x536a72.ke
    _0x393a8c.zlaty_money_bag = _0x536a72.zl
    _0x4a4347.owner_talk = _0x536a72.owt
    _0x4a4347.lina_talk = _0x536a72.lit
    _0x4a4347.rylai_talk = _0x536a72.ryt
    _0x4a4347.quiz_interview = _0x536a72.qui
    _0x4a4347.peace_interview = _0x536a72.pea
    _0x4a4347.street_interview = _0x536a72.ste
    _0x4a4347.toilet_action = _0x536a72.toi
    _0x5d3311 = _0x536a72.clr !== null ? _0x536a72.clr : 4
    _0x5d3798 = _0x536a72.crr !== null ? _0x536a72.crr : 4
    _0x2115ec = _0x536a72.csr
    _0x4bc917 = _0x536a72.cco
    _0x4bc917 = _0x536a72.cco
    _0x4a507e.fan_left = _0x536a72.flf
    _0x4a507e.fan_right = _0x536a72.frg
    _0x4a507e.waist = _0x536a72.wst
    _0x4a507e.neck = _0x536a72.nck
    _0x4a507e.tits = _0x536a72.tts
    _0x4a507e.finger = _0x536a72.fgr
    _0x4a507e.lewdity = _0x536a72.lwd
    _0x4a507e.underwear = _0x536a72.und
    _0x4a507e.pussy = _0x536a72.pss
    _0x26668d.talk_lina = _0x536a72.tli
    _0x26668d.talk_rylai = _0x536a72.try
    _0x4a4347.lana_a = _0x536a72.laa
    _0x4a4347.lana_b = _0x536a72.lab
    _0x4a4347.lana_c = _0x536a72.lac
    _0x4a4347.lana_d = _0x536a72.lad
    _0x4a4347.lana_e = _0x536a72.lae
    _0x4a4347.lana_f = _0x536a72.laf
    _0x4a4347.lana_g = _0x536a72.lag
    _0x4a4347.lana_h = _0x536a72.lah
    _0x4a4347.lana_i = _0x536a72.lai
    _0x4a4347.lana_j = _0x536a72.laj
    _0x4a4347.mimihr = _0x536a72.mim
    _0x26668d.talk_lana_a = _0x536a72.tla
    _0x26668d.talk_lana_b = _0x536a72.tlb
    _0x44669c = _0x536a72.cla
    _0x1f2612 = _0x536a72.lan
    _0x26668d.shards = _0x536a72.sha
    _0x4a4347.lana_k = _0x536a72.lak
    _0x4a4347.lana_l = _0x536a72.lal
    _0x4a4347.lana_m = _0x536a72.lam
    _0x4a4347.lana_n = _0x536a72.lan
    _0x4a507e.oswin_questions = _0x536a72.osq
    _0x4a507e.oswin_questions_second = _0x536a72.oqs
    _0x4a507e.oswin_questions_third = _0x536a72.oqt
    _0x4a507e.amethyst = _0x536a72.ame
    _0x4a507e.aldred_questions = _0x536a72.alq
    _0x4a507e.winfrid_questions = _0x536a72.wiq
    _0x4a507e.berenwald_questions = _0x536a72.beq
    _0x4a507e.berenwald_questions_second = _0x536a72.bsq
    _0x4a507e.cocktail = _0x536a72.coc
    _0x4a507e.luna_additional = _0x536a72.lua
    _0x40e6b4 = _0x536a72.sto
    _0x2b0dbe()
    _0x2a00e0()
    setTimeout(function () {
      _0x10d4cf()
      _0x191d76(_0x480b68.dialogID)
        .then(() => _0x155863())
        .then(() =>
          setTimeout(function () {
            _0x3c50db()
            _0x5e7593()
          }, 100)
        )
    }, 100)
    _0x320cf1()
    _0x502d39()
    _0x207c18()
    _0x163d76()
  }
}
const _0x138333 = document.querySelector('.disabled_textarea'),
  _0x125373 = document.querySelector('.button_send'),
  _0x5e1e63 = document.querySelector('.active_textarea'),
  _0x272014 = document.querySelector('.nickname')
let _0x187c0c
function _0x112ae8() {
  _0x187c0c = _0x36b850.innerHTML
  _0x138333.innerHTML = _0x187c0c
  _0x36f190.classList.add('active')
  _0x125373.onclick = function () {
    let _0x2afa6e = _0x5e1e63.value
    _0x2afa6e.length >= 5 && _0x2afa6e.length < 500 && _0x5ce645(_0x2afa6e)
    _0x36f190.classList.remove('active')
    _0x3fc2c1()
    _0x3f292d()
    swal('Thank you!', ' ', 'success')
  }
}
function _0x5ce645(_0x22c8b5) {
  let _0x59914e = _0x272014.innerHTML
  const _0x54c44e = {
    User: _0x59914e,
    ID: _0x480b68.dialogID,
    Orig: _0x187c0c,
    Sugg: _0x22c8b5,
  }
  let _0x2b9d77 = _0x54c44e
  const _0x609fd = {}
  _0x609fd['Content-Type'] = 'application/json; charset=utf-8'
  fetch('/suggestion', {
    method: 'POST',
    headers: _0x609fd,
    body: JSON.stringify(_0x2b9d77),
  }).then((_0x43acc0) => console.log(_0x43acc0))
}
let _0x4809e5 = document.querySelector('.skip_menu'),
  _0x3abf6f = document.querySelector('#skipping'),
  _0xb0cd2b = document.querySelector('#close_skip')
_0x3abf6f.onclick = function () {
  _0x1d04f7.classList.add('active')
  _0x4809e5.classList.add('active')
}
_0xb0cd2b.onclick = function () {
  _0x1d04f7.classList.remove('active')
  _0x4809e5.classList.remove('active')
}
fetch('static/json/gallery_free_v10.json')
  .then((_0x5286bf) => _0x5286bf.json())
  .then(function (_0x46ff7c) {
    Object.entries(_0x46ff7c.gallery_items).forEach(
      ([_0x26d371, _0x236438]) => {
        let _0x34a927 = _0x236438.version.replace(/\./g, ''),
          _0x5b83f9 = document.getElementById(_0x34a927)
        if (!_0x5b83f9) {
          let _0x1a34ff = document.createElement('div')
          _0x1a34ff.classList.add('version_gallery')
          _0x1a34ff.id = _0x34a927
          _0x303a62.appendChild(_0x1a34ff)
          let _0x4f7d91 = document.createElement('div')
          _0x4f7d91.classList.add('version_gallery_text')
          _0x4f7d91.innerHTML = _0x236438.version
          _0x1a34ff.appendChild(_0x4f7d91)
          let _0x237d53 = document.createElement('div')
          _0x237d53.classList.add('version_gallery_container')
          _0x237d53.id = 'version_gallery_container' + _0x34a927
          _0x1a34ff.appendChild(_0x237d53)
        }
        let _0xcff197 = document.createElement('div')
        _0xcff197.id = 'item' + _0x26d371
        _0xcff197.classList.add('item')
        _0xcff197.setAttribute('load_id', _0x236438.load_id)
        _0xcff197.setAttribute('end_id', _0x236438.end_id)
        _0xcff197.setAttribute('blurred_image', _0x236438.blurred_image)
        _0xcff197.setAttribute('background', _0x236438.background)
        _0xcff197.setAttribute('scene_title', _0x236438.scene_title)
        _0xcff197.setAttribute('locked_link', _0x236438.locked_link)
        _0xcff197.setAttribute(
          'patreon_denied_image',
          _0x236438.patreon_denied_image
        )
        let _0x2f7102 = document.getElementById(
          'version_gallery_container' + _0x34a927
        )
        _0x2f7102.appendChild(_0xcff197)
        if (['true'].includes(_0xcff197.getAttribute('locked_link'))) {
          let _0x47879c = document.createElement('div')
          _0x47879c.classList.add('paid_image')
          _0xcff197.appendChild(_0x47879c)
        }
        let _0x4e7192 = document.createElement('img')
        _0x4e7192.classList.add('gallery_image')
        _0xcff197.appendChild(_0x4e7192)
        let _0x12754e = document.createElement('div')
        _0x12754e.classList.add('locked_item')
        _0xcff197.appendChild(_0x12754e)
        if (['true'].includes(_0xcff197.getAttribute('locked_link'))) {
          _0x12754e.classList.add('locked_item_money')
        } else {
          ;['version', 'version_2'].includes(
            _0xcff197.getAttribute('locked_link')
          ) && _0x12754e.classList.add('locked_item_timer')
        }
        let _0x405627 = document.createElement('div')
        _0x405627.classList.add('item_text')
        _0xcff197.appendChild(_0x405627)
        if (_0x236438.walkthrough != null) {
          let _0xb2d25f = document.createElement('div')
          _0xb2d25f.classList.add('walkthrough_badge')
          _0xcff197.appendChild(_0xb2d25f)
          _0xb2d25f.addEventListener('click', function () {
            window.event.stopPropagation()
            _0x57cbbe.classList.add('active')
          })
        }
      }
    )
    let _0x294a30 = document.querySelectorAll('.item')
    _0x294a30.forEach((_0xdcb5ec) => {
      _0xdcb5ec.addEventListener('click', function () {
        event.stopPropagation()
        event.stopImmediatePropagation()
        if (['true'].includes(_0xdcb5ec.getAttribute('locked_link'))) {
          _0x2e3d4a.classList.add('active')
          _0x2ef324.setAttribute(
            'src',
            _0xdcb5ec.getAttribute('patreon_denied_image')
          )
          _0x5b5ba9.classList.add('active')
        } else {
          if (['version'].includes(_0xdcb5ec.getAttribute('locked_link'))) {
            _0x2e3d4a.classList.add('active')
            _0x38c4a8.classList.add('active')
          } else {
            ;['version_2'].includes(_0xdcb5ec.getAttribute('locked_link')) &&
              (_0x2e3d4a.classList.add('active'),
              _0x123d65.classList.add('active'))
          }
        }
        if (_0xdcb5ec.getAttribute('locked_scene') == 'true') {
        } else {
          _0x2b0dbe()
          _0x2a00e0()
          setTimeout(function () {
            _0x10d4cf()
            _0x3cb888 = 0
            _0x191d76(_0xdcb5ec.getAttribute('load_id'))
              .then(() => _0x155863())
              .then(() =>
                setTimeout(function () {
                  _0x3c50db()
                  _0x5e7593()
                }, 100)
              )
            _0x5427cd = parseInt(_0xdcb5ec.getAttribute('end_id'))
          }, 100)
          _0x320cf1()
          _0x502d39()
          _0x207c18()
          _0x3fc2c1()
          _0x3f292d()
        }
      })
    })
  })
function _0x25142d() {
  Cookies.get('gallery-cookie') != null &&
    (_0x1139b0 = Cookies.getJSON('gallery-cookie'))
}
var _0x1139b0 = []
function _0x33338b() {
  _0x336537.checked = false
  let _0x55766a = document.querySelectorAll('.item')
  _0x55766a.forEach((_0x59c6cb) => {
    if (_0x1139b0.includes(_0x59c6cb.getAttribute('load_id'))) {
      if (
        !['true', 'version', 'version_2'].includes(
          _0x59c6cb.getAttribute('locked_link')
        )
      ) {
        _0xcd037(_0x59c6cb)
      }
    } else {
      _0x59c6cb.querySelector('.locked_item').classList.add('active')
      _0x59c6cb
        .querySelector('.gallery_image')
        .setAttribute('src', _0x59c6cb.getAttribute('blurred_image'))
      _0x59c6cb.querySelector('.item_text').innerHTML =
        _0x59c6cb.getAttribute('scene_title')
      _0x59c6cb.querySelector('.item_text').setAttribute('style', 'color:gray;')
      _0x59c6cb.setAttribute('locked_scene', 'true')
    }
  })
}
_0x336537.onclick = function () {
  _0x2db790()
}
function _0x2db790() {
  let _0x31d2fe = _0x336537.checked
  if (_0x31d2fe == true) {
    _0x39fb0b.classList.add('active')
  } else {
    _0x39fb0b.classList.remove('active')
  }
}
function _0xcd037(_0x273130) {
  _0x273130.querySelector('.locked_item').classList.remove('active')
  _0x273130
    .querySelector('.gallery_image')
    .setAttribute('src', _0x273130.getAttribute('background'))
  _0x273130.querySelector('.item_text').innerHTML =
    _0x273130.getAttribute('scene_title')
  _0x273130.querySelector('.item_text').setAttribute('style', 'color:black;')
  _0x273130.setAttribute('locked_scene', 'false')
}
function _0x34bc3e() {
  _0x25142d()
  if (_0x1ecc86.getAttribute('gallery_item') == 'true') {
    if (!_0x1139b0.includes(_0x480b68.dialogID.toString())) {
      _0x1139b0.push(_0x480b68.dialogID.toString())
      const _0x537a62 = { expires: 7300 }
      Cookies.set('gallery-cookie', JSON.stringify(_0x1139b0), _0x537a62)
      _0x1558fc('Scene unlocked! :3', 3000)
    }
  }
}
var _0x1a6aff = $('.randomizer'),
  _0x518b8e = _0x1a6aff.css('background-color'),
  _0x2a0c59 = [
    '#f9c213',
    '#f35c4a',
    '#ff9900',
    '#02d490',
    '#495fff',
    '#ff12ab',
    '#7579FF',
  ]
_0x1a6aff.hover(
  function () {
    var _0x4ad304 = Math.floor(Math.random() * _0x2a0c59.length),
      _0x5d1967 = _0x2a0c59[_0x4ad304]
    $(this).css('background-color', _0x5d1967)
    $(this).addClass('changed')
    $(this).css('color', 'white')
  },
  function () {
    $(this).css('background-color', _0x518b8e)
    $(this).removeClass('changed')
    $(this).css('color', 'black')
  }
)
let _0x1e393e = document.querySelector('.randomizer')
_0x1e393e.onclick = function () {
  _0x594ff3()
}
function _0x594ff3() {
  let _0x23343e = document.querySelectorAll('.item'),
    _0x37fc6d = [],
    _0x1c2c50 = [],
    _0x38135b = []
  _0x23343e.forEach((_0x45252f) => {
    _0x45252f.getAttribute('locked_scene') == 'false' &&
      (_0x37fc6d.push(_0x45252f.getAttribute('load_id')),
      _0x1c2c50.push(_0x45252f.getAttribute('end_id')),
      _0x38135b.push(_0x45252f.getAttribute('scene_title')))
  })
  let _0x4022f4 = Math.floor(Math.random() * _0x37fc6d.length),
    _0xe7e022 = _0x37fc6d[_0x4022f4],
    _0x5d208f = _0x1c2c50[_0x4022f4],
    _0x185cc0 = _0x38135b[_0x4022f4]
  _0x37fc6d.length == 0
    ? _0x1558fc(
        "You didn't find any scenes! You should find something to randomize!",
        6000
      )
    : (_0x2b0dbe(),
      _0x2a00e0(),
      setTimeout(function () {
        _0x10d4cf()
        _0x191d76(_0xe7e022)
          .then(() => _0x155863())
          .then(() =>
            setTimeout(function () {
              _0x3c50db()
              _0x5e7593()
            }, 100)
          )
        _0x5427cd = parseInt(_0x5d208f)
      }, 100),
      _0x320cf1(),
      _0x502d39(),
      _0x207c18(),
      _0x3fc2c1(),
      _0x3f292d(),
      _0x1558fc('You got "' + _0x185cc0 + '" scene!', 8000))
}
const _0x476758 = document.querySelector('.skip_intro')
function _0x4a2100(_0x5c317b, _0x521a6a) {
  _0x476758.innerHTML = 'Skip ' + _0x521a6a
  _0x5c317b != 'false'
    ? (_0x476758.classList.add('active'),
      _0x476758.addEventListener('click', function () {
        _0x2b0dbe()
        setTimeout(function () {
          _0x191d76(_0x5c317b).then(() =>
            setTimeout(function () {
              _0x5e7593()
            }, 1100)
          )
        }, 300)
        _0x476758.classList.remove('active')
      }))
    : _0x476758.classList.remove('active')
}
let _0x394e9c = document.querySelector('.sound')
var _0x4b7d23 = false
let _0x29a1ac = 0.5,
  _0x30aacd = document.getElementById('volume-control'),
  _0x37932a = document.querySelector('.range_container')
_0x30aacd.addEventListener('change', function (_0x126651) {
  _0x29a1ac = _0x126651.currentTarget.value / 100
  _0x3a739f(_0x875f56(_0x480b68.sceneID)).volume = parseFloat(_0x29a1ac)
})
let _0x8fa31f = document.querySelector('.sound'),
  _0xd80200 = document.querySelector('.show_slider')
_0x8fa31f.onclick = function () {
  _0x341024()
}
_0xd80200.onclick = function () {
  _0x43f248()
  console.log('clicked')
}
function _0x341024() {
  if (!_0x4b7d23) {
    _0x4b7d23 = true
    _0x4d516e(_0x875f56(_0x480b68.sceneID), true)
    _0x394e9c.classList.add('sound_clicked')
  } else {
    _0x4b7d23 = false
    _0x4d516e(_0x875f56(_0x480b68.sceneID), false)
    _0x394e9c.classList.remove('sound_clicked')
  }
}
let _0x5e6c8f = false
function _0x43f248() {
  !_0x5e6c8f
    ? ((_0x5e6c8f = true),
      _0x37932a.classList.add('range_active'),
      _0xd80200.classList.add('range_active_arrow'))
    : (_0x37932a.classList.remove('range_active'),
      _0xd80200.classList.remove('range_active_arrow'),
      (_0x5e6c8f = false))
}
const _0x297444 = new Map()
function _0x4d516e(_0x4ac181, _0x4061ef) {
  if (!_0x297444.has(_0x4ac181) && !_0x4061ef) {
    return
  }
  if (!_0x4061ef) {
    const _0x47dbdb = _0x3a739f(_0x4ac181)
    _0x47dbdb.pause()
    return
  }
  if (_0x1982b6(_0x4ac181)) {
    return
  }
  Array.from(_0x297444.entries())
    .filter(([_0x552cde]) => _0x552cde !== _0x4ac181)
    .forEach(([_0x50c315, _0x3fe570]) => _0x3fe570.pause())
  const _0xaafc0c = _0x3a739f(_0x4ac181)
  _0xaafc0c.volume = _0x29a1ac
  _0xaafc0c.play()
}
function _0x1982b6(_0x5e5a52) {
  const _0x1d187d = _0x3a739f(_0x5e5a52)
  return !_0x1d187d.paused && _0x1d187d.duration > 0
}
function _0x13e75e(_0x1cc1c0) {
  const _0x2d9720 = _0x875f56(_0x1cc1c0)
  _0x3a739f(_0x2d9720)
}
function _0x875f56(_0x4f2992) {
  if (_0x4f2992 < 15000 && _0x4f2992 >= 0) {
    return 'static/music/luna_theme.mp3'
  } else {
    if (_0x4f2992 < 100020 && _0x4f2992 >= 20000) {
      return 'static/music/lyralei_theme.mp3' 
    } else {
      if (_0x4f2992 >= 105001 && _0x4f2992 < 200000) {
        return 'static/music/mirana_theme.mp3'
      } else {
        if (_0x4f2992 >= 200001 && _0x4f2992 < 400000) {
          return 'static/music/lina_theme.mp3'
        } else {
          if (_0x4f2992 >= 400000) {
            return 'static/music/lanaya_theme.mp3'
          } else {
            return 'static/music/luna_theme.mp3'
          }
        }
      }
    }
  }
}
function _0x3a739f(_0x590bd3) {
  if (!_0x297444.has(_0x590bd3)) {
    const _0x381ad6 = new Audio(_0x590bd3)
    _0x381ad6.loop = true
    _0x297444.set(_0x590bd3, _0x381ad6)
  }
  return _0x297444.get(_0x590bd3)
}
