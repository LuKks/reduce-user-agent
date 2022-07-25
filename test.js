const tape = require('tape')
const reduceUA = require('./')

tape('chrome', async function (t) {
  const chrome = reduceUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36')
  t.is(chrome, '(Windows NT 10.0; Win64; x64) Chrome/99.0.4844.51')
})

tape('firefox', async function (t) {
  const firefox = reduceUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:98.0) Gecko/20100101 Firefox/98.0')
  t.is(firefox, '(Windows NT 10.0; Win64; x64; rv:98.0) Firefox/98.0')
})

tape('safari', async function (t) {
  const safari = reduceUA('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.3 Safari/605.1.15')
  t.is(safari, '(Macintosh; Intel Mac OS X 10_15_7) Version/15.3 Safari/605.1.15')
})

tape('edge', async function (t) {
  const edge = reduceUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36 Edg/99.0.1150.46')
  t.is(edge, '(Windows NT 10.0; Win64; x64) Chrome/99.0.4844.74 Edg/99.0.1150.46')
})

tape('samsung browser', async function (t) {
  const samsungBrowser = reduceUA('Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-N975U1) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/11.0 Chrome/75.0.3770.143 Mobile Safari/537.36')
  t.is(samsungBrowser, '(Linux; Android 10; SAMSUNG SM-N975U1) SamsungBrowser/11.0 Chrome/75.0.3770.143 Mobile')
})

tape('opera', async function (t) {
  const opera = reduceUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.109 Safari/537.36 OPR/84.0.4316.31')
  t.is(opera, '(Windows NT 10.0; Win64; x64) Chrome/98.0.4758.109 OPR/84.0.4316.31')
})

tape('yandex', async function (t) {
  const yandex = reduceUA('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.119 YaBrowser/22.3.0.2430 Yowser/2.5 Safari/537.36')
  t.is(yandex, '(Windows NT 10.0; Win64; x64) Chrome/98.0.4758.119 YaBrowser/22.3.0.2430 Yowser/2.5')
})
