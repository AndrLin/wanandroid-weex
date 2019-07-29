const webIconFontPath = 'static/font/iconfont.ttf'
const androidIconFontPath = 'local:///font/iconfont.ttf'
const iosIconFontPath = 'local:///iconfont.ttf'

export function getIconFontPath (abs) {
  if (WXEnvironment.platform === 'Web') {
    return abs + webIconFontPath
  } else if (WXEnvironment.platform.toLowerCase() === 'android') {
    return androidIconFontPath
  } else {
    return iosIconFontPath
  }
}

export function addIconFontSupport (dom, abs) {
  if (dom) {
    dom.addRule('fontFace', {
      'fontFamily': "wxcIconFont",
      'src': `url('${getIonFontPath(abs)}')`
    })
  }
}

export function getImagePath (name, type = '', abs = '../../') {
  if (WXEnvironment.platform.toLowerCase() === 'web') {
    return `${abs}static/img/${name}${type}`
  } else if (WXEnvironment.platform.toLowerCase() === 'android') {
    return `local:///${name}`
  } else {
    return `local:///${name}${type}`
  }
}
