module.exports = reduceUserAgent

function reduceUserAgent (ua) {
  ua = ua || ''

  // remove double spaces
  ua = ua.replace(/\s\s+/g, ' ') // '(KHTML,                 like Gecko)'

  // common
  ua = ua.replace(/Mozilla\/[\d.]+/i, '') // 'Mozilla/5.0', 'Mozilla/4.0'

  // chrome and others
  ua = ua.replace(/AppleWebKit\/[\d.]+/i, '') // 'AppleWebKit/537.36', 'AppleWebKit/601.7.7'
  ua = ua.replace('(KHTML, like Gecko)', '')
  // ua = ua.replace(/Safari\/[\d.]+/i, '') // 'Safari/537.36', 'Safari/601.7.7'
  ua = ua.replace('Safari/537.36', '') // 'Safari/537.36'

  // firefox
  ua = ua.replace(/Gecko\/[\d]+/i, '') // 'Gecko/20101203'

  // remove unnecessary spaces
  ua = ua.trim()
  ua = ua.replace(/\s\s+/g, ' ')

  return ua
}
